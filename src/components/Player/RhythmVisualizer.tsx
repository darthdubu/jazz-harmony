import React from 'react';
import { RHYTHM_PATTERNS, RhythmStyle } from '@/lib/audio/player';

interface RhythmVisualizerProps {
    style: string; // We accept the raw style string and map it here, or accept RhythmStyle
}

export default function RhythmVisualizer({ style: rawStyle }: RhythmVisualizerProps) {
    // Map raw style to RhythmStyle
    let style: RhythmStyle = 'swing';
    const s = rawStyle.toLowerCase();

    if (s === 'bossa' || s === 'mpb') style = 'bossa';
    else if (s === 'samba' || s === 'choro' || s === 'frevo') style = 'samba';
    else if (s === 'latin') style = 'latin';
    else if (s === 'baião' || s === 'baiao') style = 'baiao';
    else if (s === 'waltz') style = 'waltz';
    else if (s === 'ballad' || s === 'seresta' || s === 'samba-cancao') style = 'ballad';
    else if (s === 'blues') style = 'swing';

    const pattern = RHYTHM_PATTERNS[style] || RHYTHM_PATTERNS['swing'];
    
    // Assumes 4/4 time for most styles, 3/4 for waltz
    const beatsPerBar = style === 'waltz' ? 3 : 4;
    
    const events = pattern.map(event => {
        const parts = event.time.split(':').map(Number);
        // parts[0] is bar (0)
        // parts[1] is beat (0-3)
        // parts[2] is sixteenth (0-3)
        const beat = parts[1];
        const sixteenth = parts[2];
        
        const totalBeats = beat + (sixteenth / 4);
        const percentage = (totalBeats / beatsPerBar) * 100;
        
        return { ...event, left: percentage };
    });

    return (
        <div className="space-y-1">
            <div className="flex justify-between text-xs text-gray-500 font-mono uppercase">
                <span>Rhythm Pattern</span>
                <span>{style}</span>
            </div>
            <div className="w-full h-16 bg-surface-light rounded-lg relative overflow-hidden border border-gray-700/50">
                {/* Beat Grid lines */}
                {Array.from({ length: beatsPerBar }).map((_, i) => (
                    <div 
                        key={i} 
                        className="absolute top-0 bottom-0 w-px bg-gray-700/30"
                        style={{ left: `${(i / beatsPerBar) * 100}%` }}
                    >
                        <span className="absolute top-1 left-1 text-[8px] text-gray-600">{i + 1}</span>
                    </div>
                ))}
                
                {/* Events */}
                {events.map((event, i) => (
                    <div
                        key={i}
                        className={`absolute rounded-sm border-l border-white/20 ${
                            event.type === 'bass' ? 'bg-indigo-500 h-3 bottom-1' : 
                            event.type === 'chord' ? 'bg-gold h-6 top-2' : 
                            'bg-emerald-500 h-full opacity-40 top-0'
                        }`}
                        style={{
                            left: `${event.left}%`,
                            width: '4%', 
                            opacity: 0.5 + (event.velocity * 0.5)
                        }}
                        title={`${event.type} @ ${event.time}`}
                    />
                ))}
                
                {/* Legend/Label overlay */}
                <div className="absolute bottom-1 right-2 text-[9px] text-gray-500 pointer-events-none">
                    High: Chord • Low: Bass
                </div>
            </div>
        </div>
    );
}
