import { Course } from './types';

export const JAZZ_HARMONY_COURSE: Course = {
    id: 'jazz-harmony-fundamentals',
    title: 'Jazz Harmony Masterclass',
    description: 'A comprehensive path from Shell Voicings to Advanced Modern Harmony using Major Thirds Tuning.',
    level: 'Intermediate',
    tags: ['Jazz', 'Bossa Nova', 'Harmony', 'Improvisation', 'M3 Tuning'],
    modules: [
        {
            id: 'grade-1',
            title: 'Grade 1: Foundations & The M3 System',
            description: 'Master the Major Thirds logic and unlock the fretboard with essential shells.',
            order: 1,
            lessons: [
                {
                    id: 'm3-system',
                    title: 'The Major Thirds System',
                    description: 'Understanding the symmetry and logic of M3 tuning.',
                    duration: 15,
                    order: 1,
                    blocks: [
                        {
                            id: 'intro-m3',
                            type: 'markdown',
                            content: `## The Hidden Geometry
In standard tuning, the B-string "bump" breaks patterns. In Major Thirds tuning (E-G#-C-E-G#-C), every open string is exactly 4 semitones apart. 

**This creates two powerful rules:**
1.  **Symmetry**: Every 4 frets, the entire fretboard repeats.
2.  **Octaves**: Moving up 3 strings gives you the exact same note (the perfect octave).`
                        },
                        {
                            id: 'm3-trainer-block',
                            type: 'm3-trainer',
                            content: 'interactive-tool',
                            metadata: { caption: 'Explore the geometry of M3 Tuning' }
                        },
                        {
                            id: 'why-it-matters',
                            type: 'markdown',
                            content: `**Why this matters for Jazz:**
You no longer need to learn 5 different "CAGED" shapes for the same chord. You learn **one** shape, and it works everywhere. This frees your mind to focus on improvisation.`
                        }
                    ]
                },
                {
                    id: 'the-circles',
                    title: 'The Circles: 5ths, 4ths, & 2nds',
                    description: 'Navigating the infinite loops of music.',
                    duration: 35,
                    order: 2,
                    blocks: [
                        {
                            id: 'circles-intro',
                            type: 'markdown',
                            content: `## The Geometric Loops
All of music moves in loops (Cycles). In Major Thirds tuning, these loops form perfect geometric shapes that effectively "unlock" the fretboard.

### Interactive Cycle Explorer
Click the keys on the Circle of Fifths below to see how they map to the M3 Fretboard.
Notice the patterns:
- **Cycle of 4ths**: 1 String Up + 1 Fret Up (Diagonal)
- **Cycle of 5ths**: 1 String Down + 1 Fret Down`
                        },
                        {
                            id: 'circle-interactive',
                            type: 'circle-of-fifths',
                            content: 'interactive-tool',
                            metadata: {
                                caption: 'Interactive Cycle of Fifths'
                            }
                        },
                        {
                            id: 'circle-2nds-intro',
                            type: 'markdown',
                            content: `### 3. The Cycle of 2nds (Whole Tone)
**Rule:** Up 2 Frets (Same String).
Since strings are Major 3rds apart, the Whole Tone scale (2nds) creates a "Hexagon" pattern or simply follows the "Even/Odd" fret rule.`
                        }
                    ]
                },
                {
                    id: 'chromatic-box',
                    title: 'The Chromatic Box',
                    description: 'Playing all 12 notes without stretching.',
                    duration: 20,
                    order: 3,
                    blocks: [
                        {
                            id: 'box-intro',
                            type: 'markdown',
                            content: `## The 4-Fret Box
Because the strings are 4 semitones apart, you can play a full chromatic scale (all 12 notes) within a 4-fret span using one finger per fret.

**Try this:**
Start on Fret 5. Play Frets 5, 6, 7, 8 on the Low E string.
Then move to the next string (G#) and play 5, 6, 7, 8.
You have now played 8 chromatic notes in order.`
                        },
                        {
                            id: 'chromatic-vis',
                            type: 'fretboard',
                            content: '',
                            metadata: {
                                caption: 'The 12-Note Chromatic Box (No Shifts Needed)',
                                positions: [
                                    // String 0 (E2)
                                    { string: 0, fret: 5, note: 'A', interval: '1' },
                                    { string: 0, fret: 6, note: 'A#', interval: 'b2' },
                                    { string: 0, fret: 7, note: 'B', interval: '2' },
                                    { string: 0, fret: 8, note: 'C', interval: 'b3' },
                                    // String 1 (G#2)
                                    { string: 1, fret: 5, note: 'C#', interval: '3' },
                                    { string: 1, fret: 6, note: 'D', interval: '4' },
                                    { string: 1, fret: 7, note: 'D#', interval: 'b5' },
                                    { string: 1, fret: 8, note: 'E', interval: '5' },
                                    // String 2 (C3)
                                    { string: 2, fret: 5, note: 'F', interval: 'b6' },
                                    { string: 2, fret: 6, note: 'F#', interval: '6' },
                                    { string: 2, fret: 7, note: 'G', interval: 'b7' },
                                    { string: 2, fret: 8, note: 'G#', interval: '7' },
                                ]
                            }
                        }
                    ]
                },
                {
                    id: 'universal-shells',
                    title: 'Universal Shell Voicings',
                    description: 'One shape for every chord type.',
                    duration: 25,
                    order: 4,
                    blocks: [
                        {
                            id: 'shell-intro',
                            type: 'markdown',
                            content: `## The "One Shape" Rule
In standard tuning, a Maj7 chord looks different if the root is on the E string vs the A string.
In M3 Tuning, **it is identical**.

Here is the **Universal Major 7 Shell** (Root - 7 - 3):
Notice how "spread" it looks? That's the beauty of M3. It sounds like a piano voicing.`
                        },
                        {
                            id: 'maj7-shell',
                            type: 'fretboard',
                            content: '',
                            metadata: {
                                caption: 'Universal Major 7 Shell (Root on E String)',
                                positions: [
                                    { string: 0, fret: 5, note: 'A', interval: 'R', isRoot: true }, // Root (A)
                                    { string: 1, fret: 6, note: 'G#', interval: '7', isRoot: false }, // Major 7 (G#)
                                    { string: 2, fret: 6, note: 'C#', interval: '3', isRoot: false }, // Major 3 (C#)
                                ]
                            }
                        },
                        {
                            id: 'shell-comparison',
                            type: 'markdown',
                            content: `Now, let's move that **exact same shape** up by one string. The root is now on the G# string (D note). The shape hasn't changed!`
                        },
                        {
                            id: 'maj7-shell-moved',
                            type: 'fretboard',
                            content: '',
                            metadata: {
                                caption: 'Universal Major 7 Shell (Root on G# String)',
                                positions: [
                                    { string: 1, fret: 6, note: 'D', interval: 'R', isRoot: true }, // Root (D) - moved up 1 fret to match visual, actually +1 string/ -1 fret rule applies for same note, but here we just transpose the shape.
                                    { string: 2, fret: 7, note: 'C#', interval: '7', isRoot: false },
                                    { string: 3, fret: 7, note: 'F#', interval: '3', isRoot: false },
                                ]
                            }
                        }
                    ]
                }

            ]
        },
        {
            id: 'grade-2',
            title: 'Grade 2: Extending Harmony & The "Box"',
            description: 'Add sophistication with extensions using the 4-fret box concept.',
            order: 2,
            lessons: [
                {
                    id: 'triads-inversions',
                    title: 'Triads & Inversions',
                    description: 'The geometric basis of all chords.',
                    duration: 40,
                    order: 1,
                    blocks: [
                        {
                            id: 'triad-intro',
                            type: 'markdown',
                            content: `## Triad Geometry
A Major Triad is Root - 3rd - 5th.
In M3 Tuning:
- **Root to 3rd**: Up 1 String (Same Fret)
- **3rd to 5th**: Up 1 String (Same Fret) + 3 Frets? No.
  - Root (E) -> 3rd (G#) = Next String, Same Fret.
  - 3rd (G#) -> 5th (B)?
    - G# to B is 3 semitones.
    - Next string is C (4 semitones higher than G#).
    - So B is **Next String - 1 Fret**.

**The Magic Shape:**
Major Triad looks like a little **Triangle**.
Minor Triad is just flattening the 3rd (Back 1 fret).`
                        },
                        {
                            id: 'triad-fretboard',
                            type: 'fretboard',
                            content: '',
                            metadata: {
                                caption: 'C Major Triad (Inversion 1)',
                                positions: [
                                    { string: 1, fret: 5, note: 'C', interval: 'R', isRoot: true },
                                    { string: 2, fret: 5, note: 'E', interval: '3', isRoot: false },
                                    { string: 3, fret: 4, note: 'G', interval: '5', isRoot: false },
                                ]
                            }
                        }
                    ]
                },
                {
                    id: 'universal-inversions',
                    title: 'Universal Inversions',
                    description: 'Chord shapes are identical on all string sets.',
                    duration: 20,
                    order: 1,
                    blocks: [
                        {
                            id: 'inversion-intro',
                            type: 'markdown',
                            content: `## The M3 Inversion Advantage
In standard tuning, learning inversions means memorizing entirely new shapes for each string set. In Major Thirds tuning, **one shape works everywhere**.

**The Rule:**
Move any chord shape up **3 strings** (at the same fret) and you get the exact same chord, one octave higher. This is because 3 strings = 12 semitones = 1 octave.

This drastically reduces learning time and allows you to think about voice leading instead of finger gymnastics.`
                        },
                        {
                            id: 'inversion-fretboard',
                            type: 'fretboard',
                            content: '',
                            metadata: {
                                caption: 'Cmaj7 Inversion 1 (Strings 0-2) vs Inversion 2 (Strings 3-5) - Same Shape!',
                                positions: [
                                    // Inversion 1 (Low strings)
                                    { string: 0, fret: 8, note: 'C', interval: 'R', isRoot: true },
                                    { string: 1, fret: 7, note: 'B', interval: '7', isRoot: false },
                                    { string: 2, fret: 8, note: 'E', interval: '3', isRoot: false },
                                    // Inversion 2 (High strings - same frets!)
                                    { string: 3, fret: 8, note: 'C', interval: 'R', isRoot: true },
                                    { string: 4, fret: 7, note: 'B', interval: '7', isRoot: false },
                                    { string: 5, fret: 8, note: 'E', interval: '3', isRoot: false },
                                ]
                            }
                        }
                    ]
                },
                {
                    id: 'adding-extensions',
                    title: 'Adding Extensions (9ths & 13ths)',
                    description: 'How to add color tones within the 4-fret box.',
                    duration: 25,
                    order: 2,
                    blocks: [
                        {
                            id: 'ext-intro',
                            type: 'markdown',
                            content: `## Extensions Without Stretching
In standard tuning, adding a 9th often requires uncomfortable stretches. In M3 tuning, extensions fall naturally within the **4-fret chromatic box**.

**Key Insight:** Since every note is reachable within 4 frets, you can add the 9th by simply finding it in the box—usually replacing the root in the voicing.

**Common Extension Substitutions:**
- Replace **Root** with **9th** (adds color, bass player covers root)
- Replace **5th** with **13th** (more interesting than the "boring" 5th)`
                        },
                        {
                            id: 'ext-fretboard',
                            type: 'fretboard',
                            content: '',
                            metadata: {
                                caption: 'Cmaj9 Voicing (3-7-9) within a 4-fret span',
                                positions: [
                                    { string: 0, fret: 9, note: 'E', interval: '3', isRoot: false },
                                    { string: 1, fret: 7, note: 'B', interval: '7', isRoot: false },
                                    { string: 2, fret: 10, note: 'D', interval: '9', isRoot: false },
                                ]
                            }
                        }
                    ]
                },
                {
                    id: 'tune-study-blue-bossa',
                    title: 'Tune Study: Blue Bossa',
                    description: 'Applying shells and extensions to a classic bossa.',
                    duration: 35,
                    order: 3,
                    blocks: [
                        {
                            id: 'blue-bossa-intro',
                            type: 'markdown',
                            content: `## Blue Bossa
**Composer:** Kenny Dorham
**Key:** C minor (modulates briefly to Db major)

This tune is perfect for practicing:
1. Minor 7 and Dominant 7 shell voicings
2. The ii-V-I cadence in both minor and major keys
3. Smooth voice leading between chords

**Practice Goal:** Play through the changes using only shells first, then add 9ths where appropriate.`
                        },
                        {
                            id: 'blue-bossa-player',
                            type: 'progression',
                            content: 'blue-bossa',
                            metadata: {
                                title: 'Blue Bossa (Shells & Extensions)'
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: 'grade-3',
            title: 'Grade 3: M3 Improvisation',
            description: 'Soloing using geometric shapes and symmetrical patterns.',
            order: 3,
            lessons: [
                {
                    id: 'geometric-scales',
                    title: 'Geometric Major Scales',
                    description: 'Learn the "Diamond" and "Box" shapes for the major scale.',
                    duration: 30,
                    order: 1,
                    blocks: [
                        {
                            id: 'geo-intro',
                            type: 'markdown',
                            content: `## Shapes Over Patterns
In M3 tuning, we don't memorize 5 or 7 distinct scale positions like in standard tuning. Instead, we use **geometric shapes** that repeat.

### The "Diamond" Shape
The Major scale manifests as a symmetrical "diamond" shape on any three adjacent strings.
Or, you can visualize it as a **2-1-2-1** pattern (notes per string) in certain contexts.

The most powerful shape is the **4-Fret Box** played across strings.
`
                        },
                        {
                            id: 'geo-fretboard',
                            type: 'fretboard',
                            content: '',
                            metadata: {
                                caption: 'C Major Scale in Position 1 (No stretching required)',
                                positions: [
                                    { string: 0, fret: 4, note: 'G#', interval: '5', isRoot: false },
                                    { string: 0, fret: 5, note: 'A', interval: '6', isRoot: false },
                                    { string: 0, fret: 7, note: 'B', interval: '7', isRoot: false },

                                    { string: 1, fret: 4, note: 'C', interval: 'R', isRoot: true },
                                    { string: 1, fret: 6, note: 'D', interval: '2', isRoot: false },
                                    { string: 1, fret: 7, note: 'E', interval: '3', isRoot: false }, // Fixed interval to E

                                    { string: 2, fret: 5, note: 'F', interval: '4', isRoot: false },
                                    { string: 2, fret: 7, note: 'G', interval: '5', isRoot: false },
                                ]
                            }
                        }
                    ]
                },
                {
                    id: 'target-notes',
                    title: 'Target Notes & Guide Tones',
                    description: 'Landing on the 3rd and 7th to outline changes.',
                    duration: 30,
                    order: 2,
                    blocks: [
                        {
                            id: 'target-intro',
                            type: 'markdown',
                            content: `## The Secret to Melodic Solos
Great improvisers don't just run up and down scales; they aim for **Target Notes**.
The most important target notes are the **3rd** and **7th** of the chord (Guide Tones).

**Why?**
- The **3rd** tells us if the chord is Major or Minor.
- The **7th** tells us if it's Major 7, Dominant 7, or Minor 7.
- The Root and 5th are stable but "boring."

**Exercise:**
Play through a progression playing ONLY the 3rd of every chord. Then play ONLY the 7th. Then mix them.`
                        },
                        {
                            id: 'target-fretboard',
                            type: 'fretboard',
                            content: '',
                            metadata: {
                                caption: 'Targeting the 3rd (E) of Cmaj7 vs the b3 (Eb) of Cm7',
                                positions: [
                                    // Cmaj7 context
                                    { string: 2, fret: 8, note: 'E', interval: '3', isRoot: false },
                                    { string: 2, fret: 4, note: 'E', interval: '3', isRoot: false },

                                    // Cm7 context (visual comparison)
                                    { string: 2, fret: 7, note: 'Eb', interval: 'b3', isRoot: false },
                                    { string: 2, fret: 3, note: 'Eb', interval: 'b3', isRoot: false },
                                ]
                            }
                        }
                    ]
                },
                {
                    id: 'tune-study-autumn-leaves',
                    title: 'Tune Study: Autumn Leaves',
                    description: 'The ultimate guide tone tune.',
                    duration: 40,
                    order: 3,
                    blocks: [
                        {
                            id: 'AL-intro',
                            type: 'markdown',
                            content: `## Autumn Leaves
**Key:** G Minor (relative Major Bb)

This tune naturally guides your ear through the **Circle of Fourths**.
Notice how the 7th of one chord resolves down a half-step to become the 3rd of the next chord? 
- **Cm7** (Bb is 7th) -> **F7** (A is 3rd)
- **F7** (Eb is 7th) -> **Bbmaj7** (D is 3rd)

This "7th to 3rd" resolution is the bread and butter of jazz voice leading.`
                        },
                        {
                            id: 'AL-player',
                            type: 'progression',
                            content: 'autumn-leaves',
                            metadata: {
                                title: 'Autumn Leaves (Practice Targeting 3rds & 7ths)'
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: 'grade-4',
            title: 'Grade 4: Advanced Harmony',
            description: 'Tritone subs and diminished passing chords.',
            order: 4,
            lessons: [
                {
                    id: 'tritone-subs',
                    title: 'Tritone Substitution',
                    description: 'The art of swapping dominant chords.',
                    duration: 30,
                    order: 1,
                    blocks: [
                        {
                            id: 'sub-intro',
                            type: 'markdown',
                            content: `## The Devil's Interval
Any Dominant 7 chord can be replaced by another Dominant 7 chord exactly **3 whole steps (a Tritone)** away.

**Why?**
Because they share the same guide tones (3rd and 7th), just swapped.
- **G7**: B (3rd) and F (7th)
- **Db7**: F (3rd) and Cb/B (7th)

**Usage:**
In a ii-V-I (Dm7 - G7 - Cmaj7), swap G7 for Db7 to get a chromatic bassline:
**Dm7 - Db7 - Cmaj7**.`
                        },
                        {
                            id: 'sub-fretboard',
                            type: 'fretboard',
                            content: '',
                            metadata: {
                                caption: 'G7 vs Db7 Shell Voicings (Notice the shared notes)',
                                positions: [
                                    { string: 1, fret: 4, note: 'G', interval: 'R', isRoot: true },
                                    { string: 2, fret: 4, note: 'B', interval: '3', isRoot: false },
                                    { string: 3, fret: 5, note: 'F', interval: '7', isRoot: false },

                                    // Db7
                                    { string: 1, fret: 10, note: 'Db', interval: 'R', isRoot: true }, // Higher up or different string set
                                    { string: 2, fret: 10, note: 'F', interval: '3', isRoot: false },
                                    { string: 3, fret: 10, note: 'B', interval: 'b7', isRoot: false },
                                ]
                            }
                        }
                    ]
                },
                {
                    id: 'diminished-passing',
                    title: 'Diminished Passing Chords',
                    description: 'Connecting chords with smooth tension.',
                    duration: 25,
                    order: 2,
                    blocks: [
                        {
                            id: 'dim-intro',
                            type: 'markdown',
                            content: `## The Glue Between Chords
Diminished 7th chords are symmetrical (stack of minor 3rds). In M3 tuning, they look like **stairs**.

Use them to connect two chords a whole step apart.
**Example:** Cmaj7 -> Dm7
Insert **C#dim7** in between: Cmaj7 -> C#dim7 -> Dm7.`
                        },
                        {
                            id: 'dim-fretboard',
                            type: 'fretboard',
                            content: '',
                            metadata: {
                                caption: 'C#dim7 Shape (The "Staircase")',
                                positions: [
                                    { string: 1, fret: 5, note: 'C#', interval: 'R', isRoot: true },
                                    { string: 2, fret: 6, note: 'E', interval: 'b3', isRoot: false },
                                    { string: 3, fret: 7, note: 'G', interval: 'b5', isRoot: false },
                                    { string: 4, fret: 8, note: 'Bb', interval: 'bb7', isRoot: false },
                                ]
                            }
                        }
                    ]
                },
                {
                    id: 'tune-study-girl-from-ipanema',
                    title: 'Tune Study: Girl From Ipanema',
                    description: 'Tritone subs in action.',
                    duration: 45,
                    order: 3,
                    blocks: [
                        {
                            id: 'ipanema-player',
                            type: 'progression',
                            content: 'garota-de-ipanema',
                            metadata: {
                                title: 'The Girl From Ipanema (Watch for the Gb7 sub!)'
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: 'grade-5',
            title: 'Grade 5: Modern Concepts',
            description: 'Intervallic runs and spread voicings.',
            order: 5,
            lessons: [
                {
                    id: 'spread-voicings',
                    title: 'Spread Voicings',
                    description: 'Big, pianist sounds impossible in standard.',
                    duration: 45,
                    order: 1,
                    blocks: [
                        {
                            id: 'spread-intro',
                            type: 'markdown',
                            content: `## The M3 "Piano" Advantage
Standard tuning forces us into "close voicings" (notes clustered together). M3 tuning makes **spread voicings** (notes far apart) incredibly easy.

**Concept: Drop-2**
In M3, a "Drop-2" voicing often looks like a simple **7-shape** or a **triangle**.

**Workout (2 Weeks):**
Play a Cmaj9 chord with this huge interval spread:
String 0: Root (C)
String 2: 7th (B)
String 4: 3rd (E)
String 5: 9th (D) `
                        },
                        {
                            id: 'spread-fretboard',
                            type: 'fretboard',
                            content: '',
                            metadata: {
                                caption: 'Cmaj9 Spread Voicing (Big, Open Sound)',
                                positions: [
                                    { string: 0, fret: 8, note: 'C', interval: 'R', isRoot: true },
                                    { string: 2, fret: 8, note: 'E', interval: '3', isRoot: false },
                                    { string: 4, fret: 7, note: 'B', interval: '7', isRoot: false },
                                    { string: 5, fret: 10, note: 'D', interval: '9', isRoot: false },
                                ]
                            }
                        }
                    ]
                },
                {
                    id: 'intervallic-runs',
                    title: 'Intervallic Runs',
                    description: 'Breaking out of scale steps.',
                    duration: 40,
                    order: 2,
                    blocks: [
                        {
                            id: 'runs-intro',
                            type: 'markdown',
                            content: `## The Power of 4ths
Modern players like Julian Lage or Pat Metheny love lines built on 4ths (Quartal Harmony).
In Standard, this is hard.
In M3, **adjacent strings are Major 3rds**, so a 4th is just **Up 1 String + Up 1 Fret**.

**Exercise:**
Play a scale, but play every note as a "Double Stop" with its perfect 4th.
This creates a very modern, "angular" sound.`
                        }
                    ]
                },
                {
                    id: 'tune-study-wave',
                    title: 'Tune Study: Wave',
                    description: 'Advanced Bossa harmony.',
                    duration: 50,
                    order: 3,
                    blocks: [
                        {
                            id: 'wave-player',
                            type: 'progression',
                            content: 'wave',
                            metadata: { title: 'Wave - Jobim Masterpiece' }
                        }
                    ]
                }
            ]
        },
        {
            id: 'grade-6',
            title: 'Grade 6: Mastery & 12-Tone',
            description: '12-Tone Rows and Symmetrical Reharmonization.',
            order: 6,
            lessons: [
                {
                    id: '12-tone-rows',
                    title: '12-Tone Rows & Symmetry',
                    description: 'Using the M3 symmetry for atonal and modern sounds.',
                    duration: 60,
                    order: 1,
                    blocks: [
                        {
                            id: 'row-intro',
                            type: 'markdown',
                            content: `## The "Z" Pattern
Because M3 tuning repeats every 4 frets, you can map out the entire fretboard with a simple visual trick.

**The Drill:**
Play 4 chromatic notes on String 1 (Frets 5,6,7,8).
Shift diagonally UP to String 2 (Frets 6,7,8,9).
Shift diagonally UP to String 3.

You are playing a **Zig-Zag** pattern that covers every note without "shifting gears".
Mastering the Z Pattern means you never get lost.`
                        },
                        {
                            id: 'row-fretboard',
                            type: 'fretboard',
                            content: '',
                            metadata: {
                                caption: 'The "Z" Pattern (Continuous Chromatic Lines)',
                                positions: [
                                    // Start of Z
                                    { string: 1, fret: 5, note: 'S1-1', interval: '1', isRoot: false },
                                    { string: 1, fret: 8, note: 'S1-4', interval: '4', isRoot: false },
                                    // Connects to next string diagonally
                                    { string: 2, fret: 6, note: 'S2-1', interval: '1', isRoot: false },
                                    { string: 2, fret: 9, note: 'S2-4', interval: '4', isRoot: false },
                                ]
                            }
                        }
                    ]
                },
                {
                    id: 'tune-study-giant-steps',
                    title: 'Tune Study: Giant Steps',
                    description: 'The ultimate test of symmetry.',
                    duration: 90,
                    order: 2,
                    blocks: [
                        {
                            id: 'gs-intro',
                            type: 'markdown',
                            content: `## Coltrane's M3 Secret
Coltrane Changes move in Major 3rds (B -> Eb -> G).
In this tuning, that just means **shifting your hand 4 frets**.

**Visualization:**
1. Play a ii-V-I in B.
2. Move everything down 4 frets (or 1 string set). You are now in G.
3. Move down again. You are in Eb.

The "hardest tune in jazz" becomes a simple game of **shifting shapes**.`
                        },
                        {
                            id: 'gs-player',
                            type: 'progression',
                            content: 'giant-steps',
                            metadata: {
                                title: 'Giant Steps (The M3 Benchmark)'
                            }
                        }
                    ]
                }
            ]
        }
    ]
};
