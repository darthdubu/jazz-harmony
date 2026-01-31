// Chord definitions and voicing calculations for jazz harmony

import { noteToSemitone, semitoneToNote, transposeNote, M3_TUNING_MIDI, NOTE_NAMES } from './notes';

// Chord formulas as intervals from root (in semitones)
export const CHORD_TYPES = {
    // Major family
    'maj7': [0, 4, 7, 11],      // Major 7th (Δ7)
    'maj9': [0, 4, 7, 11, 14],  // Major 9th
    '6': [0, 4, 7, 9],          // Major 6th
    '6/9': [0, 4, 7, 9, 14],    // 6/9

    // Minor family
    'min7': [0, 3, 7, 10],      // Minor 7th (-7)
    'min9': [0, 3, 7, 10, 14],  // Minor 9th
    'min6': [0, 3, 7, 9],       // Minor 6th
    'minMaj7': [0, 3, 7, 11],   // Minor major 7th

    // Dominant family
    '7': [0, 4, 7, 10],         // Dominant 7th
    '9': [0, 4, 7, 10, 14],     // Dominant 9th
    '7b9': [0, 4, 7, 10, 13],   // 7 flat 9
    '7#9': [0, 4, 7, 10, 15],   // 7 sharp 9
    '7#11': [0, 4, 7, 10, 18],  // 7 sharp 11 (lydian dominant)
    '7alt': [0, 4, 6, 10, 13, 15], // Altered dominant
    '13': [0, 4, 7, 10, 14, 21], // Dominant 13th

    // Half-diminished and diminished
    'min7b5': [0, 3, 6, 10],    // Half-diminished (ø7)
    'dim7': [0, 3, 6, 9],       // Diminished 7th (°7)

    // Suspended
    'sus4': [0, 5, 7],          // Suspended 4th
    'sus2': [0, 2, 7],          // Suspended 2nd
    '7sus4': [0, 5, 7, 10],     // Dominant 7 sus4
} as const;

export type ChordType = keyof typeof CHORD_TYPES;

// Display names for chord types
export const CHORD_DISPLAY_NAMES: Record<ChordType, string> = {
    'maj7': 'Δ7',
    'maj9': 'Δ9',
    '6': '6',
    '6/9': '6/9',
    'min7': '-7',
    'min9': '-9',
    'min6': '-6',
    'minMaj7': '-Δ7',
    '7': '7',
    '9': '9',
    '7b9': '7♭9',
    '7#9': '7♯9',
    '7#11': '7♯11',
    '7alt': '7alt',
    '13': '13',
    'min7b5': 'ø7',
    'dim7': '°7',
    'sus4': 'sus4',
    'sus2': 'sus2',
    '7sus4': '7sus4',
};

export interface ChordVoicing {
    name: string;
    root: string;
    type: ChordType;
    frets: (number | null)[]; // null = muted string, -1 = open (not used in M3)
    fingers?: number[];       // Finger assignments (1-4)
    notes: string[];          // Actual notes in voicing
    category: 'shell' | 'drop2' | 'drop3' | 'closed' | 'spread';
}

/**
 * Get the notes of a chord given root and type
 */
export function getChordNotes(root: string, type: ChordType): string[] {
    const intervals = CHORD_TYPES[type];
    const rootSemitone = noteToSemitone(root);
    return intervals.map(interval =>
        semitoneToNote((rootSemitone + interval) % 12)
    );
}

/**
 * Generate chord symbol for display
 */
export function getChordSymbol(root: string, type: ChordType): string {
    return `${root}${CHORD_DISPLAY_NAMES[type]}`;
}

/**
 * Check if a note is a chord tone
 */
export function isChordTone(note: string, root: string, type: ChordType): boolean {
    const chordNotes = getChordNotes(root, type);
    const noteSemitone = noteToSemitone(note);
    return chordNotes.some(cn => noteToSemitone(cn) === noteSemitone);
}

/**
 * Get function of note in chord (root, 3rd, 5th, 7th, etc.)
 */
export function getNoteFunction(note: string, root: string, type: ChordType): string | null {
    const interval = (noteToSemitone(note) - noteToSemitone(root) + 12) % 12;
    const intervals = CHORD_TYPES[type];

    const functions: Record<number, string> = {
        0: 'R',    // Root
        2: '9',    // 9th (2nd)
        3: '♭3',   // Minor 3rd
        4: '3',    // Major 3rd
        5: '11',   // 11th (4th)
        6: '♯11',  // Sharp 11 / flat 5
        7: '5',    // Perfect 5th
        8: '♭13',  // Flat 13 / sharp 5
        9: '13',   // 13th (6th)
        10: '♭7',  // Minor 7th
        11: '7',   // Major 7th
    };

    if (intervals.map(i => i % 12).includes(interval)) {
        return functions[interval] || null;
    }
    return null;
}

// Common jazz voicings for M3 tuning
// In M3 tuning, shapes repeat every 3 strings due to uniform intervals
export const COMMON_VOICINGS: ChordVoicing[] = [
    // Shell voicings (R-3-7 or R-7-3)
    {
        name: 'Δ7 Shell (R-3-7)',
        root: 'C',
        type: 'maj7',
        frets: [null, null, 0, 4, 3, null],
        notes: ['C', 'E', 'B'],
        category: 'shell',
    },
    {
        name: '-7 Shell (R-♭3-♭7)',
        root: 'C',
        type: 'min7',
        frets: [null, null, 0, 3, 2, null],
        notes: ['C', 'Eb', 'Bb'],
        category: 'shell',
    },
    {
        name: '7 Shell (R-3-♭7)',
        root: 'C',
        type: '7',
        frets: [null, null, 0, 4, 2, null],
        notes: ['C', 'E', 'Bb'],
        category: 'shell',
    },
    {
        name: 'ø7 Shell (R-♭3-♭7)',
        root: 'C',
        type: 'min7b5',
        frets: [null, null, 0, 3, 2, null],
        notes: ['C', 'Eb', 'Gb', 'Bb'],
        category: 'shell',
    },
];

/**
 * Transpose a voicing to a new root
 */
export function transposeVoicing(voicing: ChordVoicing, newRoot: string): ChordVoicing {
    const originalRootSemitone = noteToSemitone(voicing.root);
    const newRootSemitone = noteToSemitone(newRoot);
    const transposition = (newRootSemitone - originalRootSemitone + 12) % 12;

    const newFrets = voicing.frets.map(fret =>
        fret === null ? null : fret + transposition
    );

    const newNotes = voicing.notes.map(note => transposeNote(note, transposition));

    return {
        ...voicing,
        root: newRoot,
        name: voicing.name.replace(voicing.root, newRoot),
        frets: newFrets,
        notes: newNotes,
    };
}

/**
 * Find all positions for a note on the M3 fretboard (up to fret 15)
 */
export function findNotePositions(note: string, maxFret = 15): { string: number; fret: number }[] {
    const positions: { string: number; fret: number }[] = [];
    const targetSemitone = noteToSemitone(note);

    for (let stringIndex = 0; stringIndex < 6; stringIndex++) {
        for (let fret = 0; fret <= maxFret; fret++) {
            const midiNote = M3_TUNING_MIDI[stringIndex] + fret;
            if (midiNote % 12 === targetSemitone) {
                positions.push({ string: stringIndex, fret });
            }
        }
    }

    return positions;
}
