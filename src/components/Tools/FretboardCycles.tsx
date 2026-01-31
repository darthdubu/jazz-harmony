'use client';

import React, { useState, useEffect } from 'react';
import { CircleOfFifths } from './CircleOfFifths';
import Fretboard from '../Fretboard/Fretboard';
import { NOTES, M3_TUNING } from '@/lib/music/notes';

// Simple logic to get scale notes for visualization
// In a real app, use a dedicated music theory library
const SCALE_INTERVALS = [0, 2, 4, 5, 7, 9, 11]; // Major Scale

const KEY_OFFSETS: Record<string, number> = {
    'C': 0, 'C#': 1, 'Db': 1, 'D': 2, 'D#': 3, 'Eb': 3, 'E': 4,
    'F': 5, 'F#': 6, 'Gb': 6, 'G': 7, 'G#': 8, 'Ab': 8, 'A': 9,
    'A#': 10, 'Bb': 10, 'B': 11
};

const getScalePositions = (rootNote: string) => {
    const rootIndex = KEY_OFFSETS[rootNote] || 0;
    const positions = [];

    // Iterate through strings and frets to find scale notes
    // M3 Tuning: E, G#, C, E, G#, C
    const tuningIndices = [4, 8, 0, 4, 8, 0]; // Relative to C=0

    for (let string = 0; string < 6; string++) {
        const stringRoot = tuningIndices[string];
        for (let fret = 0; fret < 13; fret++) {
            const noteIndex = (stringRoot + fret) % 12;
            // Check if this note is in the scale
            // Scale notes relative to root:
            const interval = (noteIndex - rootIndex + 12) % 12;

            if (SCALE_INTERVALS.includes(interval)) {
                let intervalName = '';
                if (interval === 0) intervalName = 'R';
                if (interval === 2) intervalName = '2';
                if (interval === 4) intervalName = '3';
                if (interval === 5) intervalName = '4';
                if (interval === 7) intervalName = '5';
                if (interval === 9) intervalName = '6';
                if (interval === 11) intervalName = '7';

                positions.push({
                    string,
                    fret,
                    note: NOTES[noteIndex], // Simplified note naming
                    interval: intervalName,
                    isRoot: interval === 0
                });
            }
        }
    }
    return positions;
};

export default function FretboardCycles() {
    const [activeKey, setActiveKey] = useState('C');
    const [positions, setPositions] = useState<any[]>([]);
    const [cycleType, setCycleType] = useState<'5ths' | '4ths' | '2nds'>('5ths');
    const [isPlaying, setIsPlaying] = useState(false);

    // Order of keys in the Circle of Fifths (Clockwise)
    const ORDER_OF_FIFTHS = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'Db', 'Ab', 'Eb', 'Bb', 'F'];

    useEffect(() => {
        setPositions(getScalePositions(activeKey));
    }, [activeKey]);

    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setActiveKey(currentKey => {
                const currentIndex = ORDER_OF_FIFTHS.indexOf(currentKey);
                // Fallback if key not found (e.g. minor)
                if (currentIndex === -1) return currentKey;

                let nextIndex = 0;
                if (cycleType === '5ths') {
                    // Clockwise 1 step
                    nextIndex = (currentIndex + 1) % 12;
                } else if (cycleType === '4ths') {
                    // Counter-Clockwise 1 step
                    nextIndex = (currentIndex - 1 + 12) % 12;
                } else if (cycleType === '2nds') {
                    // Clockwise 2 steps (Whole Tone)
                    nextIndex = (currentIndex + 2) % 12;
                }

                return ORDER_OF_FIFTHS[nextIndex];
            });
        }, 1500); // 1.5 second per step

        return () => clearInterval(interval);
    }, [isPlaying, cycleType]);

    const handleKeySelect = (key: string, type: 'major' | 'minor') => {
        setIsPlaying(false); // Stop auto-play on manual interaction
        // Extract root note - for minor keys like "Am", "F#m" etc, remove the trailing 'm'
        const rootNote = type === 'minor' ? key.replace('m', '') : key;
        setActiveKey(rootNote);
    };

    return (
        <div className="flex flex-col items-center gap-8 p-6 bg-surface-dark rounded-2xl border border-white/5">
            {/* Cycle Type Selector */}
            <div className="flex gap-1 p-1 bg-surface rounded-lg w-full max-w-sm">
                {(['5ths', '4ths', '2nds'] as const).map(type => (
                    <button
                        key={type}
                        onClick={() => {
                            setCycleType(type);
                            setIsPlaying(false);
                        }}
                        className={`flex-1 px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${cycleType === type
                            ? 'bg-gold text-surface-dark shadow-lg'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        {type}
                    </button>
                ))}
            </div>

            {/* Circle + Info */}
            <div className="flex flex-col items-center gap-4">
                <CircleOfFifths
                    activeKey={activeKey}
                    onSelectKey={handleKeySelect}
                />

                <div className="text-center">
                    <h3 className="text-2xl font-bold text-white">{activeKey} Major</h3>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
                        {cycleType === '5ths' && 'Cycle of Fifths'}
                        {cycleType === '4ths' && 'Cycle of Fourths'}
                        {cycleType === '2nds' && 'Whole Tone Cycle'}
                    </p>
                </div>

                <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`
                        px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider transition-all
                        ${isPlaying
                            ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/30'
                            : 'bg-gold text-surface-dark hover:bg-gold-light'}
                    `}
                >
                    {isPlaying ? '■ Stop' : '▶ Play Cycle'}
                </button>
            </div>

            {/* Fretboard - Full Width with Scroll */}
            <div className="w-full overflow-x-auto">
                <div className="min-w-[600px]">
                    <Fretboard
                        positions={positions}
                        showNotes={true}
                        showIntervals={true}
                        numFrets={12}
                    />
                </div>
            </div>

            <p className="text-xs text-gray-600 text-center">
                Click any key on the circle to see its scale. Use "Play Cycle" to animate.
            </p>
        </div>
    );
}
