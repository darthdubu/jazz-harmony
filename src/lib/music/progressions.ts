// Chord progression definitions and jazz standards library

import { ChordType, getChordSymbol } from './chords';

export interface ChordChange {
    root: string;
    type: ChordType;
    duration: number; // in beats
    bar: number;
    beat: number;
}

export interface Progression {
    id: string;
    title: string;
    composer: string;
    artist?: string;         // Associated artist (for Brazilian music especially)
    style: 'bossa' | 'bebop' | 'modal' | 'standard' | 'latin' | 'samba' | 'mpb' | 'baião' | 'choro' | 'waltz' | 'ballad' | 'blues' | 'seresta' | 'samba-cancao' | 'frevo';
    key: string;
    timeSignature: [number, number];
    tempo: number;           // BPM
    bars: number;
    changes: ChordChange[];
    tags: string[];
    description?: string;
}

/**
 * Transpose entire progression to a new key
 */
export function transposeProgression(progression: Progression, newKey: string): Progression {
    const NOTE_ORDER = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

    const originalKeyIndex = NOTE_ORDER.indexOf(progression.key.replace('m', ''));
    const newKeyIndex = NOTE_ORDER.indexOf(newKey.replace('m', ''));
    const transposition = (newKeyIndex - originalKeyIndex + 12) % 12;

    const transposedChanges = progression.changes.map(change => ({
        ...change,
        root: NOTE_ORDER[(NOTE_ORDER.indexOf(change.root) + transposition) % 12],
    }));

    return {
        ...progression,
        key: newKey,
        changes: transposedChanges,
    };
}

/**
 * Get chord symbol string for a change
 */
export function getChangeSymbol(change: ChordChange): string {
    return getChordSymbol(change.root, change.type);
}

/**
 * Format progression as simple string (for display)
 */
export function formatProgression(progression: Progression): string {
    const barChords: string[][] = [];

    for (const change of progression.changes) {
        if (!barChords[change.bar - 1]) {
            barChords[change.bar - 1] = [];
        }
        barChords[change.bar - 1].push(getChangeSymbol(change));
    }

    return barChords.map((bar, i) => `|${bar.join(' ')}`).join(' ') + '|';
}

// ii-V-I patterns commonly used in jazz
export const COMMON_PATTERNS = {
    'ii-V-I-major': [
        { root: 'D', type: 'min7' as ChordType, duration: 2, bar: 1, beat: 1 },
        { root: 'G', type: '7' as ChordType, duration: 2, bar: 1, beat: 3 },
        { root: 'C', type: 'maj7' as ChordType, duration: 4, bar: 2, beat: 1 },
    ],
    'ii-V-I-minor': [
        { root: 'D', type: 'min7b5' as ChordType, duration: 2, bar: 1, beat: 1 },
        { root: 'G', type: '7b9' as ChordType, duration: 2, bar: 1, beat: 3 },
        { root: 'C', type: 'min7' as ChordType, duration: 4, bar: 2, beat: 1 },
    ],
    'tritone-sub': [
        { root: 'D', type: 'min7' as ChordType, duration: 2, bar: 1, beat: 1 },
        { root: 'Db', type: '7' as ChordType, duration: 2, bar: 1, beat: 3 },
        { root: 'C', type: 'maj7' as ChordType, duration: 4, bar: 2, beat: 1 },
    ],
};

export const CADENCES = [
    {
        id: 'major-251',
        name: 'Major ii-V-I',
        description: 'The foundation of jazz harmony. A strong resolution to the I chord.',
        baseKey: 'C',
        changes: COMMON_PATTERNS['ii-V-I-major']
    },
    {
        id: 'minor-251',
        name: 'Minor ii-V-i',
        description: 'The minor key equivalent. Uses a half-diminished ii and altered V.',
        baseKey: 'Cm',
        changes: COMMON_PATTERNS['ii-V-I-minor']
    },
    {
        id: 'turnaround',
        name: 'I-VI-ii-V Turnaround',
        description: 'Standard turnaround used at the end of sections to loop back to I.',
        baseKey: 'C',
        changes: [
            { root: 'C', type: 'maj7' as ChordType, duration: 2, bar: 1, beat: 1 },
            { root: 'A', type: '7alt' as ChordType, duration: 2, bar: 1, beat: 3 },
            { root: 'D', type: 'min7' as ChordType, duration: 2, bar: 2, beat: 1 },
            { root: 'G', type: '7' as ChordType, duration: 2, bar: 2, beat: 3 },
        ]
    },
    {
        id: '3625',
        name: 'iii-VI-ii-V',
        description: 'A common variation of the turnaround, replacing I with iii.',
        baseKey: 'C',
        changes: [
            { root: 'E', type: 'min7' as ChordType, duration: 2, bar: 1, beat: 1 },
            { root: 'A', type: '7alt' as ChordType, duration: 2, bar: 1, beat: 3 },
            { root: 'D', type: 'min7' as ChordType, duration: 2, bar: 2, beat: 1 },
            { root: 'G', type: '7' as ChordType, duration: 2, bar: 2, beat: 3 },
        ]
    },
    {
        id: 'tritone-sub',
        name: 'Tritone Substitution',
        description: 'Replacing the V7 with a dominant 7th a tritone away (bII7).',
        baseKey: 'C',
        changes: COMMON_PATTERNS['tritone-sub']
    },
    {
        id: 'backdoor',
        name: 'Backdoor Progression',
        description: 'Approaching I from the iv7 and bVII7 (borrowed from minor).',
        baseKey: 'C',
        changes: [
            { root: 'F', type: 'min7' as ChordType, duration: 2, bar: 1, beat: 1 },
            { root: 'Bb', type: '7' as ChordType, duration: 2, bar: 1, beat: 3 },
            { root: 'C', type: 'maj7' as ChordType, duration: 4, bar: 2, beat: 1 },
        ]
    }
];
