'use client';

import React, { useState } from 'react';
import { Fretboard } from '@/components/Fretboard/Fretboard';

// Hardcoded positions for reliability (avoids Tonal runtime issues)
const CHROMATIC_BOX_POSITIONS = [
    // String 0 (E2) - Frets 4-7
    { string: 0, fret: 4, note: 'G#', interval: '1', isRoot: false },
    { string: 0, fret: 5, note: 'A', interval: '2', isRoot: false },
    { string: 0, fret: 6, note: 'A#', interval: 'b3', isRoot: false },
    { string: 0, fret: 7, note: 'B', interval: '3', isRoot: false },
    // String 1 (G#2) - Frets 4-7
    { string: 1, fret: 4, note: 'C', interval: '4', isRoot: false },
    { string: 1, fret: 5, note: 'C#', interval: 'b5', isRoot: false },
    { string: 1, fret: 6, note: 'D', interval: '5', isRoot: false },
    { string: 1, fret: 7, note: 'D#', interval: 'b6', isRoot: false },
    // String 2 (C3) - Frets 4-7
    { string: 2, fret: 4, note: 'E', interval: '6', isRoot: false },
    { string: 2, fret: 5, note: 'F', interval: 'b7', isRoot: false },
    { string: 2, fret: 6, note: 'F#', interval: '7', isRoot: false },
    { string: 2, fret: 7, note: 'G', interval: 'R', isRoot: true },
];

const OCTAVE_POSITIONS = [
    // C note positions across all strings (C is on open string 2)
    { string: 2, fret: 0, note: 'C', interval: 'R', isRoot: true },
    { string: 5, fret: 0, note: 'C', interval: 'R', isRoot: true },
    { string: 0, fret: 8, note: 'C', interval: 'R', isRoot: true },
    { string: 1, fret: 4, note: 'C', interval: 'R', isRoot: true },
    { string: 3, fret: 8, note: 'C', interval: 'R', isRoot: true },
    { string: 4, fret: 4, note: 'C', interval: 'R', isRoot: true },
    { string: 2, fret: 12, note: 'C', interval: 'R', isRoot: true },
    { string: 5, fret: 12, note: 'C', interval: 'R', isRoot: true },
];

const SYMMETRY_POSITIONS = [
    // Vertical line at fret 4 showing how every string is 4 semitones apart
    { string: 0, fret: 4, note: 'G#', interval: '1', isRoot: false },
    { string: 1, fret: 4, note: 'C', interval: '1', isRoot: false },
    { string: 2, fret: 4, note: 'E', interval: '1', isRoot: false },
    { string: 3, fret: 4, note: 'G#', interval: '1', isRoot: false },
    { string: 4, fret: 4, note: 'C', interval: '1', isRoot: false },
    { string: 5, fret: 4, note: 'E', interval: '1', isRoot: false },
];

export default function M3GeometryTrainer() {
    const [viewMode, setViewMode] = useState<'chromatic' | 'symmetry' | 'octaves'>('chromatic');

    const getPositions = () => {
        switch (viewMode) {
            case 'chromatic': return CHROMATIC_BOX_POSITIONS;
            case 'octaves': return OCTAVE_POSITIONS;
            case 'symmetry': return SYMMETRY_POSITIONS;
            default: return [];
        }
    };

    return (
        <div className="bg-surface-light/5 rounded-xl p-8 border border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h3 className="text-2xl font-display text-gold">M3 Geometry Explorer</h3>
                <div className="flex gap-2 flex-wrap">
                    <button
                        onClick={() => setViewMode('chromatic')}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${viewMode === 'chromatic' ? 'bg-gold text-surface-dark' : 'bg-surface-light text-gray-400 hover:text-white'}`}
                    >
                        Chromatic Box
                    </button>
                    <button
                        onClick={() => setViewMode('octaves')}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${viewMode === 'octaves' ? 'bg-gold text-surface-dark' : 'bg-surface-light text-gray-400 hover:text-white'}`}
                    >
                        Octave Shapes
                    </button>
                    <button
                        onClick={() => setViewMode('symmetry')}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${viewMode === 'symmetry' ? 'bg-gold text-surface-dark' : 'bg-surface-light text-gray-400 hover:text-white'}`}
                    >
                        Symmetry
                    </button>
                </div>
            </div>

            <div className="bg-surface-dark rounded-xl p-4 overflow-hidden border border-white/5">
                <Fretboard
                    positions={getPositions()}
                    showIntervals={true}
                    showNotes={true}
                    numFrets={16}
                />
            </div>

            <div className="mt-6 text-gray-400 text-sm">
                <p className="mb-2">
                    {viewMode === 'chromatic' && "In Major Thirds tuning, all 12 notes of the chromatic scale are available within a 4-fret span on any string set. No stretching required."}
                    {viewMode === 'octaves' && "Notice the diagonal symmetry. Moving 3 strings up is exactly one octave. Moving 1 string up and 1 fret back is a Major Third."}
                    {viewMode === 'symmetry' && "Fret 0, 4, 8, 12 are symmetrical anchor points. Any shape you learn repeats exactly every 4 frets."}
                </p>
            </div>
        </div>
    );
}
