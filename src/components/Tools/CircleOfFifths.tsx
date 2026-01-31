'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface CircleOfFifthsProps {
    activeKey: string;
    onSelectKey: (key: string, type: 'major' | 'minor') => void;
    className?: string;
}

const MAJOR_KEYS = [
    'C', 'G', 'D', 'A', 'E', 'B', 'F#', 'Db', 'Ab', 'Eb', 'Bb', 'F'
];

const MINOR_KEYS = [
    'Am', 'Em', 'Bm', 'F#m', 'C#m', 'G#m', 'D#m', 'Bbm', 'Fm', 'Cm', 'Gm', 'Dm'
];

// Map for display labels (handle enharmonics if preferred, keeping simple for now)
const LABELS: Record<string, string> = {
    'F#': 'F♯', 'Db': 'D♭', 'Ab': 'A♭', 'Eb': 'E♭', 'Bb': 'B♭',
    'F#m': 'F♯m', 'C#m': 'C♯m', 'G#m': 'G♯m', 'D#m': 'D♯m', 'Bbm': 'B♭m'
};

export const CircleOfFifths: React.FC<CircleOfFifthsProps> = ({
    activeKey,
    onSelectKey,
    className = ''
}) => {
    const size = 300;
    const center = size / 2;
    const outerRadius = 140;
    const middleRadius = 90;
    const innerRadius = 40;

    // Helper to calculate segment path
    const getSegmentPath = (index: number, rOuter: number, rInner: number) => {
        const total = 12;
        const startAngle = (index * 360 / total) - 90 - 15; // -15 to center C at top (since 360/12 = 30, half is 15)
        const endAngle = startAngle + 30;

        const x1 = center + rOuter * Math.cos(startAngle * Math.PI / 180);
        const y1 = center + rOuter * Math.sin(startAngle * Math.PI / 180);
        const x2 = center + rOuter * Math.cos(endAngle * Math.PI / 180);
        const y2 = center + rOuter * Math.sin(endAngle * Math.PI / 180);

        const x3 = center + rInner * Math.cos(endAngle * Math.PI / 180);
        const y3 = center + rInner * Math.sin(endAngle * Math.PI / 180);
        const x4 = center + rInner * Math.cos(startAngle * Math.PI / 180);
        const y4 = center + rInner * Math.sin(startAngle * Math.PI / 180);

        return `M ${x1} ${y1} A ${rOuter} ${rOuter} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${rInner} ${rInner} 0 0 0 ${x4} ${y4} Z`;
    };

    const getTextPos = (index: number, radius: number) => {
        const angle = (index * 30) - 90;
        const x = center + radius * Math.cos(angle * Math.PI / 180);
        const y = center + radius * Math.sin(angle * Math.PI / 180);
        return { x, y };
    };

    return (
        <div className={`relative ${className}`}>
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="drop-shadow-xl select-none"
            >
                {/* Outer Ring: Major Keys */}
                {MAJOR_KEYS.map((key, i) => {
                    const isActive = activeKey === key;
                    return (
                        <g
                            key={key}
                            onClick={() => onSelectKey(key, 'major')}
                            className="cursor-pointer group"
                        >
                            <motion.path
                                d={getSegmentPath(i, outerRadius, middleRadius)}
                                fill={isActive ? '#EBCB8B' : '#E5E7EB'} // Gold vs Gray-200
                                stroke="#1F2937"
                                strokeWidth={1}
                                initial={false}
                                animate={{
                                    fill: isActive ? '#EBCB8B' : '#D1D5DB', // Gold vs Gray-300
                                    scale: isActive ? 1.05 : 1
                                }}
                                className="transition-colors hover:fill-gray-100"
                                style={{ transformOrigin: 'center' }}
                            />
                            {/* Text */}
                            <text
                                x={getTextPos(i, (outerRadius + middleRadius) / 2).x}
                                y={getTextPos(i, (outerRadius + middleRadius) / 2).y}
                                textAnchor="middle"
                                dy="0.35em"
                                className={`text-sm font-bold ${isActive ? 'fill-gray-900' : 'fill-gray-800'}`}
                                style={{ pointerEvents: 'none' }}
                            >
                                {LABELS[key] || key}
                            </text>
                        </g>
                    );
                })}

                {/* Inner Ring: Minor Keys */}
                {MINOR_KEYS.map((key, i) => {
                    const isActive = activeKey === key;
                    return (
                        <g
                            key={key}
                            onClick={() => onSelectKey(key, 'minor')}
                            className="cursor-pointer"
                        >
                            <motion.path
                                d={getSegmentPath(i, middleRadius, innerRadius)}
                                fill={isActive ? '#EBCB8B' : '#F3F4F6'} // Gold vs Gray-100
                                stroke="#1F2937"
                                strokeWidth={1}
                                animate={{
                                    fill: isActive ? '#EBCB8B' : '#F3F4F6',
                                    scale: isActive ? 1.05 : 1
                                }}
                                className="transition-colors hover:fill-white"
                                style={{ transformOrigin: 'center' }}
                            />
                            <text
                                x={getTextPos(i, (middleRadius + innerRadius) / 2).x}
                                y={getTextPos(i, (middleRadius + innerRadius) / 2).y}
                                textAnchor="middle"
                                dy="0.35em"
                                className={`text-xs font-semibold ${isActive ? 'fill-gray-900' : 'fill-gray-600'}`}
                                style={{ pointerEvents: 'none' }}
                            >
                                {LABELS[key] || key}
                            </text>
                        </g>
                    );
                })}

                {/* Center Hole branding */}
                <circle cx={center} cy={center} r={innerRadius} fill="#1F2937" />
                <text x={center} y={center} textAnchor="middle" dy="0.3em" fill="#EBCB8B" fontSize="10" fontWeight="bold">M3</text>
            </svg>
        </div>
    );
};

export default CircleOfFifths;
