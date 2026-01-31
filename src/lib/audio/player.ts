// Audio player using Tone.js with real acoustic guitar samples
// Samples from: https://github.com/nbrosowsky/tonejs-instruments

import * as Tone from 'tone';

let sampler: Tone.Sampler | null = null;
let reverb: Tone.Reverb | null = null;
let isInitialized = false;
let isLoading = false;

/**
 * Initialize the audio context and sampler with real acoustic guitar samples
 * Must be called from a user interaction (click) due to browser autoplay policies
 */
export async function initAudio(): Promise<void> {
    if (isInitialized || isLoading) return;
    isLoading = true;

    await Tone.start();

    // Warm reverb for jazz club ambience
    reverb = new Tone.Reverb({
        decay: 3,
        wet: 0.2, // Slightly more wet for guitar
        preDelay: 0.01
    }).toDestination();

    // Use local acoustic guitar samples (downloaded from gleitz/midi-js-soundfonts)
    const baseUrl = '/samples/guitar/';

    try {
        // Create sample map for full range
        const notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
        const octaves = [2, 3, 4, 5, 6];
        const urls: Record<string, string> = {};

        // Add A1, Bb1, B1 explicitly
        urls['A1'] = 'A1.mp3';
        urls['Bb1'] = 'Bb1.mp3';
        urls['B1'] = 'B1.mp3';

        // Add rest of chromatic scale
        octaves.forEach(oct => {
            notes.forEach(note => {
                // Skip anything above C6 if it doesn't exist
                if (oct === 6 && note !== 'C') return;

                const noteName = `${note}${oct}`;
                const fileName = `${noteName}.mp3`;

                // Add the flat version (e.g. "Db3")
                urls[noteName] = fileName;

                // Add the sharp version alias (e.g. "C#3" -> "Db3.mp3")
                // Tone.js uses sharps internally often, so we must alias them
                if (note.includes('b')) {
                    // Proper enharmonic mapping:
                    let sharpName = '';
                    if (note === 'Db') sharpName = 'C#';
                    else if (note === 'Eb') sharpName = 'D#';
                    else if (note === 'Gb') sharpName = 'F#';
                    else if (note === 'Ab') sharpName = 'G#';
                    else if (note === 'Bb') sharpName = 'A#';

                    if (sharpName) {
                        urls[`${sharpName}${oct}`] = fileName;
                    }
                } else {
                    // Also handle natural notes? No, natural notes don't have aliases usually unless E#->F
                    // But we might want to ensure we have all bases covered.
                }
            });
        });

        // Debug: Log the first few URLs to verify path
        console.log('Sample URLs created (sample):', Object.entries(urls).slice(0, 3));

        sampler = new Tone.Sampler({
            urls: urls,
            baseUrl: baseUrl,
            release: 1,
            onload: () => {
                console.log('Guitar samples loaded successfully');
                isInitialized = true;
                isLoading = false;
            },
            onerror: (error) => {
                console.error('Error loading guitar samples:', error);
                isLoading = false;
                // Don't block UI if audio fails
                isInitialized = true;
            }
        });

        sampler.volume.value = -3;
        sampler.connect(reverb);

        // Add a low-pass filter to warm up the nylon sound further?
        // const filter = new Tone.Filter(2000, "lowpass").toDestination();
        // sampler.connect(filter);

    } catch (err) {
        console.error("Failed to initialize sampler:", err);
        isInitialized = true; // Allow app to continue just without sound
        isLoading = false;
    }

    // Safety timeout - mark as initialized after 5 seconds even if onload doesn't fire
    setTimeout(() => {
        if (!isInitialized) {
            console.log('Audio initialized via timeout (fallback)');
            isInitialized = true;
            isLoading = false;
        }
    }, 5000);
}

/**
 * Check if audio is initialized
 */
export function isAudioReady(): boolean {
    return isInitialized;
}

/**
 * Format note for Tone.js sampler
 */
function formatNote(note: string, octave: number): string {
    // Convert flats to sharps for consistency
    const flatToSharp: Record<string, string> = {
        'Db': 'C#', 'Eb': 'D#', 'Gb': 'F#', 'Ab': 'G#', 'Bb': 'A#'
    };
    const converted = flatToSharp[note] || note;
    return `${converted}${octave}`;
}

/**
 * Play a single note
 */
export function playNote(note: string, duration = '4n', time?: number | string, velocity?: number): void {
    if (!sampler || !isInitialized) return;

    const formattedNote = formatNote(note, 4);
    sampler.triggerAttackRelease(formattedNote, duration, time, velocity);
}

/**
 * Play a chord (all notes simultaneously)
 */
export function playChord(notes: string[], octave = 3, duration = '2n', time?: number | string, velocity?: number): void {
    if (!sampler || !isInitialized) return;

    const formattedNotes = notes.map(note => formatNote(note, octave));
    sampler.triggerAttackRelease(formattedNotes, duration, time, velocity);
}

/**
 * Play a chord with a natural guitar strum effect
 */
export function strumChord(notes: string[], octave = 3, strumDelay = 0.025): void {
    if (!sampler || !isInitialized) return;

    const now = Tone.now();

    // Spread notes across octaves for realistic voicing (low to high)
    notes.forEach((note, index) => {
        // Adjust octave based on position in chord for more realistic guitar voicing
        const noteOctave = index < 2 ? octave : octave + 1;
        const formattedNote = formatNote(note, noteOctave);
        const time = now + index * strumDelay;

        // Slightly randomize velocity for natural feel
        const velocity = 0.7 + Math.random() * 0.2;
        sampler!.triggerAttackRelease(formattedNote, '2n', time, velocity);
    });
}

/**
 * Stop all playing sounds
 */
export function stopAll(): void {
    if (sampler) {
        sampler.releaseAll();
    }
}

/**
 * Set master volume (0 to 1)
 */
export function setVolume(volume: number): void {
    if (sampler) {
        sampler.volume.value = Tone.gainToDb(Math.max(0.01, Math.min(1, volume)));
    }
}

/**
 * Get Tone.Transport for sequencing
 */
export function getTransport(): typeof Tone.Transport {
    return Tone.Transport;
}

/**
 * Rhythm Pattern Definition
 */
export type RhythmStyle = 'bossa' | 'swing' | 'ballad' | 'latin' | 'samba' | 'waltz' | 'baiao';

export interface RhythmEvent {
    time: string; // '0:0:0' format
    type: 'bass' | 'chord' | 'all';
    duration: string;
    velocity: number;
}

export const RHYTHM_PATTERNS: Record<RhythmStyle, RhythmEvent[]> = {
    // Standard Bossa Nova Pattern (Clave feel)
    // Bass on 1 and 3 (approx)
    // Chords syncopated
    'bossa': [
        { time: '0:0:0', type: 'bass', duration: '8n', velocity: 0.9 }, // Bass on 1
        { time: '0:0:0', type: 'chord', duration: '8n', velocity: 0.6 }, // Chord on 1
        { time: '0:0:3', type: 'chord', duration: '8n', velocity: 0.5 }, // Chord on "a" of 1
        { time: '0:1:2', type: 'chord', duration: '8n', velocity: 0.6 }, // Chord on "and" of 2
        { time: '0:2:0', type: 'bass', duration: '8n', velocity: 0.8 }, // Bass on 3
        { time: '0:2:1', type: 'chord', duration: '8n', velocity: 0.5 }, // Chord on "e" of 3 (delayed) -> Actually let's do standard syncicopatation
        { time: '0:2:2', type: 'chord', duration: '8n', velocity: 0.6 }, // Chord on "and" of 3
        { time: '0:3:2', type: 'chord', duration: '16n', velocity: 0.5 }, // Chord on "and" of 4
    ],
    'samba': [ // Faster, more 16th note subdivision
        { time: '0:0:0', type: 'bass', duration: '16n', velocity: 0.95 },
        { time: '0:0:2', type: 'chord', duration: '16n', velocity: 0.7 },
        { time: '0:0:3', type: 'bass', duration: '16n', velocity: 0.6 },
        { time: '0:1:0', type: 'chord', duration: '16n', velocity: 0.7 },
        { time: '0:1:2', type: 'chord', duration: '16n', velocity: 0.6 },
        { time: '0:2:0', type: 'bass', duration: '16n', velocity: 0.9 }, // Surdo 2
        { time: '0:2:2', type: 'chord', duration: '16n', velocity: 0.7 },
        { time: '0:3:0', type: 'chord', duration: '16n', velocity: 0.6 },
        { time: '0:3:3', type: 'chord', duration: '16n', velocity: 0.5 },
    ],
    // Freddie Green Style (Quarter notes)
    'swing': [
        { time: '0:0:0', type: 'all', duration: '8n', velocity: 0.8 },
        { time: '0:1:0', type: 'all', duration: '16n', velocity: 0.6 }, // Short
        { time: '0:2:0', type: 'all', duration: '8n', velocity: 0.85 }, // Accent 2 & 4? Jazz focuses on 2 & 4 usually but Freddie Green is steady
        { time: '0:3:0', type: 'all', duration: '16n', velocity: 0.6 },
    ],
    'ballad': [
        { time: '0:0:0', type: 'all', duration: '1m', velocity: 0.7 }, // Strum once per bar
    ],
    'latin': [
        { time: '0:0:0', type: 'bass', duration: '8n', velocity: 0.9 },
        { time: '0:0:2', type: 'chord', duration: '8n', velocity: 0.7 },
        { time: '0:1:0', type: 'chord', duration: '8n', velocity: 0.6 },
        { time: '0:1:2', type: 'bass', duration: '8n', velocity: 0.8 },
        { time: '0:2:0', type: 'chord', duration: '8n', velocity: 0.7 },
        { time: '0:3:0', type: 'chord', duration: '8n', velocity: 0.6 },
    ],
    'waltz': [ // 3/4
        { time: '0:0:0', type: 'bass', duration: '4n', velocity: 0.9 },
        { time: '0:1:0', type: 'chord', duration: '4n', velocity: 0.7 },
        { time: '0:2:0', type: 'chord', duration: '4n', velocity: 0.7 },
    ],
    'baiao': [
        { time: '0:0:0', type: 'bass', duration: '8n', velocity: 0.9 }, // Down
        { time: '0:0:2', type: 'chord', duration: '16n', velocity: 0.7 },
        { time: '0:1:0', type: 'chord', duration: '8n', velocity: 0.8 }, // Syncopated
        { time: '0:2:0', type: 'bass', duration: '8n', velocity: 0.8 },
        { time: '0:2:2', type: 'chord', duration: '16n', velocity: 0.7 },
        { time: '0:3:0', type: 'chord', duration: '8n', velocity: 0.6 },
    ]
};

/**
 * Schedule a full measure of rhythm
 */
export function scheduleMeasure(
    notes: string[],
    style: RhythmStyle = 'swing',
    measureStart: number, // Measure index
    barDuration: number // How many beats (usually 4)
): void {
    if (!sampler || !isInitialized) return;

    // Default to swing if style not found
    const pattern = RHYTHM_PATTERNS[style] || RHYTHM_PATTERNS['swing'];

    // Sort notes: Bass is lowest, Chord is rest
    // In M3 tuning, strings are ordered. 
    // notes array usually comes from `chords.ts` which orders them low to high?
    // Let's assume notes[0] is bass.
    const bassNote = notes[0];
    const chordNotes = notes.slice(1);
    const allNotes = notes;

    const formattedBass = formatNote(bassNote, 2); // Low octave
    const formattedChord = chordNotes.map(n => formatNote(n, 3)); // Mid octave
    const formattedAll = allNotes.map((n, i) => formatNote(n, i < 1 ? 2 : 3));

    pattern.forEach(event => {
        // Parse time "bar:beat:sixteenth" -> we only care about beat:sixteenth relative to measureStart
        const [, beat, sixteenth] = event.time.split(':').map(Number);

        // Calculate offset in beats
        const beatOffset = beat + (sixteenth * 0.25);

        if (beatOffset >= barDuration) return; // Skip if beyond bar length (e.g. 3/4 time)

        const time = `${measureStart}:${beat}:${sixteenth}`;

        Tone.Transport.schedule((t) => {
            const vel = event.velocity * (0.8 + Math.random() * 0.2); // Humanize

            if (event.type === 'bass') {
                sampler?.triggerAttackRelease(formattedBass, event.duration, t, vel);
            } else if (event.type === 'chord') {
                sampler?.triggerAttackRelease(formattedChord, event.duration, t, vel * 0.8);
            } else {
                sampler?.triggerAttackRelease(formattedAll, event.duration, t, vel);
            }
        }, time);
    });
}

/**
 * Set BPM
 */
export function setTempo(bpm: number): void {
    Tone.Transport.bpm.value = bpm;
}

/**
 * Clear transport
 */
export function clearSchedule(): void {
    Tone.Transport.cancel();
}

/**
 * Start Transport
 */
export function startTransport(): void {
    if (Tone.context.state !== 'running') {
        Tone.context.resume();
    }
    // Reset position to start
    Tone.Transport.position = 0;
    console.log('Starting Transport at position:', Tone.Transport.position, 'BPM:', Tone.Transport.bpm.value);
    Tone.Transport.start();
}

/**
 * Stop Transport
 */
export function stopTransport(): void {
    Tone.Transport.stop();
}
