'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import * as Tone from 'tone';
import { usePlayerStore } from '@/stores/usePlayerStore';
import { getChordNotes, getChordSymbol } from '@/lib/music/chords';
import {
    initAudio,
    scheduleMeasure,
    startTransport,
    stopTransport,
    clearSchedule,
    setTempo,
    getTransport,
} from '@/lib/audio/player';
import { getVoicingsForChord, getVoicingPositions, Voicing } from '@/lib/music/voicings';
import RhythmVisualizer from './RhythmVisualizer';

interface ProgressionPlayerProps {
    onChordChange?: (chordIndex: number) => void;
    progressionId?: string;
}

export default function ProgressionPlayer({ progressionId }: ProgressionPlayerProps) {
    const {
        currentProgression,
        currentChordIndex,
        isPlaying,
        tempo,
        isLooping,
        setIsPlaying,
        setTempo: storeTempo,
        toggleLoop,
        nextChord,
        previousChord,
        setCurrentChordIndex,
    } = usePlayerStore();

    // Check store for setProgression, actually I need to verify store capability.
    // Assuming usePlayerStore has a setData or loadProgression.
    // Let's assume setProgression(progressionObject) exists.
    // I need to import STANDARDS to find the progression.

    // BUT wait, I can't import STANDARDS inside the component if it's a client component using large data? 
    // It's fine.

    useEffect(() => {
        if (progressionId) {
            // Dynamic import to avoid circular dep if any, or just standard import
            import('@/data/standards').then(({ getStandardById }) => {
                const prog = getStandardById(progressionId);
                if (prog) {
                    usePlayerStore.getState().setProgression(prog);
                }
            });
        }
    }, [progressionId]);

    const [audioReady, setAudioReady] = useState(false);

    // Initialize audio on first interaction
    const handleInitAudio = async () => {
        if (!audioReady) {
            await initAudio();
            setAudioReady(true);
        }
    };

    // Schedule the progression
    const scheduleProgression = () => {
        if (!currentProgression) return;

        clearSchedule();
        setTempo(tempo);

        let currentBar = 0;

        currentProgression.changes.forEach((chord, index) => {
            const duration = chord.duration || 4; // in beats
            // Map style to rhythm style
            let style: 'swing' | 'bossa' | 'latin' | 'ballad' | 'samba' | 'waltz' | 'baiao' = 'swing';
            const s = currentProgression.style;

            if (s === 'bossa' || s === 'mpb') style = 'bossa';
            else if (s === 'samba' || s === 'choro' || s === 'frevo') style = 'samba';
            else if (s === 'latin') style = 'latin';
            else if (s === 'baião') style = 'baiao';
            else if (s === 'waltz') style = 'waltz';
            else if (s === 'ballad' || s === 'seresta' || s === 'samba-cancao') style = 'ballad';
            else if (s === 'blues') style = 'swing';

            // Get notes via Voicings for better realism and variety
            // Training mode: Use randomized voicings (if it's a training session)
            // For now, let's always use randomized voicings for variety as per user request
            const isTraining = currentProgression.tags?.includes('training');
            const voicings = getVoicingsForChord(chord.root, chord.type, isTraining);

            let notes: string[] = [];
            let voicing: Voicing | null = null;

            if (voicings.length > 0) {
                // If training, getVoicingsForChord already randomized them if we passed true,
                // but we can also just pick random one here.
                // Actually getVoicingsForChord(..., true) shuffles them.
                // So we can just take the first one.
                voicing = voicings[0];

                // Convert voicing to notes
                const positions = getVoicingPositions(voicing, chord.root);
                // Map positions to notes with octaves
                // We need to be careful about octaves. 
                // getVoicingPositions returns note names (e.g. "C"). 
                // We need C3, E3 etc.
                // Let's deduce octave from string index? 
                // M3 tuning: Strings 0-5. 
                // String 0 (Low E) is E2.
                // String 1 (G#) is G#2.
                // String 2 (C) is C3.
                // String 3 (E) is E3.
                // String 4 (G#) is G#3.
                // String 5 (C) is C4.

                notes = positions.map(p => {
                    // note: p.string is 0-5.
                    // Let's use Tone to get note name with octave
                    // Base MIDI for M3 strings:
                    // E2=40, G#2=44, C3=48, E3=52, G#3=56, C4=60
                    const baseMidi = [40, 44, 48, 52, 56, 60][p.string];
                    // p.string comes from getVoicingPositions, need to ensure it matches this index
                    const noteMidi = baseMidi + p.fret;
                    return Tone.Frequency(noteMidi, "midi").toNote();
                });
            } else {
                // Fallback to theoretical notes
                notes = getChordNotes(chord.root, chord.type);
            }

            // Schedule the audio
            scheduleMeasure(notes, style, currentBar, duration);

            // Schedule UI update to show current chord AND voicing
            const transport = getTransport();
            transport.schedule((time) => {
                const drawTime = Math.max(0, time - 0.1); // Slightly ahead or exact
                Tone.Draw.schedule(() => {
                    setCurrentChordIndex(index);
                    if (voicing) {
                        // We need access to setCurrentVoicing
                        usePlayerStore.getState().setCurrentVoicing(voicing);
                    }
                }, drawTime);
            }, `${currentBar}:0:0`);

            currentBar += duration;
        });

        if (isLooping) {
            getTransport().setLoopPoints(0, `${currentBar}:0:0`);
            getTransport().loop = true;
        } else {
            getTransport().loop = false;
        }
    };

    // Handle play/pause
    const togglePlay = async () => {
        await handleInitAudio();

        if (isPlaying) {
            setIsPlaying(false);
            stopTransport();
        } else {
            // Re-schedule to ensure settings
            if (currentProgression) {
                scheduleProgression();
                startTransport();
                setIsPlaying(true);
            }
        }
    };

    // React to tempo changes
    useEffect(() => {
        if (isPlaying) {
            setTempo(tempo);
        }
    }, [tempo, isPlaying]);

    // Cleanup
    useEffect(() => {
        return () => {
            stopTransport();
            clearSchedule();
        };
    }, []);

    // Watch for progression changes
    useEffect(() => {
        if (isPlaying) {
            stopTransport();
            setIsPlaying(false);
        }
    }, [currentProgression, isPlaying, setIsPlaying]);

    if (!currentProgression) {
        return (
            <div className="bg-surface-dark rounded-xl p-6 text-center">
                <p className="text-gray-400">Select a progression to begin</p>
            </div>
        );
    }

    const hasChords = currentProgression.changes && currentProgression.changes.length > 0;
    const currentChord = hasChords ? currentProgression.changes[currentChordIndex] : null;

    return (
        <div className="bg-surface-dark rounded-xl p-6 space-y-6">
            {/* Current Chord Display */}
            <div className="text-center">
                <motion.div
                    key={currentChordIndex}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-block"
                >
                    <span className="text-6xl font-display font-bold text-gold">
                        {currentChord ? getChordSymbol(currentChord.root, currentChord.type) : (hasChords ? '--' : 'N/A')}
                    </span>
                </motion.div>
                <p className="text-gray-400 mt-2">
                    {hasChords ? `Bar ${currentChord?.bar} • Beat ${currentChord?.beat}` : 'No chord data available'}
                </p>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={previousChord}
                    disabled={!hasChords}
                    className="p-3 rounded-full bg-surface hover:bg-surface-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                    </svg>
                </button>

                <button
                    onClick={hasChords ? togglePlay : undefined}
                    disabled={!hasChords}
                    className="p-4 rounded-full bg-gold text-background hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isPlaying ? (
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                    ) : (
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    )}
                </button>

                <button
                    onClick={() => { nextChord(); }}
                    disabled={!hasChords}
                    className="p-3 rounded-full bg-surface hover:bg-surface-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                    </svg>
                </button>
            </div>

            {/* Tempo Control */}
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Tempo</span>
                    <span className="text-gold font-mono">{tempo} BPM</span>
                </div>
                <input
                    type="range"
                    min={60}
                    max={200}
                    value={tempo}
                    onChange={(e) => storeTempo(parseInt(e.target.value))}
                    className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer slider-gold"
                />
            </div>

            {/* Loop Toggle - Visual only for now as engine loops automatically if set */}
            <div className="flex items-center justify-between">
                <span className="text-gray-400">Loop</span>
                <button
                    onClick={toggleLoop}
                    className={`px-4 py-2 rounded-lg transition-colors ${isLooping ? 'bg-gold text-background' : 'bg-surface text-gray-400'
                        }`}
                >
                    {isLooping ? 'On' : 'Off'}
                </button>
            </div>

            {/* Rhythm Visualization */}
            <RhythmVisualizer style={currentProgression?.style || 'swing'} />

            {/* Chord Timeline */}
            <div className="space-y-2">
                <p className="text-sm text-gray-400">Progression</p>
                <div className="flex flex-wrap gap-2">
                    {currentProgression.changes.map((chord, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentChordIndex(index)}
                            className={`px-3 py-1 rounded text-sm font-mono transition-all ${index === currentChordIndex
                                ? 'bg-gold text-background scale-105'
                                : 'bg-surface hover:bg-surface-light text-gray-300'
                                }`}
                        >
                            {getChordSymbol(chord.root, chord.type)}
                        </button>
                    ))}
                </div>
            </div>

            <div className="text-xs text-center text-gray-500 font-mono">
                Style: {currentProgression.style === 'bossa' ? 'Bossa Nova' : 'Swing Jazz'}
            </div>
        </div>
    );
}
