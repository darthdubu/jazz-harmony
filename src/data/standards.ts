
import { Progression, ChordChange } from '../lib/music/progressions';
import { ChordType } from '../lib/music/chords';

function c(root: string, type: ChordType, bar: number, beat: number = 1, duration: number = 4): ChordChange {
    return { root, type, bar, beat, duration };
}

export const STANDARDS: Progression[] = [
    // --- NARA LEÃO REPERTOIRE (BOSSA/MPB) ---
    {
        id: 'o-barquinho', title: 'O Barquinho', composer: 'Roberto Menescal', artist: 'Nara Leão', style: 'bossa', key: 'C', tempo: 130, timeSignature: [4, 4], bars: 16, changes: [
            c('C', 'maj7', 1), c('C', 'maj7', 2), c('D', 'min7', 3), c('G', '7', 4),
            c('C', 'maj7', 5), c('C', 'maj7', 6), c('F', 'maj7', 7), c('F', 'min6', 8),
            c('C', 'maj7', 9), c('A', '7', 10), c('D', 'min7', 11), c('G', '7', 12),
            c('E', 'min7', 13), c('A', '7', 14), c('D', 'min7', 15), c('G', '7', 16),
        ], tags: ['bossa', 'nara-leao']
    },
    {
        id: 'insensatez', title: 'Insensatez', composer: 'Jobim', artist: 'Nara Leão', style: 'bossa', key: 'D', tempo: 110, timeSignature: [4, 4], bars: 16, changes: [
            c('D', 'min7', 1), c('E', 'min7b5', 2), c('A', '7b9', 3), c('D', 'min7', 4),
            c('G', 'min7', 5), c('C', '7', 6), c('F', 'maj7', 7), c('Bb', 'maj7', 8),
            c('E', 'min7b5', 9), c('A', '7b9', 10), c('D', 'min7', 11), c('D', 'min7', 12),
            c('E', 'min7b5', 13), c('A', '7b9', 14), c('D', 'min7', 15), c('D', 'min7', 16),
        ], tags: ['bossa', 'jobim', 'nara-leao']
    },
    {
        id: 'corcovado', title: 'Corcovado', composer: 'Jobim', artist: 'Nara Leão', style: 'bossa', key: 'C', tempo: 110, timeSignature: [4, 4], bars: 16, changes: [
            c('A', 'min7', 1), c('Ab', 'dim7', 2), c('G', 'min7', 3), c('C', '7', 4),
            c('F', 'maj7', 5), c('F', 'min6', 6), c('E', 'min7', 7), c('A', '7b9', 8),
            c('D', 'min7', 9), c('G', '7', 10), c('C', 'maj7', 11), c('E', '7b9', 12),
            c('A', 'min7', 13), c('D', 'min7', 14), c('G', '7', 15), c('C', 'maj7', 16),
        ], tags: ['bossa', 'jobim', 'nara-leao']
    },
    {
        id: 'desafinado', title: 'Desafinado', composer: 'Jobim', artist: 'Nara Leão', style: 'bossa', key: 'F', tempo: 140, timeSignature: [4, 4], bars: 16, changes: [
            c('F', 'maj7', 1), c('G', '7', 2), c('G', 'min7', 3), c('C', '7', 4),
            c('A', 'min7', 5), c('Ab', 'dim7', 6), c('G', 'min7', 7), c('C', '7', 8),
            c('F', 'maj7', 9), c('F#', 'dim7', 10), c('G', 'min7', 11), c('C', '7', 12),
            c('A', 'min7b5', 13), c('D', '7b9', 14), c('G', 'min7', 15), c('C', '7', 16),
        ], tags: ['bossa', 'jobim', 'nara-leao']
    },
    {
        id: 'samba-de-uma-nota-so', title: 'Samba de Uma Nota Só', composer: 'Jobim', artist: 'Nara Leão', style: 'bossa', key: 'Bb', tempo: 140, timeSignature: [4, 4], bars: 8, changes: [
            c('D', 'min7', 1), c('Db', '7', 2), c('C', 'min7', 3), c('B', 'dim7', 4),
            c('Bb', 'maj7', 5), c('Bb', 'maj7', 6), c('E', 'min7b5', 7), c('A', '7b9', 8),
        ], tags: ['bossa', 'jobim', 'nara-leao']
    },
    {
        id: 'opiniao', title: 'Opinião', composer: 'Zé Keti', artist: 'Nara Leão', style: 'bossa', key: 'G', tempo: 120, timeSignature: [4, 4], bars: 8, changes: [
            c('G', 'maj7', 1), c('E', 'min7', 2), c('A', 'min7', 3), c('D', '7', 4),
            c('G', 'maj7', 5), c('E', 'min7', 6), c('A', 'min7', 7), c('D', '7', 8),
        ], tags: ['bossa', 'mpb', 'nara-leao']
    },
    {
        id: 'diz-que-fui-por-ai', title: 'Diz Que Fui Por Aí', composer: 'Zé Keti', artist: 'Nara Leão', style: 'bossa', key: 'A', tempo: 100, timeSignature: [4, 4], bars: 8, changes: [
            c('A', 'maj7', 1), c('F#', 'min7', 2), c('B', 'min7', 3), c('E', '7', 4),
            c('A', 'maj7', 5), c('D', 'maj7', 6), c('E', '7', 7), c('A', 'maj7', 8),
        ], tags: ['bossa', 'samba', 'nara-leao']
    },
    {
        id: 'a-banda', title: 'A Banda', composer: 'Chico Buarque', artist: 'Nara Leão', style: 'bossa', key: 'C', tempo: 110, timeSignature: [2, 4], bars: 8, changes: [
            c('C', 'maj7', 1), c('G', '7', 2), c('C', 'maj7', 3), c('F', 'maj7', 4),
            c('C', 'maj7', 5), c('A', 'min7', 6), c('D', 'min7', 7), c('G', '7', 8),
        ], tags: ['mpb', 'nara-leao']
    },
    {
        id: 'com-acucar-com-afeto', title: 'Com Açúcar, Com Afeto', composer: 'Chico Buarque', artist: 'Nara Leão', style: 'bossa', key: 'F', tempo: 90, timeSignature: [4, 4], bars: 8, changes: [
            c('F', 'maj7', 1), c('D', 'min7', 2), c('G', 'min7', 3), c('C', '7', 4),
            c('F', 'maj7', 5), c('Bb', 'maj7', 6), c('C', '7', 7), c('F', 'maj7', 8),
        ], tags: ['mpb', 'nara-leao']
    },
    {
        id: 'minha-namorada', title: 'Minha Namorada', composer: 'Carlos Lyra', artist: 'Nara Leão', style: 'bossa', key: 'C', tempo: 100, timeSignature: [4, 4], bars: 8, changes: [
            c('C', 'maj7', 1), c('A', 'min7', 2), c('D', 'min7', 3), c('G', '7', 4),
            c('E', 'min7', 5), c('A', '7b9', 6), c('D', 'min7', 7), c('G', '7', 8),
        ], tags: ['bossa', 'nara-leao']
    },
    {
        id: 'outra-vez', title: 'Outra Vez', composer: 'Jobim', artist: 'Nara Leão', style: 'bossa', key: 'C', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [
            c('C', 'maj7', 1), c('B', 'min7b5', 2, 1, 2), c('E', '7b9', 2, 3, 2),
            c('A', 'min7', 3), c('Ab', 'dim7', 4), c('G', 'min7', 5), c('C', '7', 6),
            c('F', 'maj7', 7), c('B', '7', 8), c('E', 'maj7', 9), c('E', 'min7', 10),
            c('A', '7', 11), c('D', 'maj7', 12), c('D', 'min7', 13), c('G', '7', 14),
            c('C', 'maj7', 15), c('G', '7', 16),
            // Repeat / B Section logic simplified for 32 bars standard
            c('C', 'maj7', 17), c('B', 'min7b5', 18, 1, 2), c('E', '7b9', 18, 3, 2),
            c('A', 'min7', 19), c('Ab', 'dim7', 20), c('G', 'min7', 21), c('C', '7', 22),
            c('F', 'maj7', 23), c('B', '7', 24), c('E', 'maj7', 25), c('A', '7', 26),
            c('D', 'min7', 27), c('G', '7', 28), c('C', 'maj7', 29), c('C', 'maj7', 30),
            c('D', 'min7', 31), c('G', '7', 32),
        ], tags: ['bossa', 'jobim', 'nara-leao']
    },
    {
        id: 'favela', title: 'Favela', composer: 'Jobim/Vinicius', artist: 'Nara Leão', style: 'bossa', key: 'G', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [
            c('G', 'maj7', 1), c('Bb', 'dim7', 2), c('A', 'min7', 3), c('D', '7', 4),
            c('G', 'maj7', 5), c('E', 'min7', 6), c('A', 'min7', 7), c('D', '7', 8),
            c('B', 'min7', 9), c('E', '7', 10), c('A', 'min7', 11), c('D', '7', 12),
            c('G', 'maj7', 13), c('E', 'min7', 14), c('A', 'min7', 15), c('D', '7', 16),
            // Bridge
            c('F', 'min7', 17), c('Bb', '7', 18), c('Eb', 'maj7', 19), c('Eb', 'maj7', 20),
            c('Eb', 'min7', 21), c('Ab', '7', 22), c('Db', 'maj7', 23), c('D', '7', 24),
            // A3
            c('G', 'maj7', 25), c('E', 'min7', 26), c('A', 'min7', 27), c('D', '7', 28),
            c('B', 'min7', 29), c('E', '7', 30), c('A', 'min7', 31), c('D', '7', 32),
        ], tags: ['bossa', 'nara-leao']
    },
    {
        id: 'mariana', title: 'Mariana', composer: 'Nara Leão', artist: 'Nara Leão', style: 'bossa', key: 'E', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [
            c('E', 'maj7', 1), c('C#', 'min7', 2), c('F#', 'min7', 3), c('B', '7', 4),
            c('E', 'maj7', 5), c('C#', 'min7', 6), c('F#', 'min7', 7), c('B', '7', 8),
            c('G#', 'min7', 9), c('C#', '7', 10), c('F#', 'min7', 11), c('B', '7', 12),
            c('E', 'maj7', 13), c('C#', 'min7', 14), c('F#', 'min7', 15), c('B', '7', 16),
            // Bridge
            c('A', 'maj7', 17), c('Am', '7', 18), c('G#', 'min7', 19), c('C#', '7', 20),
            c('F#', '7', 21), c('F#', '7', 22), c('B', '7', 23), c('B', '7', 24),
            // A3
            c('E', 'maj7', 25), c('C#', 'min7', 26), c('F#', 'min7', 27), c('B', '7', 28),
            c('E', 'maj7', 29), c('C#', 'min7', 30), c('F#', 'min7', 31), c('B', '7', 32),
        ], tags: ['bossa', 'nara-leao']
    },
    {
        id: 'voce', title: 'Você', composer: 'Menescal/Bôscoli', artist: 'Nara Leão', style: 'bossa', key: 'A', tempo: 100, timeSignature: [4, 4], bars: 32, changes: [
            c('A', 'maj7', 1), c('B', 'min7', 2), c('C#', 'min7', 3), c('C', 'dim7', 4),
            c('B', 'min7', 5), c('E', '7', 6), c('A', 'maj7', 7), c('E', '7', 8),
            c('A', 'maj7', 9), c('B', 'min7', 10), c('C#', 'min7', 11), c('C', 'dim7', 12),
            c('B', 'min7', 13), c('E', '7', 14), c('A', 'maj7', 15), c('A', '7', 16),
            // Bridge
            c('D', 'maj7', 17), c('D', 'min7', 18), c('C#', 'min7', 19), c('F#', '7', 20),
            c('B', '7', 21), c('B', '7', 22), c('E', '7', 23), c('E', '7', 24),
            // A3
            c('A', 'maj7', 25), c('B', 'min7', 26), c('C#', 'min7', 27), c('C', 'dim7', 28),
            c('B', 'min7', 29), c('E', '7', 30), c('A', 'maj7', 31), c('E', '7', 32),
        ], tags: ['bossa', 'nara-leao']
    },
    {
        id: 'o-morro-nao-tem-vez', title: 'O Morro Não Tem Vez', composer: 'Jobim/Vinicius', artist: 'Nara Leão', style: 'bossa', key: 'C#', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [
            c('C#', 'min7', 1), c('C#', 'min7', 2), c('D', 'maj7', 3), c('D', 'maj7', 4),
            c('C#', 'min7', 5), c('C#', 'min7', 6), c('D', 'maj7', 7), c('G#', '7', 8),
            c('C#', 'min7', 9), c('F#', 'min7', 10), c('B', '7', 11), c('E', 'maj7', 12),
            c('A', 'maj7', 13), c('D', 'maj7', 14), c('G#', '7sus4', 15), c('G#', '7', 16),
            // Repeat
            c('C#', 'min7', 17), c('C#', 'min7', 18), c('D', 'maj7', 19), c('D', 'maj7', 20),
            c('C#', 'min7', 21), c('C#', 'min7', 22), c('D', 'maj7', 23), c('G#', '7', 24),
            c('C#', 'min7', 25), c('F#', 'min7', 26), c('B', '7', 27), c('E', 'maj7', 28),
            c('A', 'maj7', 29), c('D', 'maj7', 30), c('G#', '7sus4', 31), c('C#', 'min7', 32),
        ], tags: ['bossa', 'nara-leao']
    },
    {
        id: 'feio-nao-e-bonito', title: 'Feio Não É Bonito', composer: 'Carlos Lyra', artist: 'Nara Leão', style: 'bossa', key: 'F', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [
            c('F', 'maj7', 1), c('Ab', 'dim7', 2), c('G', 'min7', 3), c('C', '7', 4),
            c('F', 'maj7', 5), c('D', '7', 6), c('G', 'min7', 7), c('C', '7', 8),
            c('F', 'maj7', 9), c('Ab', 'dim7', 10), c('G', 'min7', 11), c('C', '7', 12),
            c('F', 'maj7', 13), c('F', '7', 14), c('Bb', 'maj7', 15), c('B', 'dim7', 16),
            c('F', 'maj7', 17), c('D', '7', 18), c('G', '7', 19), c('C', '7', 20),
            c('F', 'maj7', 21), c('D', '7', 22), c('G', 'min7', 23), c('C', '7', 24),
            c('F', 'maj7', 25), c('Ab', 'dim7', 26), c('G', 'min7', 27), c('C', '7', 28),
            c('F', 'maj7', 29), c('D', '7', 30), c('G', 'min7', 31), c('C', '7', 32),
        ], tags: ['bossa', 'nara-leao']
    },
    {
        id: 'marcha-da-quarta-feira-de-cinzas', title: 'Marcha da Quarta-Feira de Cinzas', composer: 'Carlos Lyra', artist: 'Nara Leão', style: 'bossa', key: 'Eb', tempo: 120, timeSignature: [4, 4], bars: 40, changes: [
            c('Eb', 'min7', 1), c('F', 'min7b5', 2), c('Bb', '7', 3), c('Eb', 'min7', 4),
            c('C', 'min7b5', 5), c('F', '7', 6), c('Bb', 'min7', 7), c('Eb', '7', 8),
            c('Ab', 'maj7', 9), c('Ab', 'min7', 10), c('Eb', 'maj7', 11), c('C', '7', 12),
            c('F', '7', 13), c('F', '7', 14), c('Bb', '7', 15), c('Bb', '7', 16),
            // Repeat
            c('Eb', 'min7', 17), c('F', 'min7b5', 18), c('Bb', '7', 19), c('Eb', 'min7', 20),
            c('C', 'min7b5', 21), c('F', '7', 22), c('Bb', 'min7', 23), c('Eb', '7', 24),
            c('Ab', 'maj7', 25), c('Ab', 'min7', 26), c('Eb', 'maj7', 27), c('C', '7', 28),
            c('F', '7', 29), c('Bb', '7', 30), c('Eb', 'maj7', 31), c('Eb', 'maj7', 32),
            // Coda-ish
            c('Ab', 'maj7', 33), c('Ab', 'min7', 34), c('Eb', 'maj7', 35), c('C', '7', 36),
            c('F', '7', 37), c('Bb', '7', 38), c('Eb', 'maj7', 39), c('Eb', 'maj7', 40),
        ], tags: ['bossa', 'mpb', 'nara-leao']
    },
    {
        id: 'carcara', title: 'Carcará', composer: 'João do Vale', artist: 'Nara Leão', style: 'bossa', key: 'E', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [
            c('E', 'min7', 1), c('E', 'min7', 2), c('D', '7', 3), c('D', '7', 4),
            c('E', 'min7', 5), c('E', 'min7', 6), c('D', '7', 7), c('D', '7', 8),
            c('C', 'maj7', 9), c('C', 'maj7', 10), c('B', '7', 11), c('B', '7', 12),
            c('E', 'min7', 13), c('E', 'min7', 14), c('D', '7', 15), c('D', '7', 16),
            c('C', 'maj7', 17), c('C', 'maj7', 18), c('B', '7', 19), c('B', '7', 20),
            c('E', 'min7', 21), c('E', 'min7', 22), c('D', '7', 23), c('D', '7', 24),
            c('C', 'maj7', 25), c('C', 'maj7', 26), c('B', '7', 27), c('B', '7', 28),
            c('E', 'min7', 29), c('E', 'min7', 30), c('E', 'min7', 31), c('E', 'min7', 32),
        ], tags: ['mpb', 'nara-leao']
    },
    {
        id: 'luz-negra', title: 'Luz Negra', composer: 'Nelson Cavaquinho', artist: 'Nara Leão', style: 'bossa', key: 'G', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [
            c('G', 'min7', 1), c('G', 'min7', 2), c('C', 'min7', 3), c('F', '7', 4),
            c('Bb', 'maj7', 5), c('Eb', 'maj7', 6), c('A', 'min7b5', 7), c('D', '7', 8),
            c('G', 'min7', 9), c('G', 'min7', 10), c('C', 'min7', 11), c('F', '7', 12),
            c('Bb', 'maj7', 13), c('Eb', 'maj7', 14), c('A', 'min7b5', 15), c('D', '7', 16),
            // Bridge
            c('G', 'maj7', 17), c('E', 'min7', 18), c('A', 'min7', 19), c('D', '7', 20),
            c('G', 'maj7', 21), c('E', 'min7', 22), c('A', 'min7', 23), c('D', '7', 24),
            // A3
            c('G', 'min7', 25), c('G', 'min7', 26), c('C', 'min7', 27), c('F', '7', 28),
            c('Bb', 'maj7', 29), c('Eb', 'maj7', 30), c('A', 'min7b5', 31), c('D', '7', 32),
        ], tags: ['samba', 'mpb', 'nara-leao']
    },
    {
        id: 'quem-te-viu-quem-te-ve', title: 'Quem Te Viu, Quem Te Vê', composer: 'Chico Buarque', artist: 'Nara Leão', style: 'bossa', key: 'C', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [
            // Verse ("Você era a mais bonita...")
            c('Bb', 'maj7', 1), c('Bb', 'maj7', 2), c('A', 'min7', 3), c('A', 'min7', 4),
            c('Ab', 'maj7', 5), c('Ab', 'maj7', 6), c('G', 'min7', 7), c('C', '7', 8),
            c('F', 'maj7', 9), c('F', 'min6', 10), c('E', 'min7', 11), c('A', '7', 12),
            c('D', '7', 13), c('D', '7', 14), c('G', '7', 15), c('G', '7', 16),

            // Chorus ("Quem te viu, quem te vê...")
            c('C', 'maj7', 17), c('B', '7', 18), c('E', 'min7', 19), c('A', '7', 20),
            c('D', 'min7', 21), c('G', '7', 22), c('G', 'min7', 23), c('C', '7', 24),
            c('F', 'maj7', 25), c('F', 'min6', 26), c('E', 'min7', 27), c('Eb', 'dim7', 28),
            c('D', 'min7', 29), c('G', '7', 30), c('C', '6', 31), c('G', '7', 32),
        ], tags: ['mpb', 'nara-leao']
    },

    // --- BOSSA NOVA CLASSICS ---
    {
        id: 'chega-de-saudade', title: 'Chega de Saudade', composer: 'Jobim', style: 'bossa', key: 'D', tempo: 140, timeSignature: [4, 4], bars: 16, changes: [
            c('D', 'maj7', 1), c('E', 'min7', 2), c('A', '7', 3), c('D', 'maj7', 4),
            c('B', 'min7', 5), c('E', '7', 6), c('A', 'maj7', 7), c('A', '7', 8),
            c('D', 'maj7', 9), c('B', 'min7', 10), c('E', 'min7', 11), c('A', '7', 12),
            c('D', 'maj7', 13), c('F#', 'min7', 14), c('B', '7', 15), c('E', 'min7', 16),
        ], tags: ['bossa', 'jobim', 'classic']
    },
    {
        id: 'garota-de-ipanema', title: 'Garota de Ipanema', composer: 'Jobim', style: 'bossa', key: 'F', tempo: 130, timeSignature: [4, 4], bars: 16, changes: [
            c('F', 'maj7', 1), c('F', 'maj7', 2), c('G', '7', 3), c('G', '7', 4),
            c('G', 'min7', 5), c('Gb', '7', 6), c('F', 'maj7', 7), c('Gb', 'maj7', 8),
            c('F', 'maj7', 9), c('F', 'maj7', 10), c('G', '7', 11), c('G', '7', 12),
            c('G', 'min7', 13), c('C', '7', 14), c('F', 'maj7', 15), c('F', 'maj7', 16),
        ], tags: ['bossa', 'jobim', 'classic']
    },
    {
        id: 'aguas-de-marco', title: 'Águas de Março', composer: 'Jobim', style: 'bossa', key: 'Bb', tempo: 135, timeSignature: [4, 4], bars: 8, changes: [
            c('Bb', 'maj7', 1), c('Bb', 'maj7', 2), c('Bb', 'maj7', 3), c('Bb', 'maj7', 4),
            c('Bb', 'maj7', 5), c('Bb', 'maj7', 6), c('F', '7', 7), c('Bb', 'maj7', 8),
        ], tags: ['bossa', 'jobim', 'masterpiece']
    },
    {
        id: 'wave', title: 'Wave', composer: 'Jobim', style: 'bossa', key: 'D', tempo: 120, timeSignature: [4, 4], bars: 16, changes: [
            c('D', 'maj7', 1), c('D', 'maj7', 2), c('Bb', 'dim7', 3), c('Bb', 'dim7', 4),
            c('A', 'min7', 5), c('D', '7', 6), c('G', 'maj7', 7), c('G', 'min7', 8),
            c('F#', 'min7', 9), c('B', '7', 10), c('E', 'maj7', 11), c('Eb', 'min7b5', 12),
            c('D', 'maj7', 13), c('E', 'min7', 14), c('A', '7', 15), c('D', 'maj7', 16),
        ], tags: ['bossa', 'jobim']
    },
    {
        id: 'agua-de-beber', title: 'Água de Beber', composer: 'Jobim', style: 'bossa', key: 'A', tempo: 130, timeSignature: [4, 4], bars: 8, changes: [
            c('A', 'min7', 1), c('B', 'min7b5', 2), c('E', '7b9', 3), c('A', 'min7', 4),
            c('D', 'min7', 5), c('G', '7', 6), c('C', 'maj7', 7), c('E', '7', 8),
        ], tags: ['bossa', 'jobim']
    },
    {
        id: 'meditacao', title: 'Meditação', composer: 'Jobim', style: 'bossa', key: 'C', tempo: 110, timeSignature: [4, 4], bars: 8, changes: [
            c('C', 'maj7', 1), c('B', '7', 2), c('E', 'min7', 3), c('A', '7b9', 4),
            c('D', 'min7', 5), c('G', '7', 6), c('C', 'maj7', 7), c('C', 'maj7', 8),
        ], tags: ['bossa', 'jobim']
    },
    {
        id: 'dindi', title: 'Dindi', composer: 'Jobim', style: 'bossa', key: 'A', tempo: 100, timeSignature: [4, 4], bars: 32, changes: [
            c('A', 'maj7', 1), c('B', 'min7', 2), c('C#', 'min7', 3), c('C', 'dim7', 4),
            c('B', 'min7', 5), c('E', '7', 6), c('A', 'maj7', 7), c('E', '7', 8),
            c('A', 'maj7', 9), c('B', 'min7', 10), c('C#', 'min7', 11), c('C', 'dim7', 12),
            c('B', 'min7', 13), c('E', '7', 14), c('A', 'maj7', 15), c('A', '7', 16),
            c('D', 'maj7', 17), c('D', 'min7', 18), c('C#', 'min7', 19), c('F#', '7', 20),
            c('B', '7', 21), c('B', '7', 22), c('E', '7', 23), c('E', '7', 24),
            c('A', 'maj7', 25), c('B', 'min7', 26), c('C#', 'min7', 27), c('C', 'dim7', 28),
            c('B', 'min7', 29), c('E', '7', 30), c('A', 'maj7', 31), c('A', 'maj7', 32),
        ], tags: ['bossa', 'jobim']
    },
    {
        id: 'triste', title: 'Triste', composer: 'Jobim', style: 'bossa', key: 'Bb', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [
            c('Bb', 'maj7', 1), c('Bb', 'maj7', 2), c('Gb', 'maj7', 3), c('B', '7', 4),
            c('Bb', 'maj7', 5), c('Bb', 'maj7', 6), c('F', 'min7', 7), c('Bb', '7', 8),
            c('Eb', 'maj7', 9), c('Ab', '7', 10), c('Bb', 'maj7', 11), c('Bb', 'maj7', 12),
            c('D', 'min7', 13), c('D', 'min7', 14), c('C#', 'dim7', 15), c('F#', '7', 16),
            c('C', 'min7', 17), c('C', 'min7', 18), c('F', '7', 19), c('F', '7', 20),
            c('C', 'min7', 21), c('F', '7', 22), c('Bb', 'maj7', 23), c('G', '7', 24),
            c('C', 'min7', 25), c('F', '7', 26), c('Bb', 'maj7', 27), c('G', '7', 28),
            c('C', 'min7', 29), c('F', '7', 30), c('Bb', 'maj7', 31), c('F', '7', 32),
        ], tags: ['bossa', 'jobim']
    },
    {
        id: 'vivo-sonhando', title: 'Vivo Sonhando', composer: 'Jobim', style: 'bossa', key: 'G', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [
            c('G', 'maj7', 1), c('G', 'maj7', 2), c('Eb', '9', 3), c('Eb', '9', 4),
            c('G', 'maj7', 5), c('G', 'maj7', 6), c('Eb', '9', 7), c('Eb', '9', 8),
            c('G', 'maj7', 9), c('G', 'maj7', 10), c('Eb', '9', 11), c('Eb', '9', 12),
            c('G', 'maj7', 13), c('G', 'maj7', 14), c('Eb', '9', 15), c('Eb', '9', 16),
            // Bridge
            c('A', 'min7', 17), c('D', '7', 18), c('B', 'min7', 19), c('E', '7', 20),
            c('A', 'min7', 21), c('D', '7', 22), c('G', 'maj7', 23), c('G', 'maj7', 24),
            c('A', 'min7', 25), c('D', '7', 26), c('B', 'min7', 27), c('E', '7', 28),
            c('A', 'min7', 29), c('D', '7', 30), c('G', 'maj7', 31), c('D', '7', 32),
        ], tags: ['bossa', 'jobim']
    },
    {
        id: 'fotografia', title: 'Fotografia', composer: 'Jobim', style: 'bossa', key: 'C', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [
            c('C', 'maj7', 1), c('C', 'maj7', 2), c('D', 'min7', 3), c('D', 'min7', 4),
            c('D#', 'dim7', 5), c('D#', 'dim7', 6), c('E', 'min7', 7), c('E', 'min7', 8),
            c('A', '7', 9), c('A', '7', 10), c('D', 'min7', 11), c('D', 'min7', 12),
            c('G', '7', 13), c('G', '7', 14), c('C', 'maj7', 15), c('G', '7', 16),
            // Bridge/Repeat
            c('C', 'maj7', 17), c('C', 'maj7', 18), c('D', 'min7', 19), c('D', 'min7', 20),
            c('D#', 'dim7', 21), c('D#', 'dim7', 22), c('E', 'min7', 23), c('E', 'min7', 24),
            c('A', '7', 25), c('A', '7', 26), c('D', 'min7', 27), c('G', '7', 28),
            c('C', 'maj7', 29), c('C', 'maj7', 30), c('D', 'min7', 31), c('G', '7', 32),
        ], tags: ['bossa', 'jobim']
    },
    {
        id: 'so-danco-samba', title: 'Só Danço Samba', composer: 'Jobim', style: 'bossa', key: 'C', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [
            c('C', 'maj7', 1), c('C', 'maj7', 2), c('D', '7', 3), c('D', '7', 4),
            c('G', '7', 5), c('G', '7', 6), c('C', 'maj7', 7), c('C', 'maj7', 8),
            c('C', 'maj7', 9), c('C', 'maj7', 10), c('D', '7', 11), c('D', '7', 12),
            c('G', '7', 13), c('G', '7', 14), c('C', 'maj7', 15), c('C', '7', 16),
            // Bridge
            c('F', 'maj7', 17), c('F', 'min7', 18), c('C', 'maj7', 19), c('C', 'maj7', 20),
            c('D', '7', 21), c('D', '7', 22), c('G', '7', 23), c('G', '7', 24),
            // A3
            c('C', 'maj7', 25), c('C', 'maj7', 26), c('D', '7', 27), c('D', '7', 28),
            c('G', '7', 29), c('G', '7', 30), c('C', 'maj7', 31), c('G', '7', 32),
        ], tags: ['bossa', 'jobim']
    },
    {
        id: 'ela-e-carioca', title: 'Ela é Carioca', composer: 'Jobim', style: 'bossa', key: 'G', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [
            c('G', 'maj7', 1), c('C', '7', 2), c('G', 'maj7', 3), c('C', '7', 4),
            c('G', 'maj7', 5), c('C', '7', 6), c('G', 'maj7', 7), c('G', '7', 8),
            c('C', 'maj7', 9), c('F', '7', 10), c('B', 'min7', 11), c('E', '7', 12),
            c('A', 'min7', 13), c('D', '7', 14), c('G', 'maj7', 15), c('D', '7', 16),
            // Bridge
            c('G', 'maj7', 17), c('C', '7', 18), c('G', 'maj7', 19), c('C', '7', 20),
            c('G', 'maj7', 21), c('C', '7', 22), c('G', 'maj7', 23), c('G', '7', 24),
            c('C', 'maj7', 25), c('F', '7', 26), c('B', 'min7', 27), c('E', '7', 28),
            c('A', 'min7', 29), c('D', '7', 30), c('G', 'maj7', 31), c('D', '7', 32),
        ], tags: ['bossa', 'jobim']
    },
    {
        id: 'samba-de-verao', title: 'Samba de Verão', composer: 'Marcos Valle', style: 'bossa', key: 'F', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [
            c('F', 'maj7', 1), c('G', '7', 2), c('G', 'min7', 3), c('C', '7', 4),
            c('F', 'maj7', 5), c('G', '7', 6), c('G', 'min7', 7), c('C', '7', 8),
            c('F', 'maj7', 9), c('G', '7', 10), c('G', 'min7', 11), c('C', '7', 12),
            c('A', 'min7', 13), c('D', '7', 14), c('G', 'min7', 15), c('C', '7', 16),
            // Bridge
            c('F', 'maj7', 17), c('G', '7', 18), c('G', 'min7', 19), c('C', '7', 20),
            c('F', 'maj7', 21), c('G', '7', 22), c('G', 'min7', 23), c('C', '7', 24),
            c('F', 'maj7', 25), c('G', '7', 26), c('G', 'min7', 27), c('C', '7', 28),
            c('F', 'maj7', 29), c('D', '7', 30), c('G', 'min7', 31), c('C', '7', 32),
        ], tags: ['bossa', 'classic']
    },
    {
        id: 'mas-que-nada', title: 'Mas Que Nada', composer: 'Jorge Ben', style: 'bossa', key: 'F', tempo: 150, timeSignature: [4, 4], bars: 32, changes: [
            c('F', 'min7', 1), c('F', 'min7', 2), c('F', 'min7', 3), c('F', 'min7', 4),
            c('F', 'min7', 5), c('F', 'min7', 6), c('F', 'min7', 7), c('F', 'min7', 8),
            c('Bb', 'min7', 9), c('Bb', 'min7', 10), c('F', 'min7', 11), c('F', 'min7', 12),
            c('C', '7', 13), c('Bb', 'min7', 14), c('F', 'min7', 15), c('F', 'min7', 16),
            // Repeat
            c('F', 'min7', 17), c('F', 'min7', 18), c('F', 'min7', 19), c('F', 'min7', 20),
            c('F', 'min7', 21), c('F', 'min7', 22), c('F', 'min7', 23), c('F', 'min7', 24),
            c('Bb', 'min7', 25), c('Bb', 'min7', 26), c('F', 'min7', 27), c('F', 'min7', 28),
            c('C', '7', 29), c('Bb', 'min7', 30), c('F', 'min7', 31), c('F', 'min7', 32),
        ], tags: ['samba', 'classic']
    },
    {
        id: 'manha-de-carnaval', title: 'Manhã de Carnaval', composer: 'Luiz Bonfá', style: 'bossa', key: 'A', tempo: 110, timeSignature: [4, 4], bars: 8, changes: [
            c('A', 'min7', 1), c('B', 'min7b5', 2), c('E', '7b9', 3), c('A', 'min7', 4),
            c('D', 'min7', 5), c('G', '7', 6), c('C', 'maj7', 7), c('E', '7b9', 8),
        ], tags: ['bossa', 'classic']
    },
    {
        id: 'berimbau', title: 'Berimbau', composer: 'Baden Powell', style: 'bossa', key: 'D', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [
            c('D', 'min7', 1), c('D', 'min7', 2), c('D', 'min7', 3), c('D', 'min7', 4),
            c('D', 'min7', 5), c('D', 'min7', 6), c('D', 'min7', 7), c('D', 'min7', 8),
            c('G', 'min7', 9), c('G', 'min7', 10), c('D', 'min7', 11), c('D', 'min7', 12),
            c('A', '7', 13), c('G', 'min7', 14), c('D', 'min7', 15), c('D', 'min7', 16),
            // Repeat
            c('D', 'min7', 17), c('D', 'min7', 18), c('D', 'min7', 19), c('D', 'min7', 20),
            c('D', 'min7', 21), c('D', 'min7', 22), c('D', 'min7', 23), c('D', 'min7', 24),
            c('G', 'min7', 25), c('G', 'min7', 26), c('D', 'min7', 27), c('D', 'min7', 28),
            c('A', '7', 29), c('G', 'min7', 30), c('D', 'min7', 31), c('D', 'min7', 32),
        ], tags: ['afro-samba']
    },
    {
        id: 'canto-de-ossanha', title: 'Canto de Ossanha', composer: 'Baden Powell', style: 'bossa', key: 'G', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [
            c('G', 'min7', 1), c('G', 'min7', 2), c('G', 'min7', 3), c('G', 'min7', 4),
            c('G', 'min7', 5), c('G', 'min7', 6), c('G', 'min7', 7), c('G', 'min7', 8),
            c('C', 'min7', 9), c('C', 'min7', 10), c('G', 'min7', 11), c('G', 'min7', 12),
            c('D', '7', 13), c('C', 'min7', 14), c('G', 'min7', 15), c('G', 'min7', 16),
            // Bridge
            c('Bb', 'maj7', 17), c('Bb', 'maj7', 18), c('Eb', 'maj7', 19), c('Eb', 'maj7', 20),
            c('A', 'min7b5', 21), c('D', '7', 22), c('G', 'min7', 23), c('G', 'min7', 24),
            c('C', 'min7', 25), c('C', 'min7', 26), c('G', 'min7', 27), c('G', 'min7', 28),
            c('D', '7', 29), c('C', 'min7', 30), c('G', 'min7', 31), c('G', 'min7', 32),
        ], tags: ['afro-samba']
    },
    {
        id: 'a-felicidade', title: 'A Felicidade', composer: 'Jobim', style: 'bossa', key: 'C', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [
            c('A', 'min7', 1), c('A', 'min7', 2), c('C', 'maj7', 3), c('C', 'maj7', 4),
            c('B', 'min7b5', 5), c('E', '7', 6), c('A', 'min7', 7), c('A', 'min7', 8),
            c('D', 'min7', 9), c('G', '7', 10), c('C', 'maj7', 11), c('F', 'maj7', 12),
            c('B', 'min7b5', 13), c('E', '7', 14), c('A', 'min7', 15), c('E', '7', 16),
            // Bridge
            c('A', '7', 17), c('A', '7', 18), c('D', 'min7', 19), c('D', 'min7', 20),
            c('G', '7', 21), c('G', '7', 22), c('C', 'maj7', 23), c('C', 'maj7', 24),
            c('F', 'maj7', 25), c('F', 'maj7', 26), c('B', 'min7b5', 27), c('E', '7', 28),
            c('A', 'min7', 29), c('D', 'min7', 30), c('G', '7', 31), c('C', 'maj7', 32),
        ], tags: ['bossa', 'jobim']
    },
    {
        id: 'o-amor-em-paz', title: 'O Amor em Paz', composer: 'Jobim', style: 'bossa', key: 'F', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [
            c('A', 'min7', 1), c('D', '7b9', 2), c('G', 'min7', 3), c('G', 'min7', 4),
            c('Bb', 'min7', 5), c('Eb', '7', 6), c('F', 'maj7', 7), c('F', 'maj7', 8),
            c('G', '7', 9), c('G', '7', 10), c('G', 'min7', 11), c('C', '7', 12),
            c('F', 'maj7', 13), c('F#', 'dim7', 14), c('G', 'min7', 15), c('C', '7', 16),
            // Repeat
            c('A', 'min7', 17), c('D', '7b9', 18), c('G', 'min7', 19), c('G', 'min7', 20),
            c('Bb', 'min7', 21), c('Eb', '7', 22), c('F', 'maj7', 23), c('F', 'maj7', 24),
            c('G', '7', 25), c('G', '7', 26), c('G', 'min7', 27), c('C', '7', 28),
            c('F', 'maj7', 29), c('D', '7', 30), c('G', 'min7', 31), c('C', '7', 32),
        ], tags: ['bossa', 'jobim']
    },
    {
        id: 'borzeguim', title: 'Borzeguim', composer: 'Jobim', style: 'bossa', key: 'D', tempo: 150, timeSignature: [4, 4], bars: 32, changes: [
            c('D', 'min7', 1), c('D', 'min7', 2), c('D', 'min7', 3), c('D', 'min7', 4),
            c('D', 'min7', 5), c('D', 'min7', 6), c('D', 'min7', 7), c('D', 'min7', 8),
            c('G', 'min7', 9), c('G', 'min7', 10), c('D', 'min7', 11), c('D', 'min7', 12),
            c('A', '7', 13), c('G', 'min7', 14), c('D', 'min7', 15), c('D', 'min7', 16),
            c('D', 'min7', 17), c('D', 'min7', 18), c('D', 'min7', 19), c('D', 'min7', 20),
            c('D', 'min7', 21), c('D', 'min7', 22), c('D', 'min7', 23), c('D', 'min7', 24),
            c('G', 'min7', 25), c('G', 'min7', 26), c('D', 'min7', 27), c('D', 'min7', 28),
            c('A', '7', 29), c('G', 'min7', 30), c('D', 'min7', 31), c('D', 'min7', 32),
        ], tags: ['bossa', 'jobim']
    },

    // --- JAZZ STANDARDS ---
    {
        id: 'all-blues', title: 'All Blues', composer: 'Miles Davis', style: 'blues', key: 'G', tempo: 120, timeSignature: [6, 8], bars: 12, changes: [
            c('G', '7', 1), c('G', '7', 2), c('G', '7', 3), c('G', '7', 4),
            c('C', '7', 5), c('C', '7', 6), c('G', '7', 7), c('G', '7', 8),
            c('D', '7', 9), c('Eb', '7', 10), c('G', '7', 11), c('G', '7', 12),
        ], tags: ['blues', 'miles']
    },
    {
        id: 'autumn-leaves', title: 'Autumn Leaves', composer: 'Kosma', style: 'standard', key: 'G', tempo: 140, timeSignature: [4, 4], bars: 16, changes: [
            c('A', 'min7', 1), c('D', '7', 2), c('G', 'maj7', 3), c('C', 'maj7', 4),
            c('F#', 'min7b5', 5), c('B', '7b9', 6), c('E', 'min7', 7), c('E', 'min7', 8),
            c('A', 'min7', 9), c('D', '7', 10), c('G', 'maj7', 11), c('C', 'maj7', 12),
            c('F#', 'min7b5', 13), c('B', '7b9', 14), c('E', 'min7', 15), c('E', 'min7', 16),
        ], tags: ['standard', 'minor']
    },
    {
        id: 'all-of-me', title: 'All of Me', composer: 'Simons/Marks', style: 'standard', key: 'C', tempo: 130, timeSignature: [4, 4], bars: 16, changes: [
            c('C', 'maj7', 1), c('C', 'maj7', 2), c('E', '7', 3), c('E', '7', 4),
            c('A', '7', 5), c('A', '7', 6), c('D', 'min7', 7), c('D', 'min7', 8),
            c('E', '7', 9), c('E', '7', 10), c('A', 'min7', 11), c('A', 'min7', 12),
            c('D', '7', 13), c('D', '7', 14), c('D', 'min7', 15), c('G', '7', 16),
        ], tags: ['standard', 'swing']
    },
    {
        id: 'all-the-things-you-are', title: 'All The Things You Are', composer: 'Kern', style: 'standard', key: 'Ab', tempo: 120, timeSignature: [4, 4], bars: 16, changes: [
            c('F', 'min7', 1), c('Bb', 'min7', 2), c('Eb', '7', 3), c('Ab', 'maj7', 4),
            c('Db', 'maj7', 5), c('G', '7', 6), c('C', 'maj7', 7), c('C', 'maj7', 8),
            c('C', 'min7', 9), c('F', 'min7', 10), c('Bb', '7', 11), c('Eb', 'maj7', 12),
            c('Ab', 'maj7', 13), c('D', '7', 14), c('G', 'maj7', 15), c('E', '7', 16),
        ], tags: ['standard']
    },
    {
        id: 'billies-bounce', title: "Billie's Bounce", composer: 'Charlie Parker', style: 'bebop', key: 'F', tempo: 160, timeSignature: [4, 4], bars: 12, changes: [
            c('F', '7', 1), c('Bb', '7', 2), c('F', '7', 3), c('C', 'min7', 4),
            c('Bb', '7', 5), c('Bb', '7', 6), c('F', '7', 7), c('A', 'min7', 8),
            c('D', '7', 9), c('G', 'min7', 10), c('C', '7', 11), c('F', '7', 12),
        ], tags: ['blues', 'parker']
    },
    {
        id: 'blue-bossa', title: 'Blue Bossa', composer: 'Kenny Dorham', style: 'latin', key: 'C', tempo: 150, timeSignature: [4, 4], bars: 16, changes: [
            c('C', 'min7', 1), c('C', 'min7', 2), c('F', 'min7', 3), c('F', 'min7', 4),
            c('D', 'min7b5', 5), c('G', '7b9', 6), c('C', 'min7', 7), c('C', 'min7', 8),
            c('Eb', 'min7', 9), c('Ab', '7', 10), c('Db', 'maj7', 11), c('Db', 'maj7', 12),
            c('D', 'min7b5', 13), c('G', '7b9', 14), c('C', 'min7', 15), c('C', 'min7', 16),
        ], tags: ['latin']
    },
    {
        id: 'blue-monk', title: 'Blue Monk', composer: 'Monk', style: 'blues', key: 'Bb', tempo: 120, timeSignature: [4, 4], bars: 12, changes: [
            c('Bb', '7', 1), c('Eb', '7', 2), c('Bb', '7', 3), c('Bb', '7', 4),
            c('Eb', '7', 5), c('Eb', '7', 6), c('Bb', '7', 7), c('Bb', '7', 8),
            c('F', '7', 9), c('Eb', '7', 10), c('Bb', '7', 11), c('F', '7', 12),
        ], tags: ['blues', 'monk']
    },
    {
        id: 'body-and-soul', title: 'Body and Soul', composer: 'Green', style: 'standard', key: 'Db', tempo: 80, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('Eb', 'min7', 1), c('Bb', '7', 2), c('Db', 'maj7', 3), c('Gb', '7', 4),
            c('F', 'min7', 5), c('E', 'dim7', 6), c('Eb', 'min7', 7), c('Ab', '7', 8),
            // A2
            c('Eb', 'min7', 9), c('Bb', '7', 10), c('Db', 'maj7', 11), c('Gb', '7', 12),
            c('F', 'min7', 13), c('E', 'dim7', 14), c('Eb', 'min7', 15), c('Ab', '7', 16),
            // B (Bridge)
            c('D', 'maj7', 17), c('E', 'min7', 18, 1, 2), c('A', '7', 18, 3, 2),
            c('D', 'maj7', 19), c('D', 'min7', 20, 1, 2), c('G', '7', 20, 3, 2),
            c('C', 'maj7', 21), c('C', 'min7', 22, 1, 2), c('F', '7', 22, 3, 2),
            c('Bb', 'maj7', 23), c('E', 'min7', 24, 1, 2), c('A', '7', 24, 3, 2),
            // A3
            c('Eb', 'min7', 25), c('Bb', '7', 26), c('Db', 'maj7', 27), c('Gb', '7', 28),
            c('F', 'min7', 29), c('E', 'dim7', 30), c('Eb', 'min7', 31), c('Ab', '7', 32)
        ], tags: ['ballad', 'standard']
    },
    {
        id: 'but-not-for-me', title: 'But Not For Me', composer: 'Gershwin', style: 'standard', key: 'Eb', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('Eb', 'maj7', 1), c('Eb', 'maj7', 2), c('F', 'min7', 3), c('Bb', '7', 4),
            c('Eb', 'maj7', 5), c('Eb', '7', 6), c('Ab', 'maj7', 7), c('A', 'dim7', 8),
            // A2
            c('Eb', 'maj7', 9), c('C', '7', 10), c('F', 'min7', 11), c('Bb', '7', 12),
            c('G', 'min7', 13), c('C', '7', 14), c('F', 'min7', 15), c('Bb', '7', 16),
            // A3
            c('Eb', 'maj7', 17), c('Eb', 'maj7', 18), c('F', 'min7', 19), c('Bb', '7', 20),
            c('Eb', 'maj7', 21), c('Eb', '7', 22), c('Ab', 'maj7', 23), c('A', 'dim7', 24),
            // A4
            c('Eb', 'maj7', 25), c('C', '7', 26), c('F', 'min7', 27), c('Bb', '7', 28),
            c('Eb', 'maj7', 29, 1, 2), c('C', '7', 29, 3, 2), c('F', 'min7', 30, 1, 2), c('Bb', '7', 30, 3, 2),
            c('Eb', 'maj7', 31)
        ], tags: ['standard', 'gershwin']
    },
    {
        id: 'bye-bye-blackbird', title: 'Bye Bye Blackbird', composer: 'Henderson', style: 'standard', key: 'F', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [
            c('F', 'maj7', 1), c('G', 'min7', 3), c('C', '7', 4),
            c('G', 'min7', 5), c('C', '7', 6), c('F', 'maj7', 7),
            c('D', '7', 9), c('G', 'min7', 11), c('C', '7', 13),
            c('F', 'maj7', 15), c('F', '7', 16),
            c('Bb', 'maj7', 17), c('Bb', 'min7', 18), c('F', 'maj7', 19), c('D', '7', 20),
            c('G', 'min7', 21), c('C', '7', 22), c('F', 'maj7', 23), c('F', '7', 24),
            c('Bb', 'maj7', 25), c('Bb', 'min7', 26), c('F', 'maj7', 27), c('D', '7', 28),
            c('G', 'min7', 29), c('C', '7', 30), c('F', 'maj7', 31), c('C', '7', 32)
        ], tags: ['standard']
    },
    {
        id: 'caravan', title: 'Caravan', composer: 'Ellington/Tizol', style: 'latin', key: 'F', tempo: 180, timeSignature: [4, 4], bars: 64, changes: [
            // A1
            c('C', '7', 1, 1, 48), // 12 bars of C7
            c('F', 'min6', 13, 1, 16), // 4 bars of Fm6
            // A2
            c('C', '7', 17, 1, 48), // 12 bars of C7
            c('F', 'min6', 29, 1, 16), // 4 bars of Fm6
            // B
            c('F', '7', 33, 1, 8), c('Bb', '7', 35, 1, 8),
            c('Eb', '7', 37, 1, 8), c('Ab', 'maj7', 39, 1, 8),
            c('D', '7', 41, 1, 8), c('G', '7', 43, 1, 8),
            c('C', '7', 45, 1, 16),
            // A3
            c('C', '7', 49, 1, 48), // 12 bars of C7
            c('F', 'min6', 61, 1, 16) // 4 bars of Fm6
        ], tags: ['latin', 'ellington']
    },
    {
        id: 'cherokee', title: 'Cherokee', composer: 'Ray Noble', style: 'bebop', key: 'Bb', tempo: 220, timeSignature: [4, 4], bars: 64, changes: [
            // A1
            c('Bb', 'maj7', 1, 1, 8), c('F', 'min7', 3), c('Bb', '7', 4),
            c('Eb', 'maj7', 5), c('Ab', '7', 6), c('Bb', 'maj7', 7), c('C', '7', 8),
            c('C', 'min7', 9), c('F', '7', 10), c('Bb', 'maj7', 11), c('G', '7', 12),
            c('C', 'min7', 13), c('F', '7', 14), c('Bb', 'maj7', 15, 1, 8),
            // A2
            c('Bb', 'maj7', 17, 1, 8), c('F', 'min7', 19), c('Bb', '7', 20),
            c('Eb', 'maj7', 21), c('Ab', '7', 22), c('Bb', 'maj7', 23), c('C', '7', 24),
            c('C', 'min7', 25), c('F', '7', 26), c('Bb', 'maj7', 27), c('G', '7', 28),
            c('C', 'min7', 29), c('F', '7', 30), c('Bb', 'maj7', 31, 1, 8),
            // B
            c('Db', 'min7', 33), c('Gb', '7', 34), c('B', 'maj7', 35, 1, 8),
            c('B', 'min7', 37), c('E', '7', 38), c('A', 'maj7', 39, 1, 8),
            c('A', 'min7', 41), c('D', '7', 42), c('G', 'maj7', 43, 1, 8),
            c('G', 'min7', 45), c('C', '7', 46), c('F', '7', 47, 1, 8), // F7 leads back to Bb
            // A3
            c('Bb', 'maj7', 49, 1, 8), c('F', 'min7', 51), c('Bb', '7', 52),
            c('Eb', 'maj7', 53), c('Ab', '7', 54), c('Bb', 'maj7', 55), c('C', '7', 56),
            c('C', 'min7', 57), c('F', '7', 58), c('Bb', 'maj7', 59), c('G', '7', 60),
            c('C', 'min7', 61), c('F', '7', 62), c('Bb', 'maj7', 63, 1, 8)
        ], tags: ['bebop', 'fast']
    },
    {
        id: 'confirmation', title: 'Confirmation', composer: 'Charlie Parker', style: 'bebop', key: 'F', tempo: 180, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('F', 'maj7', 1), c('E', 'min7b5', 2, 1, 2), c('A', '7', 2, 3, 2),
            c('D', 'min7', 3, 1, 2), c('G', '7', 3, 3, 2), c('C', 'min7', 4, 1, 2), c('F', '7', 4, 3, 2),
            c('Bb', '7', 5), c('A', 'min7', 6, 1, 2), c('D', '7', 6, 3, 2),
            c('G', '7', 7), c('G', 'min7', 8, 1, 2), c('C', '7', 8, 3, 2),
            // A2
            c('F', 'maj7', 9), c('E', 'min7b5', 10, 1, 2), c('A', '7', 10, 3, 2),
            c('D', 'min7', 11, 1, 2), c('G', '7', 11, 3, 2), c('C', 'min7', 12, 1, 2), c('F', '7', 12, 3, 2),
            c('Bb', '7', 13), c('A', 'min7', 14, 1, 2), c('D', '7', 14, 3, 2),
            c('G', 'min7', 15, 1, 2), c('C', '7', 15, 3, 2), c('F', 'maj7', 16),
            // B
            c('C', 'min7', 17, 1, 2), c('F', '7', 17, 3, 2), c('Bb', 'maj7', 18),
            c('Eb', 'min7', 19, 1, 2), c('Ab', '7', 19, 3, 2), c('Db', 'maj7', 20),
            c('G', 'min7', 21, 1, 2), c('D', '7', 21, 3, 2), c('G', '7', 22, 1, 2), c('C', '7', 22, 3, 2), // Variation
            c('G', 'min7', 23), c('C', '7', 24),
            // A3
            c('F', 'maj7', 25), c('E', 'min7b5', 26, 1, 2), c('A', '7', 26, 3, 2),
            c('D', 'min7', 27, 1, 2), c('G', '7', 27, 3, 2), c('C', 'min7', 28, 1, 2), c('F', '7', 28, 3, 2),
            c('Bb', '7', 29), c('A', 'min7', 30, 1, 2), c('D', '7', 30, 3, 2),
            c('G', 'min7', 31, 1, 2), c('C', '7', 31, 3, 2), c('F', 'maj7', 32)
        ], tags: ['bebop', 'parker']
    },
    {
        id: 'days-of-wine-and-roses', title: 'Days of Wine and Roses', composer: 'Mancini', style: 'standard', key: 'F', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [
            c('F', 'maj7', 1), c('Eb', '7', 2), c('D', '7', 3), c('D', '7', 4),
            c('G', 'min7', 5), c('G', 'min7', 6), c('B', 'min7b5', 7), c('E', '7b9', 8),
            c('A', 'min7', 9), c('D', '7b9', 10), c('G', 'min7', 11), c('C', '7', 12),
            c('A', 'min7b5', 13), c('D', '7b9', 14), c('G', 'min7', 15), c('C', '7', 16),
            // Repeat
            c('F', 'maj7', 17), c('Eb', '7', 18), c('D', '7', 19), c('D', '7', 20),
            c('G', 'min7', 21), c('G', 'min7', 22), c('B', 'min7b5', 23), c('E', '7b9', 24),
            c('A', 'min7', 25), c('A', 'min7', 26), c('D', 'min7b5', 27), c('G', '7b9', 28),
            c('G', 'min7', 29), c('C', '7', 30), c('F', 'maj7', 31), c('C', '7', 32),
        ], tags: ['standard']
    },
    {
        id: 'doxy', title: 'Doxy', composer: 'Sonny Rollins', style: 'standard', key: 'Bb', tempo: 130, timeSignature: [4, 4], bars: 16, changes: [
            c('Bb', '7', 1), c('Ab', '7', 2), c('G', '7', 3), c('G', '7', 4),
            c('C', '7', 5), c('F', '7', 6), c('Bb', 'maj7', 7), c('F', '7', 8),
            c('Bb', '7', 9), c('Ab', '7', 10), c('G', '7', 11), c('G', '7', 12),
            c('C', '7', 13), c('F', '7', 14), c('Bb', 'maj7', 15), c('Bb', 'maj7', 16),
        ], tags: ['standard', 'rollins']
    },
    {
        id: 'fly-me-to-the-moon', title: 'Fly Me To The Moon', composer: 'Bart Howard', style: 'standard', key: 'C', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [
            c('A', 'min7', 1), c('D', 'min7', 2), c('G', '7', 3), c('C', 'maj7', 4),
            c('F', 'maj7', 5), c('B', 'min7b5', 6), c('E', '7b9', 7), c('A', 'min7', 8),
            c('D', 'min7', 9), c('G', '7', 10), c('C', 'maj7', 11), c('E', '7', 12),
            c('A', 'min7', 13), c('D', 'min7', 14), c('G', '7', 15), c('C', 'maj7', 16),
            // Repeat
            c('A', 'min7', 17), c('D', 'min7', 18), c('G', '7', 19), c('C', 'maj7', 20),
            c('F', 'maj7', 21), c('B', 'min7b5', 22), c('E', '7b9', 23), c('A', 'min7', 24),
            c('D', 'min7', 25), c('G', '7', 26), c('C', 'maj7', 27), c('B', 'min7b5', 28, 1, 2), c('E', '7', 28, 3, 2),
            c('A', 'min7', 29), c('D', 'min7', 30), c('G', '7', 31), c('C', 'maj7', 32),
        ], tags: ['standard', 'sinatra']
    },
    {
        id: 'footprints', title: 'Footprints', composer: 'Wayne Shorter', style: 'modal', key: 'C', tempo: 120, timeSignature: [6, 4], bars: 12, changes: [
            c('C', 'min7', 1), c('C', 'min7', 2), c('C', 'min7', 3), c('C', 'min7', 4),
            c('F', 'min7', 5), c('F', 'min7', 6), c('C', 'min7', 7), c('C', 'min7', 8),
            c('D', '7', 9), c('Db', '7', 10), c('C', 'min7', 11), c('C', 'min7', 12),
        ], tags: ['modal', 'shorter']
    },
    {
        id: 'four', title: 'Four', composer: 'Miles Davis', style: 'bebop', key: 'Eb', tempo: 160, timeSignature: [4, 4], bars: 32, changes: [
            c('Eb', 'maj7', 1), c('Eb', 'min7', 2, 1, 2), c('Ab', '7', 2, 3, 2),
            c('F', 'min7', 3), c('Bb', '7', 4),
            c('Eb', 'maj7', 5), c('Bb', 'min7', 6, 1, 2), c('Eb', '7', 6, 3, 2),
            c('Ab', 'maj7', 7), c('Ab', 'min7', 8, 1, 2), c('Db', '7', 8, 3, 2),
            c('Eb', 'maj7', 9), c('C', '7', 10), c('F', 'min7', 11), c('Bb', '7', 12),
            c('G', 'min7b5', 13), c('C', '7b9', 14), c('F', 'min7', 15), c('Bb', '7', 16),
            // Repeat
            c('Eb', 'maj7', 17), c('Eb', 'min7', 18, 1, 2), c('Ab', '7', 18, 3, 2),
            c('F', 'min7', 19), c('Bb', '7', 20),
            c('Eb', 'maj7', 21), c('Bb', 'min7', 22, 1, 2), c('Eb', '7', 22, 3, 2),
            c('Ab', 'maj7', 23), c('Ab', 'min7', 24, 1, 2), c('Db', '7', 24, 3, 2),
            c('Eb', 'maj7', 25), c('C', '7', 26), c('F', 'min7', 27), c('Bb', '7', 28),
            c('Eb', 'maj7', 29), c('F', 'min7', 30), c('Bb', '7', 31), c('Eb', 'maj7', 32),
        ], tags: ['bebop', 'miles']
    },
    {
        id: 'giant-steps', title: 'Giant Steps', composer: 'Coltrane', style: 'bebop', key: 'B', tempo: 200, timeSignature: [4, 4], bars: 16, changes: [
            c('B', 'maj7', 1, 1, 2), c('D', '7', 1, 3, 2),
            c('G', 'maj7', 2, 1, 2), c('Bb', '7', 2, 3, 2),
            c('Eb', 'maj7', 3),
            c('A', 'min7', 4, 1, 2), c('D', '7', 4, 3, 2),
            c('G', 'maj7', 5, 1, 2), c('Bb', '7', 5, 3, 2),
            c('Eb', 'maj7', 6, 1, 2), c('F#', '7', 6, 3, 2),
            c('B', 'maj7', 7),
            c('F', 'min7', 8, 1, 2), c('Bb', '7', 8, 3, 2),
            c('Eb', 'maj7', 9),
            c('A', 'min7', 10, 1, 2), c('D', '7', 10, 3, 2),
            c('G', 'maj7', 11),
            c('C#', 'min7', 12, 1, 2), c('F#', '7', 12, 3, 2),
            c('B', 'maj7', 13),
            c('F', 'min7', 14, 1, 2), c('Bb', '7', 14, 3, 2),
            c('Eb', 'maj7', 15),
            c('C#', 'min7', 16, 1, 2), c('F#', '7', 16, 3, 2),
        ], tags: ['bebop', 'coltrane']
    },
    {
        id: 'have-you-met-miss-jones', title: 'Have You Met Miss Jones?', composer: 'Rodgers', style: 'standard', key: 'F', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('F', 'maj7', 1), c('F', 'dim7', 2), c('G', 'min7', 3), c('C', '7', 4),
            c('A', 'min7', 5), c('D', 'min7', 6), c('G', 'min7', 7), c('C', '7', 8),
            // A2
            c('F', 'maj7', 9), c('F', 'dim7', 10), c('G', 'min7', 11), c('C', '7', 12),
            c('A', 'min7', 13), c('D', 'min7', 14), c('G', 'min7', 15), c('C', '7', 16),
            // B
            c('Bb', 'maj7', 17), c('Ab', 'min7', 18, 1, 2), c('Db', '7', 18, 3, 2),
            c('Gb', 'maj7', 19), c('E', 'min7', 20, 1, 2), c('A', '7', 20, 3, 2),
            c('D', 'maj7', 21), c('Ab', 'min7', 22, 1, 2), c('Db', '7', 22, 3, 2),
            c('Gb', 'maj7', 23), c('G', 'min7', 24, 1, 2), c('C', '7', 24, 3, 2),
            // A3
            c('F', 'maj7', 25), c('F', 'dim7', 26), c('G', 'min7', 27), c('C', '7', 28),
            c('A', 'min7', 29), c('D', 'min7', 30), c('G', 'min7', 31), c('C', '7', 32)
        ], tags: ['standard']
    },
    {
        id: 'how-high-the-moon', title: 'How High the Moon', composer: 'Morgan Lewis', style: 'standard', key: 'G', tempo: 150, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('G', 'maj7', 1, 1, 8), c('G', 'min7', 3, 1, 4), c('C', '7', 4, 1, 4),
            c('F', 'maj7', 5, 1, 8), c('F', 'min7', 7, 1, 4), c('Bb', '7', 8, 1, 4),
            c('Eb', 'maj7', 9, 1, 8), c('A', 'min7b5', 11, 1, 4), c('D', '7', 12, 1, 4),
            c('G', 'min7', 13), c('C', '7', 14), c('A', 'min7', 15), c('D', '7', 16),
            // A2
            c('G', 'maj7', 17, 1, 8), c('G', 'min7', 19, 1, 4), c('C', '7', 20, 1, 4),
            c('F', 'maj7', 21, 1, 8), c('F', 'min7', 23, 1, 4), c('Bb', '7', 24, 1, 4),
            c('Eb', 'maj7', 25, 1, 8), c('A', 'min7b5', 27, 1, 4), c('D', '7', 28, 1, 4),
            c('G', 'maj7', 29, 1, 8), c('A', 'min7', 31, 1, 4), c('D', '7', 32, 1, 4)
        ], tags: ['standard']
    },
    {
        id: 'i-hear-a-rhapsody', title: 'I Hear a Rhapsody', composer: 'Fragos', style: 'standard', key: 'Eb', tempo: 160, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('F', 'min7', 1, 1, 8), c('Bb', '7', 3, 1, 8),
            c('Eb', 'maj7', 5, 1, 8), c('C', '7alt', 7, 1, 8),
            // A2
            c('F', 'min7', 9, 1, 8), c('Bb', '7', 11, 1, 8),
            c('Eb', 'maj7', 13, 1, 8), c('G', 'min7', 15, 1, 4), c('C', '7', 16, 1, 4),
            // B
            c('F#', 'dim7', 17), c('G', 'maj7', 18), c('G', 'min7', 19), c('C', '7', 20),
            c('F', 'maj7', 21, 1, 8), c('F', 'min7', 23), c('Bb', '7', 24),
            // A3
            c('Eb', 'maj7', 25, 1, 8), c('C', 'min7', 27, 1, 4), c('F', '7', 28, 1, 4),
            c('F', 'min7', 29, 1, 8), c('Eb', 'maj7', 31, 1, 8)
        ], tags: ['standard']
    },
    {
        id: 'i-love-you', title: 'I Love You', composer: 'Cole Porter', style: 'standard', key: 'F', tempo: 150, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('G', 'min7b5', 1), c('C', '7b9', 2), c('F', 'maj7', 3, 1, 8),
            c('B', 'min7b5', 5), c('E', '7b9', 6), c('A', 'min7', 7), c('D', '7', 8),
            // A2
            c('G', 'min7', 9), c('C', '7', 10), c('F', 'maj7', 11, 1, 8),
            c('E', '7', 13, 1, 8), c('A', 'maj7', 15), c('A', '7', 16),
            // B
            c('D', 'min7', 17), c('G', '7', 18), c('C', 'maj7', 19), c('F', 'maj7', 20),
            c('B', 'min7b5', 21), c('E', '7', 22), c('A', 'min7', 23), c('D', '7', 24),
            // A3
            c('G', 'min7', 25), c('C', '7', 26), c('F', 'maj7', 27, 1, 8),
            c('G', 'min7', 29), c('C', '7', 30), c('F', 'maj7', 31, 1, 8)
        ], tags: ['standard', 'porter']
    },
    {
        id: 'i-remember-you', title: 'I Remember You', composer: 'Schertzinger', style: 'standard', key: 'F', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('F', 'maj7', 1, 1, 8), c('G', 'min7', 3), c('C', '7', 4),
            c('F', 'maj7', 5, 1, 8), c('C', 'min7', 7), c('F', '7', 8),
            // B
            c('Bb', 'maj7', 9, 1, 8), c('Bb', 'min7', 11), c('Eb', '7', 12),
            c('F', 'maj7', 13), c('D', '7', 14), c('G', 'min7', 15), c('C', '7', 16),
            // A2
            c('F', 'maj7', 17, 1, 8), c('G', 'min7', 19), c('C', '7', 20),
            c('F', 'maj7', 21, 1, 8), c('C', 'min7', 23), c('F', '7', 24),
            // B2
            c('Bb', 'maj7', 25, 1, 8), c('Bb', 'min7', 27), c('Eb', '7', 28),
            c('F', 'maj7', 29), c('D', '7', 30), c('G', 'min7', 31), c('C', '7', 32)
        ], tags: ['standard']
    },
    {
        id: 'if-i-were-a-bell', title: 'If I Were a Bell', composer: 'Frank Loesser', style: 'standard', key: 'F', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('F', 'maj7', 1), c('G', '7', 2), c('G', 'min7', 3), c('C', '7', 4),
            c('F', 'maj7', 5), c('G', '7', 6), c('G', 'min7', 7), c('C', '7', 8),
            // B
            c('F', 'min7', 9), c('Bb', '7', 10), c('Eb', 'maj7', 11, 1, 8),
            c('Eb', 'maj7', 13, 1, 8), c('G', 'min7', 15), c('C', '7', 16),
            // A2
            c('F', 'maj7', 17), c('G', '7', 18), c('G', 'min7', 19), c('C', '7', 20),
            c('B', 'min7b5', 21), c('E', '7', 22), c('A', 'min7', 23), c('D', '7', 24),
            // C
            c('G', 'min7', 25), c('C', '7', 26), c('A', 'min7b5', 27), c('D', '7', 28),
            c('G', 'min7', 29), c('C', '7', 30), c('F', 'maj7', 31, 1, 8)
        ], tags: ['standard', 'miles']
    },
    {
        id: 'impressions', title: 'Impressions', composer: 'Coltrane', style: 'modal', key: 'D', tempo: 180, timeSignature: [4, 4], bars: 32, changes: [
            c('D', 'min7', 1), c('D', 'min7', 2), c('D', 'min7', 3), c('D', 'min7', 4),
            c('D', 'min7', 5), c('D', 'min7', 6), c('D', 'min7', 7), c('D', 'min7', 8),
            c('Eb', 'min7', 9), c('Eb', 'min7', 10), c('Eb', 'min7', 11), c('Eb', 'min7', 12),
            c('D', 'min7', 13), c('D', 'min7', 14), c('D', 'min7', 15), c('D', 'min7', 16),
            c('D', 'min7', 17), c('D', 'min7', 18), c('D', 'min7', 19), c('D', 'min7', 20),
            c('D', 'min7', 21), c('D', 'min7', 22), c('D', 'min7', 23), c('D', 'min7', 24),
            c('Eb', 'min7', 25), c('Eb', 'min7', 26), c('Eb', 'min7', 27), c('Eb', 'min7', 28),
            c('D', 'min7', 29), c('D', 'min7', 30), c('D', 'min7', 31), c('D', 'min7', 32),
        ], tags: ['modal', 'coltrane']
    },
    {
        id: 'in-a-sentimental-mood', title: 'In a Sentimental Mood', composer: 'Ellington', style: 'standard', key: 'F', tempo: 70, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('D', 'min7', 1), c('D', 'minMaj7', 2), c('D', 'min7', 3), c('D', 'min6', 4),
            c('G', 'min7', 5), c('C', '7', 6), c('F', 'maj7', 7), c('E', 'min7', 8, 1, 2), c('A', '7', 8, 3, 2),
            // A2
            c('D', 'min7', 9), c('D', 'minMaj7', 10), c('D', 'min7', 11), c('D', 'min6', 12),
            c('G', 'min7', 13), c('C', '7', 14), c('F', 'maj7', 15), c('F', '7', 16),
            // B
            c('Db', 'maj7', 17, 1, 8), c('Bb', 'min7', 19, 1, 4), c('Eb', '7', 20, 1, 4),
            c('Ab', 'maj7', 21, 1, 4), c('Ab', '7', 22, 1, 4), c('D', 'min7', 23, 1, 2), c('G', '7', 23, 3, 2), c('C', '7', 24),
            // A3
            c('D', 'min7', 25), c('D', 'minMaj7', 26), c('D', 'min7', 27), c('D', 'min6', 28),
            c('G', 'min7', 29), c('C', '7', 30), c('F', 'maj7', 31, 1, 8)
        ], tags: ['ballad', 'ellington']
    },
    {
        id: 'it-could-happen-to-you', title: 'It Could Happen to You', composer: 'Van Heusen', style: 'standard', key: 'Eb', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('Eb', 'maj7', 1, 1, 8), c('G', 'min7b5', 3, 1, 4), c('C', '7b9', 4, 1, 4),
            c('F', 'min7', 5, 1, 8), c('A', 'min7b5', 7, 1, 4), c('D', '7b9', 8, 1, 4),
            c('Eb', 'maj7', 9, 1, 8), c('Ab', 'maj7', 11, 1, 8),
            c('F', 'min7', 13, 1, 8), c('F', 'min7', 15, 1, 4), c('Bb', '7', 16, 1, 4),
            // A2
            c('Eb', 'maj7', 17, 1, 8), c('G', 'min7b5', 19, 1, 4), c('C', '7b9', 20, 1, 4),
            c('F', 'min7', 21, 1, 8), c('A', 'min7b5', 23, 1, 4), c('D', '7b9', 24, 1, 4),
            c('Eb', 'maj7', 25, 1, 4), c('G', '7', 26, 1, 4), c('C', '7', 27, 1, 8),
            c('F', '7', 29, 1, 4), c('Bb', '7', 30, 1, 4), c('Eb', 'maj7', 31, 1, 8)
        ], tags: ['standard']
    },
    {
        id: 'just-friends', title: 'Just Friends', composer: 'Klenner', style: 'standard', key: 'G', tempo: 150, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('C', 'maj7', 1, 1, 8), c('C', 'min7', 3, 1, 4), c('F', '7', 4, 1, 4),
            c('G', 'maj7', 5, 1, 8), c('Bb', 'min7', 7, 1, 4), c('Eb', '7', 8, 1, 4),
            // A2
            c('A', 'min7', 9, 1, 4), c('D', '7', 10, 1, 4), c('G', 'maj7', 11, 1, 4), c('E', 'min7', 12, 1, 4),
            c('A', 'min7', 13, 1, 4), c('D', '7', 14, 1, 4), c('G', 'min7', 15, 1, 4), c('C', '7', 16, 1, 4),
            // B
            c('C', 'maj7', 17, 1, 8), c('C', 'min7', 19, 1, 4), c('F', '7', 20, 1, 4),
            c('G', 'maj7', 21, 1, 8), c('E', 'min7', 23, 1, 4), c('A', '7', 24, 1, 4),
            // C
            c('A', 'min7', 25, 1, 4), c('D', '7', 26, 1, 4), c('B', 'min7', 27, 1, 4), c('E', '7', 28, 1, 4),
            c('A', 'min7', 29, 1, 4), c('D', '7', 30, 1, 4), c('G', 'maj7', 31, 1, 8)
        ], tags: ['standard']
    },
    {
        id: 'lady-bird', title: 'Lady Bird', composer: 'Tadd Dameron', style: 'bebop', key: 'C', tempo: 140, timeSignature: [4, 4], bars: 16, changes: [
            c('C', 'maj7', 1, 1, 8), c('F', 'min7', 3, 1, 4), c('Bb', '7', 4, 1, 4),
            c('C', 'maj7', 5, 1, 8), c('Bb', 'min7', 7, 1, 4), c('Eb', '7', 8, 1, 4),
            c('Ab', 'maj7', 9, 1, 8), c('A', 'min7', 11, 1, 4), c('D', '7', 12, 1, 4),
            c('D', 'min7', 13, 1, 4), c('G', '7', 14, 1, 4),
            c('C', 'maj7', 15, 1, 4), c('Eb', 'maj7', 15, 3, 4), c('Ab', 'maj7', 16, 1, 4), c('Db', 'maj7', 16, 3, 4)
        ], tags: ['bebop', 'dameron']
    },
    {
        id: 'maiden-voyage', title: 'Maiden Voyage', composer: 'Herbie Hancock', style: 'modal', key: 'D', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('D', '7sus4', 1, 1, 16), c('F', '7sus4', 5, 1, 16),
            // A2
            c('D', '7sus4', 9, 1, 16), c('F', '7sus4', 13, 1, 16),
            // B
            c('Eb', '7sus4', 17, 1, 16), c('Gb', '7sus4', 21, 1, 16),
            // A3
            c('D', '7sus4', 25, 1, 16), c('F', '7sus4', 29, 1, 16)
        ], tags: ['modal', 'hancock']
    },
    {
        id: 'misty', title: 'Misty', composer: 'Erroll Garner', style: 'standard', key: 'Eb', tempo: 80, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('Eb', 'maj7', 1), c('Bb', 'min7', 2, 1, 2), c('Eb', '7', 2, 3, 2),
            c('Ab', 'maj7', 3), c('Ab', 'min7', 4, 1, 2), c('Db', '7', 4, 3, 2),
            c('Eb', 'maj7', 5, 1, 2), c('C', 'min7', 5, 3, 2), c('F', 'min7', 6, 1, 2), c('Bb', '7', 6, 3, 2),
            c('G', 'min7', 7, 1, 2), c('C', '7', 7, 3, 2), c('F', 'min7', 8, 1, 2), c('Bb', '7', 8, 3, 2),
            // A2
            c('Eb', 'maj7', 9), c('Bb', 'min7', 10, 1, 2), c('Eb', '7', 10, 3, 2),
            c('Ab', 'maj7', 11), c('Ab', 'min7', 12, 1, 2), c('Db', '7', 12, 3, 2),
            c('Eb', 'maj7', 13, 1, 2), c('C', 'min7', 13, 3, 2), c('F', 'min7', 14, 1, 2), c('Bb', '7', 14, 3, 2),
            c('Eb', 'maj7', 15, 1, 8),
            // B
            c('Bb', 'min7', 17), c('Eb', '7', 18), c('Ab', 'maj7', 19, 1, 8),
            c('A', 'min7', 21), c('D', '7', 22), c('G', 'maj7', 23, 1, 4), c('C', '7', 23, 3, 4), c('F', 'min7', 24, 1, 2), c('Bb', '7', 24, 3, 2),
            // A3
            c('Eb', 'maj7', 25), c('Bb', 'min7', 26, 1, 2), c('Eb', '7', 26, 3, 2),
            c('Ab', 'maj7', 27), c('Ab', 'min7', 28, 1, 2), c('Db', '7', 28, 3, 2),
            c('Eb', 'maj7', 29, 1, 2), c('C', 'min7', 29, 3, 2), c('F', 'min7', 30, 1, 2), c('Bb', '7', 30, 3, 2),
            c('Eb', 'maj7', 31, 1, 8)
        ], tags: ['ballad', 'garner']
    },
    {
        id: 'mr-pc', title: 'Mr. P.C.', composer: 'Coltrane', style: 'blues', key: 'C', tempo: 180, timeSignature: [4, 4], bars: 12, changes: [
            c('C', 'min7', 1, 1, 16), c('F', 'min7', 5, 1, 8), c('C', 'min7', 7, 1, 8),
            c('Ab', '7', 9), c('G', '7', 10), c('C', 'min7', 11, 1, 8)
        ], tags: ['blues', 'coltrane']
    },
    {
        id: 'my-funny-valentine', title: 'My Funny Valentine', composer: 'Rodgers', style: 'standard', key: 'Eb', tempo: 70, timeSignature: [4, 4], bars: 36, changes: [
            // A1
            c('C', 'min7', 1), c('C', 'minMaj7', 2), c('C', 'min7', 3), c('C', 'min6', 4),
            c('Ab', 'maj7', 5), c('F', 'min7', 6), c('D', 'min7b5', 7), c('G', '7b9', 8),
            // A2
            c('C', 'min7', 9), c('C', 'minMaj7', 10), c('C', 'min7', 11), c('C', 'min6', 12),
            c('Ab', 'maj7', 13), c('F', 'min7', 14), c('D', 'min7b5', 15), c('G', '7b9', 16),
            // B
            c('Eb', 'maj7', 17), c('F', 'min7', 18, 1, 2), c('Bb', '7', 18, 3, 2),
            c('Eb', 'maj7', 19), c('F', 'min7', 20, 1, 2), c('Bb', '7', 20, 3, 2),
            c('Eb', 'maj7', 21), c('G', '7', 22), c('C', 'min7', 23), c('Bb', 'min7', 24, 1, 2), c('Eb', '7', 24, 3, 2),
            c('Ab', 'maj7', 25), c('F', 'min7', 26, 1, 2), c('Bb', '7', 26, 3, 2),
            c('Eb', 'maj7', 27), c('D', 'min7b5', 28, 1, 2), c('G', '7', 28, 3, 2),
            // C
            c('C', 'min7', 29), c('C', 'minMaj7', 30), c('C', 'min7', 31), c('C', 'min6', 32),
            c('Ab', 'maj7', 33), c('D', 'min7b5', 34, 1, 2), c('G', '7', 34, 3, 2),
            c('C', 'min7', 35, 1, 8)
        ], tags: ['ballad', 'standard']
    },
    {
        id: 'my-romance', title: 'My Romance', composer: 'Rodgers', style: 'standard', key: 'Bb', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('Bb', 'maj7', 1, 1, 2), c('G', '7', 1, 3, 2), c('C', 'min7', 2, 1, 2), c('F', '7', 2, 3, 2),
            c('D', 'min7', 3, 1, 2), c('G', '7', 3, 3, 2), c('C', 'min7', 4, 1, 2), c('F', '7', 4, 3, 2),
            c('Bb', 'maj7', 5), c('G', '7', 6), c('C', 'min7', 7), c('F', '7', 8),
            // B
            c('D', 'min7', 9), c('G', '7', 10), c('C', 'min7', 11), c('F', '7', 12),
            c('Eb', 'maj7', 13), c('E', 'dim7', 14), c('C', 'min7', 15), c('F', '7', 16),
            // A2
            c('Bb', 'maj7', 17, 1, 2), c('G', '7', 17, 3, 2), c('C', 'min7', 18, 1, 2), c('F', '7', 18, 3, 2),
            c('D', 'min7', 19, 1, 2), c('G', '7', 19, 3, 2), c('C', 'min7', 20, 1, 2), c('F', '7', 20, 3, 2),
            c('Bb', 'maj7', 21), c('G', '7', 22), c('C', 'min7', 23), c('E', 'min7', 24, 1, 2), c('A', '7', 24, 3, 2),
            // C
            c('D', 'min7', 25, 1, 2), c('G', '7', 25, 3, 2), c('C', 'min7', 26, 1, 2), c('F', '7', 26, 3, 2),
            c('Bb', 'maj7', 27, 1, 8)
        ], tags: ['standard']
    },
    {
        id: 'nardis', title: 'Nardis', composer: 'Miles/Evans', style: 'modal', key: 'E', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('E', 'minMaj7', 1, 1, 16), c('A', 'min7', 5, 1, 8),
            c('F', 'maj7', 7), c('E', 'maj7', 8),
            // A2
            c('E', 'minMaj7', 9, 1, 16), c('A', 'min7', 13, 1, 8),
            c('F', 'maj7', 15), c('E', 'maj7', 16),
            // B
            c('C', 'maj7', 17), c('F', 'maj7', 18), c('Bb', 'maj7', 19), c('Eb', 'maj7', 20),
            c('A', 'min7', 21), c('F', 'maj7', 22), c('E', 'maj7', 23, 1, 8)
        ], tags: ['modal', 'evans']
    },
    {
        id: 'night-and-day', title: 'Night and Day', composer: 'Cole Porter', style: 'standard', key: 'C', tempo: 140, timeSignature: [4, 4], bars: 48, changes: [
            // A1
            c('Ab', 'maj7', 1, 1, 8), c('G', '7', 3), c('C', 'maj7', 4, 1, 8),
            c('Ab', 'maj7', 5, 1, 8), c('G', '7', 7), c('C', 'maj7', 8, 1, 8),
            // A2
            c('Ab', 'maj7', 9, 1, 8), c('G', '7', 11), c('C', 'maj7', 12, 1, 8),
            c('Ab', 'maj7', 13, 1, 8), c('G', '7', 15), c('C', 'maj7', 16, 1, 8),
            // B
            c('C', 'min7b5', 17), c('F', '7', 18), c('Bb', 'maj7', 19, 1, 8),
            c('Bb', 'min7', 21), c('Eb', '7', 22), c('Ab', 'maj7', 23, 1, 8),
            c('Ab', 'min7', 25), c('Db', '7', 26), c('C', 'maj7', 27, 1, 8),
            c('A', 'min7', 29), c('D', '7', 30), c('G', '7', 31, 1, 8),
            // C
            c('Ab', 'maj7', 33, 1, 8), c('G', '7', 35), c('C', 'maj7', 36, 1, 8),
            c('Ab', 'maj7', 37, 1, 8), c('G', '7', 39), c('C', 'maj7', 40, 1, 8),
            c('F', 'min7', 41), c('Bb', '7', 42), c('Eb', 'maj7', 43, 1, 8),
            c('Ab', 'maj7', 45), c('G', '7', 46), c('C', 'maj7', 47, 1, 8)
        ], tags: ['standard', 'porter']
    },
    {
        id: 'oleo', title: 'Oleo', composer: 'Sonny Rollins', style: 'bebop', key: 'Bb', tempo: 200, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('Bb', 'maj7', 1, 1, 2), c('G', '7', 1, 3, 2), c('C', 'min7', 2, 1, 2), c('F', '7', 2, 3, 2),
            c('Bb', 'maj7', 3, 1, 2), c('G', '7', 3, 3, 2), c('C', 'min7', 4, 1, 2), c('F', '7', 4, 3, 2),
            c('Bb', 'maj7', 5, 1, 2), c('Bb', '7', 5, 3, 2), c('Eb', 'maj7', 6, 1, 2), c('E', 'dim7', 6, 3, 2),
            c('Bb', 'maj7', 7, 1, 2), c('G', '7', 7, 3, 2), c('C', 'min7', 8, 1, 2), c('F', '7', 8, 3, 2),
            // A2
            c('Bb', 'maj7', 9, 1, 2), c('G', '7', 9, 3, 2), c('C', 'min7', 10, 1, 2), c('F', '7', 10, 3, 2),
            c('Bb', 'maj7', 11, 1, 2), c('G', '7', 11, 3, 2), c('C', 'min7', 12, 1, 2), c('F', '7', 12, 3, 2),
            c('Bb', 'maj7', 13, 1, 2), c('Bb', '7', 13, 3, 2), c('Eb', 'maj7', 14, 1, 2), c('E', 'dim7', 14, 3, 2),
            c('Bb', 'maj7', 15, 1, 2), c('F', '7', 15, 3, 2), c('Bb', 'maj7', 16),
            // B
            c('D', '7', 17, 1, 8), c('G', '7', 19, 1, 8),
            c('C', '7', 21, 1, 8), c('F', '7', 23, 1, 8),
            // A3
            c('Bb', 'maj7', 25, 1, 2), c('G', '7', 25, 3, 2), c('C', 'min7', 26, 1, 2), c('F', '7', 26, 3, 2),
            c('Bb', 'maj7', 27, 1, 2), c('G', '7', 27, 3, 2), c('C', 'min7', 28, 1, 2), c('F', '7', 28, 3, 2),
            c('Bb', 'maj7', 29, 1, 2), c('Bb', '7', 29, 3, 2), c('Eb', 'maj7', 30, 1, 2), c('E', 'dim7', 30, 3, 2),
            c('Bb', 'maj7', 31, 1, 2), c('F', '7', 31, 3, 2), c('Bb', 'maj7', 32)
        ], tags: ['bebop', 'rhythm-changes']
    },
    {
        id: 'on-green-dolphin-street', title: 'On Green Dolphin Street', composer: 'Kaper', style: 'standard', key: 'Eb', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('Eb', 'maj7', 1, 1, 8), c('Gb', 'maj7', 3, 1, 8),
            c('F', 'maj7', 5, 1, 8), c('E', 'maj7', 7, 1, 8),
            c('Eb', 'maj7', 9, 1, 8), c('G', 'min7', 11, 1, 4), c('C', '7', 12, 1, 4),
            c('F', 'min7', 13, 1, 8), c('Bb', '7', 15, 1, 8),
            // A2
            c('Eb', 'maj7', 17, 1, 8), c('Gb', 'maj7', 19, 1, 8),
            c('F', 'maj7', 21, 1, 8), c('E', 'maj7', 23, 1, 8),
            // C
            c('Eb', 'maj7', 25, 1, 4), c('C', 'min7', 26, 1, 4), c('F', 'min7', 27, 1, 4), c('Bb', '7', 28, 1, 4),
            c('Eb', 'maj7', 29, 1, 8), c('F', 'min7', 31, 1, 4), c('Bb', '7', 32, 1, 4)
        ], tags: ['standard', 'latin-swing']
    },
    {
        id: 'on-the-sunny-side-of-the-street', title: 'On The Sunny Side Of The Street', composer: 'McHugh', style: 'standard', key: 'C', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('C', 'maj7', 1, 1, 4), c('E', '7', 2, 1, 4), c('F', 'maj7', 3, 1, 4), c('G', '7', 4, 1, 4),
            c('C', 'maj7', 5, 1, 4), c('A', 'min7', 6, 1, 4), c('D', 'min7', 7, 1, 4), c('G', '7', 8, 1, 4),
            // A2
            c('C', 'maj7', 9, 1, 4), c('E', '7', 10, 1, 4), c('F', 'maj7', 11, 1, 4), c('G', '7', 12, 1, 4),
            c('C', 'maj7', 13, 1, 4), c('A', 'min7', 14, 1, 4), c('D', 'min7', 15, 1, 4), c('C', 'maj7', 16, 1, 4),
            // B
            c('G', 'min7', 17, 1, 4), c('C', '7', 18, 1, 4), c('F', 'maj7', 19, 1, 8),
            c('D', '7', 21, 1, 8), c('G', '7', 23, 1, 8),
            // A3
            c('C', 'maj7', 25, 1, 4), c('E', '7', 26, 1, 4), c('F', 'maj7', 27, 1, 4), c('G', '7', 28, 1, 4),
            c('C', 'maj7', 29, 1, 4), c('A', 'min7', 30, 1, 4), c('D', 'min7', 31, 1, 4), c('C', 'maj7', 32, 1, 4)
        ], tags: ['standard']
    },
    {
        id: 'ornithology', title: 'Ornithology', composer: 'Charlie Parker', style: 'bebop', key: 'G', tempo: 180, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('G', 'maj7', 1, 1, 8), c('G', 'min7', 3, 1, 4), c('C', '7', 4, 1, 4),
            c('F', 'maj7', 5, 1, 8), c('F', 'min7', 7, 1, 4), c('Bb', '7', 8, 1, 4),
            c('Eb', 'maj7', 9, 1, 8), c('A', 'min7b5', 11, 1, 4), c('D', '7b9', 12, 1, 4),
            c('B', 'min7', 13, 1, 4), c('E', '7', 14, 1, 4), c('A', 'min7', 15, 1, 4), c('D', '7', 16, 1, 4),
            // A2
            c('G', 'maj7', 17, 1, 8), c('G', 'min7', 19, 1, 4), c('C', '7', 20, 1, 4),
            c('F', 'maj7', 21, 1, 8), c('F', 'min7', 23, 1, 4), c('Bb', '7', 24, 1, 4),
            c('Eb', 'maj7', 25, 1, 8), c('A', 'min7b5', 27, 1, 4), c('D', '7b9', 28, 1, 4),
            c('G', 'maj7', 29, 1, 8), c('A', 'min7', 31, 1, 4), c('D', '7', 32, 1, 4)
        ], tags: ['bebop', 'parker']
    },
    {
        id: 'out-of-nowhere', title: 'Out of Nowhere', composer: 'Green', style: 'standard', key: 'G', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('G', 'maj7', 1, 1, 8), c('Bb', 'min7', 3, 1, 4), c('Eb', '7', 4, 1, 4),
            c('G', 'maj7', 5, 1, 8), c('B', 'min7', 7, 1, 4), c('E', '7', 8, 1, 4),
            c('A', 'min7', 9, 1, 4), c('E', '7', 10, 1, 4), c('A', 'min7', 11, 1, 8),
            c('Eb', '7', 13, 1, 8), c('A', 'min7', 15, 1, 4), c('D', '7', 16, 1, 4),
            // A2
            c('G', 'maj7', 17, 1, 8), c('Bb', 'min7', 19, 1, 4), c('Eb', '7', 20, 1, 4),
            c('G', 'maj7', 21, 1, 8), c('B', 'min7', 23, 1, 4), c('E', '7', 24, 1, 4),
            c('A', 'min7', 25, 1, 4), c('E', '7', 26, 1, 4), c('A', 'min7', 27, 1, 8),
            c('B', 'min7b5', 29, 1, 4), c('E', '7', 30, 1, 4), c('A', 'min7', 31, 1, 4), c('D', '7', 32, 1, 4)
        ], tags: ['standard']
    },
    {
        id: 'round-midnight', title: "'Round Midnight", composer: 'Monk', style: 'standard', key: 'Eb', tempo: 60, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('Eb', 'min7', 1), c('C', 'min7b5', 2, 1, 1), c('F', '7', 2, 2, 1), c('Bb', '7', 2, 3, 2),
            c('Eb', 'min7', 3, 1, 2), c('Ab', '7', 3, 3, 2), c('B', '7', 4, 1, 2), c('Bb', '7', 4, 3, 2),
            c('Eb', 'min7', 5, 1, 2), c('Ab', '7', 5, 3, 2), c('Db', '7', 6, 1, 2), c('Gb', '7', 6, 3, 2),
            c('C', 'min7b5', 7, 1, 2), c('F', '7', 7, 3, 2), c('B', '7', 8, 1, 1), c('Bb', '7', 8, 2, 1), c('Eb', 'min7', 8, 3, 2),
            // A2
            c('Eb', 'min7', 9), c('C', 'min7b5', 10, 1, 1), c('F', '7', 10, 2, 1), c('Bb', '7', 10, 3, 2),
            c('Eb', 'min7', 11, 1, 2), c('Ab', '7', 11, 3, 2), c('B', '7', 12, 1, 2), c('Bb', '7', 12, 3, 2),
            c('Eb', 'min7', 13, 1, 2), c('Ab', '7', 13, 3, 2), c('Db', '7', 14, 1, 2), c('Gb', '7', 14, 3, 2),
            c('C', 'min7b5', 15, 1, 2), c('F', '7', 15, 3, 2), c('B', '7', 16, 1, 1), c('Bb', '7', 16, 2, 1), c('Eb', 'min7', 16, 3, 2),
            // B
            c('C', 'min7b5', 17, 1, 2), c('F', '7', 17, 3, 2), c('Bb', 'maj7', 18),
            c('C', 'min7b5', 19, 1, 2), c('F', '7', 19, 3, 2), c('Bb', 'maj7', 20),
            c('Gb', 'maj7', 21, 1, 2), c('Ab', '7', 21, 3, 2), c('Db', 'maj7', 22),
            c('C', '7', 23), c('B', '7', 24, 1, 2), c('Bb', '7', 24, 3, 2),
            // A3
            c('Eb', 'min7', 25), c('C', 'min7b5', 26, 1, 1), c('F', '7', 26, 2, 1), c('Bb', '7', 26, 3, 2),
            c('Eb', 'min7', 27, 1, 2), c('Ab', '7', 27, 3, 2), c('B', '7', 28, 1, 2), c('Bb', '7', 28, 3, 2),
            c('Eb', 'min7', 29, 1, 2), c('Ab', '7', 29, 3, 2), c('Db', '7', 30, 1, 2), c('Gb', '7', 30, 3, 2),
            c('C', 'min7b5', 31, 1, 2), c('F', '7', 31, 3, 2), c('B', '7', 32, 1, 1), c('Bb', '7', 32, 2, 1), c('Eb', 'min7', 32, 3, 2)
        ], tags: ['ballad', 'monk']
    },
    {
        id: 'scrapple-from-the-apple', title: 'Scrapple from the Apple', composer: 'Charlie Parker', style: 'bebop', key: 'F', tempo: 180, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('G', 'min7', 1), c('C', '7', 2), c('G', 'min7', 3), c('C', '7', 4),
            c('F', 'maj7', 5), c('G', 'min7', 6, 1, 2), c('C', '7', 6, 3, 2), c('F', 'maj7', 7, 1, 4), c('D', '7', 8, 1, 4),
            // A2
            c('G', 'min7', 9), c('C', '7', 10), c('G', 'min7', 11), c('C', '7', 12),
            c('F', 'maj7', 13), c('G', 'min7', 14, 1, 2), c('C', '7', 14, 3, 2), c('F', 'maj7', 15),
            // B
            c('A', '7', 17, 1, 8), c('D', '7', 19, 1, 8),
            c('G', '7', 21, 1, 8), c('C', '7', 23, 1, 8),
            // A3
            c('G', 'min7', 25), c('C', '7', 26), c('G', 'min7', 27), c('C', '7', 28),
            c('F', 'maj7', 29), c('G', 'min7', 30, 1, 2), c('C', '7', 30, 3, 2), c('F', 'maj7', 31)
        ], tags: ['bebop', 'parker']
    },
    {
        id: 'softly-as-in-a-morning-sunrise', title: 'Softly As in a Morning Sunrise', composer: 'Romberg', style: 'standard', key: 'C', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('C', 'min7', 1), c('D', 'min7b5', 2, 1, 2), c('G', '7', 2, 3, 2),
            c('C', 'min7', 3), c('D', 'min7b5', 4, 1, 2), c('G', '7', 4, 3, 2),
            c('C', 'min7', 5), c('D', 'min7b5', 6, 1, 2), c('G', '7', 6, 3, 2),
            c('C', 'min7', 7, 1, 8),
            // A2
            c('C', 'min7', 9), c('D', 'min7b5', 10, 1, 2), c('G', '7', 10, 3, 2),
            c('C', 'min7', 11), c('D', 'min7b5', 12, 1, 2), c('G', '7', 12, 3, 2),
            c('C', 'min7', 13), c('D', 'min7b5', 14, 1, 2), c('G', '7', 14, 3, 2),
            c('C', 'min7', 15, 1, 8),
            // B
            c('Eb', 'maj7', 17, 1, 8), c('C', '7', 19, 1, 8),
            c('F', 'min7', 21, 1, 8), c('D', '7', 23, 1, 4), c('G', '7', 24, 1, 4),
            // A3
            c('C', 'min7', 25), c('D', 'min7b5', 26, 1, 2), c('G', '7', 26, 3, 2),
            c('C', 'min7', 27), c('D', 'min7b5', 28, 1, 2), c('G', '7', 28, 3, 2),
            c('C', 'min7', 29), c('D', 'min7b5', 30, 1, 2), c('G', '7', 30, 3, 2),
            c('C', 'min7', 31, 1, 8)
        ], tags: ['standard', 'minor']
    },
    {
        id: 'solar', title: 'Solar', composer: 'Miles Davis', style: 'modal', key: 'C', tempo: 140, timeSignature: [4, 4], bars: 12, changes: [
            c('C', 'minMaj7', 1), c('C', 'min7', 2),
            c('G', 'min7', 3), c('C', '7', 4),
            c('F', 'maj7', 5, 1, 8),
            c('F', 'min7', 7), c('Bb', '7', 8),
            c('Eb', 'maj7', 9), c('Eb', 'min7', 10, 1, 2), c('Ab', '7', 10, 3, 2),
            c('Db', 'maj7', 11), c('D', 'min7b5', 12, 1, 2), c('G', '7', 12, 3, 2)
        ], tags: ['modal', 'miles']
    },
    {
        id: 'someday-my-prince-will-come', title: 'Someday My Prince Will Come', composer: 'Churchill', style: 'standard', key: 'Bb', tempo: 140, timeSignature: [3, 4], bars: 32, changes: [
            // A1
            c('Bb', 'maj7', 1), c('D', '7', 2), c('Eb', 'maj7', 3), c('G', '7', 4),
            c('C', 'min7', 5), c('G', '7', 6), c('C', 'min7', 7), c('F', '7', 8),
            // A2
            c('D', 'min7', 9), c('Db', 'dim7', 10), c('C', 'min7', 11), c('F', '7', 12),
            c('D', 'min7', 13), c('G', '7', 14), c('C', 'min7', 15), c('F', '7', 16),
            // B
            c('Eb', 'maj7', 17), c('E', 'dim7', 18), c('D', 'min7', 19), c('G', '7', 20),
            c('C', 'min7', 21), c('F', '7', 22), c('D', 'min7', 23), c('G', '7', 24),
            // A3
            c('Bb', 'maj7', 25), c('D', '7', 26), c('Eb', 'maj7', 27), c('E', 'dim7', 28),
            c('Bb', 'maj7', 29, 1, 2), c('F', '7', 29, 3, 1), c('Bb', 'maj7', 30, 1, 3), c('Bb', 'maj7', 31, 1, 3), c('F', '7', 32, 1, 3)
        ], tags: ['waltz', 'standard']
    },
    {
        id: 'song-for-my-father', title: 'Song for My Father', composer: 'Horace Silver', style: 'latin', key: 'F', tempo: 120, timeSignature: [4, 4], bars: 24, changes: [
            // A1
            c('F', 'min7', 1, 1, 8), c('Eb', '7', 3, 1, 8),
            c('Db', '7', 5), c('C', '7sus4', 6), c('F', 'min7', 7, 1, 8),
            // A2
            c('F', 'min7', 9, 1, 8), c('Eb', '7', 11, 1, 8),
            c('Db', '7', 13), c('C', '7sus4', 14), c('F', 'min7', 15, 1, 8),
            // B
            c('Eb', '7', 17, 1, 8), c('F', 'min7', 19, 1, 8),
            c('Db', '7', 21), c('C', '7sus4', 22), c('F', 'min7', 23, 1, 8)
        ], tags: ['latin', 'silver']
    },
    {
        id: 'st-thomas', title: 'St. Thomas', composer: 'Sonny Rollins', style: 'latin', key: 'C', tempo: 160, timeSignature: [4, 4], bars: 16, changes: [
            // A1
            c('C', 'maj7', 1), c('A', 'min7', 2), c('D', 'min7', 3), c('G', '7', 4),
            c('C', 'maj7', 5), c('A', 'min7', 6), c('D', 'min7', 7), c('G', '7', 8),
            // B
            c('E', 'min7', 9), c('A', '7', 10), c('D', 'min7', 11), c('G', '7', 12),
            // A2
            c('C', 'maj7', 13), c('C', 'maj7', 14), c('C', 'maj7', 15), c('C', 'maj7', 16)
        ], tags: ['latin', 'rollins']
    },
    {
        id: 'stablemates', title: 'Stablemates', composer: 'Benny Golson', style: 'standard', key: 'Db', tempo: 130, timeSignature: [4, 4], bars: 36, changes: [
            // A1
            c('E', 'min7', 1, 1, 2), c('A', '7', 1, 3, 2), c('Eb', 'maj7', 2), c('Ab', '7', 3), c('Db', 'maj7', 4, 1, 8),
            c('C', 'min7', 6, 1, 2), c('F', '7', 6, 3, 2), c('Bb', 'min7', 7, 1, 2), c('Eb', '7', 7, 3, 2),
            c('Ab', 'maj7', 8), c('Db', '7', 9), c('Gb', 'maj7', 10), c('B', '7', 11),
            c('F', 'min7', 12), c('Bb', '7', 13), c('E', 'min7', 14, 1, 2), c('A', '7', 14, 3, 2),
            // B
            c('Eb', 'min7', 15), c('Ab', '7', 16), c('Db', 'maj7', 17, 1, 8),
            c('D', 'min7', 19), c('G', '7', 20), c('C', 'maj7', 21, 1, 8),
            // A2
            c('E', 'min7', 23, 1, 2), c('A', '7', 23, 3, 2), c('Eb', 'maj7', 24), c('Ab', '7', 25), c('Db', 'maj7', 26, 1, 8),
            c('C', 'min7', 28, 1, 2), c('F', '7', 28, 3, 2), c('Bb', 'min7', 29, 1, 2), c('Eb', '7', 29, 3, 2),
            c('Ab', 'maj7', 30), c('Db', '7', 31), c('Gb', 'maj7', 32), c('B', '7', 33),
            c('F', 'min7', 34), c('Bb', '7', 35), c('Db', 'maj7', 36)
        ], tags: ['standard', 'golson']
    },
    {
        id: 'stella-by-starlight', title: 'Stella by Starlight', composer: 'Victor Young', style: 'standard', key: 'Bb', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [
            c('E', 'min7b5', 1), c('A', '7', 2),
            c('C', 'min7', 3), c('F', '7', 4),
            c('F', 'min7', 5), c('Bb', '7', 6),
            c('Eb', 'maj7', 7), c('Ab', '7', 8),
            c('Bb', 'maj7', 9), c('E', 'min7b5', 10, 1, 2), c('A', '7', 10, 3, 2),
            c('D', 'min7b5', 11), c('G', '7', 12),
            c('C', 'min7b5', 13), c('F', '7', 14),
            c('Bb', 'maj7', 15),
            c('E', 'min7b5', 17), c('A', '7', 18),
            c('D', 'min7b5', 19), c('G', '7', 20),
            c('C', 'min7b5', 21), c('F', '7', 22),
            c('Bb', 'maj7', 23),
            c('E', 'min7b5', 25), c('A', '7', 26),
            c('D', 'min7b5', 27), c('G', '7', 28),
            c('C', 'min7', 29), c('F', '7', 30),
            c('Bb', 'maj7', 31, 1, 2), c('F', '7', 31, 3, 2),
            c('Bb', 'maj7', 32)
        ], tags: ['standard']
    },
    {
        id: 'take-the-a-train', title: 'Take the "A" Train', composer: 'Strayhorn', style: 'standard', key: 'C', tempo: 150, timeSignature: [4, 4], bars: 32, changes: [
            c('C', 'maj7', 1), c('C', 'maj7', 2), c('D', '7#11', 3), c('D', '7#11', 4),
            c('D', 'min7', 5), c('G', '7', 6), c('C', 'maj7', 7), c('C', 'maj7', 8),
            // A2
            c('C', 'maj7', 9), c('C', 'maj7', 10), c('D', '7#11', 11), c('D', '7#11', 12),
            c('D', 'min7', 13), c('G', '7', 14), c('C', 'maj7', 15), c('C', '7', 16),
            // Bridge
            c('F', 'maj7', 17), c('F', 'maj7', 18), c('F', 'maj7', 19), c('F', 'maj7', 20),
            c('D', '7', 21), c('D', '7', 22), c('D', 'min7', 23), c('G', '7', 24),
            // A3
            c('C', 'maj7', 25), c('C', 'maj7', 26), c('D', '7#11', 27), c('D', '7#11', 28),
            c('D', 'min7', 29), c('G', '7', 30), c('C', 'maj7', 31), c('C', 'maj7', 32),
        ], tags: ['standard', 'ellington']
    },
    {
        id: 'there-will-never-be-another-you', title: 'There Will Never Be Another You', composer: 'Warren', style: 'standard', key: 'Eb', tempo: 150, timeSignature: [4, 4], bars: 32, changes: [
            c('Eb', 'maj7', 1), c('Eb', 'maj7', 2), c('D', 'min7b5', 3), c('G', '7', 4),
            c('C', 'min7', 5), c('C', 'min7', 6), c('Bb', 'min7', 7), c('Eb', '7', 8),
            c('Ab', 'maj7', 9), c('Ab', 'maj7', 10), c('Db', '7', 11), c('Db', '7', 12),
            c('Eb', 'maj7', 13), c('Eb', 'maj7', 14), c('D', 'min7b5', 15), c('G', '7', 16),
            // B Section
            c('C', 'min7', 17), c('C', 'min7', 18), c('F', '7', 19), c('F', '7', 20),
            c('F', 'min7', 21), c('F', 'min7', 22), c('Bb', '7', 23), c('Bb', '7', 24),
            c('Eb', 'maj7', 25), c('D', 'min7b5', 26, 1, 2), c('G', '7', 26, 3, 2),
            c('C', 'min7', 27), c('F', '7', 28),
            c('F', 'min7', 29), c('Bb', '7', 30), c('Eb', 'maj7', 31), c('Eb', 'maj7', 32),
        ], tags: ['standard']
    },
    {
        id: 'well-you-neednt', title: "Well You Needn't", composer: 'Thelonious Monk', style: 'bebop', key: 'F', tempo: 160, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('F', 'maj7', 1, 1, 2), c('Gb', '7', 1, 3, 2), c('F', 'maj7', 2, 1, 2), c('Gb', '7', 2, 3, 2),
            c('F', 'maj7', 3, 1, 2), c('Gb', '7', 3, 3, 2), c('F', 'maj7', 4, 1, 2), c('Gb', '7', 4, 3, 2),
            c('F', 'maj7', 5, 1, 2), c('Gb', '7', 5, 3, 2), c('F', 'maj7', 6, 1, 2), c('Gb', '7', 6, 3, 2),
            c('F', 'maj7', 7, 1, 2), c('Gb', '7', 7, 3, 2), c('F', 'maj7', 8, 1, 8),
            // B
            c('Db', '7', 9, 1, 8), c('D', '7', 11, 1, 8),
            c('Eb', '7', 13, 1, 8), c('E', '7', 15, 1, 8),
            // A2
            c('F', 'maj7', 17, 1, 2), c('Gb', '7', 17, 3, 2), c('F', 'maj7', 18, 1, 2), c('Gb', '7', 18, 3, 2),
            c('F', 'maj7', 19, 1, 2), c('Gb', '7', 19, 3, 2), c('F', 'maj7', 20, 1, 2), c('Gb', '7', 20, 3, 2),
            c('F', 'maj7', 21, 1, 2), c('Gb', '7', 21, 3, 2), c('F', 'maj7', 22, 1, 2), c('Gb', '7', 22, 3, 2),
            c('F', 'maj7', 23, 1, 2), c('Gb', '7', 23, 3, 2), c('F', 'maj7', 24, 1, 8),
            // A3 (Ending?) - Actually AABA
            c('F', 'maj7', 25, 1, 2), c('Gb', '7', 25, 3, 2), c('F', 'maj7', 26, 1, 2), c('Gb', '7', 26, 3, 2),
            c('F', 'maj7', 27, 1, 2), c('Gb', '7', 27, 3, 2), c('F', 'maj7', 28, 1, 2), c('Gb', '7', 28, 3, 2),
            c('F', 'maj7', 29, 1, 2), c('Gb', '7', 29, 3, 2), c('F', 'maj7', 30, 1, 2), c('Gb', '7', 30, 3, 2),
            c('F', 'maj7', 31, 1, 2), c('Gb', '7', 31, 3, 2), c('F', 'maj7', 32, 1, 8)
        ], tags: ['bebop', 'monk']
    },
    {
        id: 'what-is-this-thing-called-love', title: 'What Is This Thing Called Love?', composer: 'Cole Porter', style: 'standard', key: 'C', tempo: 160, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('G', 'min7b5', 1), c('C', '7b9', 2), c('F', 'min7', 3, 1, 8),
            c('D', 'min7b5', 5), c('G', '7b9', 6), c('C', 'maj7', 7, 1, 8),
            // A2
            c('G', 'min7b5', 9), c('C', '7b9', 10), c('F', 'min7', 11, 1, 8),
            c('D', 'min7b5', 13), c('G', '7b9', 14), c('C', 'maj7', 15, 1, 8),
            // B
            c('C', 'min7', 17), c('F', '7', 18), c('Bb', 'maj7', 19, 1, 8),
            c('Ab', '7', 21), c('G', '7', 22), c('C', 'maj7', 23, 1, 8),
            // C (A3)
            c('G', 'min7b5', 25), c('C', '7b9', 26), c('F', 'min7', 27, 1, 8),
            c('D', 'min7b5', 29), c('G', '7b9', 30), c('C', 'maj7', 31, 1, 8)
        ], tags: ['standard', 'porter']
    },
    {
        id: 'yardbird-suite', title: 'Yardbird Suite', composer: 'Charlie Parker', style: 'bebop', key: 'C', tempo: 170, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('C', 'maj7', 1), c('F', 'min7', 2, 1, 2), c('Bb', '7', 2, 3, 2),
            c('C', 'maj7', 3), c('G', 'min7', 4, 1, 2), c('C', '7', 4, 3, 2),
            c('F', 'maj7', 5), c('Bb', '7', 6), c('C', 'maj7', 7), c('A', 'min7', 8, 1, 2), c('D', '7', 8, 3, 2),
            // A2
            c('C', 'maj7', 9), c('F', 'min7', 10, 1, 2), c('Bb', '7', 10, 3, 2),
            c('C', 'maj7', 11), c('G', 'min7', 12, 1, 2), c('C', '7', 12, 3, 2),
            c('F', 'maj7', 13), c('Bb', '7', 14), c('C', 'maj7', 15), c('A', 'min7', 16, 1, 2), c('D', '7', 16, 3, 2),
            // B
            c('E', 'min7', 17), c('A', '7', 18), c('D', 'min7', 19), c('G', '7', 20),
            c('D', 'min7', 21), c('G', '7', 22), c('C', 'maj7', 23), c('B', 'min7b5', 24, 1, 2), c('E', '7', 24, 3, 2),
            // A3
            c('C', 'maj7', 25), c('F', 'min7', 26, 1, 2), c('Bb', '7', 26, 3, 2),
            c('C', 'maj7', 27), c('G', 'min7', 28, 1, 2), c('C', '7', 28, 3, 2),
            c('F', 'maj7', 29), c('Bb', '7', 30), c('C', 'maj7', 31, 1, 8)
        ], tags: ['bebop', 'parker']
    },
    {
        id: 'yesterdays', title: 'Yesterdays', composer: 'Jerome Kern', style: 'standard', key: 'D', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('D', 'min7', 1, 1, 8), c('E', 'min7b5', 3, 1, 4), c('A', '7', 4, 1, 4),
            c('D', 'min7', 5, 1, 8), c('E', 'min7b5', 7, 1, 4), c('A', '7', 8, 1, 4),
            // A2
            c('D', 'min7', 9, 1, 4), c('G', '7', 10, 1, 4), c('C', 'maj7', 11, 1, 8),
            c('F', 'maj7', 13, 1, 8), c('B', 'min7b5', 15, 1, 4), c('E', '7', 16, 1, 4),
            // B
            c('A', '7', 17, 1, 16), // Simplified pedal? No, usually Dm
            c('D', 'min7', 17, 1, 4), c('E', 'min7b5', 18, 1, 2), c('A', '7', 18, 3, 2),
            c('D', 'min7', 19, 1, 4), c('E', 'min7b5', 20, 1, 2), c('A', '7', 20, 3, 2),
            c('D', 'min7', 21, 1, 4), c('G', '7', 22, 1, 4), c('C', 'maj7', 23, 1, 4), c('F', 'maj7', 24, 1, 4),
            // C
            c('E', 'min7b5', 25, 1, 4), c('A', '7', 26, 1, 4), c('D', 'min7', 27, 1, 8),
            c('E', 'min7b5', 29, 1, 4), c('A', '7', 30, 1, 4), c('D', 'min7', 31, 1, 8)
        ], tags: ['standard', 'minor']
    },
    {
        id: 'beautiful-love', title: 'Beautiful Love', composer: 'Young', style: 'standard', key: 'D', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('E', 'min7b5', 1), c('A', '7', 2), c('D', 'min7', 3, 1, 8),
            c('G', 'min7', 5), c('C', '7', 6), c('F', 'maj7', 7, 1, 4), c('E', 'min7b5', 8, 1, 2), c('A', '7', 8, 3, 2),
            // A2
            c('E', 'min7b5', 9), c('A', '7', 10), c('D', 'min7', 11, 1, 8),
            c('G', 'min7', 13), c('C', '7', 14), c('F', 'maj7', 15, 1, 4), c('E', 'min7b5', 16, 1, 2), c('A', '7', 16, 3, 2),
            // B
            c('G', 'min7', 17), c('C', '7', 18), c('F', 'maj7', 19, 1, 8),
            c('E', 'min7b5', 21), c('A', '7', 22), c('D', 'min7', 23, 1, 8),
            // C
            c('E', 'min7b5', 25), c('A', '7', 26), c('D', 'min7', 27), c('G', '7', 28),
            c('Bb', '7', 29), c('A', '7', 30), c('D', 'min7', 31, 1, 8)
        ], tags: ['standard', 'minor']
    },
    {
        id: 'black-orpheus', title: 'Black Orpheus', composer: 'Bonfá', style: 'bossa', key: 'A', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('A', 'min7', 1, 1, 4), c('B', 'min7b5', 2, 1, 2), c('E', '7', 2, 3, 2),
            c('A', 'min7', 3, 1, 4), c('A', 'min7', 4, 1, 4),
            c('D', 'min7', 5, 1, 4), c('G', '7', 6, 1, 4),
            c('C', 'maj7', 7, 1, 4), c('F', 'maj7', 8, 1, 4),
            c('B', 'min7b5', 9, 1, 4), c('E', '7', 10, 1, 4),
            c('A', 'min7', 11, 1, 4), c('E', 'min7b5', 12, 1, 2), c('A', '7', 12, 3, 2),
            c('D', 'min7', 13, 1, 4), c('G', '7', 14, 1, 4),
            c('C', 'maj7', 15, 1, 4), c('E', '7', 16, 1, 4), // Turnaround
            // A2
            c('A', 'min7', 17, 1, 4), c('B', 'min7b5', 18, 1, 2), c('E', '7', 18, 3, 2),
            c('A', 'min7', 19, 1, 4), c('E', 'min7b5', 20, 1, 2), c('A', '7', 20, 3, 2),
            c('D', 'min7', 21, 1, 4), c('G', '7', 22, 1, 4),
            c('C', 'maj7', 23, 1, 8),
            c('F', 'maj7', 25, 1, 4), c('B', 'min7b5', 26, 1, 2), c('E', '7', 26, 3, 2),
            c('A', 'min7', 27, 1, 4), c('D', 'min7', 28, 1, 4),
            c('A', 'min7', 29, 1, 4), c('B', 'min7b5', 30, 1, 2), c('E', '7', 30, 3, 2),
            c('A', 'min7', 31, 1, 8)
        ], tags: ['bossa', 'standard']
    },
    {
        id: 'georgia-on-my-mind', title: 'Georgia on My Mind', composer: 'Carmichael', style: 'standard', key: 'F', tempo: 70, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('F', 'maj7', 1), c('E', '7', 2), c('D', 'min7', 3), c('G', 'min7', 4, 1, 2), c('C', '7', 4, 3, 2),
            c('F', 'maj7', 5, 1, 2), c('E', '7', 5, 3, 2), c('D', 'min7', 6, 1, 2), c('G', '7', 6, 3, 2),
            c('A', 'min7', 7, 1, 2), c('D', '7', 7, 3, 2), c('G', 'min7', 8, 1, 2), c('C', '7', 8, 3, 2),
            // A2
            c('F', 'maj7', 9), c('E', '7', 10), c('D', 'min7', 11), c('G', 'min7', 12, 1, 2), c('C', '7', 12, 3, 2),
            c('F', 'maj7', 13, 1, 2), c('E', '7', 13, 3, 2), c('D', 'min7', 14, 1, 2), c('G', '7', 14, 3, 2),
            c('A', 'min7', 15, 1, 2), c('C', '7', 15, 3, 2), c('F', 'maj7', 16, 1, 8),
            // B
            c('D', 'min7', 17), c('G', 'min7', 18), c('D', 'min7', 19), c('G', '7', 20),
            c('D', 'min7', 21), c('G', 'min7', 22), c('D', 'min7', 23), c('G', '7', 24, 1, 2), c('C', '7', 24, 3, 2),
            // A3
            c('F', 'maj7', 25), c('E', '7', 26), c('D', 'min7', 27), c('G', 'min7', 28, 1, 2), c('C', '7', 28, 3, 2),
            c('F', 'maj7', 29, 1, 2), c('E', '7', 29, 3, 2), c('D', 'min7', 30, 1, 2), c('G', '7', 30, 3, 2),
            c('A', 'min7', 31, 1, 2), c('C', '7', 31, 3, 2), c('F', 'maj7', 32, 1, 8)
        ], tags: ['ballad', 'standard']
    },
    {
        id: 'alice-in-wonderland', title: 'Alice in Wonderland', composer: 'Fain', style: 'standard', key: 'C', tempo: 110, timeSignature: [3, 4], bars: 64, changes: [
            // A1
            c('D', 'min7', 1), c('G', '7', 2), c('C', 'maj7', 3, 1, 6),
            c('F', 'maj7', 5, 1, 3), c('B', 'min7b5', 6), c('E', '7', 7),
            c('A', 'min7', 8), c('Eb', '7', 9), c('D', 'min7', 10), c('G', '7', 11),
            c('E', 'min7', 12), c('A', '7', 13), c('D', 'min7', 14), c('G', '7', 15), c('C', 'maj7', 16, 1, 3),
            // A2
            c('D', 'min7', 17), c('G', '7', 18), c('C', 'maj7', 19, 1, 6),
            c('F', 'maj7', 21, 1, 3), c('B', 'min7b5', 22), c('E', '7', 23),
            c('A', 'min7', 24), c('Eb', '7', 25), c('D', 'min7', 26), c('G', '7', 27),
            c('E', 'min7', 28), c('A', '7', 29), c('D', 'min7', 30), c('G', '7', 31), c('C', 'maj7', 32, 1, 3),
            // B
            c('D', 'min7', 33), c('G', '7', 34), c('C', 'maj7', 35, 1, 6),
            c('F', 'min7', 37), c('Bb', '7', 38), c('Eb', 'maj7', 39, 1, 6),
            c('E', 'min7b5', 41), c('A', '7', 42), c('D', 'min7', 43), c('G', '7', 44),
            c('E', 'min7', 45), c('A', '7', 46), c('D', 'min7', 47), c('G', '7', 48),
            // A3
            c('D', 'min7', 49), c('G', '7', 50), c('C', 'maj7', 51, 1, 6),
            c('F', 'maj7', 53, 1, 3), c('B', 'min7b5', 54), c('E', '7', 55),
            c('A', 'min7', 56), c('Eb', '7', 57), c('D', 'min7', 58), c('G', '7', 59),
            c('E', 'min7', 60), c('A', '7', 61), c('D', 'min7', 62), c('G', '7', 63), c('C', 'maj7', 64, 1, 3)
        ], tags: ['waltz', 'standard']
    },
    {
        id: 'angel-eyes', title: 'Angel Eyes', composer: 'Dennis', style: 'standard', key: 'C', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('C', 'min7', 1), c('D', 'min7b5', 2, 1, 2), c('G', '7', 2, 3, 2),
            c('C', 'min7', 3), c('D', 'min7b5', 4, 1, 2), c('G', '7', 4, 3, 2),
            c('C', 'min7', 5), c('F', 'min7', 6, 1, 2), c('Bb', '7', 6, 3, 2),
            c('Eb', 'maj7', 7, 1, 2), c('Ab', 'maj7', 7, 3, 2), c('D', 'min7b5', 8, 1, 2), c('G', '7', 8, 3, 2),
            // A2
            c('C', 'min7', 9), c('D', 'min7b5', 10, 1, 2), c('G', '7', 10, 3, 2),
            c('C', 'min7', 11), c('D', 'min7b5', 12, 1, 2), c('G', '7', 12, 3, 2),
            c('C', 'min7', 13), c('F', 'min7', 14, 1, 2), c('Bb', '7', 14, 3, 2),
            c('Eb', 'maj7', 15, 1, 2), c('Ab', 'maj7', 15, 3, 2), c('C', 'min7', 16, 1, 8),
            // B
            c('Bb', 'min7', 17, 1, 2), c('Eb', '7', 17, 3, 2), c('Ab', 'maj7', 18, 1, 8),
            c('Ab', 'min7', 19, 1, 2), c('Db', '7', 19, 3, 2), c('Gb', 'maj7', 20, 1, 8),
            c('Gb', 'min7', 21, 1, 2), c('B', '7', 21, 3, 2), c('E', 'maj7', 22, 1, 8),
            c('D', 'min7b5', 23, 1, 2), c('G', '7', 23, 3, 2), c('G', '7', 24, 1, 8),
            // A3
            c('C', 'min7', 25), c('D', 'min7b5', 26, 1, 2), c('G', '7', 26, 3, 2),
            c('C', 'min7', 27), c('D', 'min7b5', 28, 1, 2), c('G', '7', 28, 3, 2),
            c('C', 'min7', 29), c('F', 'min7', 30, 1, 2), c('Bb', '7', 30, 3, 2),
            c('Eb', 'maj7', 31, 1, 2), c('Ab', 'maj7', 31, 3, 2), c('C', 'min7', 32, 1, 8)
        ], tags: ['blues', 'minor']
    },
    {
        id: 'anthropology', title: 'Anthropology', composer: 'Parker/Gillespie', style: 'bebop', key: 'Bb', tempo: 220, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('Bb', 'maj7', 1, 1, 2), c('G', '7', 1, 3, 2), c('C', 'min7', 2, 1, 2), c('F', '7', 2, 3, 2),
            c('Bb', 'maj7', 3, 1, 2), c('G', '7', 3, 3, 2), c('C', 'min7', 4, 1, 2), c('F', '7', 4, 3, 2),
            c('Bb', 'maj7', 5, 1, 2), c('Bb', '7', 5, 3, 2), c('Eb', 'maj7', 6, 1, 2), c('E', 'dim7', 6, 3, 2),
            c('Bb', 'maj7', 7, 1, 2), c('G', '7', 7, 3, 2), c('C', 'min7', 8, 1, 2), c('F', '7', 8, 3, 2),
            // A2
            c('Bb', 'maj7', 9, 1, 2), c('G', '7', 9, 3, 2), c('C', 'min7', 10, 1, 2), c('F', '7', 10, 3, 2),
            c('Bb', 'maj7', 11, 1, 2), c('G', '7', 11, 3, 2), c('C', 'min7', 12, 1, 2), c('F', '7', 12, 3, 2),
            c('Bb', 'maj7', 13, 1, 2), c('Bb', '7', 13, 3, 2), c('Eb', 'maj7', 14, 1, 2), c('E', 'dim7', 14, 3, 2),
            c('Bb', 'maj7', 15, 1, 2), c('F', '7', 15, 3, 2), c('Bb', 'maj7', 16),
            // B
            c('D', '7', 17, 1, 8), c('G', '7', 19, 1, 8),
            c('C', '7', 21, 1, 8), c('F', '7', 23, 1, 8),
            // A3
            c('Bb', 'maj7', 25, 1, 2), c('G', '7', 25, 3, 2), c('C', 'min7', 26, 1, 2), c('F', '7', 26, 3, 2),
            c('Bb', 'maj7', 27, 1, 2), c('G', '7', 27, 3, 2), c('C', 'min7', 28, 1, 2), c('F', '7', 28, 3, 2),
            c('Bb', 'maj7', 29, 1, 2), c('Bb', '7', 29, 3, 2), c('Eb', 'maj7', 30, 1, 2), c('E', 'dim7', 30, 3, 2),
            c('Bb', 'maj7', 31, 1, 2), c('F', '7', 31, 3, 2), c('Bb', 'maj7', 32)
        ], tags: ['bebop', 'rhythm-changes']
    },
    {
        id: 'au-privave', title: 'Au Privave', composer: 'Charlie Parker', style: 'bebop', key: 'F', tempo: 160, timeSignature: [4, 4], bars: 12, changes: [
            c('F', '7', 1), c('F', '7', 2), c('F', '7', 3), c('C', 'min7', 4, 1, 2), c('F', '7', 4, 3, 2),
            c('Bb', '7', 5), c('B', 'dim7', 6), c('F', '7', 7), c('D', '7', 8),
            c('G', 'min7', 9), c('C', '7', 10), c('F', '7', 11, 1, 2), c('D', '7', 11, 3, 2), c('G', 'min7', 12, 1, 2), c('C', '7', 12, 3, 2)
        ], tags: ['blues', 'parker']
    },
    {
        id: 'be-my-love', title: 'Be My Love', composer: 'Brodszky', style: 'standard', key: 'G', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('G', 'maj7', 1), c('A', 'min7', 2, 1, 2), c('D', '7', 2, 3, 2),
            c('B', 'min7', 3), c('E', '7', 4),
            c('A', 'min7', 5), c('D', '7', 6),
            c('G', 'maj7', 7), c('G', '6', 8),
            // A2
            c('F#', 'min7b5', 9), c('B', '7', 10),
            c('E', 'min7', 11), c('C', 'min6', 12),
            c('G', 'maj7', 13, 1, 2), c('E', '7', 13, 3, 2), c('A', 'min7', 14, 1, 2), c('D', '7', 14, 3, 2),
            c('G', 'maj7', 15, 1, 8),
            // A1 Repeat
            c('G', 'maj7', 17), c('A', 'min7', 18, 1, 2), c('D', '7', 18, 3, 2),
            c('B', 'min7', 19), c('E', '7', 20),
            c('A', 'min7', 21), c('D', '7', 22),
            c('G', 'maj7', 23), c('G', '6', 24),
            // A2 Repeat
            c('F#', 'min7b5', 25), c('B', '7', 26),
            c('E', 'min7', 27), c('C', 'min6', 28),
            c('G', 'maj7', 29, 1, 2), c('E', '7', 29, 3, 2), c('A', 'min7', 30, 1, 2), c('D', '7', 30, 3, 2),
            c('G', 'maj7', 31, 1, 8)
        ], tags: ['standard']
    },
    {
        id: 'bernies-tune', title: "Bernie's Tune", composer: 'Miller', style: 'standard', key: 'D', tempo: 150, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('D', 'min7', 1, 1, 8), c('E', 'min7b5', 3, 1, 4), c('A', '7', 4, 1, 4),
            c('D', 'min7', 5, 1, 8), c('Bb', '7', 7, 1, 4), c('A', '7', 8, 1, 4),
            // A2
            c('D', 'min7', 9, 1, 8), c('E', 'min7b5', 11, 1, 4), c('A', '7', 12, 1, 4),
            c('D', 'min7', 13, 1, 8), c('D', 'min7', 15, 1, 8),
            // B
            c('Bb', 'maj7', 17, 1, 8), c('Eb', 'maj7', 19, 1, 8),
            c('Ab', 'maj7', 21, 1, 8), c('A', '7', 23, 1, 8),
            // A3
            c('D', 'min7', 25, 1, 8), c('E', 'min7b5', 27, 1, 4), c('A', '7', 28, 1, 4),
            c('D', 'min7', 29, 1, 8), c('Bb', '7', 31, 1, 4), c('A', '7', 32, 1, 4)
        ], tags: ['standard', 'minor']
    },
    {
        id: 'bewitched', title: 'Bewitched', composer: 'Rodgers', style: 'standard', key: 'C', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('C', 'maj7', 1), c('D', 'min7', 2), c('E', 'min7', 3), c('Eb', 'dim7', 4),
            c('D', 'min7', 5), c('G', '7', 6), c('C', 'maj7', 7), c('C', '7', 8),
            c('F', 'maj7', 9), c('F', 'min7', 10), c('C', 'maj7', 11), c('A', 'min7', 12),
            c('D', '7', 13, 1, 8), c('D', 'min7', 15), c('G', '7', 16),
            // A2
            c('C', 'maj7', 17), c('D', 'min7', 18), c('E', 'min7', 19), c('Eb', 'dim7', 20),
            c('D', 'min7', 21), c('G', '7', 22), c('C', 'maj7', 23), c('C', '7', 24),
            c('F', 'maj7', 25), c('F', 'min7', 26), c('C', 'maj7', 27), c('A', 'min7', 28),
            c('D', '7', 29, 1, 8), c('D', 'min7', 31), c('G', '7', 32)
        ], tags: ['standard']
    },
    {
        id: 'blue-in-green', title: 'Blue in Green', composer: 'Miles/Evans', style: 'modal', key: 'C', tempo: 60, timeSignature: [4, 4], bars: 10, changes: [
            c('Bb', 'maj7', 1), c('A', '7alt', 2), c('D', 'min7', 3), c('Db', '7', 4),
            c('C', 'min7', 5), c('F', '7', 6), c('Bb', 'maj7', 7), c('A', '7alt', 8),
            c('D', 'min7', 9), c('E', '7alt', 10, 1, 2), c('A', '7alt', 10, 3, 2),
        ], tags: ['modal', 'ballad']
    },
    {
        id: 'blue-moon', title: 'Blue Moon', composer: 'Rodgers', style: 'standard', key: 'Eb', tempo: 100, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('Eb', 'maj7', 1, 1, 2), c('C', 'min7', 1, 3, 2), c('F', 'min7', 2, 1, 2), c('Bb', '7', 2, 3, 2),
            c('Eb', 'maj7', 3, 1, 2), c('C', 'min7', 3, 3, 2), c('F', 'min7', 4, 1, 2), c('Bb', '7', 4, 3, 2),
            c('Eb', 'maj7', 5, 1, 2), c('Ab', 'maj7', 5, 3, 2), c('Eb', 'maj7', 6, 1, 2), c('Bb', '7', 6, 3, 2),
            c('Eb', 'maj7', 7), c('Bb', '7', 8),
            // A2
            c('Eb', 'maj7', 9, 1, 2), c('C', 'min7', 9, 3, 2), c('F', 'min7', 10, 1, 2), c('Bb', '7', 10, 3, 2),
            c('Eb', 'maj7', 11, 1, 2), c('C', 'min7', 11, 3, 2), c('F', 'min7', 12, 1, 2), c('Bb', '7', 12, 3, 2),
            c('Eb', 'maj7', 13, 1, 2), c('Ab', 'maj7', 13, 3, 2), c('Eb', 'maj7', 14, 1, 2), c('Bb', '7', 14, 3, 2),
            c('Eb', 'maj7', 15, 1, 8),
            // B
            c('Ab', 'maj7', 17, 1, 8), c('F', 'min7', 19, 1, 4), c('Bb', '7', 20, 1, 4),
            c('Eb', 'maj7', 21, 1, 8), c('F', '7', 23, 1, 4), c('Bb', '7', 24, 1, 4),
            // A3
            c('Eb', 'maj7', 25, 1, 2), c('C', 'min7', 25, 3, 2), c('F', 'min7', 26, 1, 2), c('Bb', '7', 26, 3, 2),
            c('Eb', 'maj7', 27, 1, 2), c('C', 'min7', 27, 3, 2), c('F', 'min7', 28, 1, 2), c('Bb', '7', 28, 3, 2),
            c('Eb', 'maj7', 29, 1, 2), c('Ab', 'maj7', 29, 3, 2), c('Eb', 'maj7', 30, 1, 2), c('Bb', '7', 30, 3, 2),
            c('Eb', 'maj7', 31, 1, 8)
        ], tags: ['standard']
    },
    {
        id: 'blues-for-alice', title: 'Blues for Alice', composer: 'Charlie Parker', style: 'bebop', key: 'F', tempo: 140, timeSignature: [4, 4], bars: 12, changes: [
            c('F', 'maj7', 1), c('E', 'min7b5', 2, 1, 2), c('A', '7', 2, 3, 2),
            c('D', 'min7', 3, 1, 2), c('G', '7', 3, 3, 2), c('C', 'min7', 4, 1, 2), c('F', '7', 4, 3, 2),
            c('Bb', '7', 5), c('Bb', 'min7', 6, 1, 2), c('Eb', '7', 6, 3, 2),
            c('A', 'min7', 7, 1, 2), c('D', '7', 7, 3, 2), c('Ab', 'min7', 8, 1, 2), c('Db', '7', 8, 3, 2),
            c('G', 'min7', 9), c('C', '7', 10), c('F', 'maj7', 11, 1, 2), c('D', '7', 11, 3, 2), c('G', 'min7', 12, 1, 2), c('C', '7', 12, 3, 2)
        ], tags: ['blues', 'parker']
    },
    {
        id: 'chelsea-bridge', title: 'Chelsea Bridge', composer: 'Strayhorn', style: 'standard', key: 'Db', tempo: 70, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('Bb', 'minMaj7', 1), c('Eb', '7#11', 2), c('Ab', 'min7', 3), c('Db', '7', 4),
            c('Gb', 'maj7', 5), c('Eb', 'min7', 6, 1, 2), c('Ab', '7', 6, 3, 2), c('Db', 'maj7', 7, 1, 2), c('C', '7alt', 7, 3, 2), c('F', '7', 8),
            // A2
            c('Bb', 'minMaj7', 9), c('Eb', '7#11', 10), c('Ab', 'min7', 11), c('Db', '7', 12),
            c('Gb', 'maj7', 13), c('Eb', 'min7', 14, 1, 2), c('Ab', '7', 14, 3, 2), c('Db', 'maj7', 15, 1, 8),
            // B
            c('F#', 'min7', 17), c('B', '7', 18), c('E', 'maj7', 19, 1, 8),
            c('E', 'min7', 21), c('A', '7', 22), c('D', 'maj7', 23), c('G', '7', 24),
            // A3
            c('Bb', 'minMaj7', 25), c('Eb', '7#11', 26), c('Ab', 'min7', 27), c('Db', '7', 28),
            c('Gb', 'maj7', 29), c('Eb', 'min7', 30, 1, 2), c('Ab', '7', 30, 3, 2), c('Db', 'maj7', 31, 1, 8)
        ], tags: ['ballad', 'strayhorn']
    },
    {
        id: 'come-rain-or-come-shine', title: 'Come Rain or Come Shine', composer: 'Arlen', style: 'standard', key: 'F', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('F', 'maj7', 1), c('E', 'min7b5', 2, 1, 2), c('A', '7', 2, 3, 2), c('D', 'min7', 3, 1, 8),
            c('Bb', 'maj7', 5), c('E', 'min7b5', 6, 1, 2), c('A', '7', 6, 3, 2), c('D', 'min7', 7, 1, 8),
            // A2
            c('D', 'min7', 9), c('G', '7', 10), c('C', 'maj7', 11, 1, 8),
            c('G', 'min7', 13), c('C', '7', 14), c('F', 'maj7', 15, 1, 2), c('D', '7', 15, 3, 2), c('G', 'min7', 16, 1, 2), c('C', '7', 16, 3, 2),
            // B
            c('Bb', 'maj7', 17), c('B', 'dim7', 18), c('F', 'maj7', 19), c('D', '7', 20),
            c('G', 'min7', 21), c('C', '7', 22), c('F', 'maj7', 23, 1, 4), c('C', 'min7', 23, 3, 2), c('F', '7', 23, 5, 2),
            // C
            c('Bb', 'maj7', 25), c('B', 'dim7', 26), c('F', 'maj7', 27), c('D', '7', 28),
            c('G', 'min7', 29), c('C', '7', 30), c('F', 'maj7', 31, 1, 8)
        ], tags: ['standard']
    },
    {
        id: 'con-alma', title: 'Con Alma', composer: 'Gillespie', style: 'latin', key: 'E', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('E', 'maj7', 1), c('B', 'min7', 2, 1, 2), c('E', '7', 2, 3, 2), c('A', 'maj7', 3), c('F#', 'min7', 4, 1, 2), c('B', '7', 4, 3, 2),
            c('E', 'maj7', 5), c('F', 'maj7', 6), c('E', 'maj7', 7), c('B', '7', 8),
            // A2
            c('E', 'maj7', 9), c('B', 'min7', 10, 1, 2), c('E', '7', 10, 3, 2), c('A', 'maj7', 11), c('F#', 'min7', 12, 1, 2), c('B', '7', 12, 3, 2),
            c('E', 'maj7', 13), c('F', 'maj7', 14), c('E', 'maj7', 15, 1, 8),
            // B
            c('G', 'maj7', 17), c('C', 'min7', 18, 1, 2), c('F', '7', 18, 3, 2), c('Bb', 'maj7', 19), c('Eb', 'min7', 20, 1, 2), c('Ab', '7', 20, 3, 2),
            c('Db', 'maj7', 21), c('Gb', 'min7', 22, 1, 2), c('B', '7', 22, 3, 2), c('E', 'maj7', 23), c('B', '7', 24),
            // A3
            c('E', 'maj7', 25), c('B', 'min7', 26, 1, 2), c('E', '7', 26, 3, 2), c('A', 'maj7', 27), c('F#', 'min7', 28, 1, 2), c('B', '7', 28, 3, 2),
            c('E', 'maj7', 29), c('F', 'maj7', 30), c('E', 'maj7', 31, 1, 8)
        ], tags: ['latin', 'dizzy']
    },
    {
        id: 'corcovado-2', title: 'Corcovado (Reprise)', composer: 'Jobim', style: 'bossa', key: 'C', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [
            c('D', '7', 1, 1, 8), c('Db', 'dim7', 3, 1, 8),
            c('G', 'min7', 5, 1, 8), c('C', '7', 7, 1, 8),
            c('F', 'maj7', 9, 1, 8), c('F', 'min7', 11, 1, 4), c('Bb', '7', 12, 1, 4),
            c('E', 'min7', 13, 1, 4), c('A', '7', 14, 1, 4), c('A', 'min7', 15, 1, 4), c('D', '7', 16, 1, 4),
            c('D', 'min7', 17, 1, 8), c('G', '7', 19, 1, 8),
            c('E', 'min7', 21, 1, 4), c('A', '7b9', 22, 1, 4), c('D', 'min7', 23, 1, 8),
            c('G', '7', 25, 1, 8), c('C', 'maj7', 27, 1, 8)
        ], tags: ['bossa']
    },
    {
        id: 'cute', title: 'Cute', composer: 'Hefti', style: 'standard', key: 'C', tempo: 150, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('C', '6', 1), c('D', 'dim7', 2), c('C', '6', 3), c('D', 'dim7', 4),
            c('C', '6', 5), c('C', '7', 6), c('F', 'maj7', 7), c('F', 'min6', 8),
            // A2
            c('C', '6', 9), c('A', 'min7', 10), c('D', 'min7', 11), c('G', '7', 12),
            c('C', '6', 13, 1, 4), c('G', '7', 13, 3, 4),
            // B
            c('C', '7', 17, 1, 8), c('F', 'maj7', 19, 1, 8),
            c('D', '7', 21, 1, 8), c('G', '7', 23, 1, 8),
            // A3
            c('C', '6', 25), c('D', 'dim7', 26), c('C', '6', 27), c('D', 'dim7', 28),
            c('C', '6', 29), c('C', '7', 30), c('F', 'maj7', 31), c('F', 'min6', 32)
        ], tags: ['standard', 'basie']
    },
    {
        id: 'darn-that-dream', title: 'Darn That Dream', composer: 'Van Heusen', style: 'standard', key: 'G', tempo: 80, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('G', 'maj7', 1), c('Bb', 'min7', 2, 1, 2), c('Eb', '7', 2, 3, 2),
            c('A', 'min7', 3), c('D', '7b9', 4),
            c('B', 'min7', 5, 1, 2), c('E', '7', 5, 3, 2), c('A', 'min7', 6, 1, 2), c('D', '7', 6, 3, 2),
            c('G', 'maj7', 7, 1, 2), c('Eb', '7', 7, 3, 2), c('A', 'min7', 8, 1, 2), c('D', '7', 8, 3, 2),
            // A2
            c('G', 'maj7', 9), c('Bb', 'min7', 10, 1, 2), c('Eb', '7', 10, 3, 2),
            c('A', 'min7', 11), c('D', '7b9', 12),
            c('B', 'min7', 13, 1, 2), c('E', '7', 13, 3, 2), c('A', 'min7', 14, 1, 2), c('D', '7', 14, 3, 2),
            c('G', 'maj7', 15, 1, 8),
            // B
            c('F#', 'min7b5', 17, 1, 2), c('B', '7', 17, 3, 2), c('E', 'min7', 18),
            c('A', '7', 19), c('D', 'maj7', 20),
            c('A', 'min7', 21, 1, 2), c('D', '7', 21, 3, 2), c('G', 'maj7', 22),
            c('C#', 'min7b5', 23, 1, 2), c('F#', '7', 23, 3, 2), c('B', 'maj7', 24, 1, 2), c('D', '7', 24, 3, 2),
            // A3
            c('G', 'maj7', 25), c('Bb', 'min7', 26, 1, 2), c('Eb', '7', 26, 3, 2),
            c('A', 'min7', 27), c('D', '7b9', 28),
            c('B', 'min7', 29, 1, 2), c('E', '7', 29, 3, 2), c('A', 'min7', 30, 1, 2), c('D', '7', 30, 3, 2),
            c('G', 'maj7', 31, 1, 8)
        ], tags: ['ballad', 'standard']
    },
    {
        id: 'dear-old-stockholm', title: 'Dear Old Stockholm', composer: 'Trad.', style: 'standard', key: 'G', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('A', 'min7', 1), c('A', 'min7', 2), c('G', 'min7', 3, 1, 2), c('C', '7', 3, 3, 2), c('F', 'maj7', 4),
            c('E', '7alt', 5), c('A', 'min7', 6), c('A', 'min7', 7, 1, 4), c('E', '7', 8, 1, 4),
            // A2
            c('A', 'min7', 9), c('A', 'min7', 10), c('G', 'min7', 11, 1, 2), c('C', '7', 11, 3, 2), c('F', 'maj7', 12),
            c('E', '7alt', 13), c('A', 'min7', 14), c('A', 'min7', 15, 1, 8),
            // B
            c('A', 'min7', 17, 1, 2), c('D', '7', 17, 3, 2), c('G', 'maj7', 18),
            c('A', 'min7', 19, 1, 2), c('D', '7', 19, 3, 2), c('G', 'maj7', 20),
            c('G', 'min7', 21, 1, 2), c('C', '7', 21, 3, 2), c('F', 'maj7', 22),
            c('F', 'maj7', 23), c('E', '7alt', 24),
            // A3
            c('A', 'min7', 25), c('A', 'min7', 26), c('G', 'min7', 27, 1, 2), c('C', '7', 27, 3, 2), c('F', 'maj7', 28),
            c('E', '7alt', 29), c('A', 'min7', 30), c('A', 'min7', 31, 1, 8)
        ], tags: ['standard', 'minor']
    },
    {
        id: 'desafinado-2', title: 'Desafinado (Inst.)', composer: 'Jobim', style: 'bossa', key: 'F', tempo: 140, timeSignature: [4, 4], bars: 64, changes: [
            // A1
            c('F', 'maj7', 1, 1, 16),
            c('G', '7', 5, 1, 16),
            c('G', 'min7', 9, 1, 16),
            c('Gb', '7', 13, 1, 16),
            // A2
            c('F', 'maj7', 17, 1, 16),
            c('G', '7', 21, 1, 16),
            c('G', 'min7', 25, 1, 8), c('C', '7', 27, 1, 8),
            c('F', 'maj7', 29, 1, 16),
            // B
            c('A', 'min7b5', 33, 1, 8), c('D', '7', 35, 1, 8),
            c('G', 'min7', 37, 1, 8), c('C', '7', 39, 1, 8),
            c('A', 'min7b5', 41, 1, 8), c('D', '7', 43, 1, 8),
            c('G', 'maj7', 45, 1, 8), c('C', '7', 47, 1, 8),
            // A3
            c('F', 'maj7', 49, 1, 16),
            c('G', '7', 53, 1, 16),
            c('G', 'min7', 57, 1, 8), c('C', '7', 59, 1, 8),
            c('F', 'maj7', 61, 1, 16)
        ], tags: ['bossa']
    },
    {
        id: 'dinah', title: 'Dinah', composer: 'Akst', style: 'standard', key: 'Ab', tempo: 160, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('Ab', 'maj7', 1, 1, 4), c('Ab', 'maj7', 2, 1, 4), c('Eb', '7', 3, 1, 4), c('Eb', '7', 4, 1, 4),
            c('Eb', '7', 5, 1, 4), c('Eb', '7', 6, 1, 4), c('Ab', 'maj7', 7, 1, 4), c('Ab', 'maj7', 8, 1, 4),
            // A2
            c('Ab', 'maj7', 9, 1, 4), c('Ab', 'maj7', 10, 1, 4), c('Eb', '7', 11, 1, 4), c('Eb', '7', 12, 1, 4),
            c('Eb', '7', 13, 1, 4), c('Eb', '7', 14, 1, 4), c('Ab', 'maj7', 15, 1, 4), c('Ab', '7', 16, 1, 4),
            // B
            c('Db', 'maj7', 17, 1, 4), c('Db', 'min7', 18, 1, 4), c('Ab', 'maj7', 19, 1, 4), c('Ab', 'maj7', 20, 1, 4),
            c('Db', 'maj7', 21, 1, 4), c('Db', 'min7', 22, 1, 4), c('Ab', 'maj7', 23, 1, 4), c('Eb', '7', 24, 1, 4),
            // A3
            c('Ab', 'maj7', 25, 1, 4), c('Ab', 'maj7', 26, 1, 4), c('Eb', '7', 27, 1, 4), c('Eb', '7', 28, 1, 4),
            c('Eb', '7', 29, 1, 4), c('Eb', '7', 30, 1, 4), c('Ab', 'maj7', 31, 1, 4), c('Ab', 'maj7', 32, 1, 4)
        ], tags: ['standard']
    },
    {
        id: 'django', title: 'Django', composer: 'John Lewis', style: 'standard', key: 'F', tempo: 100, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('F', 'min7', 1), c('Ab', '7', 2), c('Db', 'maj7', 3), c('C', '7', 4),
            c('F', 'min7', 5), c('Ab', '7', 6), c('Db', 'maj7', 7), c('C', '7', 8),
            c('F', 'min7', 9), c('Ab', '7', 10), c('Db', 'maj7', 11), c('C', '7', 12),
            c('F', '7', 13, 1, 4), c('Bb', '7', 14, 1, 4), c('Eb', '7', 15, 1, 4), c('Ab', '7', 16, 1, 4),
            // B (Solo changes typically swing)
            c('F', 'maj7', 17), c('E', 'min7b5', 18, 1, 2), c('A', '7', 18, 3, 2),
            c('D', 'min7', 19), c('G', '7', 20),
            c('G', 'min7', 21), c('C', '7', 22),
            c('F', 'maj7', 23, 1, 4), c('G', 'min7', 24, 1, 2), c('C', '7', 24, 3, 2),
            // A2
            c('F', 'min7', 25), c('Ab', '7', 26), c('Db', 'maj7', 27), c('C', '7', 28),
            c('F', 'min7', 29), c('Ab', '7', 30), c('Db', 'maj7', 31), c('C', '7', 32)
        ], tags: ['standard', 'mjq']
    },
    {
        id: 'dolphin-dance', title: 'Dolphin Dance', composer: 'Hancock', style: 'modal', key: 'Eb', tempo: 120, timeSignature: [4, 4], bars: 38, changes: [
            c('Eb', 'maj7', 1, 1, 8), c('Bb', 'min7', 3, 1, 4), c('Eb', '7', 4, 1, 4),
            c('Ab', 'maj7', 5, 1, 8), c('D', 'min7', 7, 1, 2), c('G', '7alt', 7, 3, 2), c('C', 'maj7', 8, 1, 4),
            c('C', 'min7', 9, 1, 4), c('F', '7', 10, 1, 4), c('F', 'min7', 11, 1, 4), c('Bb', '7', 12, 1, 4),
            c('Eb', 'maj7', 13, 1, 4), c('A', 'min7b5', 14, 1, 4), c('D', '7alt', 15, 1, 4), c('G', 'maj7', 16, 1, 4),
            c('C', '7', 17, 1, 4), c('C', 'min7', 18, 1, 4), c('A', 'min7', 19, 1, 4), c('D', '7', 20, 1, 4),
            c('G', 'maj7', 21, 1, 4), c('D', 'min7', 22, 1, 4), c('F', 'maj7', 23, 1, 4), c('G', '7', 24, 1, 4),
            c('C', 'maj7', 25, 1, 4), c('C', 'min7', 26, 1, 4), c('F', 'maj7', 27, 1, 4), c('Bb', '7', 28, 1, 4),
            c('Eb', 'maj7', 29, 1, 4), c('A', 'min7', 30, 1, 2), c('D', '7', 30, 3, 2),
            c('G', 'maj7', 31, 1, 4), c('C#', 'min7', 32, 1, 2), c('F#', '7', 32, 3, 2),
            c('B', 'maj7', 33, 1, 4), c('F', 'min7', 34, 1, 2), c('Bb', '7', 34, 3, 2),
            c('Eb', 'maj7', 35, 1, 8), c('G', 'min7', 37, 1, 2), c('C', '7', 37, 3, 2), c('F', 'min7', 38, 1, 2), c('Bb', '7', 38, 3, 2)
        ], tags: ['modal', 'hancock']
    },
    {
        id: 'dont-blame-me', title: "Don't Blame Me", composer: 'McHugh', style: 'standard', key: 'C', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('C', 'maj7', 1, 1, 2), c('G', '7', 1, 3, 2), c('C', 'maj7', 2, 1, 4), c('G', 'min7', 3, 1, 2), c('C', '7', 3, 3, 2),
            c('F', 'maj7', 4, 1, 2), c('A', '7', 4, 3, 2), c('D', 'min7', 5, 1, 4),
            c('C', 'maj7', 6, 1, 2), c('A', '7', 6, 3, 2), c('D', 'min7', 7, 1, 2), c('G', '7', 7, 3, 2), c('C', 'maj7', 8, 1, 4),
            // A2
            c('C', 'maj7', 9, 1, 2), c('G', '7', 9, 3, 2), c('C', 'maj7', 10, 1, 4), c('G', 'min7', 11, 1, 2), c('C', '7', 11, 3, 2),
            c('F', 'maj7', 12, 1, 2), c('A', '7', 12, 3, 2), c('D', 'min7', 13, 1, 4),
            c('C', 'maj7', 14, 1, 2), c('A', '7', 14, 3, 2), c('D', 'min7', 15, 1, 2), c('G', '7', 15, 3, 2), c('C', 'maj7', 16, 1, 4),
            // B
            c('G', 'min7', 17, 1, 2), c('C', '7', 17, 3, 2), c('F', 'maj7', 18, 1, 4),
            c('A', 'min7', 19, 1, 2), c('D', '7', 19, 3, 2), c('G', 'maj7', 20, 1, 4),
            c('B', 'min7', 21, 1, 2), c('E', '7', 21, 3, 2), c('A', 'maj7', 22, 1, 4),
            c('A', 'min7', 23, 1, 2), c('D', '7', 23, 3, 2), c('D', 'min7', 24, 1, 2), c('G', '7', 24, 3, 2),
            // A3
            c('C', 'maj7', 25, 1, 2), c('G', '7', 25, 3, 2), c('C', 'maj7', 26, 1, 4), c('G', 'min7', 27, 1, 2), c('C', '7', 27, 3, 2),
            c('F', 'maj7', 28, 1, 2), c('A', '7', 28, 3, 2), c('D', 'min7', 29, 1, 4),
            c('C', 'maj7', 30, 1, 2), c('A', '7', 30, 3, 2), c('D', 'min7', 31, 1, 2), c('G', '7', 31, 3, 2), c('C', 'maj7', 32, 1, 4)
        ], tags: ['ballad', 'standard']
    },
    {
        id: 'dont-get-around-much-anymore', title: "Don't Get Around Much Anymore", composer: 'Ellington', style: 'standard', key: 'C', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('C', 'maj7', 1), c('D', 'min7', 2, 1, 2), c('Eb', 'dim7', 2, 3, 2), c('C', 'maj7', 3, 1, 2), c('A', '7', 3, 3, 2), c('D', '7', 4),
            c('F', 'maj7', 5, 1, 2), c('G', '7', 5, 3, 2), c('C', 'maj7', 6, 1, 2), c('A', '7', 6, 3, 2), c('D', 'min7', 7, 1, 2), c('G', '7', 7, 3, 2), c('C', 'maj7', 8),
            // A2
            c('C', 'maj7', 9), c('D', 'min7', 10, 1, 2), c('Eb', 'dim7', 10, 3, 2), c('C', 'maj7', 11, 1, 2), c('A', '7', 11, 3, 2), c('D', '7', 12),
            c('F', 'maj7', 13, 1, 2), c('G', '7', 13, 3, 2), c('C', 'maj7', 14, 1, 2), c('F', '7', 14, 3, 2), c('C', 'maj7', 15, 1, 2), c('C', '7', 15, 3, 2),
            // B
            c('F', 'maj7', 17, 1, 4), c('F', 'min7', 18, 1, 4), c('C', 'maj7', 19, 1, 4), c('C', 'maj7', 20, 1, 4),
            c('D', '7', 21, 1, 4), c('D', '7', 22, 1, 4), c('G', '7', 23, 1, 4), c('G', '7', 24, 1, 4),
            // A3
            c('C', 'maj7', 25), c('D', 'min7', 26, 1, 2), c('Eb', 'dim7', 26, 3, 2), c('C', 'maj7', 27, 1, 2), c('A', '7', 27, 3, 2), c('D', '7', 28),
            c('F', 'maj7', 29, 1, 2), c('G', '7', 29, 3, 2), c('C', 'maj7', 30, 1, 4), c('D', 'min7', 31, 1, 2), c('G', '7', 31, 3, 2)
        ], tags: ['standard', 'ellington']
    },
    {
        id: 'dream-a-little-dream', title: 'Dream a Little Dream of Me', composer: 'Schwandt', style: 'standard', key: 'C', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('C', 'maj7', 1), c('B', '7', 2), c('Ab', '7', 3), c('G', '7', 4),
            c('C', 'maj7', 5, 1, 2), c('A', '7', 5, 3, 2), c('F', 'maj7', 6, 1, 2), c('F', 'min6', 6, 3, 2), c('C', 'maj7', 7, 1, 2), c('Ab', '7', 7, 3, 2), c('G', '7', 8, 1, 4),
            // A2
            c('C', 'maj7', 9), c('B', '7', 10), c('Ab', '7', 11), c('G', '7', 12),
            c('C', 'maj7', 13, 1, 2), c('A', '7', 13, 3, 2), c('F', 'maj7', 14, 1, 2), c('F', 'min6', 14, 3, 2), c('C', 'maj7', 15, 1, 4), c('E', '7', 16, 1, 4),
            // B
            c('A', 'maj7', 17, 1, 2), c('F#', 'min7', 17, 3, 2), c('B', 'min7', 18, 1, 2), c('E', '7', 18, 3, 2), c('A', 'maj7', 19, 1, 2), c('F#', 'min7', 19, 3, 2), c('B', 'min7', 20, 1, 2), c('E', '7', 20, 3, 2),
            c('A', 'maj7', 21, 1, 2), c('F#', 'min7', 21, 3, 2), c('B', 'min7', 22, 1, 2), c('E', '7', 22, 3, 2), c('A', 'maj7', 23, 1, 2), c('Ab', '7', 23, 3, 2), c('G', '7', 24, 1, 4),
            // A3
            c('C', 'maj7', 25), c('B', '7', 26), c('Ab', '7', 27), c('G', '7', 28),
            c('C', 'maj7', 29, 1, 2), c('A', '7', 29, 3, 2), c('F', 'maj7', 30, 1, 2), c('F', 'min6', 30, 3, 2), c('C', 'maj7', 31, 1, 4), c('G', '7', 32, 1, 4)
        ], tags: ['standard']
    },
    {
        id: 'east-of-the-sun', title: 'East of the Sun', composer: 'Bowman', style: 'standard', key: 'G', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('G', 'maj7', 1, 1, 4), c('B', 'min7', 2, 1, 4), c('E', '7', 3, 1, 4), c('E', '7', 4, 1, 4),
            c('A', 'min7', 5, 1, 4), c('A', 'min7', 6, 1, 4), c('D', '7', 7, 1, 4), c('D', '7', 8, 1, 4),
            // B
            c('G', 'maj7', 9, 1, 4), c('G', 'min7', 10, 1, 4), c('C', '7', 11, 1, 4), c('C', '7', 12, 1, 4),
            c('F', 'maj7', 13, 1, 4), c('F', 'min7', 14, 1, 4), c('Bb', '7', 15, 1, 4), c('D', '7', 16, 1, 4),
            // A2
            c('G', 'maj7', 17, 1, 4), c('B', 'min7', 18, 1, 4), c('E', '7', 19, 1, 4), c('E', '7', 20, 1, 4),
            c('A', 'min7', 21, 1, 4), c('A', 'min7', 22, 1, 4), c('C', 'min6', 23, 1, 4), c('D', '7', 24, 1, 4),
            // C
            c('G', 'maj7', 25, 1, 4), c('F#', 'min7b5', 26, 1, 2), c('B', '7', 26, 3, 2), c('E', 'min7', 27, 1, 4), c('A', '7', 28, 1, 4),
            c('D', 'min7', 29, 1, 4), c('G', '7', 30, 1, 4), c('C', 'maj7', 31, 1, 2), c('C#', 'dim7', 31, 3, 2), c('G', 'maj7', 32, 1, 4)
        ], tags: ['standard']
    },
    {
        id: 'easy-living', title: 'Easy Living', composer: 'Rainger', style: 'standard', key: 'Eb', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('Eb', 'maj7', 1, 1, 2), c('Eb', 'dim7', 1, 3, 2), c('F', 'min7', 2, 1, 2), c('Bb', '7', 2, 3, 2),
            c('Eb', 'maj7', 3), c('A', 'min7b5', 4, 1, 2), c('D', '7', 4, 3, 2),
            c('G', 'maj7', 5, 1, 2), c('G', 'min7', 5, 3, 2), c('C', '7', 6, 1, 2), c('F', '7', 6, 3, 2),
            c('Bb', 'maj7', 7, 1, 2), c('C', '7', 7, 3, 2), c('F', 'min7', 8, 1, 2), c('Bb', '7', 8, 3, 2),
            // A2
            c('Eb', 'maj7', 9, 1, 2), c('Eb', 'dim7', 9, 3, 2), c('F', 'min7', 10, 1, 2), c('Bb', '7', 10, 3, 2),
            c('Eb', 'maj7', 11), c('A', 'min7b5', 12, 1, 2), c('D', '7', 12, 3, 2),
            c('G', 'maj7', 13, 1, 2), c('G', 'min7', 13, 3, 2), c('C', '7', 14, 1, 2), c('F', '7', 14, 3, 2),
            c('Bb', 'maj7', 15), c('Eb', '7', 16),
            // B
            c('Ab', 'maj7', 17), c('Ab', 'min7', 18, 1, 2), c('Db', '7', 18, 3, 2),
            c('Eb', 'maj7', 19), c('C', 'min7', 20),
            c('F', '7', 21, 1, 4), c('F', '7', 22, 1, 4),
            c('F', 'min7', 23, 1, 4), c('Bb', '7', 24, 1, 4),
            // A3
            c('Eb', 'maj7', 25, 1, 2), c('Eb', 'dim7', 25, 3, 2), c('F', 'min7', 26, 1, 2), c('Bb', '7', 26, 3, 2),
            c('Eb', 'maj7', 27), c('A', 'min7b5', 28, 1, 2), c('D', '7', 28, 3, 2),
            c('G', 'maj7', 29, 1, 2), c('G', 'min7', 29, 3, 2), c('C', '7', 30, 1, 2), c('F', '7', 30, 3, 2),
            c('Bb', '7', 31), c('Eb', 'maj7', 32)
        ], tags: ['ballad', 'standard']
    },
    {
        id: 'easy-to-love', title: 'Easy to Love', composer: 'Porter', style: 'standard', key: 'G', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('A', 'min7', 1, 1, 4), c('D', '7', 2, 1, 4), c('G', 'maj7', 3, 1, 4), c('G', 'maj7', 4, 1, 4),
            c('G', 'min7', 5, 1, 4), c('C', '7', 6, 1, 4), c('F', 'maj7', 7, 1, 4), c('F', 'maj7', 8, 1, 4),
            // A2
            c('F', 'min7', 9, 1, 4), c('Bb', '7', 10, 1, 4), c('Eb', 'maj7', 11, 1, 4), c('Eb', 'maj7', 12, 1, 4),
            c('A', 'min7b5', 13, 1, 4), c('D', '7', 14, 1, 4), c('G', 'maj7', 15, 1, 4), c('E', '7', 16, 1, 4),
            // B
            c('A', 'min7', 17, 1, 4), c('D', '7', 18, 1, 4), c('B', 'min7', 19, 1, 4), c('E', '7', 20, 1, 4),
            c('A', 'min7', 21, 1, 4), c('D', '7', 22, 1, 4), c('B', 'min7b5', 23, 1, 4), c('E', '7', 24, 1, 4),
            // C
            c('A', 'min7', 25, 1, 4), c('D', '7', 26, 1, 4), c('B', 'min7b5', 27, 1, 4), c('E', '7', 28, 1, 4),
            c('A', 'min7', 29, 1, 4), c('D', '7', 30, 1, 4), c('G', 'maj7', 31, 1, 4), c('G', 'maj7', 32, 1, 4)
        ], tags: ['standard', 'porter']
    },
    {
        id: 'embraceable-you', title: 'Embraceable You', composer: 'Gershwin', style: 'standard', key: 'G', tempo: 80, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('G', 'maj7', 1), c('F#', 'min7b5', 2, 1, 2), c('B', '7', 2, 3, 2),
            c('E', 'min7', 3), c('A', '7', 4),
            c('D', 'min7', 5), c('G', '7', 6),
            c('C', 'maj7', 7), c('C#', 'dim7', 8),
            // A2
            c('G', 'maj7', 9), c('F#', 'min7b5', 10, 1, 2), c('B', '7', 10, 3, 2),
            c('E', 'min7', 11), c('G', 'min6', 12),
            c('A', '7', 13, 1, 4), c('D', '7', 14, 1, 4),
            c('G', 'maj7', 15), c('D', '7', 16),
            // A1 Repeat (Actually ABAC form)
            c('G', 'maj7', 17), c('F#', 'min7b5', 18, 1, 2), c('B', '7', 18, 3, 2),
            c('E', 'min7', 19), c('A', '7', 20),
            c('D', 'min7', 21), c('G', '7', 22),
            c('C', 'maj7', 23), c('C#', 'dim7', 24),
            // C
            c('G', 'maj7', 25), c('B', 'min7b5', 26, 1, 2), c('E', '7', 26, 3, 2),
            c('A', 'min7', 27), c('D', '7', 28),
            c('G', 'maj7', 29), c('C', '7', 30),
            c('G', 'maj7', 31), c('D', '7', 32)
        ], tags: ['ballad', 'gershwin']
    },
    {
        id: 'emily', title: 'Emily', composer: 'Mandel', style: 'standard', key: 'C', tempo: 100, timeSignature: [3, 4], bars: 32, changes: [
            // A1
            c('C', 'maj7', 1), c('E', 'min7', 2), c('F', 'maj7', 3), c('G', '7', 4),
            c('C', 'maj7', 5), c('A', 'min7', 6), c('D', 'min7', 7), c('G', '7', 8),
            // A2
            c('C', 'maj7', 9), c('E', 'min7', 10), c('F', 'maj7', 11), c('G', '7', 12),
            c('C', 'maj7', 13), c('C', 'maj7', 14), c('G', 'min7', 15), c('C', '7', 16),
            // B
            c('F', 'maj7', 17), c('G', '7', 18), c('E', 'min7', 19), c('A', '7', 20),
            c('D', 'min7', 21), c('G', '7', 22), c('C', 'maj7', 23), c('C', '7', 24),
            // C
            c('F', 'maj7', 25), c('F', 'min7', 26), c('C', 'maj7', 27), c('A', 'min7', 28),
            c('D', 'min7', 29), c('G', '7', 30), c('C', 'maj7', 31, 1, 6)
        ], tags: ['waltz', 'standard']
    },
    {
        id: 'everything-happens-to-me', title: 'Everything Happens to Me', composer: 'Dennis', style: 'standard', key: 'Bb', tempo: 80, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('C', 'min7', 1), c('F', '7', 2), c('D', 'min7', 3), c('Eb', 'dim7', 4),
            c('C', 'min7', 5), c('F', '7', 6), c('Bb', 'maj7', 7), c('G', '7', 8),
            // A2
            c('C', 'min7', 9), c('F', '7', 10), c('D', 'min7', 11), c('Eb', 'dim7', 12),
            c('C', 'min7', 13), c('F', '7', 14), c('Bb', 'maj7', 15), c('Bb', '7', 16),
            // B
            c('F', 'min7', 17, 1, 2), c('Bb', '7', 17, 3, 2), c('Eb', 'maj7', 18),
            c('G', 'min7', 19, 1, 2), c('C', '7', 19, 3, 2), c('F', 'maj7', 20),
            c('F', 'min7', 21, 1, 2), c('Bb', '7', 21, 3, 2), c('Eb', 'maj7', 22),
            c('C', '7', 23), c('F', '7', 24),
            // A3
            c('C', 'min7', 25), c('F', '7', 26), c('D', 'min7', 27), c('G', '7', 28),
            c('C', 'min7', 29), c('F', '7', 30), c('Bb', 'maj7', 31), c('G', '7', 32)
        ], tags: ['ballad', 'standard']
    },
    {
        id: 'evidence', title: 'Evidence', composer: 'Monk', style: 'bebop', key: 'Eb', tempo: 160, timeSignature: [4, 4], bars: 32, changes: [
            // A1 (Based on Just You, Just Me)
            c('Eb', 'maj7', 1), c('B', 'min7', 2, 1, 2), c('E', '7', 2, 3, 2),
            c('Bb', 'maj7', 3), c('A', 'min7', 4, 1, 2), c('D', '7', 4, 3, 2),
            c('Ab', 'maj7', 5), c('G', 'min7', 6, 1, 2), c('C', '7', 6, 3, 2),
            c('F', '7', 7), c('F', 'min7', 8, 1, 2), c('Bb', '7', 8, 3, 2),
            // A2
            c('Eb', 'maj7', 9), c('B', 'min7', 10, 1, 2), c('E', '7', 10, 3, 2),
            c('Bb', 'maj7', 11), c('A', 'min7', 12, 1, 2), c('D', '7', 12, 3, 2),
            c('Ab', 'maj7', 13), c('G', 'min7', 14, 1, 2), c('C', '7', 14, 3, 2),
            c('F', 'min7', 15), c('Bb', '7', 16),
            // B
            c('D', 'min7', 17), c('G', '7', 18), c('C', 'maj7', 19), c('C', 'maj7', 20),
            c('C', 'min7', 21), c('F', '7', 22), c('F', 'min7', 23), c('Bb', '7', 24),
            // A3
            c('Eb', 'maj7', 25), c('B', 'min7', 26, 1, 2), c('E', '7', 26, 3, 2),
            c('Bb', 'maj7', 27), c('A', 'min7', 28, 1, 2), c('D', '7', 28, 3, 2),
            c('Ab', 'maj7', 29), c('G', 'min7', 30, 1, 2), c('C', '7', 30, 3, 2),
            c('F', 'min7', 31), c('Bb', '7', 32)
        ], tags: ['bebop', 'monk']
    },
    {
        id: 'falling-in-love-with-love', title: 'Falling in Love with Love', composer: 'Rodgers', style: 'standard', key: 'Bb', tempo: 140, timeSignature: [3, 4], bars: 32, changes: [
            // A1
            c('Bb', 'maj7', 1), c('Bb', 'maj7', 2), c('F', 'min7', 3), c('Bb', '7', 4),
            c('Eb', 'maj7', 5), c('Eb', 'maj7', 6), c('Ab', '7', 7), c('Ab', '7', 8),
            // B
            c('Bb', 'maj7', 9), c('D', 'min7', 10), c('G', '7', 11), c('G', '7', 12),
            c('C', '7', 13), c('C', '7', 14), c('C', 'min7', 15), c('F', '7', 16),
            // A2
            c('Bb', 'maj7', 17), c('Bb', 'maj7', 18), c('F', 'min7', 19), c('Bb', '7', 20),
            c('Eb', 'maj7', 21), c('Eb', 'maj7', 22), c('Ab', '7', 23), c('Ab', '7', 24),
            // C
            c('Bb', 'maj7', 25), c('D', 'min7', 26), c('G', '7', 27), c('C', '7', 28),
            c('C', 'min7', 29), c('F', '7', 30), c('Bb', 'maj7', 31, 1, 6)
        ], tags: ['waltz', 'standard']
    },
    {
        id: 'fascinating-rhythm', title: 'Fascinating Rhythm', composer: 'Gershwin', style: 'standard', key: 'Eb', tempo: 160, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('F', '7', 1), c('F', '7', 2), c('F', '7', 3), c('F', '7', 4),
            c('Bb', '7', 5), c('Bb', '7', 6), c('Eb', 'maj7', 7), c('Eb', 'maj7', 8),
            // A2
            c('F', '7', 9), c('F', '7', 10), c('F', '7', 11), c('F', '7', 12),
            c('Bb', '7', 13), c('Bb', '7', 14), c('Eb', 'maj7', 15), c('Eb', 'maj7', 16),
            // B
            c('Bb', '7', 17), c('Bb', '7', 18), c('Eb', 'maj7', 19), c('C', '7', 20),
            c('F', '7', 21), c('F', '7', 22), c('Bb', '7', 23), c('Bb', '7', 24),
            // A3
            c('F', '7', 25), c('F', '7', 26), c('Bb', '7', 27), c('Bb', '7', 28),
            c('Eb', 'maj7', 29), c('Eb', 'maj7', 30), c('Eb', 'maj7', 31), c('Eb', 'maj7', 32)
        ], tags: ['standard', 'gershwin']
    },
    {
        id: 'samba-de-aviao', title: 'Samba do Avião', composer: 'Jobim', style: 'bossa', key: 'C', tempo: 140, timeSignature: [4, 4], bars: 64, changes: [
            // A1
            c('C', 'maj7', 1, 1, 8), c('C', 'maj7', 3, 1, 8),
            c('E', 'min7b5', 5, 1, 8), c('A', '7b9', 7, 1, 8),
            c('D', 'min7', 9, 1, 8), c('G', '7', 11, 1, 8),
            c('E', 'min7', 13, 1, 4), c('Eb', 'dim7', 14, 1, 4), c('D', 'min7', 15, 1, 4), c('G', '7', 16, 1, 4),
            // A2
            c('C', 'maj7', 17, 1, 8), c('C', 'maj7', 19, 1, 8),
            c('E', 'min7b5', 21, 1, 8), c('A', '7b9', 23, 1, 8),
            c('D', 'min7', 25, 1, 8), c('G', '7', 27, 1, 8),
            c('C', '6', 29, 1, 8), c('C', '7', 31, 1, 8),
            // B
            c('F', 'maj7', 33, 1, 8), c('F', 'min6', 35, 1, 8),
            c('C', 'maj7', 37, 1, 8), c('F#', 'dim7', 39, 1, 8),
            c('D', '7', 41, 1, 8), c('D', '7', 43, 1, 8),
            c('D', 'min7', 45, 1, 8), c('G', '7', 47, 1, 8),
            // A3
            c('C', 'maj7', 49, 1, 8), c('C', 'maj7', 51, 1, 8),
            c('E', 'min7b5', 53, 1, 8), c('A', '7b9', 55, 1, 8),
            c('D', 'min7', 57, 1, 8), c('G', '7', 59, 1, 8),
            c('C', '6', 61, 1, 8), c('C', '6', 63, 1, 8)
        ], tags: ['bossa', 'jobim']
    },
    {
        id: 'so-tinha-de-ser-com-voce', title: 'Só Tinha De Ser Com Você', composer: 'Jobim', style: 'bossa', key: 'C', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [
            // A1
            c('A', 'min7', 1), c('D', '7', 2), c('B', 'min7', 3), c('E', '7', 4),
            c('A', 'min7', 5), c('D', '7', 6), c('G', 'maj7', 7), c('G', 'maj7', 8),
            // A2
            c('A', 'min7', 9), c('D', '7', 10), c('B', 'min7', 11), c('E', '7', 12),
            c('A', 'min7', 13), c('D', '7', 14), c('G', 'maj7', 15), c('G', 'maj7', 16),
            // B
            c('F#', 'min7b5', 17), c('B', '7', 18), c('E', 'min7', 19), c('E', 'min7', 20),
            c('A', '7', 21), c('A', '7', 22), c('D', '7', 23), c('D', '7', 24),
            // A3
            c('A', 'min7', 25), c('D', '7', 26), c('B', 'min7', 27), c('E', '7', 28),
            c('A', 'min7', 29), c('D', '7', 30), c('G', 'maj7', 31), c('G', 'maj7', 32)
        ], tags: ['bossa', 'jobim']
    },
    {
        id: 'ligia', title: 'Lígia', composer: 'Jobim', style: 'bossa', key: 'A', tempo: 110, timeSignature: [4, 4], bars: 40, changes: [
            // A1
            c('A', 'maj7', 1, 1, 4), c('C', 'dim7', 2, 1, 4), c('B', 'min7', 3, 1, 4), c('E', '7b9', 4, 1, 4),
            c('G', 'min7', 5, 1, 4), c('C', '7', 6, 1, 4), c('F', 'maj7', 7, 1, 4), c('F', 'maj7', 8, 1, 4),
            // A2
            c('F#', 'min7', 9, 1, 4), c('B', '7', 10, 1, 4), c('E', 'maj7', 11, 1, 4), c('E', 'maj7', 12, 1, 4),
            c('C#', 'min7b5', 13, 1, 4), c('F#', '7b9', 14, 1, 4), c('B', 'min7', 15, 1, 4), c('E', '7', 16, 1, 4),
            // B
            c('A', 'maj7', 17, 1, 4), c('C', 'dim7', 18, 1, 4), c('B', 'min7', 19, 1, 4), c('E', '7b9', 20, 1, 4),
            c('G', 'min7', 21, 1, 4), c('C', '7', 22, 1, 4), c('F', 'maj7', 23, 1, 4), c('F', 'maj7', 24, 1, 4),
            // C
            c('B', 'min7', 25, 1, 4), c('E', '7b9', 26, 1, 4), c('A', 'maj7', 27, 1, 4), c('A', 'maj7', 28, 1, 4),
            c('F#', 'min7b5', 29, 1, 4), c('B', '7b9', 30, 1, 4), c('E', 'maj7', 31, 1, 4), c('E', 'maj7', 32, 1, 4),
            c('C#', 'min7b5', 33, 1, 4), c('F#', '7b9', 34, 1, 4), c('B', 'min7', 35, 1, 4), c('E', '7b9', 36, 1, 4),
            c('A', 'maj7', 37, 1, 8), c('A', 'maj7', 39, 1, 8)
        ], tags: ['bossa', 'jobim']
    },
    {
        id: 'luiza', title: 'Luiza', composer: 'Jobim', style: 'bossa', key: 'D', tempo: 90, timeSignature: [4, 4], bars: 64, changes: [
            // A1
            c('C#', 'min7b5', 1, 1, 4), c('F#', '7b9', 2, 1, 4), c('B', 'min7', 3, 1, 4), c('B', 'min7', 4, 1, 4),
            c('E', 'min7', 5, 1, 4), c('A', '7', 6, 1, 4), c('D', 'maj7', 7, 1, 4), c('D', 'maj7', 8, 1, 4),
            c('G#', 'min7b5', 9, 1, 4), c('C#', '7', 10, 1, 4), c('F#', 'min7', 11, 1, 4), c('B', '7', 12, 1, 4),
            c('E', 'min7', 13, 1, 4), c('A', '7', 14, 1, 4), c('D', 'maj7', 15, 1, 4), c('D', 'maj7', 16, 1, 4),
            // A2
            c('C#', 'min7b5', 17, 1, 4), c('F#', '7b9', 18, 1, 4), c('B', 'min7', 19, 1, 4), c('B', 'min7', 20, 1, 4),
            c('E', 'min7', 21, 1, 4), c('A', '7', 22, 1, 4), c('D', 'maj7', 23, 1, 4), c('D', 'maj7', 24, 1, 4),
            c('G#', 'min7b5', 25, 1, 4), c('C#', '7', 26, 1, 4), c('F#', 'min7', 27, 1, 4), c('B', '7', 28, 1, 4),
            c('E', 'min7', 29, 1, 4), c('A', '7', 30, 1, 4), c('D', 'maj7', 31, 1, 4), c('D', 'maj7', 32, 1, 4),
            // B
            c('A', 'min7', 33, 1, 4), c('D', '7', 34, 1, 4), c('G', 'maj7', 35, 1, 4), c('G', 'maj7', 36, 1, 4),
            c('G', 'min7', 37, 1, 4), c('C', '7', 38, 1, 4), c('F', 'maj7', 39, 1, 4), c('F', 'maj7', 40, 1, 4),
            c('F', 'min7', 41, 1, 4), c('Bb', '7', 42, 1, 4), c('Eb', 'maj7', 43, 1, 4), c('Eb', 'maj7', 44, 1, 4),
            c('E', 'min7', 45, 1, 4), c('A', '7', 46, 1, 4), c('D', 'maj7', 47, 1, 4), c('D', 'maj7', 48, 1, 4),
            // A3
            c('C#', 'min7b5', 49, 1, 4), c('F#', '7b9', 50, 1, 4), c('B', 'min7', 51, 1, 4), c('B', 'min7', 52, 1, 4),
            c('E', 'min7', 53, 1, 4), c('A', '7', 54, 1, 4), c('D', 'maj7', 55, 1, 4), c('D', 'maj7', 56, 1, 4),
            c('G#', 'min7b5', 57, 1, 4), c('C#', '7', 58, 1, 4), c('F#', 'min7', 59, 1, 4), c('B', '7', 60, 1, 4),
            c('E', 'min7', 61, 1, 4), c('A', '7', 62, 1, 4), c('D', 'maj7', 63, 1, 8)
        ], tags: ['bossa', 'jobim']
    },
    {
        id: 'falando-de-amor', title: 'Falando de Amor', composer: 'Jobim', style: 'bossa', key: 'F', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [
            c('F', 'maj7', 1, 1, 8), c('G', '7', 3, 1, 8),
            c('G', 'min7', 5, 1, 8), c('C', '7', 7, 1, 8),
            c('F', 'maj7', 9, 1, 8), c('G', '7', 11, 1, 8),
            c('G', 'min7', 13, 1, 8), c('C', '7', 15, 1, 8),
            c('A', 'min7b5', 17, 1, 4), c('D', '7b9', 18, 1, 4), c('G', 'min7', 19, 1, 8),
            c('B', 'min7b5', 21, 1, 4), c('E', '7b9', 22, 1, 4), c('A', 'maj7', 23, 1, 4), c('Ab', 'dim7', 24, 1, 4),
            c('G', 'min7', 25, 1, 4), c('C', '7', 26, 1, 4), c('A', 'min7', 27, 1, 4), c('D', '7', 28, 1, 4),
            c('G', 'min7', 29, 1, 4), c('C', '7', 30, 1, 4), c('F', 'maj7', 31, 1, 8)
        ], tags: ['bossa', 'jobim']
    },
    {
        id: 'pois-e', title: 'Pois É', composer: 'Jobim/Buarque', style: 'bossa', key: 'C', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [
            c('C', 'maj7', 1, 1, 4), c('A', '7b9', 2, 1, 4), c('D', 'min7', 3, 1, 4), c('G', '7', 4, 1, 4),
            c('E', 'min7', 5, 1, 4), c('A', '7b9', 6, 1, 4), c('D', 'min7', 7, 1, 4), c('G', '7', 8, 1, 4),
            c('C', 'maj7', 9, 1, 4), c('C', '7', 10, 1, 4), c('F', 'maj7', 11, 1, 4), c('F', 'min6', 12, 1, 4),
            c('C', 'maj7', 13, 1, 4), c('A', '7', 14, 1, 4), c('D', '7', 15, 1, 4), c('G', '7', 16, 1, 4),
            c('C', 'maj7', 17, 1, 4), c('A', '7b9', 18, 1, 4), c('D', 'min7', 19, 1, 4), c('G', '7', 20, 1, 4),
            c('E', 'min7', 21, 1, 4), c('A', '7b9', 22, 1, 4), c('D', 'min7', 23, 1, 4), c('G', '7', 24, 1, 4),
            c('C', 'maj7', 25, 1, 4), c('C', '7', 26, 1, 4), c('F', 'maj7', 27, 1, 4), c('F', 'min6', 28, 1, 4),
            c('C', 'maj7', 29, 1, 4), c('A', '7', 30, 1, 4), c('D', 'min7', 31, 1, 2), c('G', '7', 31, 3, 2), c('C', 'maj7', 32, 1, 4)
        ], tags: ['bossa', 'jobim']
    },
    { id: 'eu-sei-que-vou-te-amar', title: 'Eu Sei Que Vou Te Amar', composer: 'Jobim', style: 'bossa', key: 'F', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('A', '7alt', 4), c('A', '7alt', 4),
        c('Bb', 'maj7', 4), c('C', '7b9', 4), c('A', 'min7', 4), c('D', '7b9', 4),
        c('G', 'min7', 4), c('C', '7', 4), c('A', 'min7b5', 4), c('D', '7b9', 4),
        c('G', 'min7', 4), c('C', '7b9', 4), c('F', 'maj7', 4), c('C', '7alt', 4)
    ], tags: ['bossa', 'jobim'] },
    { id: 'modinha', title: 'Modinha', composer: 'Jobim', style: 'bossa', key: 'Dm', tempo: 80, timeSignature: [4, 4], bars: 32, changes: [
        c('D', 'min7', 4), c('D', 'min7', 4), c('B', 'min7b5', 4), c('Bb', 'maj7', 4),
        c('A', 'min7', 4), c('D', '7b9', 4), c('G', 'min7', 4), c('A', '7alt', 4),
        c('D', 'min7', 4), c('D', 'min7', 4), c('B', 'min7b5', 4), c('Bb', 'maj7', 4),
        c('A', 'min7', 4), c('D', '7b9', 4), c('G', 'min7', 4), c('A', '7alt', 4)
    ], tags: ['bossa', 'jobim'] },
    { id: 'caminhos-cruzados', title: 'Caminhos Cruzados', composer: 'Jobim', style: 'bossa', key: 'Dm', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [
        c('G', 'min7', 4), c('C', '7', 4), c('F', 'maj7', 4), c('D', 'min7', 4),
        c('G', 'min7', 4), c('C', '7', 4), c('F', 'maj7', 4), c('D', '7b9', 4),
        c('G', 'min7', 4), c('B', 'dim7', 4), c('F', 'maj7', 4), c('D', 'min7', 4),
        c('G', 'min7', 4), c('C', '7', 4), c('F', 'maj7', 4), c('D', '7b9', 4)
    ], tags: ['bossa', 'jobim'] },
    { id: 'discussao', title: 'Discussão', composer: 'Jobim', style: 'bossa', key: 'F', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('Bb', '7', 4), c('Bb', '7', 4),
        c('A', 'min7', 4), c('D', '7b9', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('Bb', '7', 4), c('Bb', '7', 4),
        c('A', 'min7', 4), c('D', '7b9', 4), c('G', 'min7', 4), c('C', '7', 4)
    ], tags: ['bossa', 'jobim'] },
    { id: 'este-seu-olhar', title: 'Este Seu Olhar', composer: 'Jobim', style: 'bossa', key: 'F', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [
        c('F', 'maj7', 4), c('F#', 'dim7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('D', 'min7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('F#', 'dim7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('D', 'min7', 4), c('G', 'min7', 4), c('C', '7', 4)
    ], tags: ['bossa', 'jobim'] },
    { id: 'if-you-never-come-to-me', title: 'If You Never Come to Me', composer: 'Jobim', style: 'bossa', key: 'Ab', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [
        c('Ab', 'maj7', 4), c('A', '7#11', 4), c('Bb', '7', 4), c('B', 'dim7', 4),
        c('C', 'min7', 4), c('F', '7b9', 4), c('Bb', 'min7', 4), c('Eb', '7', 4),
        c('Ab', 'maj7', 4), c('A', '7#11', 4), c('Bb', '7', 4), c('B', 'dim7', 4),
        c('C', 'min7', 4), c('F', '7b9', 4), c('Bb', 'min7', 4), c('Eb', '7', 4)
    ], tags: ['bossa', 'jobim'] },
    { id: 'bonita', title: 'Bonita', composer: 'Jobim', style: 'bossa', key: 'Am', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [
        c('A', 'min9', 4), c('D', '13', 4), c('G', 'min9', 4), c('C', '13', 4),
        c('F', 'maj7', 4), c('Bb', '13', 4), c('E', '7alt', 4), c('E', '7alt', 4),
        c('A', 'min9', 4), c('D', '13', 4), c('G', 'min9', 4), c('C', '13', 4),
        c('F', 'maj7', 4), c('Bb', '13', 4), c('E', '7alt', 4), c('E', '7alt', 4)
    ], tags: ['bossa', 'jobim'] },
    { id: 'olha-maria', title: 'Olha Maria', composer: 'Jobim/Buarque', style: 'bossa', key: 'Dm', tempo: 100, timeSignature: [3, 4], bars: 64, changes: [
        c('D', 'min7', 3), c('D', 'min7', 3), c('B', 'min7b5', 3), c('Bb', 'maj7', 3),
        c('A', 'min7', 3), c('D', '7', 3), c('G', 'min7', 3), c('A', '7', 3),
        c('D', 'min7', 3), c('D', 'min7', 3), c('B', 'min7b5', 3), c('Bb', 'maj7', 3),
        c('A', 'min7', 3), c('D', '7', 3), c('G', 'min7', 3), c('A', '7', 3)
    ], tags: ['bossa', 'jobim'] },
    { id: 'sabia', title: 'Sabiá', composer: 'Jobim/Buarque', style: 'bossa', key: 'Db', tempo: 110, timeSignature: [4, 4], bars: 40, changes: [
        c('Db', 'maj7', 4), c('Db', 'maj7', 4), c('C', 'min7b5', 4), c('F', '7b9', 4),
        c('Bb', 'min7', 4), c('Bb', 'min7', 4), c('G', 'min7b5', 4), c('C', '7b9', 4),
        c('F', 'maj7', 4), c('D', 'min7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('D', 'min7', 4), c('G', 'min7', 4), c('C', '7', 4)
    ], tags: ['bossa', 'jobim'] },
    { id: 'chovendo-na-roseira', title: 'Chovendo na Roseira', composer: 'Jobim', style: 'bossa', key: 'G', tempo: 150, timeSignature: [3, 4], bars: 64, changes: [
        c('G', 'maj7', 3), c('G', 'maj7', 3), c('Bb', 'maj7', 3), c('Bb', 'maj7', 3),
        c('Eb', 'maj7', 3), c('Eb', 'maj7', 3), c('G', 'maj7', 3), c('G', 'maj7', 3),
        c('G', 'maj7', 3), c('G', 'maj7', 3), c('Bb', 'maj7', 3), c('Bb', 'maj7', 3),
        c('Eb', 'maj7', 3), c('Eb', 'maj7', 3), c('G', 'maj7', 3), c('G', 'maj7', 3)
    ], tags: ['bossa', 'jobim', 'waltz'] },
    { id: 'brigas-nunca-mais', title: 'Brigas Nunca Mais', composer: 'Jobim', style: 'bossa', key: 'Dm', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4)
    ], tags: ['bossa', 'jobim'] },
    { id: 'anjo-de-mim', title: 'Anjo de Mim', composer: 'Ivan Lins', style: 'bossa', key: 'C', tempo: 100, timeSignature: [4, 4], bars: 32, changes: [
        c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4), c('C', 'maj7', 4),
        c('A', 'min7', 4), c('D', 'min7', 4), c('G', '7', 4), c('C', 'maj7', 4),
        c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4), c('C', 'maj7', 4),
        c('A', 'min7', 4), c('D', 'min7', 4), c('G', '7', 4), c('C', 'maj7', 4)
    ], tags: ['mpb', 'ivan-lins'] },
    { id: 'comecar-de-novo', title: 'Começar de Novo', composer: 'Ivan Lins', style: 'bossa', key: 'E', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [
        c('E', 'maj7', 4), c('F#', 'min7', 4), c('B', '7', 4), c('E', 'maj7', 4),
        c('C#', 'min7', 4), c('F#', 'min7', 4), c('B', '7', 4), c('E', 'maj7', 4),
        c('E', 'maj7', 4), c('F#', 'min7', 4), c('B', '7', 4), c('E', 'maj7', 4),
        c('C#', 'min7', 4), c('F#', 'min7', 4), c('B', '7', 4), c('E', 'maj7', 4)
    ], tags: ['mpb', 'ivan-lins'] },
    { id: 'dinorah-dinorah', title: 'Dinorah, Dinorah', composer: 'Ivan Lins', style: 'samba', key: 'G', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4)
    ], tags: ['mpb', 'ivan-lins'] },
    { id: 'lembra-de-mim', title: 'Lembra de Mim', composer: 'Ivan Lins', style: 'bossa', key: 'F', tempo: 100, timeSignature: [4, 4], bars: 32, changes: [
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('G', 'min7', 4), c('C', '7', 4)
    ], tags: ['mpb', 'ivan-lins'] },
    { id: 'madalena', title: 'Madalena', composer: 'Ivan Lins', style: 'samba', key: 'C', tempo: 150, timeSignature: [4, 4], bars: 32, changes: [
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4)
    ], tags: ['mpb', 'ivan-lins'] },
    { id: 'vitoriosa', title: 'Vitoriosa', composer: 'Ivan Lins', style: 'bossa', key: 'D', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [
        c('D', 'maj7', 4), c('D', 'maj7', 4), c('E', 'min7', 4), c('A', '7', 4),
        c('D', 'maj7', 4), c('D', 'maj7', 4), c('E', 'min7', 4), c('A', '7', 4),
        c('D', 'maj7', 4), c('D', 'maj7', 4), c('E', 'min7', 4), c('A', '7', 4),
        c('D', 'maj7', 4), c('D', 'maj7', 4), c('E', 'min7', 4), c('A', '7', 4)
    ], tags: ['mpb', 'ivan-lins'] },
    { id: 'samurai', title: 'Samurai', composer: 'Djavan', style: 'samba', key: 'Dm', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [
        c('D', 'min7', 4), c('D', 'min7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('Bb', 'maj7', 4), c('E', 'min7b5', 4), c('A', '7alt', 4),
        c('D', 'min7', 4), c('D', 'min7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('Bb', 'maj7', 4), c('E', 'min7b5', 4), c('A', '7alt', 4)
    ], tags: ['mpb', 'djavan'] },
    { id: 'flor-de-lis', title: 'Flor de Lis', composer: 'Djavan', style: 'samba', key: 'E', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [
        c('E', 'maj7', 4), c('E', 'maj7', 4), c('F#', 'min7', 4), c('B', '7', 4),
        c('E', 'maj7', 4), c('E', 'maj7', 4), c('F#', 'min7', 4), c('B', '7', 4),
        c('E', 'maj7', 4), c('E', 'maj7', 4), c('F#', 'min7', 4), c('B', '7', 4),
        c('E', 'maj7', 4), c('E', 'maj7', 4), c('F#', 'min7', 4), c('B', '7', 4)
    ], tags: ['mpb', 'djavan'] },
    { id: 'sina', title: 'Sina', composer: 'Djavan', style: 'samba', key: 'A', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [
        c('A', 'maj7', 4), c('A', 'maj7', 4), c('B', 'min7', 4), c('E', '7', 4),
        c('A', 'maj7', 4), c('A', 'maj7', 4), c('B', 'min7', 4), c('E', '7', 4),
        c('A', 'maj7', 4), c('A', 'maj7', 4), c('B', 'min7', 4), c('E', '7', 4),
        c('A', 'maj7', 4), c('A', 'maj7', 4), c('B', 'min7', 4), c('E', '7', 4)
    ], tags: ['mpb', 'djavan'] },
    { id: 'oceano', title: 'Oceano', composer: 'Djavan', style: 'ballad', key: 'D', tempo: 80, timeSignature: [4, 4], bars: 32, changes: [
        c('D', 'maj7', 4), c('D', 'maj7', 4), c('E', 'min7', 4), c('A', '7', 4),
        c('D', 'maj7', 4), c('D', 'maj7', 4), c('E', 'min7', 4), c('A', '7', 4),
        c('D', 'maj7', 4), c('D', 'maj7', 4), c('E', 'min7', 4), c('A', '7', 4),
        c('D', 'maj7', 4), c('D', 'maj7', 4), c('E', 'min7', 4), c('A', '7', 4)
    ], tags: ['mpb', 'djavan'] },
    { id: 'meu-bem-querer', title: 'Meu Bem Querer', composer: 'Djavan', style: 'ballad', key: 'E', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [
        c('E', 'maj7', 4), c('E', 'maj7', 4), c('F#', 'min7', 4), c('B', '7', 4),
        c('E', 'maj7', 4), c('E', 'maj7', 4), c('F#', 'min7', 4), c('B', '7', 4),
        c('E', 'maj7', 4), c('E', 'maj7', 4), c('F#', 'min7', 4), c('B', '7', 4),
        c('E', 'maj7', 4), c('E', 'maj7', 4), c('F#', 'min7', 4), c('B', '7', 4)
    ], tags: ['mpb', 'djavan'] },
    { id: 'travessia', title: 'Travessia', composer: 'Milton Nascimento', style: 'ballad', key: 'G', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('C', 'maj7', 4), c('C', 'maj7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('C', 'maj7', 4), c('C', 'maj7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('C', 'maj7', 4), c('C', 'maj7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('C', 'maj7', 4), c('C', 'maj7', 4)
    ], tags: ['mpb', 'milton'] },
    { id: 'maria-maria', title: 'Maria Maria', composer: 'Milton Nascimento', style: 'samba', key: 'C', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('F', 'maj7', 4), c('F', 'maj7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('F', 'maj7', 4), c('F', 'maj7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('F', 'maj7', 4), c('F', 'maj7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('F', 'maj7', 4), c('F', 'maj7', 4)
    ], tags: ['mpb', 'milton'] },
    { id: 'cais', title: 'Cais', composer: 'Milton Nascimento', style: 'ballad', key: 'C', tempo: 70, timeSignature: [4, 4], bars: 32, changes: [
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('Bb', 'maj7', 4), c('Bb', 'maj7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('Bb', 'maj7', 4), c('Bb', 'maj7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('Bb', 'maj7', 4), c('Bb', 'maj7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('Bb', 'maj7', 4), c('Bb', 'maj7', 4)
    ], tags: ['mpb', 'milton'] },
    { id: 'pont-de-areia', title: 'Ponta de Areia', composer: 'Milton Nascimento', style: 'samba', key: 'A', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [
        c('A', 'maj7', 4), c('A', 'maj7', 4), c('G', 'maj7', 4), c('G', 'maj7', 4),
        c('A', 'maj7', 4), c('A', 'maj7', 4), c('G', 'maj7', 4), c('G', 'maj7', 4),
        c('A', 'maj7', 4), c('A', 'maj7', 4), c('G', 'maj7', 4), c('G', 'maj7', 4),
        c('A', 'maj7', 4), c('A', 'maj7', 4), c('G', 'maj7', 4), c('G', 'maj7', 4)
    ], tags: ['mpb', 'milton'] },
    { id: 'vera-cruz', title: 'Vera Cruz', composer: 'Milton Nascimento', style: 'samba', key: 'F', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('Eb', 'maj7', 4), c('Eb', 'maj7', 4),
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('Eb', 'maj7', 4), c('Eb', 'maj7', 4),
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('Eb', 'maj7', 4), c('Eb', 'maj7', 4),
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('Eb', 'maj7', 4), c('Eb', 'maj7', 4)
    ], tags: ['mpb', 'milton'] },
    { id: 'clube-da-esquina', title: 'Clube da Esquina', composer: 'Milton/Lo', style: 'ballad', key: 'D', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [
        c('D', 'maj7', 4), c('D', 'maj7', 4), c('C', 'maj7', 4), c('C', 'maj7', 4),
        c('D', 'maj7', 4), c('D', 'maj7', 4), c('C', 'maj7', 4), c('C', 'maj7', 4),
        c('D', 'maj7', 4), c('D', 'maj7', 4), c('C', 'maj7', 4), c('C', 'maj7', 4),
        c('D', 'maj7', 4), c('D', 'maj7', 4), c('C', 'maj7', 4), c('C', 'maj7', 4)
    ], tags: ['mpb', 'milton'] },
    { id: 'lamento-sertanejo', title: 'Lamento Sertanejo', composer: 'Dominguinhos', style: 'ballad', key: 'G', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4)
    ], tags: ['mpb', 'nordeste'] },
    { id: 'asa-branca', title: 'Asa Branca', composer: 'Luiz Gonzaga', style: 'baião', key: 'F', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('C', '7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('C', '7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('C', '7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('C', '7', 4), c('C', '7', 4)
    ], tags: ['mpb', 'nordeste'] },
    { id: 'carinhoso', title: 'Carinhoso', composer: 'Pixinguinha', style: 'choro', key: 'F', tempo: 80, timeSignature: [4, 4], bars: 32, changes: [
        c('F', 'maj7', 4), c('G', '7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('G', '7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('A', 'min7', 4), c('D', '7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('G', '7', 4), c('G', 'min7', 4), c('C', '7', 4)
    ], tags: ['choro', 'classic'] },
    { id: 'odeon', title: 'Odeon', composer: 'Ernesto Nazareth', style: 'choro', key: 'C#m', tempo: 100, timeSignature: [4, 4], bars: 32, changes: [
        c('C#', 'min7', 4), c('G#', '7', 4), c('C#', 'min7', 4), c('G#', '7', 4),
        c('C#', 'min7', 4), c('G#', '7', 4), c('C#', 'min7', 4), c('G#', '7', 4),
        c('C#', 'min7', 4), c('G#', '7', 4), c('C#', 'min7', 4), c('G#', '7', 4),
        c('C#', 'min7', 4), c('G#', '7', 4), c('C#', 'min7', 4), c('G#', '7', 4)
    ], tags: ['choro', 'classic'] },
    { id: 'brasileirinho', title: 'Brasileirinho', composer: 'Waldir Azevedo', style: 'choro', key: 'A', tempo: 180, timeSignature: [2, 4], bars: 32, changes: [
        c('A', 'maj7', 2), c('E', '7', 2), c('A', 'maj7', 2), c('E', '7', 2),
        c('A', 'maj7', 2), c('E', '7', 2), c('A', 'maj7', 2), c('E', '7', 2),
        c('A', 'maj7', 2), c('E', '7', 2), c('A', 'maj7', 2), c('E', '7', 2),
        c('A', 'maj7', 2), c('E', '7', 2), c('A', 'maj7', 2), c('E', '7', 2)
    ], tags: ['choro', 'fast'] },
    { id: 'tico-tico', title: 'Tico-Tico no Fubá', composer: 'Zequinha de Abreu', style: 'choro', key: 'Am', tempo: 160, timeSignature: [4, 4], bars: 32, changes: [
        c('A', 'min7', 4), c('E', '7', 4), c('A', 'min7', 4), c('E', '7', 4),
        c('A', 'min7', 4), c('E', '7', 4), c('A', 'min7', 4), c('E', '7', 4),
        c('A', 'min7', 4), c('E', '7', 4), c('A', 'min7', 4), c('E', '7', 4),
        c('A', 'min7', 4), c('E', '7', 4), c('A', 'min7', 4), c('E', '7', 4)
    ], tags: ['choro', 'fast'] },
    { id: 'aquarela-do-brasil', title: 'Aquarela do Brasil', composer: 'Ary Barroso', style: 'samba', key: 'G', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('G#', 'dim7', 4), c('G#', 'dim7', 4),
        c('A', 'min7', 4), c('A', 'min7', 4), c('D', '7', 4), c('D', '7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('G#', 'dim7', 4), c('G#', 'dim7', 4),
        c('A', 'min7', 4), c('A', 'min7', 4), c('D', '7', 4), c('D', '7', 4)
    ], tags: ['samba', 'classic'] },
    { id: 'na-baixa-do-sapateiro', title: 'Na Baixa do Sapateiro', composer: 'Ary Barroso', style: 'samba', key: 'C', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4)
    ], tags: ['samba', 'classic'] },
    { id: 'risva', title: 'Risque', composer: 'Ary Barroso', style: 'samba', key: 'F', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('G', 'min7', 4), c('C', '7', 4)
    ], tags: ['samba', 'classic'] },
    { id: 'no-rancho-fundo', title: 'No Rancho Fundo', composer: 'Ary Barroso', style: 'samba', key: 'C', tempo: 100, timeSignature: [4, 4], bars: 32, changes: [
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4)
    ], tags: ['samba', 'classic'] },
    { id: 'faceira', title: 'Faceira', composer: 'Ary Barroso', style: 'samba', key: 'F', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('G', 'min7', 4), c('C', '7', 4)
    ], tags: ['samba', 'classic'] },
    { id: 'eu-sonhei-que-tu-estavas-tao-linda', title: 'Eu Sonhei Que Tu Estavas Tão Linda', composer: 'Lamas/Moraes', style: 'waltz', key: 'C', tempo: 100, timeSignature: [3, 4], bars: 32, changes: [
        c('C', 'maj7', 3), c('C', 'maj7', 3), c('D', 'min7', 3), c('G', '7', 3),
        c('C', 'maj7', 3), c('C', 'maj7', 3), c('D', 'min7', 3), c('G', '7', 3),
        c('C', 'maj7', 3), c('C', 'maj7', 3), c('D', 'min7', 3), c('G', '7', 3),
        c('C', 'maj7', 3), c('C', 'maj7', 3), c('D', 'min7', 3), c('G', '7', 3)
    ], tags: ['waltz', 'classic'] },
    { id: 'chao-de-estrelas', title: 'Chão de Estrelas', composer: 'Silvio Caldas', style: 'seresta', key: 'C', tempo: 80, timeSignature: [4, 4], bars: 32, changes: [
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4)
    ], tags: ['seresta', 'classic'] },
    { id: 'a-deusa-da-minha-rua', title: 'A Deusa da Minha Rua', composer: 'Newton Teixeira', style: 'seresta', key: 'G', tempo: 80, timeSignature: [4, 4], bars: 32, changes: [
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4)
    ], tags: ['seresta', 'classic'] },
    { id: 'vinganca', title: 'Vingança', composer: 'Lupicínio Rodrigues', style: 'samba-cancao', key: 'Am', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [
        c('A', 'min7', 4), c('E', '7', 4), c('A', 'min7', 4), c('A', '7', 4),
        c('D', 'min7', 4), c('D', 'min7', 4), c('B', 'min7b5', 4), c('E', '7', 4),
        c('A', 'min7', 4), c('E', '7', 4), c('A', 'min7', 4), c('A', '7', 4),
        c('D', 'min7', 4), c('D', 'min7', 4), c('B', 'min7b5', 4), c('E', '7', 4)
    ], tags: ['samba-cancao'] },
    { id: 'nervos-de-aco', title: 'Nervos de Aço', composer: 'Lupicínio Rodrigues', style: 'samba-cancao', key: 'E', tempo: 80, timeSignature: [4, 4], bars: 32, changes: [
        c('E', 'maj7', 4), c('F#', 'min7', 4), c('B', '7', 4), c('E', 'maj7', 4),
        c('C#', 'min7', 4), c('F#', 'min7', 4), c('B', '7', 4), c('E', 'maj7', 4),
        c('E', 'maj7', 4), c('F#', 'min7', 4), c('B', '7', 4), c('E', 'maj7', 4),
        c('C#', 'min7', 4), c('F#', 'min7', 4), c('B', '7', 4), c('E', 'maj7', 4)
    ], tags: ['samba-cancao'] },
    { id: 'nunca', title: 'Nunca', composer: 'Lupicínio Rodrigues', style: 'samba-cancao', key: 'C', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4)
    ], tags: ['samba-cancao'] },
    { id: 'felicidade', title: 'Felicidade', composer: 'Lupicínio Rodrigues', style: 'samba-cancao', key: 'C', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4)
    ], tags: ['samba-cancao'] },
    { id: 'se-acaso-voce-chegasse', title: 'Se Acaso Você Chegasse', composer: 'Lupicínio Rodrigues', style: 'samba', key: 'F', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('G', 'min7', 4), c('C', '7', 4)
    ], tags: ['samba'] },
    { id: 'aviso-aos-navegantes', title: 'Aviso aos Navegantes', composer: 'Lupicínio Rodrigues', style: 'samba', key: 'G', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4)
    ], tags: ['samba'] },
    { id: 'nao-deixe-o-samba-morrer', title: 'Não Deixe o Samba Morrer', composer: 'Aloisio/Edson', style: 'samba', key: 'G', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4)
    ], tags: ['samba', 'alcione'] },
    { id: 'o-mundo-e-um-moinho', title: 'O Mundo é um Moinho', composer: 'Cartola', style: 'samba', key: 'C', tempo: 80, timeSignature: [4, 4], bars: 32, changes: [
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4)
    ], tags: ['samba', 'cartola'] },
    { id: 'as-rosas-nao-falam', title: 'As Rosas Não Falam', composer: 'Cartola', style: 'samba', key: 'Bm', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [
        c('B', 'min7', 4), c('B', 'min7', 4), c('E', 'min7', 4), c('F#', '7', 4),
        c('B', 'min7', 4), c('B', 'min7', 4), c('E', 'min7', 4), c('F#', '7', 4),
        c('B', 'min7', 4), c('B', 'min7', 4), c('E', 'min7', 4), c('F#', '7', 4),
        c('B', 'min7', 4), c('B', 'min7', 4), c('E', 'min7', 4), c('F#', '7', 4)
    ], tags: ['samba', 'cartola'] },
    { id: 'preciso-me-encontrar', title: 'Preciso Me Encontrar', composer: 'Candeia', style: 'samba', key: 'Cm', tempo: 100, timeSignature: [4, 4], bars: 32, changes: [
        c('C', 'min7', 4), c('C', 'min7', 4), c('F', 'min7', 4), c('G', '7', 4),
        c('C', 'min7', 4), c('C', 'min7', 4), c('F', 'min7', 4), c('G', '7', 4),
        c('C', 'min7', 4), c('C', 'min7', 4), c('F', 'min7', 4), c('G', '7', 4),
        c('C', 'min7', 4), c('C', 'min7', 4), c('F', 'min7', 4), c('G', '7', 4)
    ], tags: ['samba', 'cartola'] },
    { id: 'o-sol-nascera', title: 'O Sol Nascerá', composer: 'Cartola', style: 'samba', key: 'E', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [
        c('E', 'maj7', 4), c('E', 'maj7', 4), c('F#', 'min7', 4), c('B', '7', 4),
        c('E', 'maj7', 4), c('E', 'maj7', 4), c('F#', 'min7', 4), c('B', '7', 4),
        c('E', 'maj7', 4), c('E', 'maj7', 4), c('F#', 'min7', 4), c('B', '7', 4),
        c('E', 'maj7', 4), c('E', 'maj7', 4), c('F#', 'min7', 4), c('B', '7', 4)
    ], tags: ['samba', 'cartola'] },
    { id: 'alvorada', title: 'Alvorada', composer: 'Cartola', style: 'samba', key: 'C', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('D', 'min7', 4), c('G', '7', 4)
    ], tags: ['samba', 'cartola'] },
    { id: 'disfarca-e-chora', title: 'Disfarça e Chora', composer: 'Cartola', style: 'samba', key: 'F', tempo: 100, timeSignature: [4, 4], bars: 32, changes: [
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('G', 'min7', 4), c('C', '7', 4)
    ], tags: ['samba', 'cartola'] },
    { id: 'cordas-de-aco', title: 'Cordas de Aço', composer: 'Cartola', style: 'samba', key: 'D', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [
        c('D', 'maj7', 4), c('D', 'maj7', 4), c('E', 'min7', 4), c('A', '7', 4),
        c('D', 'maj7', 4), c('D', 'maj7', 4), c('E', 'min7', 4), c('A', '7', 4),
        c('D', 'maj7', 4), c('D', 'maj7', 4), c('E', 'min7', 4), c('A', '7', 4),
        c('D', 'maj7', 4), c('D', 'maj7', 4), c('E', 'min7', 4), c('A', '7', 4)
    ], tags: ['samba', 'cartola'] },
    { id: 'folhas-secas', title: 'Folhas Secas', composer: 'Nelson Cavaquinho', style: 'samba', key: 'G', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4)
    ], tags: ['samba'] },
    { id: 'juizo-final', title: 'Juízo Final', composer: 'Nelson Cavaquinho', style: 'samba', key: 'Cm', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [
        c('C', 'min7', 4), c('C', 'min7', 4), c('F', 'min7', 4), c('G', '7', 4),
        c('C', 'min7', 4), c('C', 'min7', 4), c('F', 'min7', 4), c('G', '7', 4),
        c('C', 'min7', 4), c('C', 'min7', 4), c('F', 'min7', 4), c('G', '7', 4),
        c('C', 'min7', 4), c('C', 'min7', 4), c('F', 'min7', 4), c('G', '7', 4)
    ], tags: ['samba'] },
    { id: 'a-flor-e-o-espinho', title: 'A Flor e o Espinho', composer: 'Nelson Cavaquinho', style: 'samba', key: 'E', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [
        c('E', 'maj7', 4), c('E', 'maj7', 4), c('F#', 'min7', 4), c('B', '7', 4),
        c('E', 'maj7', 4), c('E', 'maj7', 4), c('F#', 'min7', 4), c('B', '7', 4),
        c('E', 'maj7', 4), c('E', 'maj7', 4), c('F#', 'min7', 4), c('B', '7', 4),
        c('E', 'maj7', 4), c('E', 'maj7', 4), c('F#', 'min7', 4), c('B', '7', 4)
    ], tags: ['samba'] },
    { id: 'palhaco', title: 'Palhaço', composer: 'Egberto Gismonti', style: 'mpb', key: 'C', tempo: 100, timeSignature: [4, 4], bars: 32, changes: [
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('F', 'maj7', 4), c('F', 'maj7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('F', 'maj7', 4), c('F', 'maj7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('F', 'maj7', 4), c('F', 'maj7', 4),
        c('C', 'maj7', 4), c('C', 'maj7', 4), c('F', 'maj7', 4), c('F', 'maj7', 4)
    ], tags: ['mpb', 'instrumental'] },
    { id: 'loro', title: 'Loro', composer: 'Egberto Gismonti', style: 'mpb', key: 'G', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('A', 'min7', 4), c('D', '7', 4)
    ], tags: ['mpb', 'instrumental'] },
    { id: 'frevo', title: 'Frevo', composer: 'Egberto Gismonti', style: 'frevo', key: 'D', tempo: 160, timeSignature: [4, 4], bars: 32, changes: [
        c('D', 'maj7', 4), c('D', 'maj7', 4), c('E', 'min7', 4), c('A', '7', 4),
        c('D', 'maj7', 4), c('D', 'maj7', 4), c('E', 'min7', 4), c('A', '7', 4),
        c('D', 'maj7', 4), c('D', 'maj7', 4), c('E', 'min7', 4), c('A', '7', 4),
        c('D', 'maj7', 4), c('D', 'maj7', 4), c('E', 'min7', 4), c('A', '7', 4)
    ], tags: ['mpb', 'instrumental'] },
    { id: 'bebe', title: 'Bebê', composer: 'Hermeto Pascoal', style: 'mpb', key: 'Ab', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [
        c('Ab', 'maj7', 4), c('Ab', 'maj7', 4), c('Bb', 'min7', 4), c('Eb', '7', 4),
        c('Ab', 'maj7', 4), c('Ab', 'maj7', 4), c('Bb', 'min7', 4), c('Eb', '7', 4),
        c('Ab', 'maj7', 4), c('Ab', 'maj7', 4), c('Bb', 'min7', 4), c('Eb', '7', 4),
        c('Ab', 'maj7', 4), c('Ab', 'maj7', 4), c('Bb', 'min7', 4), c('Eb', '7', 4)
    ], tags: ['mpb', 'hermeto'] },
    { id: 'chorinho-pra-ele', title: 'Chorinho pra Ele', composer: 'Hermeto Pascoal', style: 'choro', key: 'F', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('G', 'min7', 4), c('C', '7', 4),
        c('F', 'maj7', 4), c('F', 'maj7', 4), c('G', 'min7', 4), c('C', '7', 4)
    ], tags: ['choro', 'hermeto'] },
    { id: 'lamento', title: 'Lamento', composer: 'Pixinguinha', style: 'choro', key: 'G', tempo: 100, timeSignature: [4, 4], bars: 32, changes: [
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('C', 'min7', 4), c('D', '7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('C', 'min7', 4), c('D', '7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('C', 'min7', 4), c('D', '7', 4),
        c('G', 'maj7', 4), c('G', 'maj7', 4), c('C', 'min7', 4), c('D', '7', 4)
    ], tags: ['choro', 'classic'] },
    { id: 'um-a-zero', title: 'Um a Zero', composer: 'Pixinguinha', style: 'choro', key: 'Bb', tempo: 150, timeSignature: [2, 4], bars: 32, changes: [
        c('Bb', 'maj7', 2), c('F', '7', 2), c('Bb', 'maj7', 2), c('F', '7', 2),
        c('Bb', 'maj7', 2), c('F', '7', 2), c('Bb', 'maj7', 2), c('F', '7', 2),
        c('Bb', 'maj7', 2), c('F', '7', 2), c('Bb', 'maj7', 2), c('F', '7', 2),
        c('Bb', 'maj7', 2), c('F', '7', 2), c('Bb', 'maj7', 2), c('F', '7', 2)
    ], tags: ['choro', 'classic'] },
    { id: 'vou-vivendo', title: 'Vou Vivendo', composer: 'Pixinguinha', style: 'choro', key: 'F', tempo: 110, timeSignature: [2, 4], bars: 32, changes: [
        c('F', 'maj7', 2), c('C', '7', 2), c('F', 'maj7', 2), c('C', '7', 2),
        c('F', 'maj7', 2), c('C', '7', 2), c('F', 'maj7', 2), c('C', '7', 2),
        c('F', 'maj7', 2), c('C', '7', 2), c('F', 'maj7', 2), c('C', '7', 2),
        c('F', 'maj7', 2), c('C', '7', 2), c('F', 'maj7', 2), c('C', '7', 2)
    ], tags: ['choro', 'classic'] },
    { id: 'rosa', title: 'Rosa', composer: 'Pixinguinha', style: 'waltz', key: 'G', tempo: 90, timeSignature: [3, 4], bars: 32, changes: [
        c('G', 'maj7', 3), c('D', '7', 3), c('G', 'maj7', 3), c('D', '7', 3),
        c('G', 'maj7', 3), c('D', '7', 3), c('G', 'maj7', 3), c('D', '7', 3),
        c('G', 'maj7', 3), c('D', '7', 3), c('G', 'maj7', 3), c('D', '7', 3),
        c('G', 'maj7', 3), c('D', '7', 3), c('G', 'maj7', 3), c('D', '7', 3)
    ], tags: ['waltz', 'classic'] },
    { id: 'ingenuo', title: 'Ingênuo', composer: 'Pixinguinha', style: 'choro', key: 'C', tempo: 80, timeSignature: [2, 4], bars: 32, changes: [
        c('C', 'maj7', 2), c('G', '7', 2), c('C', 'maj7', 2), c('G', '7', 2),
        c('C', 'maj7', 2), c('G', '7', 2), c('C', 'maj7', 2), c('G', '7', 2),
        c('C', 'maj7', 2), c('G', '7', 2), c('C', 'maj7', 2), c('G', '7', 2),
        c('C', 'maj7', 2), c('G', '7', 2), c('C', 'maj7', 2), c('G', '7', 2)
    ], tags: ['choro', 'classic'] },
    { id: 'pedacinhos-do-ceu', title: 'Pedacinhos do Céu', composer: 'Waldir Azevedo', style: 'choro', key: 'A', tempo: 130, timeSignature: [2, 4], bars: 32, changes: [
        c('A', 'maj7', 2), c('E', '7', 2), c('A', 'maj7', 2), c('E', '7', 2),
        c('A', 'maj7', 2), c('E', '7', 2), c('A', 'maj7', 2), c('E', '7', 2),
        c('A', 'maj7', 2), c('E', '7', 2), c('A', 'maj7', 2), c('E', '7', 2),
        c('A', 'maj7', 2), c('E', '7', 2), c('A', 'maj7', 2), c('E', '7', 2)
    ], tags: ['choro', 'classic'] },
    { id: 'delicado', title: 'Delicado', composer: 'Waldir Azevedo', style: 'choro', key: 'C', tempo: 120, timeSignature: [2, 4], bars: 32, changes: [
        c('C', 'maj7', 2), c('G', '7', 2), c('C', 'maj7', 2), c('G', '7', 2),
        c('C', 'maj7', 2), c('G', '7', 2), c('C', 'maj7', 2), c('G', '7', 2),
        c('C', 'maj7', 2), c('G', '7', 2), c('C', 'maj7', 2), c('G', '7', 2),
        c('C', 'maj7', 2), c('G', '7', 2), c('C', 'maj7', 2), c('G', '7', 2)
    ], tags: ['choro', 'classic'] },
    { id: 've-se-gostas', title: 'Vê Se Gostas', composer: 'Waldir Azevedo', style: 'choro', key: 'F', tempo: 130, timeSignature: [2, 4], bars: 32, changes: [
        c('F', 'maj7', 2), c('C', '7', 2), c('F', 'maj7', 2), c('C', '7', 2),
        c('F', 'maj7', 2), c('C', '7', 2), c('F', 'maj7', 2), c('C', '7', 2),
        c('F', 'maj7', 2), c('C', '7', 2), c('F', 'maj7', 2), c('C', '7', 2),
        c('F', 'maj7', 2), c('C', '7', 2), c('F', 'maj7', 2), c('C', '7', 2)
    ], tags: ['choro', 'classic'] },
    { id: 'flor-amorosa', title: 'Flor Amorosa', composer: 'Joaquim Callado', style: 'choro', key: 'C', tempo: 100, timeSignature: [2, 4], bars: 32, changes: [
        c('C', 'maj7', 2), c('G', '7', 2), c('C', 'maj7', 2), c('G', '7', 2),
        c('C', 'maj7', 2), c('G', '7', 2), c('C', 'maj7', 2), c('G', '7', 2),
        c('C', 'maj7', 2), c('G', '7', 2), c('C', 'maj7', 2), c('G', '7', 2),
        c('C', 'maj7', 2), c('G', '7', 2), c('C', 'maj7', 2), c('G', '7', 2)
    ], tags: ['choro', 'classic'] },
    { id: 'apanhei-te-cavaquinho', title: 'Apanhei-te Cavaquinho', composer: 'Ernesto Nazareth', style: 'choro', key: 'G', tempo: 160, timeSignature: [2, 4], bars: 32, changes: [
        c('G', 'maj7', 2), c('D', '7', 2), c('G', 'maj7', 2), c('D', '7', 2),
        c('G', 'maj7', 2), c('D', '7', 2), c('G', 'maj7', 2), c('D', '7', 2),
        c('G', 'maj7', 2), c('D', '7', 2), c('G', 'maj7', 2), c('D', '7', 2),
        c('G', 'maj7', 2), c('D', '7', 2), c('G', 'maj7', 2), c('D', '7', 2)
    ], tags: ['choro', 'classic'] },
];

export function getAllStandards() { return STANDARDS; }
export function getStandardById(id: string) { return STANDARDS.find(s => s.id === id); }
export function getAllTags() {
    return Array.from(new Set(STANDARDS.flatMap(s => s.tags))).sort();
}
