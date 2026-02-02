
import { getInterval, noteToSemitone } from './notes';
import { ChordType, CHORD_DISPLAY_NAMES } from './chords';

// Roman numerals for scale degrees (0-11 semitones)
const ROMAN_NUMERALS: Record<number, string> = {
    0: 'I',
    1: '♭II',
    2: 'II',
    3: '♭III',
    4: 'III',
    5: 'IV',
    6: '♯IV', // or ♭V
    7: 'V',
    8: '♭VI',
    9: 'VI',
    10: '♭VII',
    11: 'VII'
};

/**
 * Get the Roman numeral analysis for a chord in a given key
 */
export function getScaleDegree(root: string, type: ChordType, key: string): string {
    // 1. Calculate interval from key to root
    const semitones = getInterval(key, root);
    
    // 2. Get Roman numeral base
    let numeral = ROMAN_NUMERALS[semitones];
    
    // Special handling for 6 (tritone)
    // If it's a dominant 7th, it's often a tritone sub (bII of V -> bII of G -> Ab7 in C? No wait)
    // Tritone from C is F#. #IV.
    // If key is C, F#7 is subV7/V? No, Db7 is subV7.
    // Let's stick to #IV for index 6 for now unless we want to be very smart.
    // Actually, usually in jazz:
    // b5 is common.
    
    // 3. Get quality symbol
    // We can use the display name, but usually analysis is simplified.
    // maj7 -> M7
    // min7 -> m7
    // 7 -> 7
    // min7b5 -> ø
    // dim7 -> °
    
    let quality = '';
    
    switch (type) {
        case 'maj7':
        case 'maj9':
        case '6':
        case '6/9':
            quality = 'M7'; // Simplified analysis
            break;
        case 'min7':
        case 'min9':
        case 'min6':
        case 'minMaj7':
            quality = 'm7';
            break;
        case '7':
        case '9':
        case '13':
        case '7b9':
        case '7#9':
        case '7#11':
        case '7alt':
        case '7sus4':
            quality = '7';
            break;
        case 'min7b5':
            quality = 'ø7';
            break;
        case 'dim7':
            quality = '°7';
            break;
        case 'sus4':
        case 'sus2':
            quality = 'sus';
            break;
        default:
            quality = '';
    }
    
    // If the roman numeral is lowercase for minor? 
    // In Berklee analysis, they use uppercase + quality (IIm7).
    // Classical uses lowercase (ii7).
    // Let's stick to Uppercase + Quality (IIm7) as it's clearer for Jazz.
    
    return `${numeral}${quality}`;
}
