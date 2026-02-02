'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase/client';
import { addToMailingList } from '@/lib/supabase/subscribers';

export default function LoginPage() {
    const router = useRouter();
    const [isSignUp, setIsSignUp] = useState(false); // Toggle between Login and Sign Up
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [subscribe, setSubscribe] = useState(true);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        if (!supabase) {
            setMessage({ type: 'error', text: 'Authentication service is not configured.' });
            setLoading(false);
            return;
        }

        // Add to mailing list if checked (only on Sign Up usually, but we can do both)
        if (isSignUp && subscribe) {
            addToMailingList(email, 'signup_page');
        }

        try {
            let error;
            if (isSignUp) {
                const res = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        emailRedirectTo: `${window.location.origin}/auth/callback`,
                    },
                });
                error = res.error;

                // If email confirmation is disabled, we get a session immediately
                if (!error && res.data.session) {
                    router.push('/curriculum');
                    router.refresh();
                    return;
                }

                if (!error && res.data.user) {
                    setMessage({ type: 'success', text: 'Account created! Please check your email to confirm.' });
                }
            } else {
                const res = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                error = res.error;
                if (!error) {
                    router.push('/dashboard');
                    router.refresh();
                }
            }

            if (error) {
                setMessage({ type: 'error', text: error.message });
            }
        } catch (_) {
            setMessage({ type: 'error', text: 'An unexpected error occurred.' });
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen pt-32 px-6 flex flex-col items-center">
            <div className="w-full max-w-md">
                <div className="text-center mb-12">
                    <h1 className="font-display text-4xl text-white mb-4">
                        {isSignUp ? 'Create Account' : 'Welcome Back'}
                    </h1>
                    <p className="text-gray-400">
                        {isSignUp ? 'Join the academy and track your progress.' : 'Sign in to continue your journey.'}
                    </p>
                </div>

                <div className="bg-surface border border-white/5 rounded-xl p-8 shadow-xl">
                    <form onSubmit={handleAuth} className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full bg-surface-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full bg-surface-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                                required
                                minLength={6}
                            />
                        </div>

                        {isSignUp && (
                            <div className="flex items-center gap-3">
                                <input
                                    id="subscribe"
                                    type="checkbox"
                                    checked={subscribe}
                                    onChange={(e) => setSubscribe(e.target.checked)}
                                    className="w-4 h-4 rounded border-white/10 bg-surface-dark text-gold focus:ring-gold focus:ring-offset-surface"
                                />
                                <label htmlFor="subscribe" className="text-sm text-gray-400 select-none cursor-pointer">
                                    Subscribe to support my work
                                </label>
                            </div>
                        )}

                        {message && (
                            <div className={`p-4 rounded-lg text-sm ${message.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                                }`}>
                                {message.text}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gold hover:bg-gold-light text-surface-dark font-bold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Processing...' : (isSignUp ? 'Sign Up' : 'Sign In')}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <button
                            onClick={() => {
                                setIsSignUp(!isSignUp);
                                setMessage(null);
                            }}
                            className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                            {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                        </button>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/5 text-center">
                        <Link
                            href="/curriculum"
                            className="text-gray-300 hover:text-white font-medium transition-colors text-sm"
                        >
                            Continue as Guest &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

