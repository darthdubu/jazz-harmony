
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getChordSymbol, ChordType } from '@/lib/music/chords';
import { getVoicingsForChord, getVoicingPositions, Voicing } from '@/lib/music/voicings';
// import {
//     M3_TUNING_NOTES,
//     // M3_OPEN_OCTAVES
// } from '@/lib/music/notes';
import { playChord } from '@/lib/audio/player';
import Fretboard from '@/components/Fretboard/Fretboard';

// Diatonic chords for Major and Minor keys
// Roman numerals and chord types
const MAJOR_SCALE_DEGREES = [
    { roman: 'I', type: 'maj7' as ChordType, interval: 0 },
    { roman: 'ii', type: 'min7' as ChordType, interval: 2 },
    { roman: 'iii', type: 'min7' as ChordType, interval: 4 },
    { roman: 'IV', type: 'maj7' as ChordType, interval: 5 },
    { roman: 'V', type: '7' as ChordType, interval: 7 },
    { roman: 'vi', type: 'min7' as ChordType, interval: 9 },
    { roman: 'vii°', type: 'min7b5' as ChordType, interval: 11 },
];

const MINOR_SCALE_DEGREES = [
    { roman: 'i', type: 'min7' as ChordType, interval: 0 },
    { roman: 'ii°', type: 'min7b5' as ChordType, interval: 2 },
    { roman: 'III', type: 'maj7' as ChordType, interval: 3 },
    { roman: 'iv', type: 'min7' as ChordType, interval: 5 },
    { roman: 'v', type: 'min7' as ChordType, interval: 7, altType: '7' as ChordType, altLabel: 'V7 (Harmonic)' },
    { roman: 'VI', type: 'maj7' as ChordType, interval: 8 },
    { roman: 'VII', type: '7' as ChordType, interval: 10 },
];

const KEYS = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
const NOTE_NAMES = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];

interface FretPosition {
    string: number;
    fret: number;
    note: string;
    interval: string;
    isRoot: boolean;
}

export default function DiatonicTrainer() {
    const [selectedKey, setSelectedKey] = useState('C');
    const [selectedMode, setSelectedMode] = useState<'Major' | 'Minor'>('Major');
    const [activeDegreeIndex, setActiveDegreeIndex] = useState<number | null>(null);
    const [positions, setPositions] = useState<FretPosition[]>([]); // Using any[] for simplicity, or import FretPosition type if strictly needed

    const scaleDegrees = selectedMode === 'Major' ? MAJOR_SCALE_DEGREES : MINOR_SCALE_DEGREES;

    // Helper to get actual note name from key + interval
    const getNoteFromInterval = (root: string, interval: number): string => {
        const rootIndex = NOTE_NAMES.indexOf(root);
        if (rootIndex === -1) return root;
        const noteIndex = (rootIndex + interval) % 12;
        return NOTE_NAMES[noteIndex];
    };

    const handlePlayChord = (degree: typeof MAJOR_SCALE_DEGREES[0], index: number) => {
        setActiveDegreeIndex(index);
        const root = getNoteFromInterval(selectedKey, degree.interval);

        // Get voicings
        const voicings = getVoicingsForChord(root, degree.type);

        if (voicings.length > 0) {
            let selectedVoicing = voicings[0];

            // Voice Leading Logic
            // If we have current positions, try to find the voicing closest to the current hand position
            if (positions && positions.length > 0) {
                // Calculate average fret of current position (ignoring 0/open strings if possible, or include them)
                // Focusing on fretted notes usually gives better "hand position" sense.
                const fretted = positions.filter(p => p.fret > 0);
                const prevAvg = fretted.length > 0
                    ? fretted.reduce((sum, p) => sum + p.fret, 0) / fretted.length
                    : positions.reduce((sum, p) => sum + p.fret, 0) / positions.length;

                // Sort voicings by closest average fret
                const sorted = [...voicings].sort((a, b) => {
                    const getAvg = (v: Voicing) => {
                        const fs = v.frets.filter((f: number | null) => f !== null && f > 0) as number[];
                        if (fs.length === 0) return 0;
                        return fs.reduce((sum, f) => sum + f, 0) / fs.length;
                    };
                    return Math.abs(getAvg(a) - prevAvg) - Math.abs(getAvg(b) - prevAvg);
                });

                if (sorted.length > 0) {
                    selectedVoicing = sorted[0];
                }
            } else {
                // If no previous chord, maybe prefer a middle-of-neck voicing (e.g. around fret 5-7)
                // or just the default one.
                // Let's pick one around fret 3-5 for start
                const sorted = [...voicings].sort((a, b) => {
                    const getAvg = (v: Voicing) => {
                        const fs = v.frets.filter((f: number | null) => f !== null && f > 0) as number[];
                        if (fs.length === 0) return 0;
                        return fs.reduce((sum: number, f: number) => sum + f, 0) / fs.length;
                    };
                    return Math.abs(getAvg(a) - 4) - Math.abs(getAvg(b) - 4);
                });
                if (sorted.length > 0) selectedVoicing = sorted[0];
            }


            // Convert voicing to notes to play
            const newPositions = getVoicingPositions(selectedVoicing, root);

            // Map to notes for audio
            // M3 Tuning octaves
            const M3_OPEN_OCTAVES = [2, 2, 3, 3, 3, 4];
            const notesToPlay = newPositions.map(p => {
                const baseMidi = [40, 44, 48, 52, 56, 60][p.string]; // E2..C4
                // We don't have Tone imported here to convert midi to note name easily if we want precise octaves.
                // But playChord accepts note names like "C4".
                // We can construct it.
                // Or just use the note name from positions and guess octave?
                // No, let's correspond to the fret.
                // MIDI to Note Name:
                const midi = baseMidi + p.fret;
                const octave = Math.floor(midi / 12) - 1; // MIDI 60 is C4. 60/12 = 5. 5-1=4. Correct.
                // Note name is already in p.note (e.g. "C", "F#")
                return `${p.note}${octave}`;
            });

            setPositions(newPositions);
            playChord(notesToPlay, 3, '2n');
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <Link href="/training" className="text-gray-500 hover:text-gold transition-colors text-sm mb-8 inline-block">
                ← Back to Training
            </Link>

            <div className="bg-surface-dark rounded-xl p-8 border border-white/5">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                    <div>
                        <h1 className="font-display text-4xl text-gold mb-2">Diatonic Chords</h1>
                        <p className="text-gray-400">Explore the harmonic palette of any key.</p>
                    </div>

                    <div className="flex gap-4 bg-surface p-2 rounded-lg">
                        <select
                            value={selectedKey}
                            onChange={(e) => setSelectedKey(e.target.value)}
                            className="bg-transparent text-white font-mono text-lg focus:outline-none cursor-pointer"
                        >
                            {KEYS.map(k => <option key={k} value={k}>{k}</option>)}
                        </select>
                        <div className="w-px bg-white/20"></div>
                        <button
                            onClick={() => setSelectedMode('Major')}
                            className={`px-3 py-1 rounded ${selectedMode === 'Major' ? 'bg-gold text-surface-dark font-bold' : 'text-gray-400 hover:text-white'}`}
                        >
                            Major
                        </button>
                        <button
                            onClick={() => setSelectedMode('Minor')}
                            className={`px-3 py-1 rounded ${selectedMode === 'Minor' ? 'bg-gold text-surface-dark font-bold' : 'text-gray-400 hover:text-white'}`}
                        >
                            Minor
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                    {scaleDegrees.map((degree, index) => {
                        const root = getNoteFromInterval(selectedKey, degree.interval);
                        const symbol = getChordSymbol(root, degree.type);
                        const isActive = activeDegreeIndex === index;

                        return (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handlePlayChord(degree, index)}
                                className={`
                                    relative p-6 rounded-xl border transition-all text-center group
                                    ${isActive
                                        ? 'bg-gold text-surface-dark border-gold shadow-[0_0_30px_rgba(212,175,55,0.3)]'
                                        : 'bg-surface hover:bg-surface-light border-white/10 hover:border-gold/50'}
                                `}
                            >
                                <div className={`text-sm mb-2 font-mono ${isActive ? 'text-surface-dark/70' : 'text-gray-500'}`}>
                                    {degree.roman}
                                </div>
                                <div className="text-2xl font-bold mb-1">
                                    {symbol}
                                </div>
                                <div className={`text-xs ${isActive ? 'text-surface-dark/70' : 'text-gray-500'}`}>
                                    {degree.type}
                                </div>
                            </motion.button>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                    <div className="lg:col-span-2 bg-surface rounded-xl border border-white/5 p-6">
                        <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-4">Fretboard Visualization</h3>
                        {activeDegreeIndex !== null && positions ? (
                            <Fretboard
                                positions={positions}
                                showNotes={true}
                                showIntervals={true}
                                numFrets={15}
                            />
                        ) : (
                            <div className="h-[200px] flex items-center justify-center text-gray-500 italic border border-dashed border-white/10 rounded-lg">
                                Select a chord to view voicing
                            </div>
                        )}
                    </div>

                    <div className="p-6 bg-surface rounded-xl border border-white/5">
                        <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-4">Practice Tip</h3>
                        <p className="text-gray-200 leading-relaxed">
                            {selectedMode === 'Major'
                                ? "In a Major key, the I, IV, and V chords are Major. The ii, iii, and vi are Minor. The vii° is Diminished. Try cycling through chords by 4ths: I → IV → vii° → iii → vi → ii → V → I."
                                : "Minor keys are more complex because the 6th and 7th degrees can be raised (Melodic/Harmonic minor). In Jazz, the v chord is usually played as a Dominant 7 (V7) to create a stronger pull back to i."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
