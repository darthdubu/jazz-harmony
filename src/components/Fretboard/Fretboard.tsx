
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { M3_TUNING } from '@/lib/music/notes';

export interface FretPosition {
    string: number;
    fret: number;
    note: string;
    interval: string;
    isRoot: boolean;
}

interface FretboardProps {
    positions?: FretPosition[];
    showNotes?: boolean;
    showIntervals?: boolean;
    numFrets?: number;
}

// Interval Colors from Harmonic Design
const INTERVAL_COLORS: Record<string, string> = {
    'R': '#4A9EFF',   // Root - Deep Sapphire Blue
    '3': '#FFB347',   // Major 3rd - Warm Amber
    'b3': '#5CE1E6',  // Minor 3rd - Seafoam Teal
    '5': '#88B897',   // Perfect 5th - Soft Sage
    'b5': '#D68F8F',  // Dim 5th / Tritone - Muted Red
    '#5': '#CB99C9',  // Aug 5th
    '7': '#B894F5',   // Major 7th - Amethyst Purple
    'b7': '#FF8A80',  // Minor 7th - Coral Pink
    '6': '#FFCC80',   // 6th
    '9': '#FFCC80',   // 9th (Lighter Amber)
    'b9': '#E6EE9C',  // b9
    '11': '#A5D6A7',  // 11th (Lighter Sage)
    '#11': '#A1887F', // #11
    '13': '#80DEEA',  // 13th (Light Teal)
};

const DEFAULT_COLOR = '#E0E0E0';

const STRING_GAUGES = [1, 1.2, 1.4, 1.8, 2.2, 2.6]; // Visual thickness

export function Fretboard({
    positions = [],
    showNotes = true,
    showIntervals = true, // Default to true for jazz learning
    numFrets = 15, // Expanded range
}: FretboardProps) {
    const fretWidth = 60;
    const stringSpacing = 36;
    const nutWidth = 16;
    const boardHeight = stringSpacing * 7;
    const boardWidth = fretWidth * numFrets + nutWidth + 40;

    // Determine what label to show
    const getLabel = (pos: FretPosition): string => {
        if (showIntervals && pos.interval) {
            return pos.interval;
        }
        if (showNotes) {
            return pos.note.replace('#', '♯').replace('b', '♭');
        }
        return '';
    };

    const getColor = (pos: FretPosition): string => {
        if (pos.isRoot) return INTERVAL_COLORS['R'];
        // Try to match interval or fallback
        // Normalize interval string (e.g. "♭3" -> "b3")
        const normalized = pos.interval.replace('♭', 'b').replace('♯', '#');
        return INTERVAL_COLORS[normalized] || DEFAULT_COLOR;
    };

    const containerRef = React.useRef<HTMLDivElement>(null);

    // Auto-scroll to active range
    React.useEffect(() => {
        if (!containerRef.current || positions.length === 0) return;

        // Find min fret (ignore open strings/fret 0)
        const frets = positions.map(p => p.fret).filter(f => f > 0);

        if (frets.length === 0) {
            // If only open strings, scroll to top
            containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            return;
        }

        const minFret = Math.min(...frets);

        // If the voicing is entirely above fret 5, scroll to it
        if (minFret > 4) {
            const targetFret = Math.max(0, minFret - 1.5);
            const scrollPos = nutWidth + (targetFret * fretWidth);
            containerRef.current.scrollTo({ left: scrollPos, behavior: 'smooth' });
        } else {
            // Otherwise reset to 0
            containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }, [positions]);

    return (
        <div
            ref={containerRef}
            className="overflow-x-auto pb-6 scrollbar-none [&::-webkit-scrollbar]:hidden w-full max-w-full"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
            <svg
                viewBox={`0 0 ${boardWidth} ${boardHeight}`}
                className="select-none drop-shadow-2xl w-full h-auto min-w-[600px]"
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    {/* Efficient Gradients - No heavy filters */}
                    <linearGradient id="fretboardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3E2723" />
                        <stop offset="50%" stopColor="#2D1E18" />
                        <stop offset="100%" stopColor="#1A1009" />
                    </linearGradient>

                    <linearGradient id="fretWireGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#E0E0E0" />
                        <stop offset="50%" stopColor="#9E9E9E" />
                        <stop offset="100%" stopColor="#616161" />
                    </linearGradient>
                </defs>

                {/* Main Fretboard Body */}
                <rect
                    x={nutWidth}
                    y={stringSpacing - 10}
                    width={boardWidth - nutWidth - 20}
                    height={stringSpacing * 5 + 20}
                    fill="url(#fretboardGradient)"
                    rx={6}
                    stroke="#1A1009"
                    strokeWidth={2}
                />

                {/* Nut */}
                <rect
                    x={0}
                    y={stringSpacing - 12}
                    width={nutWidth}
                    height={stringSpacing * 5 + 24}
                    fill="#D7CCC8"
                    rx={2}
                    stroke="#5D4037"
                    strokeWidth={1}
                />

                {/* Frets */}
                {[...Array(numFrets + 1)].map((_, fret) => {
                    const x = nutWidth + fret * fretWidth;
                    if (fret === 0) return null;
                    return (
                        <g key={`fret-${fret}`}>
                            <rect
                                x={x - 2}
                                y={stringSpacing - 10}
                                width={4}
                                height={stringSpacing * 5 + 20}
                                fill="url(#fretWireGradient)"
                                rx={1}
                            />
                        </g>
                    );
                })}

                {/* Fret Markers (Inlays) */}
                {[3, 5, 7, 9, 12, 15, 17, 19, 21].filter(f => f <= numFrets).map((fret) => {
                    const cx = nutWidth + (fret - 0.5) * fretWidth;
                    const isOctave = fret === 12;
                    return (
                        <g key={`marker-${fret}`}>
                            {isOctave ? (
                                <>
                                    <circle cx={cx} cy={stringSpacing * 2} r={6} fill="#BCAAA4" opacity={0.6} />
                                    <circle cx={cx} cy={stringSpacing * 5} r={6} fill="#BCAAA4" opacity={0.6} />
                                </>
                            ) : (
                                <circle cx={cx} cy={stringSpacing * 3.5} r={6} fill="#BCAAA4" opacity={0.6} />
                            )}
                        </g>
                    );
                })}

                {/* Strings */}
                {M3_TUNING.map((_, i) => {
                    const y = stringSpacing * (6 - i);
                    return (
                        <line
                            key={`string-${i}`}
                            x1={nutWidth}
                            y1={y}
                            x2={boardWidth - 20}
                            y2={y}
                            stroke="#E0E0E0"
                            strokeWidth={STRING_GAUGES[i]} // Thicker for lower strings
                            opacity={0.9}
                            strokeLinecap="round"
                        />
                    );
                })}

                {/* Voicing Positions (Notes) */}
                {positions.map((pos, index) => {
                    const x = pos.fret === 0 ? nutWidth / 2 : nutWidth + (pos.fret - 0.5) * fretWidth;
                    const y = stringSpacing * (6 - pos.string);
                    const color = getColor(pos);
                    const label = getLabel(pos);

                    return (
                        <g key={`pos-${index}`} style={{ cursor: 'pointer' }}>
                            {/* Optimised Glow: Simple opaque circle behind instead of blur filter */}
                            <motion.circle
                                cx={x}
                                cy={y}
                                r={20}
                                fill={color}
                                opacity={0.2}
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1.1 }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                            />

                            {/* Main Note Circle */}
                            <motion.circle
                                cx={x}
                                cy={y}
                                r={13}
                                fill={color}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                stroke="#FFFFFF"
                                strokeWidth={2}
                            />

                            {/* Label */}
                            {label && (
                                <motion.text
                                    x={x}
                                    y={y + 4.5}
                                    fill={'#000'} // High contrast
                                    fontSize={11}
                                    fontWeight="bold"
                                    fontFamily="Menlo, Monaco, monospace"
                                    textAnchor="middle"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    {label}
                                </motion.text>
                            )}
                        </g>
                    );
                })}

                {/* Fret Numbers below board */}
                {[...Array(numFrets + 1)].map((_, fret) => (
                    fret > 0 && (fret === 3 || fret === 5 || fret === 7 || fret === 9 || fret === 12 || fret === 15) && (
                        <text
                            key={`fret-num-${fret}`}
                            x={nutWidth + (fret - 0.5) * fretWidth}
                            y={stringSpacing * 6 + 25}
                            fill="#888"
                            fontSize={10}
                            fontFamily="sans-serif"
                            textAnchor="middle"
                        >
                            {fret}
                        </text>
                    )
                ))}
            </svg>
        </div>
    );
}

const FretboardComponent = React.memo(Fretboard);
export default FretboardComponent;
