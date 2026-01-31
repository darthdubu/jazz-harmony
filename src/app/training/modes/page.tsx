'use client';

import React, { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
// import { motion } from 'framer-motion';
import { MODES, getScaleNotes } from '@/lib/music/scales';
import { noteToSemitone, M3_TUNING_MIDI, semitoneToNote } from '@/lib/music/notes';
import Fretboard from '@/components/Fretboard/Fretboard';
import { playNote, playChord, stopAll } from '@/lib/audio/player';
import { usePlayerStore } from '@/stores/usePlayerStore';
import { ChordType } from '@/lib/music/chords';
import { Voicing, getVoicingsForChord, getVoicingPositions } from '@/lib/music/voicings';

interface FretPosition {
    string: number;
    fret: number;
    note: string;
    interval: string;
    isRoot: boolean;
}

const KEYS = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];

export default function ModesTrainer() {
    const [selectedKey, setSelectedKey] = useState('C');
    const [selectedMode, setSelectedMode] = useState(MODES[1]); // Default to Ionian (Major) looks standard

    const [selectedPosition, setSelectedPosition] = useState<'all' | 'pos1' | 'pos2' | 'pos3' | 'pos4'>('pos1');

    const { setProgression, setIsPlaying, isPlaying } = usePlayerStore();

    const scaleNotes = getScaleNotes(selectedKey, selectedMode.name);

    // Calculate Fretboard scales positions
    // We want to show the full scale across the neck
    const getScalePositions = useCallback(() => {
        const positions: FretPosition[] = [];

        let minFret = 0;
        let maxFret = 15;

        // Define fret ranges for positions
        switch (selectedPosition) {
            case 'pos1': minFret = 0; maxFret = 5; break;
            case 'pos2': minFret = 4; maxFret = 9; break;
            case 'pos3': minFret = 8; maxFret = 13; break;
            case 'pos4': minFret = 12; maxFret = 16; break;
            case 'all': minFret = 0; maxFret = 15; break;
        }

        // Map frets based on position range
        for (let string = 0; string < 6; string++) {
            for (let fret = minFret; fret <= maxFret; fret++) {
                const midi = M3_TUNING_MIDI[string] + fret;
                const noteName = semitoneToNote(midi % 12, selectedKey.includes('b') || selectedMode.name === 'Phrygian'); // Prefer flats contextually

                // If note is in scale
                if (scaleNotes.includes(noteName)) {
                    // Determine interval
                    // Finding index in scaleNotes is rough because of enharmonics.
                    // Better to match by semitone index relative to root.
                    const semitone = midi % 12;
                    const rootSemitone = noteToSemitone(selectedKey);
                    const intervalFromRoot = (semitone - rootSemitone + 12) % 12;

                    // Match interval to mode intervals to find degree
                    const degreeIndex = selectedMode.intervals.indexOf(intervalFromRoot);

                    if (degreeIndex !== -1) {
                        // 1-based degree
                        const degree = degreeIndex + 1;
                        // Check characteristic interval
                        let intervalLabel = degree.toString();

                        // Customize labels
                        if (degree === 1) intervalLabel = 'R';
                        if (degree === 3) intervalLabel = selectedMode.intervals[2] === 3 ? 'b3' : '3';
                        if (degree === 7) intervalLabel = selectedMode.intervals[6] === 10 ? 'b7' : '7';
                        // etc. simple mapping for now

                        positions.push({
                            string,
                            fret,
                            note: noteName,
                            interval: intervalLabel,
                            isRoot: degree === 1
                        });
                    }
                }
            }
        }
        return positions;
    }, [selectedKey, selectedMode, selectedPosition, scaleNotes]);

    const positions = useMemo(() => getScalePositions(), [getScalePositions]);

    const playScale = async () => {
        stopAll();
        // Play ascending scale
        // Construct notes in order starting from C3 approx
        scaleNotes.forEach((n) => {
            // Simple octave logic
            // ...
        });
        // This is a bit dumb/short.
        // Better: play up one octave.

        let time = 0;
        for (const note of scaleNotes) {
            playNote(`${note}3`, '4n', time); // ERROR expected: check player.ts, likely missing time arg support or diff order
            time += 0.5;
        }
        playNote(`${scaleNotes[0]}4`, '2n', time);
    };

    const playVamp = () => {
        // Construct a vamp based on mode
        let vampChords: { root: string, type: ChordType, duration: number }[] = [];

        switch (selectedMode.name) {
            case 'Dorian':
                // i min7 - IV 7 (Santana / Oye Como Va style)
                vampChords = [
                    { root: selectedKey, type: 'min7', duration: 4 },
                    { root: semitoneToNote(noteToSemitone(selectedKey) + 5), type: '7', duration: 4 } // IV is +5 semitones
                ];
                break;
            case 'Mixolydian':
                // I 7 - bVII (Grateful Dead / Rock style)
                vampChords = [
                    { root: selectedKey, type: '7', duration: 4 },
                    { root: semitoneToNote(noteToSemitone(selectedKey) + 10), type: 'maj7', duration: 4 } // bVII
                ];
                break;
            case 'Lydian':
                // I maj7 - II 7 (Simpson's / Flying)
                vampChords = [
                    { root: selectedKey, type: 'maj7', duration: 4 },
                    { root: semitoneToNote(noteToSemitone(selectedKey) + 2), type: '7', duration: 4 } // II
                ];
                break;
            case 'Phrygian':
                // i min7 - bII maj7 (Spanish)
                vampChords = [
                    { root: selectedKey, type: 'min7', duration: 4 },
                    { root: semitoneToNote(noteToSemitone(selectedKey) + 1), type: 'maj7', duration: 4 } // bII
                ];
                break;
            case 'Aeolian':
                // i - bVI - bVII (All Along Watchtower)
                vampChords = [
                    { root: selectedKey, type: 'min7', duration: 4 },
                    { root: semitoneToNote(noteToSemitone(selectedKey) + 8), type: 'maj7', duration: 2 }, // bVI
                    { root: semitoneToNote(noteToSemitone(selectedKey) + 10), type: 'maj7', duration: 2 } // bVII
                ];
                break;
            case 'Locrian':
                // i min7b5 - bV ??? Hard to vamp. Just hold the chord.
                vampChords = [
                    { root: selectedKey, type: 'min7b5', duration: 8 }
                ];
                break;
            default: // Ionian
                // I - IV
                vampChords = [
                    { root: selectedKey, type: 'maj7', duration: 4 },
                    { root: semitoneToNote(noteToSemitone(selectedKey) + 5), type: 'maj7', duration: 4 } // IV
                ];
        }

        // Set to player store
        setProgression({
            id: `vamp-${selectedMode.name}`,
            title: `${selectedMode.name} Vamp`,
            composer: 'Training',
            style: 'standard',
            key: selectedKey,
            timeSignature: [4, 4],
            tempo: 100,
            bars: 2,
            changes: vampChords.map((c, i) => ({ ...c, beat: i * 4 + 1, bar: i + 1 })), // simplified
            tags: ['training']
        });

        setIsPlaying(true);
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <Link href="/training" className="text-gray-500 hover:text-gold transition-colors text-sm mb-8 inline-block">
                ← Back to Training
            </Link>

            <div className="bg-surface-dark rounded-xl p-8 border border-white/5">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                    <div>
                        <h1 className="font-display text-4xl text-gold mb-2">Modal Harmony</h1>
                        <p className="text-gray-400">Master the 7 modes of the Major Scale.</p>
                    </div>

                    <div className="flex gap-4 bg-surface p-2 rounded-lg">
                        <select
                            value={selectedKey}
                            onChange={(e) => setSelectedKey(e.target.value)}
                            className="bg-transparent text-white font-mono text-lg focus:outline-none cursor-pointer"
                        >
                            {KEYS.map(k => <option key={k} value={k}>{k}</option>)}
                        </select>
                    </div>
                </div>

                {/* Mode Selector */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
                    {MODES.sort((a, b) => (b.brightness ?? 0) - (a.brightness ?? 0)).map((mode) => (
                        <button
                            key={mode.name}
                            onClick={() => setSelectedMode(mode)}
                            className={`p-4 rounded-lg border transition-all text-left ${selectedMode.name === mode.name
                                ? 'bg-gold text-surface-dark border-gold'
                                : 'bg-surface hover:bg-surface-light border-white/5'
                                }`}
                        >
                            <div className="font-bold mb-1">{mode.name}</div>
                            <div className="text-xs opacity-70">{mode.characteristicInterval}</div>
                        </button>
                    ))}
                </div>

                {/* Info & Controls */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                    <div className="lg:col-span-2">
                        <div className="bg-surface rounded-xl border border-white/5 p-8 h-full relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-2xl font-display mb-4">{selectedKey} {selectedMode.name}</h2>
                                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                    {selectedMode.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {scaleNotes.map((note, i) => (
                                        <span key={i} className="px-3 py-1 bg-surface-light rounded text-sm font-mono border border-white/10">
                                            {note}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={playScale}
                                        className="px-6 py-3 bg-surface hover:bg-surface-light border border-white/10 rounded-lg flex items-center gap-2 transition-all"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                        Hear Scale
                                    </button>
                                    <button
                                        onClick={playVamp}
                                        className="px-6 py-3 bg-gold hover:bg-gold-light text-surface-dark font-bold rounded-lg flex items-center gap-2 transition-all"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" /></svg>
                                        Play Modal Vamp
                                    </button>
                                </div>
                            </div>

                            {/* Background decoration */}
                            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>

                {/* Fretboard */}
                <div className="bg-surface rounded-xl border border-white/5 p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                        <h3 className="text-gray-400 text-sm uppercase tracking-wider">Scale Pattern</h3>

                        {/* Position Selector */}
                        <div className="flex bg-surface-light rounded-lg p-1 gap-1">
                            <button
                                onClick={() => setSelectedPosition('pos1')}
                                className={`px-3 py-1 text-xs rounded-md transition-all ${selectedPosition === 'pos1' ? 'bg-gold text-surface-dark font-bold' : 'text-gray-400 hover:text-white'}`}
                            >
                                Pos 1 (0-5)
                            </button>
                            <button
                                onClick={() => setSelectedPosition('pos2')}
                                className={`px-3 py-1 text-xs rounded-md transition-all ${selectedPosition === 'pos2' ? 'bg-gold text-surface-dark font-bold' : 'text-gray-400 hover:text-white'}`}
                            >
                                Pos 2 (4-9)
                            </button>
                            <button
                                onClick={() => setSelectedPosition('pos3')}
                                className={`px-3 py-1 text-xs rounded-md transition-all ${selectedPosition === 'pos3' ? 'bg-gold text-surface-dark font-bold' : 'text-gray-400 hover:text-white'}`}
                            >
                                Pos 3 (8-13)
                            </button>
                            <button
                                onClick={() => setSelectedPosition('all')}
                                className={`px-3 py-1 text-xs rounded-md transition-all ${selectedPosition === 'all' ? 'bg-gold text-surface-dark font-bold' : 'text-gray-400 hover:text-white'}`}
                            >
                                All Frets
                            </button>
                        </div>
                    </div>

                    <Fretboard
                        positions={positions}
                        showNotes={true}
                        showIntervals={true}
                        numFrets={selectedPosition === 'all' ? 15 : 15}
                    />
                </div>
            </div>
        </div>
    );
}
