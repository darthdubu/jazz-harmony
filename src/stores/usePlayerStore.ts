import { create } from 'zustand';
import { Progression, ChordChange } from '@/lib/music/progressions';

interface PlayerState {
    // Current progression
    currentProgression: Progression | null;
    currentChordIndex: number;
    currentVoicing: any | null; // Using any to avoid circular dependency issues, effectively Voicing type

    // Playback state
    isPlaying: boolean;
    tempo: number;
    isLooping: boolean;

    // Display state
    showNotes: boolean;
    showIntervals: boolean;

    // Actions
    setProgression: (progression: Progression) => void;
    setCurrentChordIndex: (index: number) => void;
    setCurrentVoicing: (voicing: any | null) => void;
    nextChord: () => void;
    previousChord: () => void;

    setIsPlaying: (playing: boolean) => void;
    setTempo: (tempo: number) => void;
    toggleLoop: () => void;

    setShowNotes: (show: boolean) => void;
    setShowIntervals: (show: boolean) => void;
    toggleNotes: () => void;
    toggleIntervals: () => void;

    // Computed
    getCurrentChord: () => ChordChange | null;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
    currentProgression: null,
    currentChordIndex: 0,
    currentVoicing: null,

    isPlaying: false,
    tempo: 120,
    isLooping: true,

    showNotes: true,
    showIntervals: false,

    setProgression: (progression) => set({
        currentProgression: progression,
        currentChordIndex: 0,
        tempo: progression.tempo,
    }),

    setCurrentChordIndex: (index) => set({ currentChordIndex: index }),
    setCurrentVoicing: (voicing) => set({ currentVoicing: voicing }),

    nextChord: () => {
        const { currentProgression, currentChordIndex, isLooping } = get();
        if (!currentProgression) return;

        const maxIndex = currentProgression.changes.length - 1;
        if (currentChordIndex < maxIndex) {
            set({ currentChordIndex: currentChordIndex + 1 });
        } else if (isLooping) {
            set({ currentChordIndex: 0 });
        }
    },

    previousChord: () => {
        const { currentChordIndex } = get();
        if (currentChordIndex > 0) {
            set({ currentChordIndex: currentChordIndex - 1 });
        }
    },

    setIsPlaying: (playing) => set({ isPlaying: playing }),
    setTempo: (tempo) => set({ tempo }),
    toggleLoop: () => set((state) => ({ isLooping: !state.isLooping })),

    setShowNotes: (show) => set({ showNotes: show }),
    setShowIntervals: (show) => set({ showIntervals: show }),
    toggleNotes: () => set((state) => ({ showNotes: !state.showNotes })),
    toggleIntervals: () => set((state) => ({ showIntervals: !state.showIntervals })),

    getCurrentChord: () => {
        const { currentProgression, currentChordIndex } = get();
        if (!currentProgression) return null;
        return currentProgression.changes[currentChordIndex] || null;
    },
}));
