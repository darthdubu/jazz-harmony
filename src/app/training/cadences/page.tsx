
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CADENCES, transposeProgression, Progression } from '@/lib/music/progressions';
import ProgressionPlayer from '@/components/Player/ProgressionPlayer';
import Fretboard from '@/components/Fretboard/Fretboard';
import { usePlayerStore } from '@/stores/usePlayerStore';
import { getVoicingsForChord, getVoicingPositions } from '@/lib/music/voicings';

const KEYS = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

export default function CadenceTrainer() {
    const [selectedCadenceId, setSelectedCadenceId] = useState(CADENCES[0].id);
    const [selectedKey, setSelectedKey] = useState('C');

    const { currentChordIndex, setProgression, currentProgression, currentVoicing } = usePlayerStore();

    // Find current cadence definition
    const cadenceDef = CADENCES.find(c => c.id === selectedCadenceId) || CADENCES[0];

    // Construct a full Progression object on the fly
    const activeProgression: Progression = useMemo(() => {
        const baseProgression: Progression = {
            id: cadenceDef.id,
            title: cadenceDef.name,
            composer: 'Training',
            style: 'standard',
            key: cadenceDef.baseKey,
            timeSignature: [4, 4],
            tempo: 120,
            bars: 2,
            changes: cadenceDef.changes,
            tags: ['training']
        };

        // Transpose if necessary
        // Note: transposeProgression expects keys like 'Am' if minor, but our selector is just root.
        // We'll trust the root substitution logic.
        return transposeProgression(baseProgression, selectedKey);
    }, [cadenceDef, selectedKey]);

    // Update store
    useEffect(() => {
        setProgression(activeProgression);
    }, [activeProgression, setProgression]);

    // Get current chord for visualization
    const currentChord = activeProgression.changes[currentChordIndex] || activeProgression.changes[0];

    // Use the specific voicing playing in the audio engine if available, otherwise fallback to default
    const displayVoicing = currentVoicing || getVoicingsForChord(currentChord.root, currentChord.type)[0];

    const positions = useMemo(() =>
        displayVoicing ? getVoicingPositions(displayVoicing, currentChord.root, currentChord.type) : [],
        [displayVoicing, currentChord.root, currentChord.type]);

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <Link href="/training" className="text-gray-500 hover:text-gold transition-colors text-sm mb-8 inline-block">
                ← Back to Training
            </Link>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Panel: Controls & List */}
                <div className="lg:w-1/3 space-y-6">
                    <div>
                        <h1 className="font-display text-4xl text-gold mb-2">Cadence Trainer</h1>
                        <p className="text-gray-400">Master essential harmonic movements.</p>
                    </div>

                    <div className="bg-surface-dark rounded-xl p-6 border border-white/5">
                        <label className="text-sm text-gray-500 block mb-2">Key Center</label>
                        <div className="grid grid-cols-4 gap-2 mb-6">
                            {KEYS.map(k => (
                                <button
                                    key={k}
                                    onClick={() => setSelectedKey(k)}
                                    className={`p-2 rounded text-sm font-mono transition-colors ${selectedKey === k ? 'bg-gold text-background font-bold' : 'bg-surface hover:bg-surface-light text-gray-300'}`}
                                >
                                    {k}
                                </button>
                            ))}
                        </div>

                        <label className="text-sm text-gray-500 block mb-2">Select Cadence</label>
                        <div className="space-y-2 max-h-[400px] overflow-y-auto">
                            {CADENCES.map(c => (
                                <button
                                    key={c.id}
                                    onClick={() => setSelectedCadenceId(c.id)}
                                    className={`w-full text-left p-4 rounded-lg transition-all border ${selectedCadenceId === c.id
                                        ? 'bg-gold/10 border-gold'
                                        : 'bg-surface hover:bg-surface-light border-transparent hover:border-gold/30'
                                        }`}
                                >
                                    <div className="font-bold text-gold mb-1">{c.name}</div>
                                    <div className="text-xs text-gray-400">{c.description}</div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Panel: Player & Visualization */}
                <div className="lg:w-2/3 space-y-6">
                    <div className="bg-surface-dark rounded-xl p-6 border border-white/5">
                        {/* Player controls are handled by ProgressionPlayer, but we can visualize here */}
                        <div className="mb-6">
                            <h2 className="text-2xl font-display font-bold mb-4">{cadenceDef.name} in {selectedKey}</h2>
                            <div className="flex gap-4 items-center justify-center p-8 bg-black/20 rounded-xl">
                                {activeProgression.changes.map((change, idx) => (
                                    <motion.div
                                        key={idx}
                                        animate={{
                                            scale: currentChordIndex === idx ? 1.1 : 1,
                                            opacity: currentChordIndex === idx ? 1 : 0.5,
                                            color: currentChordIndex === idx ? '#D4AF37' : '#9CA3AF'
                                        }}
                                        className="text-center"
                                    >
                                        <div className="text-2xl font-bold font-display">
                                            {change.root}{change.type}
                                        </div>
                                        <div className="text-xs font-mono mt-1">
                                            {change.duration} beats
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-sm text-gray-500 mb-2">Audio Player</h3>
                                <ProgressionPlayer />
                            </div>

                            <div>
                                <h3 className="text-sm text-gray-500 mb-2">Fretboard Visualization</h3>
                                <Fretboard
                                    positions={positions}
                                    showNotes={true}
                                    showIntervals={false}
                                    numFrets={12}
                                />
                                <p className="text-xs text-center text-gray-500 mt-2">
                                    Displaying: {displayVoicing?.name}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-surface-dark rounded-xl p-6 border border-white/5">
                        <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Analysis</h3>
                        <p className="text-gray-200">
                            {cadenceDef.description} Practicing this in all 12 keys ensures you
                            can navigate this harmonic resolution instinctively.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
