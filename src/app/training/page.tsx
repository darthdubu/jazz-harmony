'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TrainingDashboard() {
    const modules = [
        {
            title: "Diatonic Chords",
            description: "Master the fundamental building blocks of functional harmony. Explore the 7 chords of Major and Minor keys.",
            href: "/training/diatonic",
            icon: "🎹",
            color: "border-gold",
            bg: "hover:bg-gold/10"
        },
        {
            title: "Modes",
            description: "Master the 7 modes of the Major scale. Learn their unique colors and characteristic intervals.",
            href: "/training/modes",
            icon: "⚡️",
            color: "border-gold",
            bg: "hover:bg-gold/10"
        },
        {
            title: "Essential Cadences",
            description: "Practice the most common jazz progressions in all keys. From ii-V-I to Tritone Substitutions.",
            href: "/training/cadences",
            icon: "🔄",
            color: "border-blue-500",
            bg: "hover:bg-blue-500/10"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12 text-center"
            >
                <h1 className="font-display text-4xl text-gold mb-4">Training Center</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Deepen your harmonic vocabulary with focused exercises and drills.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {modules.map((mod, index) => (
                    <Link href={mod.href} key={mod.href}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`
                h-full p-6 md:p-8 rounded-xl bg-surface-dark border ${mod.color}
                transition-all duration-300 group ${mod.bg}
              `}
                        >
                            <div className="text-4xl mb-4">{mod.icon}</div>
                            <h2 className="font-display text-2xl font-bold mb-3 group-hover:text-white transition-colors">
                                {mod.title}
                            </h2>
                            <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                                {mod.description}
                            </p>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
