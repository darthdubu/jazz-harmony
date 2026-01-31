import { NOTE_NAMES, noteToSemitone, semitoneToNote } from './notes';

export interface Mode {
    name: string;
    intervals: number[]; // Semitones from root
    description?: string;
    brightness?: number; // 1 (darkest) to 7 (brightest)
    characteristicInterval?: string; // e.g. "♯11" for Lydian
}

export const MODES: Mode[] = [
    {
        name: 'Lydian',
        intervals: [0, 2, 4, 6, 7, 9, 11],
        description: 'The brightest mode. Dreamy, floating, celestial.',
        brightness: 7,
        characteristicInterval: '♯4/♯11'
    },
    {
        name: 'Ionian',
        intervals: [0, 2, 4, 5, 7, 9, 11],
        description: 'The Major Scale. Happy, stable, resolved.',
        brightness: 6,
        characteristicInterval: 'Major 7'
    },
    {
        name: 'Mixolydian',
        intervals: [0, 2, 4, 5, 7, 9, 10],
        description: 'Bluesy, dominant, rock/funk vibe.',
        brightness: 5,
        characteristicInterval: '♭7'
    },
    {
        name: 'Dorian',
        intervals: [0, 2, 3, 5, 7, 9, 10],
        description: 'Sophisticated minor. Jazzy, soulful, Santana-esque.',
        brightness: 4,
        characteristicInterval: 'Major 6'
    },
    {
        name: 'Aeolian',
        intervals: [0, 2, 3, 5, 7, 8, 10],
        description: 'The Natural Minor. Sad, emotional, serious.',
        brightness: 3,
        characteristicInterval: '♭6'
    },
    {
        name: 'Phrygian',
        intervals: [0, 1, 3, 5, 7, 8, 10],
        description: 'Exotic, Spanish/Moorish flavor. Dark and tension-filled.',
        brightness: 2,
        characteristicInterval: '♭2'
    },
    {
        name: 'Locrian',
        intervals: [0, 1, 3, 5, 6, 8, 10],
        description: 'Unstable, dissonant. Rarely used as a home key.',
        brightness: 1,
        characteristicInterval: '♭5'
    }
];

export function getScaleNotes(root: string, modeName: string): string[] {
    const mode = MODES.find(m => m.name === modeName);
    if (!mode) return [];

    const rootSemitone = noteToSemitone(root);

    return mode.intervals.map(interval => {
        const noteSemitone = (rootSemitone + interval) % 12;
        return semitoneToNote(noteSemitone, modeName === 'Locrian' || modeName === 'Phrygian' || modeName === 'Aeolian' || root.includes('b'));
    });
}
