'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllStandards, getAllTags } from '@/data/standards';
import { getChordSymbol } from '@/lib/music/chords';

export default function StandardsPage() {
    const standards = getAllStandards();
    const tags = getAllTags();

    const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const styles = ['bossa', 'standard', 'samba', 'mpb', 'choro', 'modal', 'latin', 'bebop', 'waltz', 'ballad'];

    const filteredStandards = standards.filter(s => {
        if (selectedStyle && s.style !== selectedStyle) return false;
        if (selectedTag && !s.tags.includes(selectedTag)) return false;
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            return (
                s.title.toLowerCase().includes(query) ||
                s.composer.toLowerCase().includes(query) ||
                s.artist?.toLowerCase().includes(query)
            );
        }
        return true;
    });

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="font-display text-4xl font-bold text-gold mb-2">
                    Jazz Standards
                </h1>
                <p className="text-gray-400 mb-8">
                    Explore chord progressions from classic Jazz and Bossa Nova repertoire
                </p>
            </motion.div>

            {/* Filters */}
            <div className="mb-8 space-y-4">
                {/* Search */}
                <div className="relative">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by title, composer, or artist..."
                        className="w-full bg-surface border border-surface-light rounded-lg px-4 py-3 pl-12 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors"
                    />
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                {/* Style filters */}
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setSelectedStyle(null)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${!selectedStyle ? 'bg-gold text-background' : 'bg-surface text-gray-400 hover:text-gold'
                            }`}
                    >
                        All Styles
                    </button>
                    {styles.map(style => (
                        <button
                            key={style}
                            onClick={() => setSelectedStyle(selectedStyle === style ? null : style)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${selectedStyle === style ? 'bg-gold text-background' : 'bg-surface text-gray-400 hover:text-gold'
                                }`}
                        >
                            {style}
                        </button>
                    ))}
                </div>

                {/* Tag filters */}
                <div className="flex flex-wrap gap-2">
                    {tags.slice(0, 10).map(tag => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                            className={`tag cursor-pointer transition-all ${selectedTag === tag ? 'bg-gold/30' : 'hover:bg-gold/20'
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results count */}
            <p className="text-gray-500 text-sm mb-6">
                Showing {filteredStandards.length} of {standards.length} standards
            </p>

            {/* Standards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredStandards.map((standard) => (
                        <motion.div
                            key={standard.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "50px" }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link href={`/standards/${standard.id}`}>
                            <div className="bg-surface-dark rounded-xl p-6 card-hover h-full flex flex-col">
                                <div className="flex items-start justify-between mb-4">
                                    <span className="tag">{standard.style}</span>
                                    <div className="text-right">
                                        <span className="text-gold font-mono text-sm">{standard.key}</span>
                                        <span className="text-gray-600 text-xs ml-2">{standard.tempo} BPM</span>
                                    </div>
                                </div>

                                <h3 className="font-display text-xl font-semibold mb-1">
                                    {standard.title}
                                </h3>
                                <p className="text-gray-500 text-sm">
                                    {standard.composer}
                                    {standard.artist && (
                                        <span className="text-gold"> • {standard.artist}</span>
                                    )}
                                </p>

                                {standard.description && (
                                    <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                                        {standard.description}
                                    </p>
                                )}

                                <div className="mt-auto pt-4">
                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {standard.changes.slice(0, 8).map((chord, i) => (
                                            <span key={i} className="text-xs font-mono text-gray-400 bg-surface px-1.5 py-0.5 rounded">
                                                {getChordSymbol(chord.root, chord.type)}
                                            </span>
                                        ))}
                                        {standard.changes.length > 8 && (
                                            <span className="text-xs text-gray-600 px-1.5 py-0.5">+{standard.changes.length - 8} more</span>
                                        )}
                                    </div>
                                    <div className="flex gap-1 flex-wrap">
                                        {standard.tags.slice(0, 3).map(tag => (
                                            <span key={tag} className="text-xs text-gray-600">#{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {filteredStandards.length === 0 && (
                <div className="text-center py-16">
                    <p className="text-gray-500">No standards found matching your filters</p>
                    <button
                        onClick={() => {
                            setSelectedStyle(null);
                            setSelectedTag(null);
                            setSearchQuery('');
                        }}
                        className="mt-4 text-gold hover:text-gold-light transition-colors"
                    >
                        Clear all filters
                    </button>
                </div>
            )}
        </div>
    );
}
