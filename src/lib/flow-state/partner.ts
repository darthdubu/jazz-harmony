
export type EmotionalState = 'engaged' | 'frustrated' | 'bored' | 'breakthrough';

// Educational facts about music - shown occasionally to keep practice engaging
const MUSIC_FACTS = {
    bossaNova: [
        "Bossa Nova was born in Rio de Janeiro in the late 1950s, blending samba rhythms with cool jazz harmonies.",
        "João Gilberto is considered the father of Bossa Nova. His quiet, intimate singing style revolutionized Brazilian music.",
        "The name 'Bossa Nova' roughly translates to 'new trend' or 'new wave' in Portuguese.",
        "'The Girl from Ipanema' is the second most recorded song in history, after 'Yesterday' by The Beatles.",
        "Tom Jobim studied with German-Brazilian composer Hans-Joachim Koellreutter, who introduced him to impressionist harmony.",
        "The iconic Bossa Nova rhythm pattern was inspired by João Gilberto playing a samba groove on a single guitar.",
        "Stan Getz's 1964 album 'Getz/Gilberto' brought Bossa Nova to worldwide audiences and won Album of the Year.",
        "Nara Leão was known as 'the muse of Bossa Nova' and her apartment was a gathering place for the movement's founders.",
        "Baden Powell merged Bossa Nova with Afro-Brazilian rhythms, creating the 'Afro-Samba' style.",
        "The chord progression ii-V-I is the backbone of both jazz and Bossa Nova harmony.",
        "Roberto Menescal's 'O Barquinho' was written after his boat engine failed at sea.",
        "Newton Mendonça was Tom Jobim's frequent lyricist partner, co-writing 'Desafinado' and 'Samba de Uma Nota Só'.",
        "Bossa Nova lyrics often focus on themes of nature, love, and the beach culture of Rio in the 50s.",
        "Ronaldo Bôscoli was a key journalist and lyricist who helped define the Bossa Nova aesthetic.",
        "The movement started in the Zona Sul (South Zone) of Rio, primarily in Copacabana and Ipanema.",
        "Vinicius de Moraes, a diplomat and poet, wrote the lyrics for many Bossa Nova classics including 'Chega de Saudade'.",
        "Elis Regina, though famously critical of Bossa Nova's 'coolness', recorded arguably the definitive version of 'Águas de Março'.",
        "João Donato added a funky, syncopated piano style that influenced later Bossa Nova and Jazz Fusion.",
        "Sergio Mendes helped popularize Bossa Nova in the US with his group Brasil '66.",
        "Bossa Nova drumming typically involves a rim click pattern on the snare mimicking the tamborim.",
        "The guitar rhythm usually stresses the '2' and the 'and of 3' or '4' in a 4/4 bar.",
        "Luiz Bonfá compsed 'Manhã de Carnaval' for the film 'Black Orpheus', becoming an international jazz standard.",
        "The decline of Bossa Nova coincided with the rise of the politically charged MPB (Música Popular Brasileira) genre.",
        "Sylvia Telles was one of the first professional singers to dedicate her repertoire to Bossa Nova.",
        "Durval Ferreira was a key guitarist and composer who helped bridge Bossa Nova with Sambajazz.",
        "Sambajazz is an instrumental offshoot of Bossa Nova that focuses on high energy and improvisation.",
        "Leny Andrade is nicknamed the 'First Lady of Sambajazz' for her vocal improvisational skills.",
        "Cartola, a samba legend, wasn't Bossa Nova but his harmonic sophistication heavily influenced the genre.",
        "Johnny Alf is often cited as a precursor to Bossa Nova, playing modern harmonies in Rio nightclubs in the early 50s.",
        "Bossa Nova's whisper-singing style was partly a necessity due to poor microphone quality in small clubs.",
        "Oscar Castro-Neves was a central figure in bringing Bossa Nova to Carnegie Hall in 1962.",
        "The 1962 Carnegie Hall concert was chaotic but pivotal in cementing Bossa Nova's status in the US.",
        "Toquinho was Vinicius de Moraes's final major musical partner, bridging Bossa with pop.",
        "Wanda Sá is one of the few female guitarists/singers from the original Bossa Nova era still active.",
        "Marcos Valle started in Bossa Nova but evolved into funk, soul, and disco genres.",
        "Carlos Lyra was known for his more political lyrics and melodic sweetness.",
        "Zimbo Trio is a famous instrumental trio representing the Sambajazz style.",
        "Tamba Trio popularized the 'samba drive' rhythmic feel.",
        "Agostinho dos Santos sang 'Manhã de Carnaval' on the 'Black Orpheus' soundtrack.",
        "Alaíde Costa is known for her unique, whispery vocal timbre and sophisticated phrasing.",
        "Bossa Nova harmony often uses 'slash chords' (e.g., C/Bb) to create tension and movement.",
        "The 11th leads to the 3rd and the 13th leads to the 7th in many dominant voicings.",
        "Bossa rhythms are 2/4 in Samba tradition but often notated as 4/4 in Jazz Real Books.",
        "Claus Ogerman's lush orchestral arrangements became synonymous with Jobim's sound.",
        "Eumir Deodato arranged for Sinatra and Jobim before becoming a funk-jazz star.",
        "Airto Moreira, a percussionist, brought Brazilian rhythms to Miles Davis and Weather Report.",
        "Flora Purim is a jazz fusion singer known for her 6-octave range and work with Chick Corea.",
        "Hermeto Pascoal is known as 'O Bruxo' (The Wizard) for his genius and unconventional instrumentation.",
        "Egberto Gismonti blends Bossa, classical, and indigenous Brazilian music on guitar and piano.",
        "Bossa Nova implies a 'flat' singing style with little vibrato, contrasting with the operatic style of the 50s."
    ],
    jazz: [
        "Bebop emerged in the 1940s as a reaction to the big band 'swing' era, featuring faster tempos and complex harmonies.",
        "The tritone substitution replaces a dominant chord with one a tritone away - V7 becomes ♭II7.",
        "Miles Davis's 'Kind of Blue' is the best-selling jazz album of all time, pioneering modal jazz.",
        "Charlie Parker could play in all 12 keys fluently, a skill that set him apart from other musicians of his era.",
        "The 'Real Book' was originally an illegal bootleg collection of jazz standards, now legitimized by Hal Leonard.",
        "Bill Evans revolutionized jazz piano voicings, often placing the 3rd and 7th in his left hand.",
        "Coltrane changes (from 'Giant Steps') divide the octave into three equal parts using major third intervals.",
        "The ii-V-I progression makes up about 80% of jazz harmony.",
        "Wes Montgomery popularized playing octaves on guitar, creating his signature thick, warm sound.",
        "Django Reinhardt played guitar with only two fingers on his fretting hand after a fire injury.",
        "Louis Armstrong is credited with inventing scat singing when he dropped his lyric sheet during a recording.",
        "Duke Ellington wrote over 1,000 compositions and led his orchestra for 50 years.",
        "Thelonious Monk's percussive style and use of silence were initially criticized before being recognized as genius.",
        "Ella Fitzgerald had a vocal range of three octaves and is known as the 'First Lady of Song'.",
        "Dave Brubeck's 'Take Five' is the biggest selling jazz single, famous for its 5/4 time signature.",
        "Ornette Coleman's 1960 album 'Free Jazz' gave its name to the avant-garde movement.",
        "Herbie Hancock was a child prodigy who played Mozart with the Chicago Symphony at age 11.",
        "Jaco Pastorius removed the frets from his bass to achieve a singing, horn-like tone.",
        "Keith Jarrett's 'The Köln Concert' is the best-selling solo piano album in jazz history.",
        "Art Blakey's Jazz Messengers was a 'finishing school' for young jazz talent like Wayne Shorter and Wynton Marsalis.",
        "Count Basie's rhythm section was known as 'The All-American Rhythm Section' for its impeccable swing.",
        "Benny Goodman led the first racially integrated jazz group to play Carnegie Hall in 1938.",
        "Billie Holiday's 'Strange Fruit' was a protest song against lynchings and a landmark in civil rights.",
        "Fats Waller was kidnapped by Al Capone's gang to play at the mobster's birthday party.",
        "Sonny Rollins took a 3-year sabbatical at the peak of his career to practice on the Williamsburg Bridge.",
        "Chet Baker was known as the 'Prince of Cool' for his trumpet playing and vocals.",
        "Stan Kenton's big band was known as the 'Wall of Sound' before Phil Spector used the term.",
        "Rahsaan Roland Kirk could play three saxophones simultaneously.",
        "Sun Ra claimed to be from Saturn and led the 'Arkestra' in futuristic costumes.",
        "Pat Metheny has won 20 Grammy Awards in 10 different categories.",
        "Chick Corea played in Miles Davis's electric band before forming Return to Forever.",
        "Weather Report was the definitive jazz fusion band of the 70s, featuring Wayne Shorter and Joe Zawinul.",
        "Cannonball Adderley's 'Mercy, Mercy, Mercy' was a crossover pop hit.",
        "Horace Silver is considered a father of 'Hard Bop', blending bebop with R&B and gospel.",
        "Max Roach was a pioneer of bebop drumming, shifting the beat from the bass drum to the ride cymbal.",
        "Charles Mingus was a virtuoso bassist known for his volatility and political activism.",
        "Lester Young was known as 'Pres' (The President) and influenced the Cool Jazz style.",
        "Dexter Gordon was the first major bebop tenor saxophonist.",
        "Bud Powell translated Charlie Parker's language to the piano, creating the modern jazz piano style.",
        "Clifford Brown died at 25 in a car accident, cutting short one of the most promising careers in jazz.",
        "Sarah Vaughan was known as 'The Divine One' for her rich, operatic voice.",
        "Mary Lou Williams was a mentor to Thelonious Monk, Charlie Parker, and Dizzy Gillespie.",
        "Grant Green was a Blue Note guitarist known for his single-note, horn-like lines.",
        "Joe Pass's 'Virtuoso' album set the standard for solo jazz guitar.",
        "Kenny Burrell was Duke Ellington's favorite guitarist.",
        "Freddie Hubbard played on pivotal albums like 'Free Jazz', 'The Blues and the Abstract Truth', and 'Ascension'.",
        "Wayne Shorter is regarded as one of jazz's greatest composers since Ellington.",
        "Lee Morgan was a trumpet prodigy who was tragically shot by his common-law wife at a gig.",
        "McCoy Tyner's modal chords essentially defined the sound of 60s jazz piano.",
        "Elvin Jones's polyrhythmic triplets fueled the intense energy of the Coltrane Quartet."
    ],
    theory: [
        "Major 7th chords contain the interval of a major 7th - just one half step below the octave.",
        "The Mixolydian mode is a major scale with a flatted 7th - perfect for dominant 7th chords.",
        "Voice leading aims to move to the next chord with minimal motion - often just a half or whole step.",
        "Shell voicings use only the 3rd and 7th of a chord - the 'guide tones' that define its quality.",
        "The tritone (6 semitones) is the most unstable interval and creates the tension in dominant 7th chords.",
        "Drop 2 voicings are created by taking the second note from the top and dropping it an octave.",
        "The melodic minor scale is used over minor-major 7th chords and in altered dominant contexts.",
        "Relative major and minor keys share the same notes but start on different scale degrees.",
        "The circle of fifths shows all 12 keys and their relationships - essential for key changes.",
        "Chord extensions (9, 11, 13) add color without changing the fundamental chord quality.",
        "Secondary dominants are V7 chords of diantonic chords other than the tonic (e.g., V7/ii).",
        "A 'Turnaround' is a progression at the end of a section that leads back to the beginning (often I-vi-ii-V).",
        "Mode mixture (borrowed chords) involves using chords from the parallel minor key.",
        "The Lydian Dominant scale is the 4th mode of Melodic Minor and fits strictly over 7#11 chords.",
        "The Altered Scale (Super Locrian) is the 7th mode of Melodic Minor and fits over 7alt chords.",
        "Upper structure triads are triads played over a tritone shell to create complex tensions.",
        "Polychords consist of two chords played simultaneously (e.g., D major over C major).",
        "Quartal harmony builds chords in fourths rather than thirds, popularized by McCoy Tyner.",
        "So What voicings feature a stack of three perfect fourths and a major third on top.",
        "The Barry Harris method adds a 'sixth dimension' to bebop scales using the 6th diminished scale.",
        "Negative Harmony is a concept popularized by Jacob Collier involving inverting the tonal axis.",
        "A picardy third is ending a minor piece with a major chord.",
        "Backdoor dominance is a bVII7 resolving to Imaj7.",
        "Rhythm Changes is a 32-bar form based on 'I Got Rhythm' by George Gershwin.",
        "The Blues form is typically 12 bars with a I-IV-I-V-IV-I progression.",
        "Pentatonic scales have 5 notes and avoid the tritone, making them very consonant.",
        "Inside vs. Outside playing refers to playing diatonically vs. engaging with dissonance/chromaticism.",
        "Enclosure is a bebop technique of surrounding a target note with chromatic neighbors.",
        "Guide tones are usually the 3rd and 7th of a chord, determining its major/minor/dominant quality.",
        "Rootless voicings omit the root, assuming the bassist (or listener's ear) supplies it.",
        "The symmetric diminished scale is alternating whole and half steps (or half and whole).",
        "Whole tone scales have no semitones and sound dreamy or unsettled.",
        "Augmented chords are major triads with a raised 5th (#5).",
        "Diminished 7th chords are stacks of minor thirds and are symmetrical every 3 semitones.",
        "Slash chords indicate a specific bass note (e.g., C/G is C major with G in the bass).",
        "Pedal point is a sustained bass note while harmonies change above it.",
        "Line cliché is a chromatic movement within a static chord (e.g., m, mMaj7, m7, m6).",
        "Coltrane substitution involves moving tonal centers by major thirds.",
        "Targeting is aiming for a specific chord tone on a strong beat.",
        "Sideslipping is playing a motif a half-step away and resolving back.",
        "Sequence is repeating a melodic motif at different pitch levels.",
        "Tensions are non-chord tones (9, 11, 13) that are not 1, 3, 5, or 7.",
        "Avoid notes are scale tones that clash with a chord (e.g., natural 4 on a major chord).",
        "Syncopation stresses the weak beats or off-beats.",
        "Hemiola is a rhythmic feel of 3 against 2.",
        "Swing feel involves delaying the second eighth note of a pair.",
        "Polyrythm is the simultaneous use of two or more conflicting rhythms.",
        "Rubato is expressively speeding up and slowing down the tempo.",
        "Vamp is a repeating musical figure or chord progression.",
        "Head is the main melody of a jazz tune, usually played at the start and end."
    ],
    practice: [
        "Slow practice builds more accurate muscle memory than fast, sloppy repetition.",
        "Try singing the chord tones as you play them - it connects your ear to your fingers.",
        "Practicing in all 12 keys might seem tedious, but it builds real musical fluency.",
        "The best musicians practice with intention - quality over quantity.",
        "Recording yourself is one of the fastest ways to identify areas for improvement.",
        "When learning voicings, start with shells, then add extensions gradually.",
        "Major thirds tuning reduces stretch - the same voicing shapes work across the fretboard.",
        "Transposing songs to different keys is excellent ear training.",
        "Use a metronome, but also practice playing 'ahead' or 'behind' the beat intentionally.",
        "Limit your options: Try soloing using only 3 notes or only on one string.",
        "Learn melodies by ear, not just from tab/sheet music, to strengthen your listening.",
        "Practice transitions between chords, not just the chords themselves.",
        "Isolate the difficult 2 measures and loop them until they flow.",
        "Visualization: Imagine playing the instrument perfectly without touching it.",
        "Rest is part of learning. Your brain consolidates skills while you sleep.",
        "Transcribe solos: Write down what you hear to understand the player's vocabulary.",
        "Don't just practice scales up and down; use intervals and patterns.",
        "Play with backing tracks, but also play solo to ensure your time feel is solid.",
        "Learn the lyrics to jazz standards to understand the phrasing of the melody.",
        "Practice dynamics: Can you play the same phrase whisper quiet and roaring loud?",
        "Record a loop and practice comping (accompaniment) for yourself.",
        "Work on your tone. A simple line played with great tone beats a complex sloppy one.",
        "Challenge yourself to learn one new tune per week.",
        "Analyze a song's harmonic structure (Roman numerals) to memorize it faster.",
        "Practice 'call and response' with recordings.",
        "Focus on rhythm first. The 'wrong' note in the right rhythm sounds better than the right note in wrong rhythm.",
        "Take breaks. 20 minutes of focused work is better than 2 hours of distracted noodling.",
        "Keep a practice journal to track your progress and goals.",
        "Learn the root motion of a progression first, then add 3rds and 7ths.",
        "Practice common cadences (ii-V-I) in all keys as a warm-up.",
        "Use the Circle of Fifths to organize your practice routine.",
        "Noodle creatively at the end of a session as a reward, but keep the core session structured.",
        "If you make a mistake, repeat the phrase correctly 3 times to overwrite the error.",
        "Practice 'stopping' - leaving space in your solos.",
        "Listen to music actively. What is the bass doing? What is the drummer doing?",
        "Sing your solo ideas before you play them.",
        "Learn comping rhythms from listening to pianists and drummers, not just guitarists.",
        "Explore different picks and fingerstyle techniques to vary your timbre.",
        "Ensure your posture is relaxed to prevent injury and tension.",
        "Tune your hearing: Can you identify intervals (major 3rd, perfect 5th) by ear?",
        "Don't rely solely on visual shapes; know the note names you are playing.",
        "Mix up your routine. Do technique one day, repertoire the next.",
        "Teach what you learn. Explaining a concept helps you understand it better.",
        "Practice ending phrases on chord tones.",
        "Emulate horn players to develop better phrasing and breath in your lines.",
        "Learn the 'head' (melody) in multiple octaves.",
        "Improvising is composing in real-time. Make your lines melodic.",
        "Don't fear mistakes. In jazz, a 'wrong' note is just a halftone away from a 'right' one.",
        "Consistency is key. 15 minutes every day is better than 4 hours once a week.",
        "Enjoy the process. You are building a lifelong relationship with music."
    ],
};

export class PracticePartner {
    private static userName: string | null = null;
    private static style: 'concise' | 'balanced' | 'supportive' = 'balanced';
    private static lastFactTime: number = 0;
    private static factCooldownMs: number = 120000; // 2 minutes between facts

    static getGreeting(lastSessionDate: Date | null, lastSessionQuality: 'excellent' | 'challenging' | 'exploratory'): string {
        if (!lastSessionDate) {
            return "Ready to explore some harmony?";
        }

        const daysSince = Math.floor((Date.now() - lastSessionDate.getTime()) / (1000 * 60 * 60 * 24));

        if (daysSince > 7) {
            return "Welcome back! Been a while. Want to review what you were working on?";
        } else if (lastSessionQuality === 'excellent') {
            return "Ready to keep that momentum going?";
        } else if (lastSessionQuality === 'challenging') {
            return "Want to tackle that progression again, or try something new?";
        } else {
            return "What shall we work on today?";
        }
    }

    static getEncouragement(state: EmotionalState, achievement?: string): string | null {
        switch (state) {
            case 'frustrated':
                return "This progression is tricky. Want to try a simpler version first?";
            case 'bored':
                return "You've mastered this! Ready for something new?";
            case 'breakthrough':
                return "Your voice leading just leveled up 📈";
            case 'engaged':
                if (achievement === 'smoothVoiceLeading') return "That voice leading was smooth 🎵";
                if (achievement === 'quickRecognition') return "Nice! You found that quickly";
                return null;
            default:
                return null;
        }
    }

    /**
     * Get a random educational fact - respects cooldown to avoid being annoying
     * Returns null if called too frequently
     */
    static getRandomFact(): { category: string; fact: string } | null {
        const now = Date.now();

        // Respect cooldown period
        if (now - this.lastFactTime < this.factCooldownMs) {
            return null;
        }

        // 30% chance to show a fact even when cooldown has passed
        if (Math.random() > 0.3) {
            return null;
        }

        this.lastFactTime = now;

        const categories = Object.keys(MUSIC_FACTS) as (keyof typeof MUSIC_FACTS)[];
        const category = categories[Math.floor(Math.random() * categories.length)];
        const facts = MUSIC_FACTS[category];
        const fact = facts[Math.floor(Math.random() * facts.length)];

        const categoryLabels: Record<string, string> = {
            bossaNova: '🇧🇷 Bossa Nova',
            jazz: '🎷 Jazz History',
            theory: '🎵 Music Theory',
            practice: '💡 Practice Tip',
        };

        return {
            category: categoryLabels[category] || category,
            fact,
        };
    }

    /**
     * Force get a fact (ignores cooldown) - for initial page loads
     */
    static getInitialFact(): { category: string; fact: string } {
        const categories = Object.keys(MUSIC_FACTS) as (keyof typeof MUSIC_FACTS)[];
        const category = categories[Math.floor(Math.random() * categories.length)];
        const facts = MUSIC_FACTS[category];
        const fact = facts[Math.floor(Math.random() * facts.length)];

        const categoryLabels: Record<string, string> = {
            bossaNova: '🇧🇷 Bossa Nova',
            jazz: '🎷 Jazz History',
            theory: '🎵 Music Theory',
            practice: '💡 Practice Tip',
        };

        this.lastFactTime = Date.now();

        return {
            category: categoryLabels[category] || category,
            fact,
        };
    }
}
