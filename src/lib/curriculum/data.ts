import { Course } from './types';

export const JAZZ_HARMONY_COURSE: Course = {
    id: 'jazz-harmony-fundamentals',
    title: 'Jazz Harmony Masterclass: Major Thirds Edition',
    description: 'A comprehensive college-level curriculum from Shell Voicings to Advanced Modern Harmony using Major Thirds Tuning.',
    level: 'Intermediate',
    tags: ['Jazz', 'Bossa Nova', 'Harmony', 'Improvisation', 'M3 Tuning', 'Music Theory'],
    modules: [
        {
            id: 'grade-1',
            title: 'Grade 1: Foundations & The M3 System',
            description: 'Master the Major Thirds logic, unlock the fretboard with essential shells, and establish practice routines.',
            order: 1,
            lessons: [
                {
                    id: 'm3-system',
                    title: 'The Major Thirds System',
                    description: 'Understanding the symmetry and logic of M3 tuning.',
                    duration: 45,
                    order: 1,
                    blocks: [
                        {
                            id: 'intro-m3',
                            type: 'markdown',
                            content: `## The Hidden Geometry
In standard tuning, the B-string "bump" breaks patterns. In Major Thirds tuning (E-G#-C-E-G#-C), every open string is exactly 4 semitones apart. 

**This creates two powerful rules:**
1.  **Symmetry**: Every 4 frets, the entire fretboard repeats.
2.  **Octaves**: Moving up 3 strings gives you the exact same note (the perfect octave).

**Why this matters for Jazz:**
You no longer need to learn 5 different "CAGED" shapes for the same chord. You learn **one** shape, and it works everywhere. This frees your mind to focus on improvisation.`
                        },
                        {
                            id: 'm3-trainer-block',
                            type: 'm3-trainer',
                            content: 'interactive-tool',
                            metadata: { caption: 'Explore the geometry of M3 Tuning' }
                        },
                        {
                            id: 'm3-practice-routine',
                            type: 'markdown',
                            content: `## Practice Routine: M3 System Mastery (30 minutes daily)

### Exercise 1: Octave Finding (10 min)
Pick a random note. Find it on all 6 strings within 10 seconds. Verify: strings 0&3, 1&4, 2&5 should match.

### Exercise 2: The Chromatic Ladder (10 min)
Play chromatic scales: String 6 (0-1-2-3), String 5 (1-2-3-4), String 4 (2-3-4-5)... Notice the diagonal pattern.

### Exercise 3: Interval Recognition (10 min)
Practice on adjacent strings: Same fret = Major 3rd, +1 fret = Perfect 4th, +2 frets = Tritone, +3 frets = Perfect 5th.

### Study Tips
- Keep a practice journal documenting new patterns you discover
- Use spaced repetition: review concepts after 1 day, 3 days, and 1 week
- Connect visual patterns to aural recognition by singing intervals`
                        }
                    ]
                },
                {
                    id: 'the-circles',
                    title: 'The Circles: 5ths, 4ths, & 2nds',
                    description: 'Navigating the infinite loops of music.',
                    duration: 50,
                    order: 2,
                    blocks: [
                        {
                            id: 'circles-intro',
                            type: 'markdown',
                            content: `## The Geometric Loops
All of music moves in loops (Cycles). In Major Thirds tuning, these loops form perfect geometric shapes.

### Cycle of Fourths (The Jazz Cycle)
**Pattern**: Up 1 string + Up 1 fret = Perfect 4th
This creates a diagonal line ascending to the right.

**Why it matters**: Jazz harmony moves in fourths—ii-V-I progressions, Autumn Leaves, Rhythm Changes all use this cycle.

### Cycle of Fifths
**Pattern**: Down 1 string + Down 1 fret = Perfect 5th
The reverse diagonal, descending to the right.

### Practical Application: ii-V-I
In C major: Dm7 - G7 - Cmaj7. Roots descend: D → G → C.
On M3 fretboard: Move down 1 string + down 1 fret twice.`
                        },
                        {
                            id: 'circle-interactive',
                            type: 'circle-of-fifths',
                            content: 'interactive-tool',
                            metadata: { caption: 'Interactive Cycle of Fifths' }
                        },
                        {
                            id: 'cycle-practice',
                            type: 'markdown',
                            content: `## Practice Routine: Mastering the Cycles (40 minutes)

### Drill 1: Fourths Cycle (15 min)
Start on C. Move: up 1 string, up 1 fret → F. Continue through all 12 keys. 
Tempo: 60 BPM → goal 120 BPM.

### Drill 2: ii-V-I Root Movement (15 min)
Pick a key. Find ii, V, I roots. Practice D→G→C movement through the cycle.
Sing note names or solfege while playing.

### Drill 3: The Infinite Loop (10 min)
Play cycle of fourths continuously for 5 minutes. Build endurance and visualization.

### Real-World Applications
- **Autumn Leaves**: Entire A section moves in fourths (Cm7-F7-Bbmaj7-Ebmaj7...)
- **Rhythm Changes Bridge**: D7-G7-C7-F7 (cycle of fourths)
- **Coltrane Changes**: M3 motion = same frets on adjacent strings`
                        }
                    ]
                },
                {
                    id: 'chromatic-box',
                    title: 'The Chromatic Box',
                    description: 'Playing all 12 notes without stretching.',
                    duration: 35,
                    order: 3,
                    blocks: [
                        {
                            id: 'box-intro',
                            type: 'markdown',
                            content: `## The 4-Fret Box
The Chromatic Box is a 4-fret by 3-string grid containing all 12 notes. Since 4 frets × 3 strings = 12 positions, every 4-fret box contains exactly one of each note class.

**Why this matters**: In standard tuning, accessing all 12 chromatic notes requires multiple position shifts. In M3, everything fits in one hand position.

### The Box Layout (Frets 5-8)
| String | Fret 5 | Fret 6 | Fret 7 | Fret 8 |
|--------|--------|--------|--------|--------|
| E (0)  | A | A# | B | C |
| G# (1) | C# | D | D# | E |
| C (2)  | F | F# | G | G# |

All 12 notes appear exactly once! The full fretboard is two identical 3-string boxes.`
                        },
                        {
                            id: 'chromatic-vis',
                            type: 'fretboard',
                            content: '',
                            metadata: {
                                caption: 'The 12-Note Chromatic Box (No Shifts Needed)',
                                positions: [
                                    { string: 0, fret: 5, note: 'A', interval: '1' },
                                    { string: 0, fret: 6, note: 'A#', interval: 'b2' },
                                    { string: 0, fret: 7, note: 'B', interval: '2' },
                                    { string: 0, fret: 8, note: 'C', interval: 'b3' },
                                    { string: 1, fret: 5, note: 'C#', interval: '3' },
                                    { string: 1, fret: 6, note: 'D', interval: '4' },
                                    { string: 1, fret: 7, note: 'D#', interval: 'b5' },
                                    { string: 1, fret: 8, note: 'E', interval: '5' },
                                    { string: 2, fret: 5, note: 'F', interval: 'b6' },
                                    { string: 2, fret: 6, note: 'F#', interval: '6' },
                                    { string: 2, fret: 7, note: 'G', interval: 'b7' },
                                    { string: 2, fret: 8, note: 'G#', interval: '7' },
                                ]
                            }
                        },
                        {
                            id: 'box-exercises',
                            type: 'markdown',
                            content: `## Practice Routine: Chromatic Box Mastery (35 minutes)

### Exercise 1: One-Finger-Per-Fret (10 min)
Position at frets 5-8. Index=5, Middle=6, Ring=7, Pinky=8.
Play every note on each string. Focus on clean fretting and consistent tone.

### Exercise 2: Chromatic Patterns (15 min)
**Linear**: String 0 (5-6-7-8) → String 1 (5-6-7-8) → String 2 (5-6-7-8)
**Vertical**: Fret 5 (all strings) → Fret 6 (all strings) → etc.
**Z-Pattern**: E-string 5-8 → A-string 6-9 → D-string 7-10

### Exercise 3: Interval Study (10 min)
Find all occurrences of each interval within your 4-fret box:
- Major 3rds (same fret, adjacent strings)
- Perfect 4ths (+1 fret)
- Perfect 5ths (+3 frets)

**The Box as Foundation**: Shell voicings, extensions, scales, and arpeggios all derive from the Chromatic Box. Master the box, master the fretboard.`
                        }
                    ]
                },
                {
                    id: 'universal-shells',
                    title: 'Universal Shell Voicings',
                    description: 'One shape for every chord type.',
                    duration: 45,
                    order: 4,
                    blocks: [
                        {
                            id: 'shell-intro',
                            type: 'markdown',
                            content: `## The "One Shape" Rule
Shell voicings are three-note chords containing root, 3rd, and 7th—the essential tones defining chord quality.

**Why shells are essential in jazz**:
- Clarity: Fewer notes = clearer harmonic identity
- Voice leading: Easy to connect smoothly
- Space: Leaves room for extensions or improvisation

### The Four Essential Shell Types in M3

**Major 7 Shell (R-7-3)**:
- String 0: Root
- String 1: 7th (down 1 fret)
- String 2: 3rd (same fret)

**Dominant 7 Shell (R-b7-3)**:
- String 0: Root
- String 1: b7 (down 2 frets)
- String 2: 3rd (same fret)

**Minor 7 Shell (R-b7-b3)**:
- String 0: Root
- String 1: b7 (down 2 frets)
- String 2: b3 (down 1 fret)

**m7b5 Shell (R-b7-b5)**:
- String 0: Root
- String 1: b7 (down 2 frets)
- String 2: b5 (down 2 frets)`
                        },
                        {
                            id: 'maj7-shell',
                            type: 'fretboard',
                            content: '',
                            metadata: {
                                caption: 'Universal Major 7 Shell (R-7-3)',
                                positions: [
                                    { string: 0, fret: 5, note: 'A', interval: 'R', isRoot: true },
                                    { string: 1, fret: 4, note: 'G#', interval: '7', isRoot: false },
                                    { string: 2, fret: 5, note: 'C#', interval: '3', isRoot: false },
                                ]
                            }
                        },
                        {
                            id: 'shell-practice',
                            type: 'markdown',
                            content: `## Practice Routine: Shell Mastery (45 minutes)

### Week 1-2: Individual Chord Types (20 min/day)
Choose one chord type. Play through cycle of fourths. Example: Cmaj7 → Fmaj7 → Bbmaj7...
Focus on clean execution and memorizing the shape.

### Week 3-4: Progression Application (30 min/day)
**ii-V-I in Major**:
- Dm7: R on D (String 1, Fret 3)
- G7: R on G (String 2, Fret 3)
- Cmaj7: R on C (String 2, Fret 1)

**ii-V-i in Minor**:
- Dm7b5 → G7 → Cm7

### Week 5-6: Voice Leading (30 min/day)
Focus on smooth transitions. Keep common tones. Move voices by smallest intervals.

### Shell Comparison Quick Reference
| Chord | String 0 | String 1 | String 2 | Character |
|-------|----------|----------|----------|-------------|
| Maj7 | Root | Root-1 | Root+0 | Bright, resolved |
| 7 | Root | Root-2 | Root+0 | Tense, wants resolution |
| m7 | Root | Root-2 | Root-1 | Dark, melancholic |
| m7b5 | Root | Root-2 | Root-2 | Tense, diminished |

### Recommended Listening
- Freddie Green (Count Basie Orchestra)
- Jim Hall "The Bridge"
- Wes Montgomery "The Incredible Jazz Guitar"`
                        }
                    ]
                }
            ]
        },
        {
            id: 'grade-2',
            title: 'Grade 2: Harmony, Extensions & Voice Leading',
            description: 'Add sophistication with extensions, master triad inversions, and develop smooth voice-leading.',
            order: 2,
            lessons: [
                {
                    id: 'triads-inversions',
                    title: 'Triads & Inversions',
                    description: 'The geometric basis of all chords.',
                    duration: 50,
                    order: 1,
                    blocks: [
                        {
                            id: 'triad-theory',
                            type: 'markdown',
                            content: `## Triads: The Building Blocks

A triad consists of Root, 3rd, and 5th.

**Major Triad in M3**:
- Root to 3rd: Up 1 string, same fret (strings are M3 apart)
- 3rd to 5th: Up 1 string, down 1 fret
- Visual: Triangle pointing right

**Minor Triad**: Flat the 3rd (down 1 fret from major)
- Visual: Triangle pointing left

**Inversions**:
- Root Position: Root - 3rd - 5th (low to high)
- First Inversion: 3rd - 5th - Root
- Second Inversion: 5th - Root - 3rd

In M3 tuning, one shape works everywhere—move up 3 strings for octave repetition.`
                        },
                        {
                            id: 'triad-fretboard',
                            type: 'fretboard',
                            content: '',
                            metadata: {
                                caption: 'C Major Triad - Three Inversions',
                                positions: [
                                    { string: 1, fret: 1, note: 'C', interval: 'R', isRoot: true },
                                    { string: 2, fret: 1, note: 'E', interval: '3', isRoot: false },
                                    { string: 3, fret: 0, note: 'G', interval: '5', isRoot: false },
                                    { string: 1, fret: 5, note: 'E', interval: '3', isRoot: false },
                                    { string: 2, fret: 4, note: 'G', interval: '5', isRoot: false },
                                    { string: 3, fret: 5, note: 'C', interval: 'R', isRoot: true },
                                    { string: 1, fret: 8, note: 'G', interval: '5', isRoot: false },
                                    { string: 2, fret: 9, note: 'C', interval: 'R', isRoot: true },
                                    { string: 3, fret: 9, note: 'E', interval: '3', isRoot: false },
                                ]
                            }
                        },
                        {
                            id: 'triad-practice',
                            type: 'markdown',
                            content: `## Practice Routine: Triad Mastery (50 minutes)

### Routine 1: Triad Visualization (15 min)
Pick random notes. Within 5 seconds, visualize major triad root position, then first inversion, then second. Repeat for minor.

### Routine 2: Cycle of Fourths with Inversions (20 min)
Play major triads through cycle, switching inversions each chord:
- C: Root Position
- F: First Inversion  
- Bb: Second Inversion
- Eb: Root Position
(Continue cycle)

### Routine 3: Voice Leading (15 min)
**Progression**: C - Am - Dm - G7
Find smoothest voice leading between chords using common tones.

### Application: Upper Structure Triads
Play triads over different roots:
- Major triad on 5th degree = Maj13 sound
- Minor triad on 2nd degree = Maj9 sound
- Major triad on b3rd = altered dominant`
                        }
                    ]
                },
                {
                    id: 'universal-inversions',
                    title: 'Universal Inversions',
                    description: 'Leveraging M3 symmetry for effortless chord inversions.',
                    duration: 40,
                    order: 2,
                    blocks: [
                        {
                            id: 'inversion-theory',
                            type: 'markdown',
                            content: `## The M3 Inversion Revolution

**Problem with Standard Tuning**: Each string set requires different fingerings.
**M3 Solution**: One shape = All positions.

### Seventh Chord Inversions in M3

**Major 7 Inversions**:
- Root Position: R - 7 - 3
- 1st Inversion: 3 - R - 7
- 2nd Inversion: 7 - 3 - R

**The Octave Principle**: Move up 3 strings = same notes one octave higher.

### The "Staircase" Exercise
Play through all inversions in sequence:
1. Root Position: Cmaj7
2. First Inversion: Cmaj7/E
3. Second Inversion: Cmaj7/G
4. Back to Root Position (next octave)

Notes cascade down like a staircase—smooth voice leading in action.`
                        },
                        {
                            id: 'inversion-fretboard',
                            type: 'fretboard',
                            content: '',
                            metadata: {
                                caption: 'Cmaj7 Inversions on M3 - Same Shape on All String Sets!',
                                positions: [
                                    { string: 0, fret: 8, note: 'C', interval: 'R', isRoot: true },
                                    { string: 1, fret: 7, note: 'B', interval: '7', isRoot: false },
                                    { string: 2, fret: 8, note: 'E', interval: '3', isRoot: false },
                                    { string: 3, fret: 8, note: 'C', interval: 'R', isRoot: true },
                                    { string: 4, fret: 7, note: 'B', interval: '7', isRoot: false },
                                    { string: 5, fret: 8, note: 'E', interval: '3', isRoot: false },
                                ]
                            }
                        },
                        {
                            id: 'inversion-practice',
                            type: 'markdown',
                            content: `## Practice Routine: Inversion Mastery (40 minutes)

### Drill 1: Inversion Recognition (10 min)
Close eyes, play random inversion. Identify by ear which inversion (listen for bass note).

### Drill 2: Smooth Transitions (15 min)
Connect chord qualities through common tones. Example: Cmaj7 - Am7 - Dm7 - G7

### Drill 3: The "Random Key" Challenge (15 min)
Use random key generator. Name ii-V-I, play in root position, then with smooth voice leading.
Goal: Under 30 seconds per key.

### Application: Walking Bass with Chords
Imply bass line and harmony using inversions. Bass moves while upper voices connect smoothly.`
                        }
                    ]
                },
                {
                    id: 'adding-extensions',
                    title: 'Adding Extensions: 9ths, 11ths & 13ths',
                    description: 'Coloring your chords with extensions.',
                    duration: 55,
                    order: 3,
                    blocks: [
                        {
                            id: 'extensions-theory',
                            type: 'markdown',
                            content: `## Chord Extensions: The Jazz Color Palette

Extensions are chord tones above the octave:
- **9th**: Octave + Major 2nd
- **11th**: Octave + Perfect 4th  
- **13th**: Octave + Major 6th

### Available Tensions by Chord Type

**Major 7**: 9✓, #11✓, 13✓
**Dominant 7**: 9✓, b9✓, #9✓, #11✓, 13✓, b13✓
**Minor 7**: 9✓, 11✓, 13✓

### Extensions in M3 Tuning

**Finding the 9th**: Up 2 frets on same string from root
**Finding the 13th**: 1 fret above the 5th
**Finding the #11**: Up 3 frets, up 1 string from root

### Practical Voicing Formulas

**Maj9 (Rootless)**: 3 - 7 - 9
**13th (Rootless)**: 3 - b7 - 13  
**m9**: b3 - b7 - 9

**Drop-2/Drop-3**: Create spread voicings impossible in standard tuning.`
                        },
                        {
                            id: 'ext-fretboard',
                            type: 'fretboard',
                            content: '',
                            metadata: {
                                caption: 'Cmaj9 Voicing (3-7-9) - Rootless Extended Harmony',
                                positions: [
                                    { string: 0, fret: 9, note: 'E', interval: '3', isRoot: false },
                                    { string: 1, fret: 7, note: 'B', interval: '7', isRoot: false },
                                    { string: 2, fret: 10, note: 'D', interval: '9', isRoot: false },
                                ]
                            }
                        },
                        {
                            id: 'extensions-practice',
                            type: 'markdown',
                            content: `## Practice Routine: Extensions Mastery (55 minutes)

### Week 1: The 9th (20 min/day)
Add 9ths to all shell voicings. Comp through blues using only 9th chords. Practice replacing root with 9th.

### Week 2: The 13th (20 min/day)
Incorporate 13ths into dominant chords. Practice ii-V-I with 13ths on V. Create "13th line" through cycle of fourths.

### Week 3: Combined Extensions (25 min/day)
Toggle between C9 and C13. Hear the color difference. Create hybrid voicings.

### Week 4: Altered Extensions (30 min/day)
Play dominant 7 with: b9, #9, #11, b13 individually, then combinations (b9+b13, #9+#11).

### Extension Voice Leading Rules
1. 9ths resolve down to root of next chord
2. 13ths resolve down to 9th or up to root
3. #11 often resolves up to 5th
4. b9 creates strong resolution to tonic`
                        }
                    ]
                },
                {
                    id: 'tune-study-blue-bossa',
                    title: 'Tune Study: Blue Bossa',
                    description: 'Applying shells and extensions to Kenny Dorham\'s classic.',
                    duration: 60,
                    order: 4,
                    blocks: [
                        {
                            id: 'blue-bossa-analysis',
                            type: 'markdown',
                            content: `## Blue Bossa: Complete Analysis

**Composer**: Kenny Dorham (1963)  
**Key**: C Minor (modulates to Db Major in B section)  
**Form**: AABA (16 bars)  
**Style**: Bossa Nova/Jazz Standard

### Why Blue Bossa is Perfect for Learning
- Limited harmonic vocabulary (8 distinct chords)
- Clear 4-bar phrase structure
- Cycle of fourths motion
- Modal mixture (minor + major)

### The Progression

**A Section**: | Cm7 | Cm7 | Fm7 | Fm7 | Dm7b5 | G7 | Cm7 | Cm7 |
- Bars 1-2: Tonic minor (i)
- Bars 3-4: Subdominant minor (iv)
- Bars 5-6: ii-V in minor (iiø7 - V7)
- Bars 7-8: Return to tonic

**B Section**: | Ebmaj7 | Ebmaj7 | Abmaj7 | Abmaj7 | Dm7b5 | G7 | Cm7 | Cm7 |
- Bars 9-10: Relative major (III)
- Bars 11-12: Subdominant of relative major (VI)
- Bars 13-14: ii-V returning to tonic minor
- Bars 15-16: Tonic resolution

### Shell Voicing Application

**Cm7**: C - Bb - Eb  
**Fm7**: F - Eb - Ab  
**Dm7b5**: D - C - Ab  
**G7**: G - F - B  
**Ebmaj7**: Eb - D - G  
**Abmaj7**: Ab - G - C

### Voice Leading Analysis
Dm7b5 → G7: All voices move smoothly downward.

### Extension Opportunities
- Cm7 → Cm9
- Fm7 → Fm9  
- G7 → G13 or altered dominant

### Study Guide
**Week 1**: Learn melody (15 min/day)
**Week 2**: Shell voicings (20 min/day)
**Week 3**: Voice leading (25 min/day)
**Week 4**: Improvisation prep (30 min/day)

### Listening
- Kenny Dorham "Page One" (original)
- Joe Henderson "Page One"
- Pat Metheny (live recordings)`
                        },
                        {
                            id: 'blue-bossa-player',
                            type: 'progression',
                            content: 'blue-bossa',
                            metadata: { title: 'Blue Bossa - Comping with Shells & Extensions' }
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
                    description: 'Learn the "Diamond" and "Box" shapes.',
                    duration: 45,
                    order: 1,
                    blocks: [
                        {
                            id: 'scales-intro',
                            type: 'markdown',
                            content: `## Shapes Over Patterns

In M3 tuning, we use **geometric shapes** that repeat instead of memorizing multiple positions.

### The Major Scale in M3

The major scale (W-W-H-W-W-W-H) creates distinctive patterns:
- **2-1-2-1 pattern**: Notes per string in some positions
- **4-Fret Box**: All scale notes accessible within one hand position

### Scale Degree Functions
- **1 (Root)**: Tonic, home base
- **2**: Neighbor tone, connects to 1 or 3
- **3**: Major quality (or b3 for minor)
- **4**: Suspense, wants to resolve to 3
- **5**: Dominant, strong harmonic anchor
- **6**: Relative minor relationship
- **7**: Leading tone, pulls to root

### Practice Approach
1. Learn the geometric "container"
2. Fill with scale degrees
3. Connect containers across fretboard
4. Apply to chord progressions`
                        },
                        {
                            id: 'scale-fretboard',
                            type: 'fretboard',
                            content: '',
                            metadata: {
                                caption: 'C Major Scale in Position (No stretching)',
                                positions: [
                                    { string: 0, fret: 4, note: 'G#', interval: '5', isRoot: false },
                                    { string: 0, fret: 5, note: 'A', interval: '6', isRoot: false },
                                    { string: 0, fret: 7, note: 'B', interval: '7', isRoot: false },
                                    { string: 1, fret: 4, note: 'C', interval: 'R', isRoot: true },
                                    { string: 1, fret: 6, note: 'D', interval: '2', isRoot: false },
                                    { string: 1, fret: 7, note: 'E', interval: '3', isRoot: false },
                                    { string: 2, fret: 5, note: 'F', interval: '4', isRoot: false },
                                    { string: 2, fret: 7, note: 'G', interval: '5', isRoot: false },
                                ]
                            }
                        },
                        {
                            id: 'scales-practice',
                            type: 'markdown',
                            content: `## Practice Routine: Scale Mastery (45 minutes)

### Exercise 1: Container Visualization (15 min)
For each position, visualize the 4-fret "container" first. Then fill with scale notes.

### Exercise 2: Scale Degree Targeting (15 min)
Play scales but emphasize different degrees:
- Day 1: Emphasize 3rds
- Day 2: Emphasize 7ths
- Day 3: Emphasize chord tones on downbeats

### Exercise 3: Modal Exploration (15 min)
Same pattern, different roots = modes:
- C to C = Ionian (Major)
- D to D = Dorian
- E to E = Phrygian
- F to F = Lydian
- G to G = Mixolydian
- A to A = Aeolian (Natural Minor)
- B to B = Locrian

### Connecting Positions
Practice sliding between 4-fret containers:
- Play C major position 1
- Slide to position 2 (4 frets higher)
- Notice the overlap notes
- Create melodic lines that flow between positions`
                        }
                    ]
                },
                {
                    id: 'target-notes',
                    title: 'Target Notes & Guide Tones',
                    description: 'Landing on 3rd and 7th to outline changes.',
                    duration: 45,
                    order: 2,
                    blocks: [
                        {
                            id: 'target-theory',
                            type: 'markdown',
                            content: `## The Secret to Melodic Solos

Great improvisers aim for **Target Notes**, especially **3rds and 7ths** (Guide Tones).

**Why 3rds and 7ths?**
- **3rd**: Defines major vs minor quality
- **7th**: Defines Maj7 vs Dominant vs Minor 7
- Root and 5th are stable but "boring"

### The Resolution Principle
Guide tones create strong voice leading between chords:
- 7th of one chord → 3rd of next (down half step)
- 3rd of one chord → 7th of next (varies)

### Target Note Exercise
1. Play through progression using ONLY the 3rd of each chord
2. Play through using ONLY the 7th of each chord
3. Mix them: 3rd → 7th → 3rd → 7th
4. Add approach notes (half step below, scale step above)

### The "Guide Tone Line"
Connect 3rds and 7ths through an entire progression. This creates a beautiful, melodic line that clearly outlines the harmony.`
                        },
                        {
                            id: 'target-fretboard',
                            type: 'fretboard',
                            content: '',
                            metadata: {
                                caption: 'Targeting 3rd (E) of Cmaj7 vs b3 (Eb) of Cm7',
                                positions: [
                                    { string: 2, fret: 8, note: 'E', interval: '3', isRoot: false },
                                    { string: 2, fret: 4, note: 'E', interval: '3', isRoot: false },
                                    { string: 2, fret: 7, note: 'Eb', interval: 'b3', isRoot: false },
                                    { string: 2, fret: 3, note: 'Eb', interval: 'b3', isRoot: false },
                                ]
                            }
                        },
                        {
                            id: 'target-practice',
                            type: 'markdown',
                            content: `## Practice Routine: Target Note Mastery (45 minutes)

### Exercise 1: 3rd Only Soloing (15 min)
Over a blues or ii-V-I, play only the 3rd of each chord. Force yourself to be melodic with rhythmic variation.

### Exercise 2: 7th Only Soloing (15 min)
Same exercise with 7ths only. Notice the descending half-step resolution between ii and V.

### Exercise 3: 3rd-7th Connection (15 min)
Alternate between 3rd and 7th of each chord. Create a "guide tone line" through the progression.

### Advanced: Approach Notes
Add chromatic approach notes to your targets:
- Half step below (diatonic or chromatic)
- Scale step above
- Enclosure (above AND below)

Example: Targeting E (3rd of Cmaj7)
- Approach from D# (chromatic below)
- Approach from F (scale step above)
- Enclosure: F → D# → E`
                        }
                    ]
                },
                {
                    id: 'tune-study-autumn-leaves',
                    title: 'Tune Study: Autumn Leaves',
                    description: 'The ultimate guide tone tune.',
                    duration: 50,
                    order: 3,
                    blocks: [
                        {
                            id: 'autumn-leaves-analysis',
                            type: 'markdown',
                            content: `## Autumn Leaves: The Guide Tone Masterclass

**Key**: G Minor (relative Major Bb)  
**Form**: AABA  
**Signature**: Entirely cycle of fourths motion

### The Magic of Autumn Leaves

This tune perfectly demonstrates 7th-to-3rd resolution:
- Cm7 (Bb is 7th) → F7 (A is 3rd): Down half step!
- F7 (Eb is 7th) → Bbmaj7 (D is 3rd): Down half step!
- This pattern continues throughout

### The Progression

**A Section**:
| Cm7 | F7 | Bbmaj7 | Ebmaj7 | Aø7 | D7 | Gm7 | Gm7 |

Root movement: C → F → Bb → Eb → A → D → G (cycle of fourths!)

**B Section**:
| Gm7 | C7 | Fm7 | Bb7 | Ebmaj7 | Aø7 | D7 | Gm7 |

More cycle of fourths motion with brief tonicizations.

### Guide Tone Practice

1. Play only 3rds through the tune
2. Play only 7ths through the tune  
3. Connect them: 7th of Cm7 (Bb) → 3rd of F7 (A) → 7th of F7 (Eb) → 3rd of Bbmaj7 (D)...

### Scales for Improvising
- Minor chords: Dorian mode
- Dominant chords: Mixolydian (or altered for D7)
- Major chords: Ionian (Major)

### Listening
- **Cannonball Adderley**: "Somethin' Else" (classic version)
- **Bill Evans**: Any solo piano recording
- **Pat Metheny**: Live trio versions`
                        },
                        {
                            id: 'autumn-leaves-player',
                            type: 'progression',
                            content: 'autumn-leaves',
                            metadata: { title: 'Autumn Leaves (Practice Targeting 3rds & 7ths)' }
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
                    duration: 45,
                    order: 1,
                    blocks: [
                        {
                            id: 'tritone-theory',
                            type: 'markdown',
                            content: `## The Devil's Interval

Any Dominant 7 chord can be replaced by another Dominant 7 chord exactly **6 semitones (a Tritone)** away.

**Why it works**: They share the same guide tones (3rd and 7th), just swapped.
- **G7**: B (3rd) and F (7th)
- **Db7**: F (3rd) and Cb/B (7th)

**The substitution**:
In ii-V-I (Dm7 - G7 - Cmaj7), swap G7 for Db7:
**Dm7 - Db7 - Cmaj7**

This creates a chromatic bassline: D → Db → C

### When to Use Tritone Subs
- Create chromatic bass movement
- Add tension before resolution
- Extend dominant harmony
- Reharmonize standard progressions

### Voice Leading with Tritone Subs
The 3rd and 7th remain common tones or move by half step, ensuring smooth voice leading even with radical harmonic substitution.`
                        },
                        {
                            id: 'tritone-fretboard',
                            type: 'fretboard',
                            content: '',
                            metadata: {
                                caption: 'G7 vs Db7 Shell Voicings (Shared Guide Tones)',
                                positions: [
                                    { string: 1, fret: 4, note: 'G', interval: 'R', isRoot: true },
                                    { string: 2, fret: 4, note: 'B', interval: '3', isRoot: false },
                                    { string: 3, fret: 5, note: 'F', interval: '7', isRoot: false },
                                    { string: 1, fret: 10, note: 'Db', interval: 'R', isRoot: true },
                                    { string: 2, fret: 10, note: 'F', interval: '3', isRoot: false },
                                    { string: 3, fret: 10, note: 'B', interval: 'b7', isRoot: false },
                                ]
                            }
                        },
                        {
                            id: 'tritone-practice',
                            type: 'markdown',
                            content: `## Practice Routine: Tritone Substitution (45 minutes)

### Exercise 1: Identify Tritone Partners (10 min)
For each dominant 7 chord, name its tritone sub:
- G7 → Db7
- D7 → Ab7
- C7 → Gb7
- Continue through all 12

### Exercise 2: ii-SubV-I Practice (20 min)
Play through ii-V-I progressions, substituting the V:
- Dm7 - G7 - Cmaj7 → Dm7 - Db7 - Cmaj7
- Practice in all keys through cycle of fourths

### Exercise 3: Apply to Tunes (15 min)
Take a standard (Autumn Leaves, Blue Bossa) and:
1. Identify all dominant chords
2. Try tritone subs on each
3. Decide which work musically
4. Create your reharmonization

### Common Applications
- Blues: Substitute bar 4 dominant, bar 8 dominant
- Rhythm Changes: Bridge substitutions
- Standards: Any V7 chord is a candidate`
                        }
                    ]
                },
                {
                    id: 'diminished-passing',
                    title: 'Diminished Passing Chords',
                    description: 'Connecting chords with smooth tension.',
                    duration: 40,
                    order: 2,
                    blocks: [
                        {
                            id: 'diminished-theory',
                            type: 'markdown',
                            content: `## The Glue Between Chords

Diminished 7th chords are symmetrical (stack of minor 3rds). In M3 tuning, they look like **stairs**.

**Use diminished chords to connect two chords a whole step apart**:
Example: Cmaj7 → Dm7
Insert C#dim7: Cmaj7 - C#dim7 - Dm7

### Types of Diminished Chords

**Half-Diminished (m7b5)**: 1 - b3 - b5 - b7
- Used as ii chord in minor keys
- More stable than full diminished

**Fully Diminished (dim7)**: 1 - b3 - b5 - bb7 (6)
- Highly unstable, needs resolution
- Symmetrical—any note can be the root
- Creates smooth chromatic voice leading

### Diminished as Dominant Substitute
Any diminished chord can function as a dominant 9b9 chord:
- C#dim7 = A7b9 without the root
- Edim7 = C7b9 without the root

### Common Progressions with Diminished
- I - #Idim7 - ii (C - C#dim7 - Dm7)
- I - #Idim7 - I6 (C - C#dim7 - C6)
- bVII - Idim7 - I (Bb - Bdim7 - C)`
                        },
                        {
                            id: 'diminished-fretboard',
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
                        },
                        {
                            id: 'diminished-practice',
                            type: 'markdown',
                            content: `## Practice Routine: Diminished Mastery (40 minutes)

### Exercise 1: The Staircase (10 min)
Play diminished 7 arpeggios up and down. Feel the symmetrical nature.
Practice starting from each note (enharmonic spellings).

### Exercise 2: Passing Chord Application (15 min)
Insert diminished chords between I-ii, IV-V, V-vi movements.
Example progressions:
- C - C#dim7 - Dm7 - D#dim7 - Em7
- C - C#dim7 - C6/9

### Exercise 3: Dominant Substitution (15 min)
For any dominant 7 chord, try substituting the diminished chord built on its 3rd.
- G7 → Bdim7 (functions as G7b9)
- C7 → Edim7 (functions as C7b9)

### Diminished Scale Study
Practice the diminished scale (alternating whole and half steps) over diminished chords. Two scales cover all diminished chords:
- Starting with half step
- Starting with whole step`
                        }
                    ]
                },
                {
                    id: 'tune-study-girl-from-ipanema',
                    title: 'Tune Study: Girl From Ipanema',
                    description: 'Advanced harmony in bossa nova.',
                    duration: 50,
                    order: 3,
                    blocks: [
                        {
                            id: 'ipanema-analysis',
                            type: 'markdown',
                            content: `## The Girl From Ipanema: Jobim's Masterpiece

**Composer**: Antonio Carlos Jobim  
**Key**: F Major  
**Form**: AABA  
**Difficulty**: Intermediate-Advanced

### Harmonic Characteristics
- Extended sequences of ii-V progressions
- Chromatic bass movement
- Modal mixture (borrowing from parallel minor)
- Sophisticated voice leading

### Key Sections

**A Section**: Long chain of ii-Vs moving through cycle of fourths
**B Section**: Modulation to relative minor (D minor)
**Bridge**: Return to tonic with chromatic approach

### Advanced Concepts in Ipanema

**Tritone Substitutions**: The Gb7 in the A section is a tritone sub!

**Extended Harmony**: maj9, m9, 13th chords throughout

**Voice Leading**: Bass descends chromatically while upper voices create smooth contrary motion

### M3 Tuning Advantages
The extended sequences of ii-V-I become simple diagonal patterns on the fretboard. The voice leading practically plays itself.

### Study Approach
1. Learn melody and lyrics
2. Master shell voicings for all changes
3. Add extensions (9ths, 13ths)
4. Analyze the voice leading
5. Try reharmonizations with tritone subs

### Listening
- Stan Getz & João Gilberto (original)
- Frank Sinatra (vocal version)
- Pat Metheny (instrumental guitar)`
                        },
                        {
                            id: 'ipanema-player',
                            type: 'progression',
                            content: 'garota-de-ipanema',
                            metadata: { title: 'The Girl From Ipanema (Watch for the Gb7 sub!)' }
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
                    duration: 50,
                    order: 1,
                    blocks: [
                        {
                            id: 'spread-theory',
                            type: 'markdown',
                            content: `## The M3 "Piano" Advantage

Standard tuning forces "close voicings" (notes clustered). M3 makes **spread voicings** (notes far apart) incredibly easy.

### Drop-2 Voicings in M3
In M3 tuning, Drop-2 voicings often look like simple **7-shapes** or **triangles**.

### Extended Spread Voicings
String-skipping creates huge intervallic sounds:
- String 0: Root
- String 2: 7th
- String 4: 3rd
- String 5: 9th

This creates a Cmaj9 with massive spread impossible in standard tuning.

### Quartal Voicings
Stacks of fourths create modern, open sounds:
- Perfect 4ths = Up 1 string + Up 1 fret
- Easy to visualize and voice lead
- Used by McCoy Tyner, John Coltrane's pianist

### So What Chord
The famous Miles Davis voicing (D-E-A-D):
- In M3: Perfect fourth stack, easy to visualize
- Movable to any key with same shape`
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
                        },
                        {
                            id: 'spread-practice',
                            type: 'markdown',
                            content: `## Practice Routine: Spread Voicings (50 minutes)

### Exercise 1: Drop-2 Exploration (15 min)
Take shell voicings and experiment with drop-2 variations.
Move the 2nd highest note down an octave.

### Exercise 2: String Skipping (20 min)
Practice voicings that skip strings:
- Root on string 0, 3rd on string 2, 7th on string 4
- Experiment with different string combinations
- Notice the open, modern sound

### Exercise 3: Quartal Comping (15 min)
Comp through a blues or standard using only perfect fourth stacks.
Voice lead between quartal voicings.

### Modern Applications
- Comping for soloists (leave space)
- Modal jazz (Miles Davis, John Coltrane)
- Contemporary jazz guitar (Julian Lage, Ben Monder)`
                        }
                    ]
                },
                {
                    id: 'intervallic-runs',
                    title: 'Intervallic Runs',
                    description: 'Breaking out of scale steps.',
                    duration: 45,
                    order: 2,
                    blocks: [
                        {
                            id: 'intervallic-theory',
                            type: 'markdown',
                            content: `## The Power of 4ths

Modern players (Julian Lage, Pat Metheny) love lines built on 4ths (Quartal Harmony).

**In Standard**: Difficult, requires wide stretches
**In M3**: Adjacent strings are Major 3rds, so 4th = **Up 1 String + Up 1 Fret**

### Intervallic Patterns

**Quartal Runs**: Play scale with added 4th on every note
**Quintal Runs**: Perfect 5th intervals (Up 1 string + Up 3 frets)
**Tritone Patterns**: Augmented 4th intervals (+2 frets, up 1 string)

### Breaking Verticality
Traditional scales move stepwise. Intervallic runs:
- Create "angular" modern sound
- Outline harmony differently
- Force new fingerings and positions

### Double Stops
Play two notes simultaneously while soloing:
- 4ths: Modern, quartal sound
- 3rds: Traditional, sweet sound
- 6ths: Horn-like, bebop sound`
                        },
                        {
                            id: 'intervallic-practice',
                            type: 'markdown',
                            content: `## Practice Routine: Intervallic Mastery (45 minutes)

### Exercise 1: Quartal Scales (15 min)
Play major scale but add perfect 4th to each note as double stop.
C scale: C+F, D+G, E+A, F+B, G+C, A+D, B+E, C+F

### Exercise 2: Interval Sequences (15 min)
Play scales in intervals:
- 3rds: C-E, D-F, E-G, F-A...
- 4ths: C-F, D-G, E-A, F-B...
- 5ths: C-G, D-A, E-B, F-C...
- 6ths: C-A, D-B, E-C, F-D...

### Exercise 3: Skip-Step Patterns (15 min)
Create patterns that skip then step:
- Skip up a 3rd, step down: C-E-D-F-E-G...
- Skip up a 4th, step down: C-F-D-G-E-A...

### Application
Use intervallic runs to:
- Create tension before resolution
- Outline harmony in fresh ways
- Develop modern jazz vocabulary`
                        }
                    ]
                },
                {
                    id: 'tune-study-wave',
                    title: 'Tune Study: Wave',
                    description: 'Advanced Bossa harmony with spread voicings.',
                    duration: 55,
                    order: 3,
                    blocks: [
                        {
                            id: 'wave-analysis',
                            type: 'markdown',
                            content: `## Wave: Jobim's Harmonic Masterpiece

**Composer**: Antonio Carlos Jobim  
**Key**: D Major (modulates to Db Major)  
**Difficulty**: Advanced

### Harmonic Features
- Extended use of major 7 and major 9 chords
- Descending bass lines with upper structure triads
- Sophisticated voice leading between distant key centers
- Use of sus4 chords for suspension and resolution

### The A Section
Opens with extended Dmaj7 harmony, then descends through:
- Dmaj7 → D7 → Gmaj7 → Gm6
Classic descending bass with chord quality changes

### The Bridge
Modulates to Db Major using common-tone modulation.
The Eb note in D major becomes the root of Eb7 in Db major.

### M3 Tuning Applications
The descending bass lines align perfectly with M3's diagonal cycle of fourths pattern. Spread voicings make the lush harmonies sound full and piano-like.

### Study Approach
1. Master the melody (sing it!)
2. Learn shells for all changes
3. Add 9ths and 13ths
4. Practice the modulation smoothy
5. Use spread voicings for the held chords

### Listening
- Antonio Carlos Jobim (original)
- Frank Sinatra (classic vocal)
- Stevie Wonder (instrumental version)`
                        },
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
                    description: 'Using M3 symmetry for atonal and modern sounds.',
                    duration: 60,
                    order: 1,
                    blocks: [
                        {
                            id: '12-tone-theory',
                            type: 'markdown',
                            content: `## The "Z" Pattern and 12-Tone Technique

Because M3 tuning repeats every 4 frets, the entire fretboard maps with simple visual patterns.

### The Z Pattern
Play 4 chromatic notes, then shift diagonally:
- String 1: Frets 5, 6, 7, 8
- String 2: Frets 6, 7, 8, 9
- String 3: Frets 7, 8, 9, 10

This **zig-zag** covers every note without shifting hand position.

### 12-Tone Row Technique
A 12-tone row uses all 12 chromatic notes before repeating any.

**Original Row**: Play the row as written
**Retrograde**: Row backwards
**Inversion**: Intervals reversed (up becomes down)
**Retrograde Inversion**: Backwards and inverted

### M3 and 12-Tone
The symmetry of M3 makes 12-tone rows visually organized:
- Rows align with the Z pattern
- Transformations are geometrically obvious
- Performance of complex music becomes accessible

### Modern Applications
- Atonal jazz (Late Coltrane)
- Contemporary classical
- Free improvisation
- Film scoring (tension, mystery)`
                        },
                        {
                            id: '12-tone-fretboard',
                            type: 'fretboard',
                            content: '',
                            metadata: {
                                caption: 'The "Z" Pattern (Continuous Chromatic Lines)',
                                positions: [
                                    { string: 1, fret: 5, note: 'S1-1', interval: '1', isRoot: false },
                                    { string: 1, fret: 8, note: 'S1-4', interval: '4', isRoot: false },
                                    { string: 2, fret: 6, note: 'S2-1', interval: '1', isRoot: false },
                                    { string: 2, fret: 9, note: 'S2-4', interval: '4', isRoot: false },
                                ]
                            }
                        },
                        {
                            id: '12-tone-practice',
                            type: 'markdown',
                            content: `## Practice Routine: 12-Tone and Symmetry (60 minutes)

### Exercise 1: The Z Pattern Mastery (15 min)
Practice continuous chromatic scales using the Z pattern.
Play all 12 notes without repeating hand position.

### Exercise 2: Create a 12-Tone Row (15 min)
Compose your own 12-tone row:
- Include all 12 chromatic notes
- Avoid obvious tonal references
- Practice playing it forward and backward (retrograde)

### Exercise 3: Symmetrical Scales (15 min)
Practice symmetrical scales that divide the octave equally:
- Whole Tone (2 equal parts)
- Diminished (4 equal parts)
- Augmented (3 equal parts)

### Exercise 4: Atonal Improvisation (15 min)
Improvise using only your 12-tone row:
- Create motifs from fragments
- Use retrograde and inversion
- Develop variation techniques

### Advanced: Serial Technique
Apply 12-tone principles to rhythm and dynamics:
- Create rhythmic rows
- Serial dynamics (p, mp, mf, f patterns)
- Integrate with pitch rows`
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
                            id: 'giant-steps-analysis',
                            type: 'markdown',
                            content: `## Giant Steps: Coltrane's M3 Secret

Coltrane Changes divide the octave into Major 3rds: B - Eb - G
In M3 tuning, this means **shifting your hand 4 frets** or moving to adjacent strings.

### The Coltrane Matrix
Three key centers a major 3rd apart:
- B Major
- Eb Major  
- G Major

Each key center gets a ii-V-I progression.

### Why It's "Hard"
In standard tuning, the rapid key changes require constant position shifts.

### Why It's Easy in M3
The key centers are **geometrically adjacent**:
- Play ii-V-I in B
- Shift down 4 frets → You're in G
- Shift down 4 frets → You're in Eb

The shapes stay identical; only the fretboard position changes.

### The Progression
| Bmaj7 | D7 | Gmaj7 | Bb7 | Ebmaj7 | Am7 | D7 | Gmaj7 |
| Gm7 | C7 | F#m7 | B7 | Fm7 | Bb7 | Ebmaj7 | | etc.

### Practice Strategy
1. Master ii-V-I in individual keys first
2. Practice the transition between key centers
3. Use the M3 geometric shift: 4 frets = new key center
4. Target chord tones on downbeats

### M3 Visualization
- Bmaj7 shell → move down 4 frets → Gmaj7 shell
- Same shape, different position
- The "hardest tune" becomes a simple shape-shifting game

### Listening
- John Coltrane (original recording)
- Pat Metheny (has recorded multiple versions)
- Any modern jazz musician's rite of passage`
                        },
                        {
                            id: 'giant-steps-player',
                            type: 'progression',
                            content: 'giant-steps',
                            metadata: { title: 'Giant Steps (The M3 Benchmark)' }
                        }
                    ]
                }
            ]
        }
    ]
};
