
'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFlowStore } from '@/lib/flow-state/store';
import { PracticePartner } from '@/lib/flow-state/partner';

export default function FlowManager() {
    const {
        isInFlow,
        currentSession,
        emotionalState,
        startSession
    } = useFlowStore();

    const [toast, setToast] = useState<{
        message: string;
        type: 'info' | 'success' | 'flow' | 'partner' | 'fact';
        category?: string;
    } | null>(null);

    const factIntervalRef = useRef<NodeJS.Timeout | null>(null);

    // Initial Greeting + First Fact
    useEffect(() => {
        const greeting = PracticePartner.getGreeting(null, 'exploratory');
        setToast({ message: greeting, type: 'partner' });

        // Auto-dismiss greeting
        const greetingTimer = setTimeout(() => {
            setToast(null);

            // Show an initial fact after greeting dismisses
            const factTimer = setTimeout(() => {
                const fact = PracticePartner.getInitialFact();
                setToast({
                    message: fact.fact,
                    type: 'fact',
                    category: fact.category
                });
                setTimeout(() => setToast(null), 8000);
            }, 3000);

            return () => clearTimeout(factTimer);
        }, 5000);

        // Set up periodic fact checking (every 3 minutes, but respects internal cooldown)
        factIntervalRef.current = setInterval(() => {
            const fact = PracticePartner.getRandomFact();
            if (fact) {
                setToast({
                    message: fact.fact,
                    type: 'fact',
                    category: fact.category
                });
                setTimeout(() => setToast(null), 8000);
            }
        }, 180000); // Check every 3 minutes

        return () => {
            clearTimeout(greetingTimer);
            if (factIntervalRef.current) {
                clearInterval(factIntervalRef.current);
            }
        };
    }, []);

    // React to Emotional State Changes
    useEffect(() => {
        if (emotionalState !== 'engaged') {
            const msg = PracticePartner.getEncouragement(emotionalState);
            if (msg) {
                setToast({ message: msg, type: 'partner' });
                setTimeout(() => setToast(null), 6000);
            }
        }
    }, [emotionalState]);

    // React to Flow State
    useEffect(() => {
        if (isInFlow) {
            setToast({ message: "You're in the zone 🌊", type: 'flow' });
            setTimeout(() => setToast(null), 4000);
        }
    }, [isInFlow]);

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end pointer-events-none">
            <AnimatePresence>
                {toast && (
                    <motion.div
                        key={toast.message}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className={`
                            pointer-events-auto max-w-sm
                            mb-4 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-md border border-white/10
                            ${toast.type === 'flow' ? 'bg-indigo-900/90 text-indigo-100' :
                                toast.type === 'fact' ? 'bg-amber-900/90 text-amber-100' :
                                    toast.type === 'partner' ? 'bg-gray-900/90 text-gray-100' :
                                        'bg-gray-800/90 text-white'}
                        `}
                    >
                        <div className="flex items-start gap-3">
                            <span className="text-2xl flex-shrink-0">
                                {toast.type === 'flow' ? '🌊' :
                                    toast.type === 'fact' ? '💡' :
                                        toast.type === 'partner' ? '👋' : '✨'}
                            </span>
                            <div>
                                <p className="font-medium text-sm text-white/70">
                                    {toast.type === 'fact' ? toast.category :
                                        toast.type === 'partner' ? "Practice Partner" : "System"}
                                </p>
                                <p className="text-base leading-relaxed">
                                    {toast.message}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
