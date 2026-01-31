'use client';

import { useEffect, useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getStandardById, STANDARDS } from '@/data/standards';
import { getChordSymbol, ChordType } from '@/lib/music/chords';
import { getVoicingsForChord, getVoicingPositions, Voicing } from '@/lib/music/voicings';
import { transposeProgression } from '@/lib/music/progressions';
import { usePlayerStore } from '@/stores/usePlayerStore';
import Fretboard from '@/components/Fretboard/Fretboard';
import ProgressionPlayer from '@/components/Player/ProgressionPlayer';

export default function StandardDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const standard = getStandardById(slug);

    const {
        setProgression,
        currentChordIndex,
        showNotes,
        toggleNotes,
    } = usePlayerStore();

    // Track which voicing is selected for the current chord
    const [voicingIndex, setVoicingIndex] = useState(0);
    const [showIntervals, setShowIntervals] = useState(false);
    const [shuffleVoicings, setShuffleVoicings] = useState(false);
    const [transposeKey, setTransposeKey] = useState<string | null>(null);

    // Available keys for transposition
    const KEYS = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];

    // Transposed standard (memoized)
    const transposedStandard = useMemo(() => {
        if (!standard || !transposeKey || transposeKey === standard.key) return standard;
        return transposeProgression(standard, transposeKey);
    }, [standard, transposeKey]);

    // Use transposed or original
    const displayStandard = transposedStandard || standard;

    // Reset voicing index when chord changes
    useEffect(() => {
        setVoicingIndex(0);
    }, [currentChordIndex]);

    useEffect(() => {
        if (standard) {
            setProgression(standard);
        }
    }, [standard, setProgression]);

    if (!standard) {
        return (
            <div className="max-w-7xl mx-auto px-6 py-12 text-center">
                <h1 className="font-display text-3xl text-gold mb-4">Standard Not Found</h1>
                <p className="text-gray-400 mb-8">The requested progression could not be found.</p>
                <Link href="/standards" className="text-gold hover:text-gold-light">
                    ← Back to Standards
                </Link>
            </div>
        );
    }

    const currentChord = displayStandard?.changes[currentChordIndex];
    const chordRoot = currentChord?.root || 'C';
    const chordType = currentChord?.type || 'maj7';

    // Get available voicings for this chord (shuffle toggle)
    const voicings = useMemo(() =>
        getVoicingsForChord(chordRoot, chordType, shuffleVoicings),
        [chordRoot, chordType, shuffleVoicings]
    );
    const currentVoicing = voicings[voicingIndex] || voicings[0];
    const positions = currentVoicing ? getVoicingPositions(currentVoicing, chordRoot, chordType) : [];

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
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <Link href="/standards" className="text-gray-500 hover:text-gold transition-colors text-sm mb-4 inline-block">
                    ← Back to Standards
                </Link>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h1 className="font-display text-4xl font-bold text-gold mb-2">
                            {standard.title}
                        </h1>
                        <p className="text-gray-400">
                            {standard.composer}
                            {standard.artist && <span> • Performed by <span className="text-gold">{standard.artist}</span></span>}
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="tag">{displayStandard?.style}</span>
                        {/* Key Transposition */}
                        <div className="flex items-center gap-2">
                            <span className="text-gray-500 text-sm">Key:</span>
                            <select
                                value={transposeKey || displayStandard?.key || 'C'}
                                onChange={(e) => setTransposeKey(e.target.value)}
                                className="bg-surface border border-gray-700 rounded px-2 py-1 text-gold font-mono text-sm focus:border-gold focus:outline-none"
                            >
                                {KEYS.map(k => (
                                    <option key={k} value={k}>{k}{k === standard?.key ? ' (orig)' : ''}</option>
                                ))}
                            </select>
                        </div>
                        <span className="text-gray-500">{displayStandard?.tempo} BPM</span>
                    </div>
                </div>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main content - Fretboard and info */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Current Chord Display */}
                    <motion.div
                        key={currentChordIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-surface-dark rounded-xl p-6"
                    >
                        {/* Chord Name & Voicing Controls */}
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <span className="text-4xl font-display font-bold text-gold">
                                    {currentChord ? getChordSymbol(currentChord.root, currentChord.type) : '--'}
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

                        {/* Voicing Type Tags */}
                        {currentVoicing && (
                            <div className="flex gap-2 mb-4">
                                <span className="tag">{currentVoicing.category}</span>
                                <span className="tag-blue tag">
                                    {currentVoicing.difficulty === 1 ? 'Easy' : currentVoicing.difficulty === 2 ? 'Intermediate' : 'Advanced'}
                                </span>
                            </div>
                        )}

                        {/* Fretboard with specific voicing */}
                        <Fretboard
                            positions={positions}
                            showNotes={showNotes && !showIntervals}
                            showIntervals={showIntervals}
                            numFrets={12}
                        />

                        {/* Voicing Details */}
                        {currentVoicing && (
                            <div className="mt-4 flex items-center justify-between text-sm">
                                <div className="text-gray-500">
                                    <span className="font-mono">
                                        {currentVoicing.frets.map(f => f === null ? 'x' : f).join(' ')}
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => { toggleNotes(); if (!showNotes) setShowIntervals(false); }}
                                        className={`px-3 py-1 rounded transition-colors ${showNotes && !showIntervals ? 'bg-gold text-background' : 'bg-surface text-gray-400'}`}
                                    >
                                        Notes
                                    </button>
                                    <button
                                        onClick={() => setShowIntervals(!showIntervals)}
                                        className={`px-3 py-1 rounded transition-colors ${showIntervals ? 'bg-gold text-background' : 'bg-surface text-gray-400'}`}
                                    >
                                        Intervals
                                    </button>
                                    <button
                                        onClick={() => setShuffleVoicings(!shuffleVoicings)}
                                        className={`px-3 py-1 rounded transition-colors ${shuffleVoicings ? 'bg-indigo-600 text-white' : 'bg-surface text-gray-400'}`}
                                        title="Randomize voicing order"
                                    >
                                        Shuffle
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Full Progression Chart */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-surface-dark rounded-xl p-6"
                    >
                        <h2 className="font-display text-xl font-semibold mb-4">Chord Chart</h2>
                        <div className="grid grid-cols-4 gap-2">
                            {displayStandard?.changes.map((chord, index) => {
                                const isNewBar = index === 0 || chord.bar !== displayStandard.changes[index - 1]?.bar;
                                return (
                                    <div
                                        key={index}
                                        className={`relative p-3 rounded-lg text-center font-mono transition-all cursor-pointer ${index === currentChordIndex
                                            ? 'bg-gold text-background scale-105'
                                            : 'bg-surface hover:bg-surface-light'
                                            }`}
                                        onClick={() => usePlayerStore.getState().setCurrentChordIndex(index)}
                                    >
                                        {isNewBar && (
                                            <span className="absolute -top-2 -left-1 text-xs text-gray-600">
                                                {chord.bar}
                                            </span>
                                        )}
                                        <span className={index === currentChordIndex ? 'font-bold' : 'text-gray-300'}>
                                            {getChordSymbol(chord.root, chord.type)}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {standard.tags.map(tag => (
                            <Link
                                key={tag}
                                href={`/standards?tag=${tag}`}
                                className="tag hover:bg-gold/20 transition-colors"
                            >
                                #{tag}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Sidebar - Player */}
                <div className="lg:col-span-1">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="sticky top-24"
                    >
                        <ProgressionPlayer />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
