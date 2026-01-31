// Note names and utilities for music theory calculations

export const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'] as const;
export const NOTES = NOTE_NAMES;
export const FLAT_NAMES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'] as const;

export type NoteName = typeof NOTE_NAMES[number];
export type FlatNoteName = typeof FLAT_NAMES[number];

// Major Thirds tuning: E-G#-C-E-G#-C (low to high)
// Each string is 4 semitones apart (major 3rd)
export const M3_TUNING = ['E', 'G#', 'C', 'E', 'G#', 'C'] as const;
export const M3_TUNING_MIDI = [40, 44, 48, 52, 56, 60] as const; // E2, G#2, C3, E3, G#3, C4

export const INTERVALS = {
  'P1': 0,  // Perfect unison
  'm2': 1,  // Minor 2nd
  'M2': 2,  // Major 2nd
  'm3': 3,  // Minor 3rd
  'M3': 4,  // Major 3rd
  'P4': 5,  // Perfect 4th
  'd5': 6,  // Diminished 5th / tritone
  'P5': 7,  // Perfect 5th
  'm6': 8,  // Minor 6th
  'M6': 9,  // Major 6th
  'm7': 10, // Minor 7th
  'M7': 11, // Major 7th
} as const;

export type IntervalName = keyof typeof INTERVALS;

/**
 * Convert note name to semitone value (0-11)
 */
export function noteToSemitone(note: string): number {
  const cleanNote = note.replace(/\d/g, ''); // Remove octave numbers
  let index = NOTE_NAMES.indexOf(cleanNote as NoteName);
  if (index === -1) {
    index = FLAT_NAMES.indexOf(cleanNote as FlatNoteName);
  }
  return index;
}

/**
 * Get note name from semitone value
 */
export function semitoneToNote(semitone: number, preferFlats = false): string {
  const normalized = ((semitone % 12) + 12) % 12;
  return preferFlats ? FLAT_NAMES[normalized] : NOTE_NAMES[normalized];
}

/**
 * Get the note at a specific fret on a specific string in M3 tuning
 */
export function getNoteAtFret(stringIndex: number, fret: number, preferFlats = false): string {
  const openStringMidi = M3_TUNING_MIDI[stringIndex];
  const midiNote = openStringMidi + fret;
  return semitoneToNote(midiNote, preferFlats);
}

/**
 * Get MIDI note number at a specific position
 */
export function getMidiAtFret(stringIndex: number, fret: number): number {
  return M3_TUNING_MIDI[stringIndex] + fret;
}

/**
 * Transpose a note by a number of semitones
 */
export function transposeNote(note: string, semitones: number, preferFlats = false): string {
  const original = noteToSemitone(note);
  return semitoneToNote(original + semitones, preferFlats);
}

/**
 * Get interval between two notes (in semitones)
 */
export function getInterval(note1: string, note2: string): number {
  const s1 = noteToSemitone(note1);
  const s2 = noteToSemitone(note2);
  return ((s2 - s1) % 12 + 12) % 12;
}

/**
 * Check if a note belongs to a set of notes
 */
export function noteInSet(note: string, notes: string[]): boolean {
  const semitone = noteToSemitone(note);
  return notes.some(n => noteToSemitone(n) === semitone);
}
