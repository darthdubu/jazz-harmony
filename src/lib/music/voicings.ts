// M3 Tuning Chord Voicing Library
// Practical voicings STRICTLY constrained to 4-fret span for playability
// Up to 8 voicings per chord type

import { ChordType } from './chords';
import { M3_TUNING_MIDI, noteToSemitone, semitoneToNote } from './notes';

export interface Voicing {
    id: string;
    name: string;
    type: ChordType;
    // Fret positions for each string (0-5, low to high). null = don't play
    frets: (number | null)[];
    // Which string the root is on (0-5)
    rootString: number;
    // Category for organization
    category: 'shell' | 'drop2' | 'drop3' | 'closed' | 'rootless';
    // Difficulty: 1 = easy, 2 = intermediate, 3 = advanced
    difficulty: 1 | 2 | 3;
}

// Interval names for display
export const INTERVAL_NAMES: Record<number, string> = {
    0: 'R',
    1: '♭9',
    2: '9',
    3: '♭3',
    4: '3',
    5: '4',
    6: '♭5',
    7: '5',
    8: '♯5',
    9: '6',
    10: '♭7',
    11: '7',
};

// All voicings templates - MAXIMUM 4 fret span
// Using relative fret positions (0 = root position on rootString)
const VOICING_TEMPLATES: Record<ChordType, Voicing[]> = {
    // Major 7 - 8 voicings
    'maj7': [
        { id: 'maj7-shell-a', name: 'Shell A (R-3-7)', type: 'maj7', frets: [null, null, 0, 4, 3, null], rootString: 2, category: 'shell', difficulty: 1 },
        { id: 'maj7-shell-b', name: 'Shell B (R-7-3)', type: 'maj7', frets: [null, 0, 3, null, 4, null], rootString: 1, category: 'shell', difficulty: 1 },
        { id: 'maj7-drop2-a', name: 'Drop 2 (5-R-3-7)', type: 'maj7', frets: [null, 0, 3, 4, 3, null], rootString: 1, category: 'drop2', difficulty: 2 },
        { id: 'maj7-drop2-b', name: 'Drop 2 (3-7-R-5)', type: 'maj7', frets: [null, null, 0, 3, 4, 3], rootString: 2, category: 'drop2', difficulty: 2 },
        { id: 'maj7-closed-a', name: 'Closed (R-3-5-7)', type: 'maj7', frets: [0, 4, 3, 3, null, null], rootString: 0, category: 'closed', difficulty: 2 },
        { id: 'maj7-rootless-a', name: 'Rootless (3-5-7)', type: 'maj7', frets: [null, null, null, 0, 3, 3], rootString: 3, category: 'rootless', difficulty: 2 },
        { id: 'maj7-shell-c', name: 'Shell C (7-3)', type: 'maj7', frets: [null, null, null, 0, 1, null], rootString: 3, category: 'shell', difficulty: 1 },
        { id: 'maj7-drop3-a', name: 'Drop 3', type: 'maj7', frets: [0, null, 3, 4, 3, null], rootString: 0, category: 'drop3', difficulty: 3 },
    ],

    // Minor 7 - 8 voicings  
    'min7': [
        { id: 'min7-shell-a', name: 'Shell A (R-♭3-♭7)', type: 'min7', frets: [null, null, 0, 3, 2, null], rootString: 2, category: 'shell', difficulty: 1 },
        { id: 'min7-shell-b', name: 'Shell B (R-♭7-♭3)', type: 'min7', frets: [null, 0, 2, null, 3, null], rootString: 1, category: 'shell', difficulty: 1 },
        { id: 'min7-drop2-a', name: 'Drop 2 (5-R-♭3-♭7)', type: 'min7', frets: [null, 0, 3, 3, 2, null], rootString: 1, category: 'drop2', difficulty: 2 },
        { id: 'min7-drop2-b', name: 'Drop 2 (♭3-♭7-R-5)', type: 'min7', frets: [null, null, 0, 3, 4, 3], rootString: 2, category: 'drop2', difficulty: 2 },
        { id: 'min7-closed-a', name: 'Closed (R-♭3-5-♭7)', type: 'min7', frets: [0, 3, 3, 2, null, null], rootString: 0, category: 'closed', difficulty: 2 },
        { id: 'min7-rootless-a', name: 'Rootless (♭3-5-♭7)', type: 'min7', frets: [null, null, null, 0, 4, 3], rootString: 3, category: 'rootless', difficulty: 2 },
        { id: 'min7-shell-c', name: 'Shell C (♭7-♭3)', type: 'min7', frets: [null, null, null, 0, 1, null], rootString: 3, category: 'shell', difficulty: 1 },
        { id: 'min7-drop3-a', name: 'Drop 3', type: 'min7', frets: [0, null, 3, 3, 2, null], rootString: 0, category: 'drop3', difficulty: 3 },
    ],

    // Dominant 7 - 8 voicings
    '7': [
        { id: '7-shell-a', name: 'Shell A (R-3-♭7)', type: '7', frets: [null, null, 0, 4, 2, null], rootString: 2, category: 'shell', difficulty: 1 },
        { id: '7-shell-b', name: 'Shell B (R-♭7-3)', type: '7', frets: [null, 0, 2, null, 4, null], rootString: 1, category: 'shell', difficulty: 1 },
        { id: '7-drop2-a', name: 'Drop 2 (5-R-3-♭7)', type: '7', frets: [null, 0, 3, 4, 2, null], rootString: 1, category: 'drop2', difficulty: 2 },
        { id: '7-drop2-b', name: 'Drop 2 (3-♭7-R-5)', type: '7', frets: [null, null, 0, 2, 4, 3], rootString: 2, category: 'drop2', difficulty: 2 },
        { id: '7-closed-a', name: 'Closed (R-3-5-♭7)', type: '7', frets: [0, 4, 3, 2, null, null], rootString: 0, category: 'closed', difficulty: 2 },
        { id: '7-rootless-a', name: 'Rootless (3-5-♭7)', type: '7', frets: [null, null, null, 0, 3, 2], rootString: 3, category: 'rootless', difficulty: 2 },
        { id: '7-shell-c', name: 'Shell C (♭7-3)', type: '7', frets: [null, null, null, 0, 2, null], rootString: 3, category: 'shell', difficulty: 1 },
        { id: '7-drop3-a', name: 'Drop 3', type: '7', frets: [0, null, 3, 4, 2, null], rootString: 0, category: 'drop3', difficulty: 3 },
    ],

    // Half-diminished - 6 voicings
    'min7b5': [
        { id: 'min7b5-shell-a', name: 'Shell A (R-♭3-♭7)', type: 'min7b5', frets: [null, null, 0, 3, 2, null], rootString: 2, category: 'shell', difficulty: 1 },
        { id: 'min7b5-shell-b', name: 'Shell B (♭5-R-♭3)', type: 'min7b5', frets: [null, 0, 2, 3, null, null], rootString: 1, category: 'shell', difficulty: 1 },
        { id: 'min7b5-drop2-a', name: 'Drop 2', type: 'min7b5', frets: [null, 0, 2, 3, 2, null], rootString: 1, category: 'drop2', difficulty: 2 },
        { id: 'min7b5-closed-a', name: 'Closed', type: 'min7b5', frets: [0, 3, 2, 2, null, null], rootString: 0, category: 'closed', difficulty: 2 },
        { id: 'min7b5-rootless-a', name: 'Rootless (♭3-♭5-♭7)', type: 'min7b5', frets: [null, null, null, 0, 2, 2], rootString: 3, category: 'rootless', difficulty: 2 },
        { id: 'min7b5-drop3-a', name: 'Drop 3', type: 'min7b5', frets: [0, null, 2, 3, 2, null], rootString: 0, category: 'drop3', difficulty: 3 },
    ],

    // Diminished 7 - 4 voicings (symmetric chord)
    'dim7': [
        { id: 'dim7-closed-a', name: 'Closed A', type: 'dim7', frets: [null, null, 0, 3, 2, 1], rootString: 2, category: 'closed', difficulty: 2 },
        { id: 'dim7-closed-b', name: 'Closed B', type: 'dim7', frets: [null, 0, 3, 2, 1, null], rootString: 1, category: 'closed', difficulty: 2 },
        { id: 'dim7-shell-a', name: 'Shell (R-♭3-♭♭7)', type: 'dim7', frets: [null, null, 0, 3, 1, null], rootString: 2, category: 'shell', difficulty: 1 },
        { id: 'dim7-rootless-a', name: 'Rootless', type: 'dim7', frets: [null, null, null, 0, 2, 1], rootString: 3, category: 'rootless', difficulty: 2 },
    ],

    // Dominant 7 flat 9 - 4 voicings
    '7b9': [
        { id: '7b9-rootless-a', name: 'Rootless (3-♭7-♭9)', type: '7b9', frets: [null, null, null, 0, 2, 1], rootString: 3, category: 'rootless', difficulty: 2 },
        { id: '7b9-shell-a', name: 'Shell (3-♭7)', type: '7b9', frets: [null, null, 0, 4, 2, null], rootString: 2, category: 'shell', difficulty: 1 },
        { id: '7b9-closed-a', name: 'Closed', type: '7b9', frets: [null, 0, 3, 4, 2, 1], rootString: 1, category: 'closed', difficulty: 3 },
        { id: '7b9-drop2-a', name: 'Drop 2', type: '7b9', frets: [null, null, 0, 3, 2, 1], rootString: 2, category: 'drop2', difficulty: 2 },
    ],

    // Extended and altered chords - 4-6 voicings each
    'maj9': [
        { id: 'maj9-shell-a', name: 'Shell (R-3-7-9)', type: 'maj9', frets: [null, null, 0, 4, 3, 2], rootString: 2, category: 'shell', difficulty: 2 },
        { id: 'maj9-drop2-a', name: 'Drop 2', type: 'maj9', frets: [null, 0, 3, 4, 3, 2], rootString: 1, category: 'drop2', difficulty: 2 },
        { id: 'maj9-rootless-a', name: 'Rootless', type: 'maj9', frets: [null, null, null, 0, 3, 2], rootString: 3, category: 'rootless', difficulty: 2 },
        { id: 'maj9-closed-a', name: 'Closed', type: 'maj9', frets: [0, 4, 3, 3, 2, null], rootString: 0, category: 'closed', difficulty: 3 },
    ],

    '6': [
        { id: '6-shell-a', name: 'Shell (R-3-6)', type: '6', frets: [null, null, 0, 0, 1, null], rootString: 2, category: 'shell', difficulty: 1 },
        { id: '6-shell-b', name: 'Shell (R-3-6)', type: '6', frets: [null, 4, 4, 5, null, null], rootString: 1, category: 'shell', difficulty: 1 },
        { id: '6-closed-a', name: 'Closed (5-R-3-6)', type: '6', frets: [3, 4, 4, 5, null, null], rootString: 0, category: 'closed', difficulty: 2 },
        { id: '6-drop2-a', name: 'Drop 2 (6-3-5-R)', type: '6', frets: [5, 8, 7, 8, null, null], rootString: 0, category: 'drop2', difficulty: 2 },
    ],

    '6/9': [
        { id: '6-9-shell-a', name: 'Shell', type: '6/9', frets: [null, null, 0, 1, 1, 2], rootString: 2, category: 'shell', difficulty: 2 },
        { id: '6-9-closed-a', name: 'Closed', type: '6/9', frets: [0, 4, 1, 1, 2, null], rootString: 0, category: 'closed', difficulty: 2 },
        { id: '6-9-rootless-a', name: 'Rootless', type: '6/9', frets: [null, null, null, 0, 1, 2], rootString: 3, category: 'rootless', difficulty: 2 },
    ],

    'min9': [
        { id: 'min9-shell-a', name: 'Shell', type: 'min9', frets: [null, null, 0, 3, 2, 2], rootString: 2, category: 'shell', difficulty: 2 },
        { id: 'min9-drop2-a', name: 'Drop 2', type: 'min9', frets: [null, 0, 3, 3, 2, 2], rootString: 1, category: 'drop2', difficulty: 2 },
        { id: 'min9-rootless-a', name: 'Rootless', type: 'min9', frets: [null, null, null, 0, 2, 2], rootString: 3, category: 'rootless', difficulty: 2 },
        { id: 'min9-closed-a', name: 'Closed', type: 'min9', frets: [0, 3, 3, 2, 2, null], rootString: 0, category: 'closed', difficulty: 3 },
    ],

    'min6': [
        { id: 'min6-shell-a', name: 'Shell (R-♭3-6)', type: 'min6', frets: [null, null, 0, 3, 1, null], rootString: 2, category: 'shell', difficulty: 1 },
        { id: 'min6-shell-b', name: 'Shell (6-R-♭3)', type: 'min6', frets: [null, 0, 1, null, 3, null], rootString: 1, category: 'shell', difficulty: 1 },
        { id: 'min6-closed-a', name: 'Closed', type: 'min6', frets: [0, 3, 3, 1, null, null], rootString: 0, category: 'closed', difficulty: 2 },
    ],

    'minMaj7': [
        { id: 'minMaj7-shell-a', name: 'Shell (R-♭3-7)', type: 'minMaj7', frets: [null, null, 0, 3, 3, null], rootString: 2, category: 'shell', difficulty: 2 },
        { id: 'minMaj7-drop2-a', name: 'Drop 2', type: 'minMaj7', frets: [null, 0, 3, 3, 3, null], rootString: 1, category: 'drop2', difficulty: 2 },
        { id: 'minMaj7-closed-a', name: 'Closed', type: 'minMaj7', frets: [0, 3, 3, 3, null, null], rootString: 0, category: 'closed', difficulty: 2 },
    ],

    '9': [
        { id: '9-shell-a', name: 'Shell (R-3-♭7-9)', type: '9', frets: [null, null, 0, 4, 2, 2], rootString: 2, category: 'shell', difficulty: 2 },
        { id: '9-drop2-a', name: 'Drop 2', type: '9', frets: [null, 0, 3, 4, 2, 2], rootString: 1, category: 'drop2', difficulty: 2 },
        { id: '9-rootless-a', name: 'Rootless (3-♭7-9)', type: '9', frets: [null, null, null, 0, 2, 2], rootString: 3, category: 'rootless', difficulty: 2 },
        { id: '9-closed-a', name: 'Closed', type: '9', frets: [0, 4, 3, 2, 2, null], rootString: 0, category: 'closed', difficulty: 3 },
    ],

    '7#9': [
        { id: '7#9-shell-a', name: 'Hendrix', type: '7#9', frets: [null, null, 0, 4, 2, 3], rootString: 2, category: 'shell', difficulty: 2 },
        { id: '7#9-rootless-a', name: 'Rootless', type: '7#9', frets: [null, null, null, 0, 2, 3], rootString: 3, category: 'rootless', difficulty: 2 },
        { id: '7#9-closed-a', name: 'Closed', type: '7#9', frets: [0, 4, 3, 2, 3, null], rootString: 0, category: 'closed', difficulty: 3 },
    ],

    '7#11': [
        { id: '7#11-shell-a', name: 'Lydian Dom', type: '7#11', frets: [null, null, 0, 4, 2, 2], rootString: 2, category: 'shell', difficulty: 3 },
        { id: '7#11-rootless-a', name: 'Rootless', type: '7#11', frets: [null, null, null, 0, 2, 2], rootString: 3, category: 'rootless', difficulty: 2 },
        { id: '7#11-drop2-a', name: 'Drop 2', type: '7#11', frets: [null, 0, 2, 4, 2, null], rootString: 1, category: 'drop2', difficulty: 3 },
    ],

    '7alt': [
        { id: '7alt-shell-a', name: 'Altered (R-3-♭7-♯9)', type: '7alt', frets: [null, null, 0, 4, 2, 3], rootString: 2, category: 'shell', difficulty: 3 },
        { id: '7alt-rootless-a', name: 'Rootless (3-♭7-♭9)', type: '7alt', frets: [null, null, null, 0, 2, 1], rootString: 3, category: 'rootless', difficulty: 2 },
        { id: '7alt-closed-a', name: 'Closed', type: '7alt', frets: [0, 3, 3, 2, 1, null], rootString: 0, category: 'closed', difficulty: 3 },
    ],

    '13': [
        { id: '13-shell-a', name: 'Shell (R-3-♭7-13)', type: '13', frets: [null, null, 0, 4, 2, 1], rootString: 2, category: 'shell', difficulty: 2 },
        { id: '13-rootless-a', name: 'Rootless (3-♭7-13)', type: '13', frets: [null, null, null, 0, 2, 1], rootString: 3, category: 'rootless', difficulty: 2 },
        { id: '13-drop2-a', name: 'Drop 2', type: '13', frets: [null, 0, 3, 4, 2, 1], rootString: 1, category: 'drop2', difficulty: 3 },
    ],

    'sus4': [
        { id: 'sus4-shell-a', name: 'Shell (R-4)', type: 'sus4', frets: [null, null, 0, 1, null, null], rootString: 2, category: 'shell', difficulty: 1 },
        { id: 'sus4-full-a', name: 'Full (R-4-5)', type: 'sus4', frets: [null, null, 0, 1, 0, null], rootString: 2, category: 'closed', difficulty: 1 },
        { id: 'sus4-closed-a', name: 'Closed', type: 'sus4', frets: [0, 1, 0, null, null, null], rootString: 0, category: 'closed', difficulty: 1 },
    ],

    'sus2': [
        { id: 'sus2-shell-a', name: 'Shell (R-2)', type: 'sus2', frets: [null, null, 0, null, 2, null], rootString: 2, category: 'shell', difficulty: 1 },
        { id: 'sus2-full-a', name: 'Full (R-2-5)', type: 'sus2', frets: [null, null, 0, 2, 0, null], rootString: 2, category: 'closed', difficulty: 1 },
        { id: 'sus2-closed-a', name: 'Closed', type: 'sus2', frets: [0, null, 2, 0, null, null], rootString: 0, category: 'closed', difficulty: 1 },
    ],

    '7sus4': [
        { id: '7sus4-shell-a', name: 'Shell (R-4-♭7)', type: '7sus4', frets: [null, null, 0, 1, 2, null], rootString: 2, category: 'shell', difficulty: 1 },
        { id: '7sus4-shell-b', name: 'Shell (R-♭7-4)', type: '7sus4', frets: [null, 0, 2, null, 1, null], rootString: 1, category: 'shell', difficulty: 1 },
        { id: '7sus4-closed-a', name: 'Closed', type: '7sus4', frets: [0, 1, 3, 2, null, null], rootString: 0, category: 'closed', difficulty: 2 },
        { id: '7sus4-drop2-a', name: 'Drop 2', type: '7sus4', frets: [null, 0, 3, 1, 2, null], rootString: 1, category: 'drop2', difficulty: 2 },
    ],
};

/**
 * Calculate the fret span of a voicing (only considers fretted positions > 0)
 */
function getVoicingSpan(frets: (number | null)[]): number {
    const playedFrets = frets.filter((f): f is number => f !== null && f > 0);
    if (playedFrets.length <= 1) return 0;
    return Math.max(...playedFrets) - Math.min(...playedFrets);
}

/**
 * Fisher-Yates shuffle for randomizing voicings
 */
function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Get voicings for a specific chord, transposed to the correct root
 * STRICTLY filters out any voicings exceeding 4-fret span
 * Voicings are RANDOMIZED for variety in practice sessions
 */
export function getVoicingsForChord(root: string, type: ChordType, randomize: boolean = false): Voicing[] {
    const templates = VOICING_TEMPLATES[type] || [];
    if (templates.length === 0) return [];

    const rootSemitone = noteToSemitone(root);

    const results = templates.map(template => {
        // Transpose frets based on root
        const transposedFrets = template.frets.map(fret => {
            if (fret === null) return null;
            return fret + rootSemitone;
        });

        return {
            ...template,
            id: `${root}-${template.id}`,
            frets: transposedFrets,
        };
    }).filter(v => {
        // Filter out voicings with negative frets
        if (v.frets.some(f => f !== null && f < 0)) return false;

        // STRICTLY filter out voicings spanning more than 4 frets (inclusive)
        // Span = max - min. 
        // If 5,6,7,8 -> max 8, min 5 -> span 3. (4 frets).
        // If 5,9 -> max 9, min 5 -> span 4. (5 frets).
        // User said "spanning 5 frets" is too much. So span must be <= 3.
        const span = getVoicingSpan(v.frets);
        if (span > 3) {
            return false;
        }
        return true;
    });

    // Randomize voicings for variety, or sort by difficulty if not randomizing
    const processedResults = randomize
        ? shuffleArray(results)
        : results.sort((a, b) => {
            if (a.difficulty !== b.difficulty) return a.difficulty - b.difficulty;
            return getVoicingSpan(a.frets) - getVoicingSpan(b.frets);
        });

    // Return up to 8 voicings
    return processedResults.slice(0, 8);
}

/**
 * Get the fret positions for a voicing with note and interval info
 */
export function getVoicingPositions(voicing: Voicing, root: string): {
    string: number;
    fret: number;
    note: string;
    interval: string;
    isRoot: boolean;
}[] {
    const positions: { string: number; fret: number; note: string; interval: string; isRoot: boolean }[] = [];
    const rootSemitone = noteToSemitone(root);

    voicing.frets.forEach((fret, stringIndex) => {
        if (fret === null || fret < 0) return;

        const openStringMidi = M3_TUNING_MIDI[stringIndex];
        const noteMidi = openStringMidi + fret;
        const noteSemitone = noteMidi % 12;
        const noteName = semitoneToNote(noteSemitone);

        // Calculate interval from root
        const intervalSemitones = (noteSemitone - rootSemitone + 12) % 12;
        const intervalName = INTERVAL_NAMES[intervalSemitones] || '?';

        positions.push({
            string: stringIndex,
            fret,
            note: noteName,
            interval: intervalName,
            isRoot: noteSemitone === rootSemitone,
        });
    });

    return positions;
}

/**
 * Get a simple string representation of a voicing (tab notation)
 */
export function voicingToString(voicing: Voicing): string {
    return voicing.frets.map(f => f === null ? 'x' : f.toString()).join(' ');
}
