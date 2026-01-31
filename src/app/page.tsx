'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllStandards } from '@/data/standards';
import { getChordSymbol } from '@/lib/music/chords';
import Fretboard from '@/components/Fretboard/Fretboard';

export default function Home() {
  const standards = getAllStandards();
  const featuredStandards = standards.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-24 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gold/5 rounded-full blur-[80px] md:blur-[120px] -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs md:text-sm font-medium mb-6">
            The Future of Guitar Harmony
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight">
            Stop Memorizing.<br />
            <span className="text-gradient-gold">Start Seeing.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed px-4">
            Standard tuning is a compromise. Major Thirds tuning is a <strong className="text-white">system</strong>.
            Unlock the fretboard with consistent geometry and zero irregularities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center px-4">
            <Link
              href="/curriculum"
              className="px-8 md:px-10 py-4 md:py-5 bg-gold text-background font-bold text-lg rounded-xl hover:bg-gold-light transition-all transform hover:scale-105 shadow-xl shadow-gold/20 text-center"
            >
              Start Learning Free
            </Link>
            <Link
              href="/training"
              className="px-8 md:px-10 py-4 md:py-5 bg-surface-dark border border-white/10 text-white font-bold text-lg rounded-xl hover:bg-surface-light transition-all text-center"
            >
              Try the Tools
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Feature 1: Symmetry */}
      <section>
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-gold font-display text-3xl md:text-4xl font-bold mb-4 md:mb-6">The Power of Symmetry</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              In standard tuning, a chord shape breaks when it crosses the B-string.
              In M3 tuning, <strong>one shape works everywhere</strong>.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-gray-400">Learn a Major 7 shape once. Use it on any string set.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-gray-400">Intervals are visual: A Major 3rd is always "Down 1 String, Back 1 Fret".</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-gray-400">Zero "compensation" for the B-string.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/10 to-purple-500/10 rounded-3xl blur-xl -z-10" />
            <div className="bg-surface-dark border border-white/5 rounded-2xl p-4 md:p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xs md:text-sm font-bold text-gold uppercase tracking-widest">Universal Major 7 Shape</h3>
                <span className="text-[10px] md:text-xs text-gray-500 bg-black/30 px-2 py-1 rounded">Interactive Preview</span>
              </div>
              <Fretboard
                showNotes={true}
                showIntervals={true}
                positions={[
                  // Low set
                  { string: 0, fret: 5, note: 'A', interval: 'R', isRoot: true },
                  { string: 1, fret: 6, note: 'G#', interval: '7', isRoot: false },
                  { string: 2, fret: 6, note: 'C#', interval: '3', isRoot: false },

                  // High set (visual echo)
                  { string: 3, fret: 5, note: 'A', interval: 'R', isRoot: true },
                  { string: 4, fret: 6, note: 'G#', interval: '7', isRoot: false },
                  { string: 5, fret: 6, note: 'C#', interval: '3', isRoot: false },
                ]}
              />
              <p className="text-center text-xs text-gray-500 mt-4">
                Notice: The shape is identical on the low strings vs. the high strings.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature 2: The Box */}
      <section>
        <div className="grid lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="bg-surface-dark border border-white/5 rounded-2xl p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest">The Chromatic Box</h3>
              </div>
              <Fretboard
                showNotes={true}
                showIntervals={false}
                numFrets={8}
                positions={[
                  { string: 0, fret: 5, note: 'A', interval: '1', isRoot: true },
                  { string: 0, fret: 6, note: 'A#', interval: '2', isRoot: false },
                  { string: 0, fret: 7, note: 'B', interval: '3', isRoot: false },
                  { string: 0, fret: 8, note: 'C', interval: '4', isRoot: false },

                  { string: 1, fret: 5, note: 'C#', interval: '5', isRoot: false },
                  { string: 1, fret: 6, note: 'D', interval: '6', isRoot: false },
                  { string: 1, fret: 7, note: 'D#', interval: '7', isRoot: false },
                  { string: 1, fret: 8, note: 'E', interval: '8', isRoot: false },
                ]}
              />
              <p className="text-center text-xs text-gray-500 mt-4">
                4 fingers = 4 frets = 4 semitones. You never have to shift.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-white font-display text-4xl font-bold mb-6">The 4-Fret Chromatic Box</h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Because every string is tuned 4 semitones apart, your hand creates a perfect grid.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              You can play <strong>any scale, any chord, and any melody</strong> without stretching your fingers more than one fret per finger.
              It's ergonomically perfect.
            </p>
            <Link href="/curriculum/jazz-harmony-fundamentals/grade-1/chromatic-box" className="text-gold font-bold hover:underline">
              Try the Box Exercise →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Preview */}
      <section className="py-16 text-center">
        <h2 className="font-display text-4xl font-bold mb-12">Your Path to Mastery</h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <Link href="/curriculum" className="group p-8 bg-surface border border-white/5 rounded-2xl hover:border-gold/30 transition-all hover:-translate-y-1">
            <div className="text-5xl font-bold text-white/10 mb-4 group-hover:text-gold/20 transition-colors">01</div>
            <h3 className="text-xl font-bold text-white mb-2">Foundations</h3>
            <p className="text-sm text-gray-400">Master the geometry. Learn the Universal Shells and the Chromatic Box.</p>
          </Link>
          <Link href="/curriculum" className="group p-8 bg-surface border border-white/5 rounded-2xl hover:border-gold/30 transition-all hover:-translate-y-1">
            <div className="text-5xl font-bold text-white/10 mb-4 group-hover:text-gold/20 transition-colors">02</div>
            <h3 className="text-xl font-bold text-white mb-2">Extension</h3>
            <p className="text-sm text-gray-400">Add 9ths, 11ths, and 13ths without stretching. Dive into Bossa Nova.</p>
          </Link>
          <Link href="/curriculum" className="group p-8 bg-surface border border-white/5 rounded-2xl hover:border-gold/30 transition-all hover:-translate-y-1">
            <div className="text-5xl font-bold text-white/10 mb-4 group-hover:text-gold/20 transition-colors">03</div>
            <h3 className="text-xl font-bold text-white mb-2">Improvisation</h3>
            <p className="text-sm text-gray-400">Solo using geometric shapes. Target notes and guide tones effortlessly.</p>
          </Link>
        </div>
      </section>

      {/* Featured Standards */}
      <section className="py-16 border-t border-white/5">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-3xl font-bold">Start Playing Today</h2>
          <Link href="/standards" className="text-gold hover:text-gold-light transition-colors">
            View all standards →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredStandards.map((standard, index) => (
            <motion.div
              key={standard.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/standards/${standard.id}`}>
                <div className="bg-surface-dark rounded-xl p-6 card-hover h-full group">
                  <div className="flex items-start justify-between mb-4">
                    <span className="tag group-hover:bg-gold group-hover:text-black transition-colors">{standard.style}</span>
                    <span className="text-gold font-mono text-sm">{standard.key}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-1 group-hover:text-gold transition-colors">
                    {standard.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {standard.composer}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
