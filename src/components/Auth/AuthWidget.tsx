'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/components/Auth/AuthProvider';
import { isAuthEnabled } from '@/lib/supabase/client';

export default function AuthWidget() {
    const { user, signOut, loading } = useAuth();
    // const enabled = isAuthEnabled();

    // if (!enabled) return null; // Don't show if not configured
    if (loading) return <div className="animate-pulse w-8 h-8 bg-white/10 rounded-full"></div>;

    if (user) {
        return (
            <div className="flex items-center gap-4">
                <div className="text-right hidden xl:block">
                    <div className="text-sm font-bold text-white">{user.email?.split('@')[0]}</div>
                    <div className="text-xs text-gray-400">Student</div>
                </div>
                <button
                    onClick={() => signOut()}
                    className="w-10 h-10 rounded-full bg-gold text-surface-dark font-bold flex items-center justify-center hover:bg-gold-light transition-colors"
                    title="Sign Out"
                >
                    {user.email?.[0].toUpperCase()}
                </button>
            </div>
        );
    }

    return (
        <Link
            href="/login"
            className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-bold text-white transition-colors"
        >
            Sign In
        </Link>
    );
}
