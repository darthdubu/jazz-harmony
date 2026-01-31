'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    CHORD_DISPLAY_NAMES,
    getChordSymbol,
    ChordType
} from '@/lib/music/chords';
import { NOTE_NAMES } from '@/lib/music/notes';
import { getVoicingsForChord, getVoicingPositions } from '@/lib/music/voicings';
import Fretboard from '@/components/Fretboard/Fretboard';

const CHORD_CATEGORIES = {
    'Major': ['maj7', 'maj9', '6', '6/9'],
    'Minor': ['min7', 'min9', 'min6', 'minMaj7'],
    'Dominant': ['7', '9', '7b9', '7#9', '7#11', '7alt', '13'],
    'Diminished': ['min7b5', 'dim7'],
    'Suspended': ['sus4', 'sus2', '7sus4'],
};

export default function VoicingsPage() {
    const [selectedRoot, setSelectedRoot] = useState('C');
    const [selectedType, setSelectedType] = useState<ChordType>('maj7');
    const [voicingIndex, setVoicingIndex] = useState(0);
    const [showNotes, setShowNotes] = useState(true);
    const [showIntervals, setShowIntervals] = useState(false);

    // Get voicings for current chord
    const voicings = getVoicingsForChord(selectedRoot, selectedType);
    const currentVoicing = voicings[voicingIndex] || voicings[0];
    const positions = currentVoicing ? getVoicingPositions(currentVoicing, selectedRoot) : [];

    // Reset voicing index when chord changes
    useEffect(() => {
        setTimeout(() => setVoicingIndex(0), 0);
    }, [selectedRoot, selectedType]);

    const chordSymbol = getChordSymbol(selectedRoot, selectedType);

    const nextVoicing = () => {
        if (voicings.length > 1) {
            setVoicingIndex((prev) => (prev + 1) % voicings.length);
        }
    };

    const prevVoicing = () => {
        if (voicings.length > 1) {
            setVoicingIndex((prev) => (prev - 1 + voicings.length) % voicings.length);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="font-display text-4xl font-bold text-gold mb-2">
                    Chord Voicings
                </h1>
                <p className="text-gray-400 mb-8">
                    Practical voicings for Major Thirds tuning
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Chord Selection */}
                <div className="space-y-6">
                    {/* Root Selection */}
                    <div className="bg-surface-dark rounded-xl p-6">
                        <h2 className="font-semibold mb-4">Root Note</h2>
                        <div className="grid grid-cols-4 gap-2">
                            {NOTE_NAMES.map(note => (
                                <button
                                    key={note}
                                    onClick={() => setSelectedRoot(note)}
                                    className={`p-2 rounded text-center font-mono transition-colors ${selectedRoot === note
                                        ? 'bg-gold text-background'
                                        : 'bg-surface hover:bg-surface-light text-gray-300'
                                        }`}
                                >
                                    {note.replace('#', '♯')}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Chord Type Selection */}
                    <div className="bg-surface-dark rounded-xl p-6">
                        <h2 className="font-semibold mb-4">Chord Type</h2>
                        <div className="space-y-4">
                            {Object.entries(CHORD_CATEGORIES).map(([category, types]) => (
                                <div key={category}>
                                    <h3 className="text-sm text-gray-500 mb-2">{category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {types.map(type => (
                                            <button
                                                key={type}
                                                onClick={() => setSelectedType(type as ChordType)}
                                                className={`px-3 py-1 rounded text-sm font-mono transition-colors ${selectedType === type
                                                    ? 'bg-gold text-background'
                                                    : 'bg-surface hover:bg-surface-light text-gray-300'
                                                    }`}
                                            >
                                                {CHORD_DISPLAY_NAMES[type as ChordType]}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Fretboard Display */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Current Chord & Voicing */}
                    <motion.div
                        key={`${selectedRoot}-${selectedType}-${voicingIndex}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-surface-dark rounded-xl p-6"
                    >
                        {/* Header with chord name and voicing navigation */}
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <span className="text-4xl font-display font-bold text-gold">
                                    {chordSymbol}
                                </span>
                                {currentVoicing && (
                                    <span className="ml-3 text-gray-400 text-sm">
                                        {currentVoicing.name}
                                    </span>
                                )}
                            </div>

                            {/* Voicing Navigation */}
                            {voicings.length > 1 && (
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={prevVoicing}
                                        className="p-2 rounded-lg bg-surface hover:bg-surface-light transition-colors"
                                        aria-label="Previous voicing"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <span className="text-sm text-gray-400 min-w-[60px] text-center">
                                        {voicingIndex + 1} / {voicings.length}
                                    </span>
                                    <button
                                        onClick={nextVoicing}
                                        className="p-2 rounded-lg bg-surface hover:bg-surface-light transition-colors"
                                        aria-label="Next voicing"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Voicing Tags */}
                        {currentVoicing && (
                            <div className="flex gap-2 mb-4">
                                <span className="tag">{currentVoicing.category}</span>
                                <span className="tag-blue tag">
                                    {currentVoicing.difficulty === 1 ? 'Easy' : currentVoicing.difficulty === 2 ? 'Intermediate' : 'Advanced'}
                                </span>
                            </div>
                        )}

                        {/* Notes display */}
                        {positions.length > 0 && (
                            <p className="text-gray-400 mb-4 font-mono text-sm">
                                {positions.map(p => p.note.replace('#', '♯')).join(' • ')}
                            </p>
                        )}

                        {/* Fretboard */}
                        <Fretboard
                            positions={positions}
                            showNotes={showNotes && !showIntervals}
                            showIntervals={showIntervals}
                            numFrets={12}
                        />

                        {/* Voicing tab notation */}
                        {currentVoicing && (
                            <div className="mt-4 flex items-center justify-between">
                                <div className="text-gray-500 font-mono text-sm">
                                    {currentVoicing.frets.map(f => f === null ? 'x' : f).join(' ')}
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => { setShowNotes(!showNotes); if (!showNotes) setShowIntervals(false); }}
                                        className={`px-3 py-1 text-sm rounded transition-colors ${showNotes && !showIntervals ? 'bg-gold text-background' : 'bg-surface text-gray-400'}`}
                                    >
                                        Notes
                                    </button>
                                    <button
                                        onClick={() => { setShowIntervals(!showIntervals); if (!showIntervals) setShowNotes(true); }}
                                        className={`px-3 py-1 text-sm rounded transition-colors ${showIntervals ? 'bg-gold text-background' : 'bg-surface text-gray-400'}`}
                                    >
                                        Intervals
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* M3 Tuning Info */}
                    <div className="bg-surface-dark rounded-xl p-8 border border-white/5">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-4xl">🎸</span>
                            <h2 className="font-display text-2xl font-bold text-gold">Why Major Thirds Tuning?</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 text-sm leading-relaxed text-gray-400">
                            <div>
                                <h3 className="text-white font-bold mb-2">Absolute Symmetry</h3>
                                <p>
                                    In standard tuning, the B-string creates a &quot;warp&quot; that breaks interval patterns.
                                    In Major Thirds (E-G#-C-E-G#-C), every adjacent string pair is a Major 3rd.
                                    This means <strong>every chord shape is identical</strong> regardless of which string set you play it on.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-white font-bold mb-2">Visual Logic</h3>
                                <p>
                                    The fretboard becomes a perfect diagonal grid.
                                    Chromatic scales are simple 4-fret spans (0-1-2-3-4).
                                    Whole tone scales are straight lines. This makes visualizing music theory
                                    directly on the neck incredibly intuitive for improvisation.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-white font-bold mb-2">Ergonomic Jazz Chords</h3>
                                <p>
                                    Closed-position voicings (like drop-2) that require painful stretches in standard tuning
                                    often collapse into comfortable 3- or 4-fret spans in M3.
                                    You can play complex extended chords (13th, #11) with ease.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center bg-black/20 p-4 rounded-lg">
                            <span className="text-gold font-mono">E - G# - C - E - G# - C</span>
                            <span className="text-xs uppercase tracking-widest text-gray-500">Tuning Pattern</span>
                        </div>
                    </div>

                    {/* All Available Voicings List */}
                    {voicings.length > 1 && (
                        <div className="bg-surface-dark rounded-xl p-6">
                            <h2 className="font-semibold mb-4">All Voicings ({voicings.length})</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {voicings.map((v, idx) => (
                                    <button
                                        key={v.id}
                                        onClick={() => setVoicingIndex(idx)}
                                        className={`p-3 rounded-lg text-left transition-colors ${idx === voicingIndex
                                            ? 'bg-gold/20 border border-gold/50'
                                            : 'bg-surface hover:bg-surface-light'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium">{v.name}</span>
                                            <span className="text-xs text-gray-500">{v.category}</span>
                                        </div>
                                        <div className="text-xs text-gray-500 font-mono mt-1">
                                            {v.frets.map(f => f === null ? 'x' : f).join(' ')}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
