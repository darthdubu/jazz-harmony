
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type EmotionalState = 'engaged' | 'frustrated' | 'bored' | 'breakthrough';

export interface PracticeSession {
    startTime: number;
    duration: number;
    attempts: number;
    accuracy: number; // 0-1
    chordsMatched: number;
}

interface FlowState {
    // Flow Metrics
    isInFlow: boolean;
    flowQuality: number; // 0-1
    accuracyHistory: number[]; // 1 = success, 0 = fail
    responseTimeHistory: number[]; // ms
    flowStartTime: number | null;

    // Emotional Context
    emotionalState: EmotionalState;
    recentAttempts: { success: boolean; time: number }[];
    lastAccuracy: number;

    // Current Session
    currentSession: PracticeSession | null;

    // Actions
    startSession: () => void;
    endSession: () => PracticeSession | null;
    recordAttempt: (success: boolean, responseTime: number) => void;
    reset: () => void;
}

export const useFlowStore = create<FlowState>()(
    persist(
        (set, get) => ({
            isInFlow: false,
            flowQuality: 0,
            accuracyHistory: [],
            responseTimeHistory: [],
            flowStartTime: null,
            emotionalState: 'engaged',
            recentAttempts: [],
            lastAccuracy: 0,
            currentSession: null,

            startSession: () => {
                set({
                    currentSession: {
                        startTime: Date.now(),
                        duration: 0,
                        attempts: 0,
                        accuracy: 0,
                        chordsMatched: 0,
                    },
                    accuracyHistory: [],
                    responseTimeHistory: [],
                    recentAttempts: [],
                    isInFlow: false,
                    flowStartTime: null,
                });
            },

            endSession: () => {
                const session = get().currentSession;
                if (session) {
                    session.duration = (Date.now() - session.startTime) / 1000;
                }
                set({ currentSession: null });
                return session;
            },

            recordAttempt: (success, responseTime) => {
                const state = get();
                const now = Date.now();

                // Update histories
                const newAccuracyHistory = [...state.accuracyHistory, success ? 1 : 0].slice(-20);
                const newResponseTimeHistory = [...state.responseTimeHistory, responseTime].slice(-20);
                const newRecentAttempts = [...state.recentAttempts, { success, time: now }].slice(-20);

                // Update Session
                let newSession = state.currentSession ? { ...state.currentSession } : null;
                if (newSession) {
                    newSession.attempts++;
                    if (success) {
                        newSession.chordsMatched++;
                    }
                    newSession.accuracy = newSession.chordsMatched / newSession.attempts;
                }

                // Calculate Flow State
                // 1. Accuracy > 70% recently
                const recentAcc = newAccuracyHistory.slice(-10).reduce((a, b) => a + b, 0) / Math.min(10, newAccuracyHistory.length || 1);
                
                // 2. Consistency (Standard Deviation of response times)
                const recentTimes = newResponseTimeHistory.slice(-10);
                let consistency = 0;
                if (recentTimes.length > 2) {
                    const mean = recentTimes.reduce((a, b) => a + b, 0) / recentTimes.length;
                    const variance = recentTimes.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / recentTimes.length;
                    const stdDev = Math.sqrt(variance);
                    consistency = Math.max(0, 1.0 - (stdDev / mean)); // Normalized consistency
                }

                // Flow Score
                const flowScore = (recentAcc * 0.6) + (consistency * 0.4);
                
                let newIsInFlow = state.isInFlow;
                let newFlowStartTime = state.flowStartTime;

                if (flowScore > 0.7 && newAccuracyHistory.length >= 5) {
                    if (!newFlowStartTime) {
                        newFlowStartTime = now;
                    } else if (now - newFlowStartTime > 60000) { // 1 minute to enter flow
                         newIsInFlow = true;
                    }
                } else {
                    newFlowStartTime = null;
                    newIsInFlow = false;
                }

                // Calculate Emotional State
                let newEmotionalState: EmotionalState = 'engaged';
                
                // Frustration: recent failures in short time
                const recentFailures = newRecentAttempts.filter(a => !a.success).length;
                
                if (recentFailures >= 5 && newRecentAttempts.length >= 7) {
                    newEmotionalState = 'frustrated';
                }
                // Boredom: high accuracy but potentially repetitive (hard to track repetition here, assuming purely high consistency)
                else if (recentAcc > 0.9 && consistency > 0.9 && newAccuracyHistory.length > 10) {
                     newEmotionalState = 'bored';
                }
                // Breakthrough: sudden improvement
                else if (recentAcc > (state.lastAccuracy + 0.2) && state.lastAccuracy < 0.6 && newAccuracyHistory.length > 5) {
                    newEmotionalState = 'breakthrough';
                }

                set({
                    accuracyHistory: newAccuracyHistory,
                    responseTimeHistory: newResponseTimeHistory,
                    recentAttempts: newRecentAttempts,
                    currentSession: newSession,
                    isInFlow: newIsInFlow,
                    flowQuality: flowScore,
                    flowStartTime: newFlowStartTime,
                    emotionalState: newEmotionalState,
                    lastAccuracy: recentAcc,
                });
            },

            reset: () => {
                set({
                    isInFlow: false,
                    flowQuality: 0,
                    accuracyHistory: [],
                    responseTimeHistory: [],
                    flowStartTime: null,
                    emotionalState: 'engaged',
                    recentAttempts: [],
                    currentSession: null,
                });
            }
        }),
        {
            name: 'flow-state-storage',
            partialize: (state) => ({ 
                // Don't persist session data, only maybe preferences if we had them
            }), 
        }
    )
);
