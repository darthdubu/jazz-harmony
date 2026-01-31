'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import AuthWidget from '@/components/Auth/AuthWidget';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 z-50 relative">
                        <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center shadow-lg shadow-gold/20">
                            <span className="text-background font-display font-bold text-xl">M³</span>
                        </div>
                        <span className="font-display text-xl font-semibold text-gold hidden sm:block">Jazz Harmony</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-gray-300 hover:text-gold transition-colors text-sm font-medium">
                            Home
                        </Link>
                        <Link href="/standards" className="text-gray-300 hover:text-gold transition-colors text-sm font-medium">
                            Standards
                        </Link>
                        <Link href="/voicings" className="text-gray-300 hover:text-gold transition-colors text-sm font-medium">
                            Voicings
                        </Link>
                        <Link href="/training" className="text-gray-300 hover:text-gold transition-colors text-sm font-medium">
                            Training
                        </Link>
                        <Link href="/curriculum" className="text-gray-300 hover:text-gold transition-colors text-sm font-medium">
                            Curriculum
                        </Link>
                    </div>

                    {/* Desktop Auth */}
                    <div className="hidden md:block ml-8 border-l border-white/10 pl-8">
                        <AuthWidget />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-gray-300 hover:text-gold transition-colors z-50 relative pointer-events-auto"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 md:hidden pt-24 px-6"
                    >
                        <div className="flex flex-col gap-6 text-center">
                            <Link
                                href="/"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-xl font-medium text-gray-200 hover:text-gold py-2"
                            >
                                Home
                            </Link>
                            <Link
                                href="/standards"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-xl font-medium text-gray-200 hover:text-gold py-2"
                            >
                                Standards
                            </Link>
                            <Link
                                href="/voicings"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-xl font-medium text-gray-200 hover:text-gold py-2"
                            >
                                Voicings
                            </Link>
                            <Link
                                href="/training"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-xl font-medium text-gray-200 hover:text-gold py-2"
                            >
                                Training
                            </Link>
                            <Link
                                href="/curriculum"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-xl font-medium text-gray-200 hover:text-gold py-2"
                            >
                                Curriculum
                            </Link>

                            <div className="w-full h-px bg-white/10 my-2" />

                            <div className="flex justify-center">
                                <AuthWidget />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
