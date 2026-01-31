
import { Progression, ChordChange } from '../lib/music/progressions';

function c(root: string, type: any, bar: number, beat: number = 1, duration: number = 4): ChordChange {
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
    { id: 'outra-vez', title: 'Outra Vez', composer: 'Jobim', artist: 'Nara Leão', style: 'bossa', key: 'C', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'jobim', 'nara-leao'] },
    { id: 'favela', title: 'Favela', composer: 'Jobim/Vinicius', artist: 'Nara Leão', style: 'bossa', key: 'G', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'nara-leao'] },
    { id: 'mariana', title: 'Mariana', composer: 'Nara Leão', artist: 'Nara Leão', style: 'bossa', key: 'E', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'nara-leao'] },
    { id: 'voce', title: 'Você', composer: 'Menescal/Bôscoli', artist: 'Nara Leão', style: 'bossa', key: 'A', tempo: 100, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'nara-leao'] },
    { id: 'o-morro-nao-tem-vez', title: 'O Morro Não Tem Vez', composer: 'Jobim/Vinicius', artist: 'Nara Leão', style: 'bossa', key: 'C#', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'nara-leao'] },
    { id: 'feio-nao-e-bonito', title: 'Feio Não É Bonito', composer: 'Carlos Lyra', artist: 'Nara Leão', style: 'bossa', key: 'F', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'nara-leao'] },
    { id: 'marcha-da-quarta-feira-de-cinzas', title: 'Marcha da Quarta-Feira de Cinzas', composer: 'Carlos Lyra', artist: 'Nara Leão', style: 'bossa', key: 'Eb', tempo: 120, timeSignature: [4, 4], bars: 40, changes: [], tags: ['bossa', 'mpb', 'nara-leao'] },
    { id: 'carcara', title: 'Carcará', composer: 'João do Vale', artist: 'Nara Leão', style: 'bossa', key: 'E', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [], tags: ['mpb', 'nara-leao'] },
    { id: 'luz-negra', title: 'Luz Negra', composer: 'Nelson Cavaquinho', artist: 'Nara Leão', style: 'bossa', key: 'G', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [], tags: ['samba', 'mpb', 'nara-leao'] },
    { id: 'quem-te-viu-quem-te-ve', title: 'Quem Te Viu, Quem Te Vê', composer: 'Chico Buarque', artist: 'Nara Leão', style: 'bossa', key: 'C', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [], tags: ['mpb', 'nara-leao'] },

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
    { id: 'dindi', title: 'Dindi', composer: 'Jobim', style: 'bossa', key: 'A', tempo: 100, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'jobim'] },
    { id: 'triste', title: 'Triste', composer: 'Jobim', style: 'bossa', key: 'Bb', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'jobim'] },
    { id: 'vivo-sonhando', title: 'Vivo Sonhando', composer: 'Jobim', style: 'bossa', key: 'G', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'jobim'] },
    { id: 'fotografia', title: 'Fotografia', composer: 'Jobim', style: 'bossa', key: 'C', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'jobim'] },
    { id: 'so-danco-samba', title: 'Só Danço Samba', composer: 'Jobim', style: 'bossa', key: 'C', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'jobim'] },
    { id: 'ela-e-carioca', title: 'Ela é Carioca', composer: 'Jobim', style: 'bossa', key: 'G', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'jobim'] },
    { id: 'samba-de-verao', title: 'Samba de Verão', composer: 'Marcos Valle', style: 'bossa', key: 'F', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'classic'] },
    { id: 'mas-que-nada', title: 'Mas Que Nada', composer: 'Jorge Ben', style: 'bossa', key: 'F', tempo: 150, timeSignature: [4, 4], bars: 32, changes: [], tags: ['samba', 'classic'] },
    {
        id: 'manha-de-carnaval', title: 'Manhã de Carnaval', composer: 'Luiz Bonfá', style: 'bossa', key: 'A', tempo: 110, timeSignature: [4, 4], bars: 8, changes: [
            c('A', 'min7', 1), c('B', 'min7b5', 2), c('E', '7b9', 3), c('A', 'min7', 4),
            c('D', 'min7', 5), c('G', '7', 6), c('C', 'maj7', 7), c('E', '7b9', 8),
        ], tags: ['bossa', 'classic']
    },
    { id: 'berimbau', title: 'Berimbau', composer: 'Baden Powell', style: 'bossa', key: 'D', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [], tags: ['afro-samba'] },
    { id: 'canto-de-ossanha', title: 'Canto de Ossanha', composer: 'Baden Powell', style: 'bossa', key: 'G', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [], tags: ['afro-samba'] },
    { id: 'a-felicidade', title: 'A Felicidade', composer: 'Jobim', style: 'bossa', key: 'C', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'jobim'] },
    { id: 'o-amor-em-paz', title: 'O Amor em Paz', composer: 'Jobim', style: 'bossa', key: 'F', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'jobim'] },
    { id: 'borzeguim', title: 'Borzeguim', composer: 'Jobim', style: 'bossa', key: 'D', tempo: 150, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'jobim'] },

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
    { id: 'body-and-soul', title: 'Body and Soul', composer: 'Green', style: 'standard', key: 'Db', tempo: 80, timeSignature: [4, 4], bars: 32, changes: [], tags: ['ballad', 'standard'] },
    { id: 'but-not-for-me', title: 'But Not For Me', composer: 'Gershwin', style: 'standard', key: 'Eb', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard', 'gershwin'] },
    { id: 'bye-bye-blackbird', title: 'Bye Bye Blackbird', composer: 'Henderson', style: 'standard', key: 'F', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard'] },
    { id: 'caravan', title: 'Caravan', composer: 'Ellington/Tizol', style: 'latin', key: 'F', tempo: 180, timeSignature: [4, 4], bars: 64, changes: [], tags: ['latin', 'ellington'] },
    { id: 'cherokee', title: 'Cherokee', composer: 'Ray Noble', style: 'bebop', key: 'Bb', tempo: 220, timeSignature: [4, 4], bars: 64, changes: [], tags: ['bebop', 'fast'] },
    { id: 'confirmation', title: 'Confirmation', composer: 'Charlie Parker', style: 'bebop', key: 'F', tempo: 180, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bebop', 'parker'] },
    { id: 'days-of-wine-and-roses', title: 'Days of Wine and Roses', composer: 'Mancini', style: 'standard', key: 'F', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard'] },
    { id: 'doxy', title: 'Doxy', composer: 'Sonny Rollins', style: 'standard', key: 'Bb', tempo: 130, timeSignature: [4, 4], bars: 16, changes: [], tags: ['standard', 'rollins'] },
    { id: 'fly-me-to-the-moon', title: 'Fly Me To The Moon', composer: 'Bart Howard', style: 'standard', key: 'C', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard', 'sinatra'] },
    { id: 'footprints', title: 'Footprints', composer: 'Wayne Shorter', style: 'modal', key: 'C', tempo: 120, timeSignature: [6, 4], bars: 12, changes: [], tags: ['modal', 'shorter'] },
    { id: 'four', title: 'Four', composer: 'Miles Davis', style: 'bebop', key: 'Eb', tempo: 160, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bebop', 'miles'] },
    { id: 'giant-steps', title: 'Giant Steps', composer: 'Coltrane', style: 'bebop', key: 'B', tempo: 200, timeSignature: [4, 4], bars: 16, changes: [], tags: ['bebop', 'coltrane'] },
    { id: 'have-you-met-miss-jones', title: 'Have You Met Miss Jones?', composer: 'Rodgers', style: 'standard', key: 'F', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard'] },
    { id: 'how-high-the-moon', title: 'How High the Moon', composer: 'Morgan Lewis', style: 'standard', key: 'G', tempo: 150, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard'] },
    { id: 'i-hear-a-rhapsody', title: 'I Hear a Rhapsody', composer: 'Fragos', style: 'standard', key: 'Eb', tempo: 160, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard'] },
    { id: 'i-love-you', title: 'I Love You', composer: 'Cole Porter', style: 'standard', key: 'F', tempo: 150, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard', 'porter'] },
    { id: 'i-remember-you', title: 'I Remember You', composer: 'Schertzinger', style: 'standard', key: 'F', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard'] },
    { id: 'if-i-were-a-bell', title: 'If I Were a Bell', composer: 'Frank Loesser', style: 'standard', key: 'F', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard', 'miles'] },
    { id: 'impressions', title: 'Impressions', composer: 'Coltrane', style: 'modal', key: 'D', tempo: 180, timeSignature: [4, 4], bars: 32, changes: [], tags: ['modal', 'coltrane'] },
    { id: 'in-a-sentimental-mood', title: 'In a Sentimental Mood', composer: 'Ellington', style: 'standard', key: 'F', tempo: 70, timeSignature: [4, 4], bars: 32, changes: [], tags: ['ballad', 'ellington'] },
    { id: 'it-could-happen-to-you', title: 'It Could Happen to You', composer: 'Van Heusen', style: 'standard', key: 'Eb', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard'] },
    { id: 'just-friends', title: 'Just Friends', composer: 'Klenner', style: 'standard', key: 'G', tempo: 150, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard'] },
    { id: 'lady-bird', title: 'Lady Bird', composer: 'Tadd Dameron', style: 'bebop', key: 'C', tempo: 140, timeSignature: [4, 4], bars: 16, changes: [], tags: ['bebop', 'dameron'] },
    { id: 'maiden-voyage', title: 'Maiden Voyage', composer: 'Herbie Hancock', style: 'modal', key: 'D', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [], tags: ['modal', 'hancock'] },
    { id: 'misty', title: 'Misty', composer: 'Erroll Garner', style: 'standard', key: 'Eb', tempo: 80, timeSignature: [4, 4], bars: 32, changes: [], tags: ['ballad', 'garner'] },
    { id: 'mr-pc', title: 'Mr. P.C.', composer: 'Coltrane', style: 'blues', key: 'C', tempo: 180, timeSignature: [4, 4], bars: 12, changes: [], tags: ['blues', 'coltrane'] },
    { id: 'my-funny-valentine', title: 'My Funny Valentine', composer: 'Rodgers', style: 'standard', key: 'Eb', tempo: 70, timeSignature: [4, 4], bars: 36, changes: [], tags: ['ballad', 'standard'] },
    { id: 'my-romance', title: 'My Romance', composer: 'Rodgers', style: 'standard', key: 'Bb', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard'] },
    { id: 'nardis', title: 'Nardis', composer: 'Miles/Evans', style: 'modal', key: 'E', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [], tags: ['modal', 'evans'] },
    { id: 'night-and-day', title: 'Night and Day', composer: 'Cole Porter', style: 'standard', key: 'C', tempo: 140, timeSignature: [4, 4], bars: 48, changes: [], tags: ['standard', 'porter'] },
    { id: 'oleo', title: 'Oleo', composer: 'Sonny Rollins', style: 'bebop', key: 'Bb', tempo: 200, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bebop', 'rhythm-changes'] },
    { id: 'on-green-dolphin-street', title: 'On Green Dolphin Street', composer: 'Kaper', style: 'standard', key: 'Eb', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard', 'latin-swing'] },
    { id: 'on-the-sunny-side-of-the-street', title: 'On The Sunny Side Of The Street', composer: 'McHugh', style: 'standard', key: 'C', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard'] },
    { id: 'ornithology', title: 'Ornithology', composer: 'Charlie Parker', style: 'bebop', key: 'G', tempo: 180, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bebop', 'parker'] },
    { id: 'out-of-nowhere', title: 'Out of Nowhere', composer: 'Green', style: 'standard', key: 'G', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard'] },
    { id: 'round-midnight', title: "'Round Midnight", composer: 'Monk', style: 'standard', key: 'Eb', tempo: 60, timeSignature: [4, 4], bars: 32, changes: [], tags: ['ballad', 'monk'] },
    { id: 'scrapple-from-the-apple', title: 'Scrapple from the Apple', composer: 'Charlie Parker', style: 'bebop', key: 'F', tempo: 180, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bebop', 'parker'] },
    { id: 'softly-as-in-a-morning-sunrise', title: 'Softly As in a Morning Sunrise', composer: 'Romberg', style: 'standard', key: 'C', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard', 'minor'] },
    { id: 'solar', title: 'Solar', composer: 'Miles Davis', style: 'modal', key: 'C', tempo: 140, timeSignature: [4, 4], bars: 12, changes: [], tags: ['modal', 'miles'] },
    { id: 'someday-my-prince-will-come', title: 'Someday My Prince Will Come', composer: 'Churchill', style: 'standard', key: 'Bb', tempo: 140, timeSignature: [3, 4], bars: 32, changes: [], tags: ['waltz', 'standard'] },
    { id: 'song-for-my-father', title: 'Song for My Father', composer: 'Horace Silver', style: 'latin', key: 'F', tempo: 120, timeSignature: [4, 4], bars: 24, changes: [], tags: ['latin', 'silver'] },
    { id: 'st-thomas', title: 'St. Thomas', composer: 'Sonny Rollins', style: 'latin', key: 'C', tempo: 160, timeSignature: [4, 4], bars: 16, changes: [], tags: ['latin', 'rollins'] },
    { id: 'stablemates', title: 'Stablemates', composer: 'Benny Golson', style: 'standard', key: 'Db', tempo: 130, timeSignature: [4, 4], bars: 36, changes: [], tags: ['standard', 'golson'] },
    { id: 'stella-by-starlight', title: 'Stella by Starlight', composer: 'Victor Young', style: 'standard', key: 'Bb', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard'] },
    { id: 'take-the-a-train', title: 'Take the "A" Train', composer: 'Strayhorn', style: 'standard', key: 'C', tempo: 150, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard', 'ellington'] },
    { id: 'there-will-never-be-another-you', title: 'There Will Never Be Another You', composer: 'Warren', style: 'standard', key: 'Eb', tempo: 150, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard'] },
    { id: 'well-you-neednt', title: "Well You Needn't", composer: 'Thelonious Monk', style: 'bebop', key: 'F', tempo: 160, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bebop', 'monk'] },
    { id: 'what-is-this-thing-called-love', title: 'What Is This Thing Called Love?', composer: 'Cole Porter', style: 'standard', key: 'C', tempo: 160, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard', 'porter'] },
    { id: 'yardbird-suite', title: 'Yardbird Suite', composer: 'Charlie Parker', style: 'bebop', key: 'C', tempo: 170, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bebop', 'parker'] },
    { id: 'yesterdays', title: 'Yesterdays', composer: 'Jerome Kern', style: 'standard', key: 'D', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard', 'minor'] },
    { id: 'beautiful-love', title: 'Beautiful Love', composer: 'Young', style: 'standard', key: 'D', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard', 'minor'] },
    { id: 'black-orpheus', title: 'Black Orpheus', composer: 'Bonfá', style: 'bossa', key: 'A', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'standard'] },
    { id: 'georgia-on-my-mind', title: 'Georgia on My Mind', composer: 'Carmichael', style: 'standard', key: 'F', tempo: 70, timeSignature: [4, 4], bars: 32, changes: [], tags: ['ballad', 'standard'] },
    { id: 'alice-in-wonderland', title: 'Alice in Wonderland', composer: 'Fain', style: 'standard', key: 'C', tempo: 110, timeSignature: [3, 4], bars: 32, changes: [], tags: ['waltz', 'standard'] },
    { id: 'angel-eyes', title: 'Angel Eyes', composer: 'Dennis', style: 'standard', key: 'C', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [], tags: ['blues', 'minor'] },
    { id: 'anthropology', title: 'Anthropology', composer: 'Parker/Gillespie', style: 'bebop', key: 'Bb', tempo: 220, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bebop', 'rhythm-changes'] },
    { id: 'au-privave', title: 'Au Privave', composer: 'Charlie Parker', style: 'bebop', key: 'F', tempo: 160, timeSignature: [4, 4], bars: 12, changes: [], tags: ['blues', 'parker'] },
    { id: 'be-my-love', title: 'Be My Love', composer: 'Brodszky', style: 'standard', key: 'G', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard'] },
    { id: 'bernies-tune', title: "Bernie's Tune", composer: 'Miller', style: 'standard', key: 'D', tempo: 150, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard', 'minor'] },
    { id: 'bewitched', title: 'Bewitched', composer: 'Rodgers', style: 'standard', key: 'C', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard'] },
    { id: 'blue-in-green', title: 'Blue in Green', composer: 'Miles/Evans', style: 'modal', key: 'C', tempo: 60, timeSignature: [4, 4], bars: 10, changes: [], tags: ['modal', 'ballad'] },
    { id: 'blue-moon', title: 'Blue Moon', composer: 'Rodgers', style: 'standard', key: 'Eb', tempo: 100, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard'] },
    { id: 'blues-for-alice', title: 'Blues for Alice', composer: 'Charlie Parker', style: 'bebop', key: 'F', tempo: 140, timeSignature: [4, 4], bars: 12, changes: [], tags: ['blues', 'parker'] },
    { id: 'chelsea-bridge', title: 'Chelsea Bridge', composer: 'Strayhorn', style: 'standard', key: 'Db', tempo: 70, timeSignature: [4, 4], bars: 32, changes: [], tags: ['ballad', 'strayhorn'] },
    { id: 'come-rain-or-come-shine', title: 'Come Rain or Come Shine', composer: 'Arlen', style: 'standard', key: 'F', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard'] },
    { id: 'con-alma', title: 'Con Alma', composer: 'Gillespie', style: 'latin', key: 'E', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [], tags: ['latin', 'dizzy'] },
    { id: 'corcovado-2', title: 'Corcovado (Reprise)', composer: 'Jobim', style: 'bossa', key: 'C', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa'] },
    { id: 'cute', title: 'Cute', composer: 'Hefti', style: 'standard', key: 'C', tempo: 150, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard', 'basie'] },
    { id: 'darn-that-dream', title: 'Darn That Dream', composer: 'Van Heusen', style: 'standard', key: 'G', tempo: 80, timeSignature: [4, 4], bars: 32, changes: [], tags: ['ballad', 'standard'] },
    { id: 'dear-old-stockholm', title: 'Dear Old Stockholm', composer: 'Trad.', style: 'standard', key: 'G', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard', 'minor'] },
    { id: 'desafinado-2', title: 'Desafinado (Inst.)', composer: 'Jobim', style: 'bossa', key: 'F', tempo: 140, timeSignature: [4, 4], bars: 64, changes: [], tags: ['bossa'] },
    { id: 'dinah', title: 'Dinah', composer: 'Akst', style: 'standard', key: 'Ab', tempo: 160, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard'] },
    { id: 'django', title: 'Django', composer: 'John Lewis', style: 'standard', key: 'F', tempo: 100, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard', 'mjq'] },
    { id: 'dolphin-dance', title: 'Dolphin Dance', composer: 'Hancock', style: 'modal', key: 'Eb', tempo: 120, timeSignature: [4, 4], bars: 38, changes: [], tags: ['modal', 'hancock'] },
    { id: 'dont-blame-me', title: "Don't Blame Me", composer: 'McHugh', style: 'standard', key: 'C', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [], tags: ['ballad', 'standard'] },
    { id: 'dont-get-around-much-anymore', title: "Don't Get Around Much Anymore", composer: 'Ellington', style: 'standard', key: 'C', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard', 'ellington'] },
    { id: 'dream-a-little-dream', title: 'Dream a Little Dream of Me', composer: 'Schwandt', style: 'standard', key: 'C', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard'] },
    { id: 'east-of-the-sun', title: 'East of the Sun', composer: 'Bowman', style: 'standard', key: 'G', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard'] },
    { id: 'easy-living', title: 'Easy Living', composer: 'Rainger', style: 'standard', key: 'Eb', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [], tags: ['ballad', 'standard'] },
    { id: 'easy-to-love', title: 'Easy to Love', composer: 'Porter', style: 'standard', key: 'G', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard', 'porter'] },
    { id: 'embraceable-you', title: 'Embraceable You', composer: 'Gershwin', style: 'standard', key: 'G', tempo: 80, timeSignature: [4, 4], bars: 32, changes: [], tags: ['ballad', 'gershwin'] },
    { id: 'emily', title: 'Emily', composer: 'Mandel', style: 'standard', key: 'C', tempo: 100, timeSignature: [3, 4], bars: 32, changes: [], tags: ['waltz', 'standard'] },
    { id: 'everything-happens-to-me', title: 'Everything Happens to Me', composer: 'Dennis', style: 'standard', key: 'Bb', tempo: 80, timeSignature: [4, 4], bars: 32, changes: [], tags: ['ballad', 'standard'] },
    { id: 'evidence', title: 'Evidence', composer: 'Monk', style: 'bebop', key: 'Eb', tempo: 160, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bebop', 'monk'] },
    { id: 'falling-in-love-with-love', title: 'Falling in Love with Love', composer: 'Rodgers', style: 'standard', key: 'Bb', tempo: 140, timeSignature: [3, 4], bars: 32, changes: [], tags: ['waltz', 'standard'] },
    { id: 'fascinating-rhythm', title: 'Fascinating Rhythm', composer: 'Gershwin', style: 'standard', key: 'Eb', tempo: 160, timeSignature: [4, 4], bars: 32, changes: [], tags: ['standard', 'gershwin'] },

    // --- EXPANDED BOSSA NOVA / MPB (80+ Items) ---
    { id: 'samba-de-aviao', title: 'Samba do Avião', composer: 'Jobim', style: 'bossa', key: 'C', tempo: 140, timeSignature: [4, 4], bars: 64, changes: [], tags: ['bossa', 'jobim'] },
    { id: 'so-tinha-de-ser-com-voce', title: 'Só Tinha De Ser Com Você', composer: 'Jobim', style: 'bossa', key: 'C', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'jobim'] },
    { id: 'ligia', title: 'Lígia', composer: 'Jobim', style: 'bossa', key: 'A', tempo: 110, timeSignature: [4, 4], bars: 40, changes: [], tags: ['bossa', 'jobim'] },
    { id: 'luiza', title: 'Luiza', composer: 'Jobim', style: 'bossa', key: 'D', tempo: 90, timeSignature: [4, 4], bars: 64, changes: [], tags: ['bossa', 'jobim'] },
    { id: 'falando-de-amor', title: 'Falando de Amor', composer: 'Jobim', style: 'bossa', key: 'F', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'jobim'] },
    { id: 'pois-e', title: 'Pois É', composer: 'Jobim/Buarque', style: 'bossa', key: 'C', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'jobim'] },
    { id: 'eu-sei-que-vou-te-amar', title: 'Eu Sei Que Vou Te Amar', composer: 'Jobim', style: 'bossa', key: 'F', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'jobim'] },
    { id: 'modinha', title: 'Modinha', composer: 'Jobim', style: 'bossa', key: 'Dm', tempo: 80, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'jobim'] },
    { id: 'caminhos-cruzados', title: 'Caminhos Cruzados', composer: 'Jobim', style: 'bossa', key: 'Dm', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'jobim'] },
    { id: 'discussao', title: 'Discussão', composer: 'Jobim', style: 'bossa', key: 'F', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'jobim'] },
    { id: 'este-seu-olhar', title: 'Este Seu Olhar', composer: 'Jobim', style: 'bossa', key: 'F', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'jobim'] },
    { id: 'if-you-never-come-to-me', title: 'If You Never Come to Me', composer: 'Jobim', style: 'bossa', key: 'Ab', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'jobim'] },
    { id: 'bonita', title: 'Bonita', composer: 'Jobim', style: 'bossa', key: 'Am', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'jobim'] },
    { id: 'olha-maria', title: 'Olha Maria', composer: 'Jobim/Buarque', style: 'bossa', key: 'Dm', tempo: 100, timeSignature: [3, 4], bars: 64, changes: [], tags: ['bossa', 'jobim'] },
    { id: 'sabia', title: 'Sabiá', composer: 'Jobim/Buarque', style: 'bossa', key: 'Db', tempo: 110, timeSignature: [4, 4], bars: 40, changes: [], tags: ['bossa', 'jobim'] },
    { id: 'chovendo-na-roseira', title: 'Chovendo na Roseira', composer: 'Jobim', style: 'bossa', key: 'G', tempo: 150, timeSignature: [3, 4], bars: 64, changes: [], tags: ['bossa', 'jobim', 'waltz'] },
    { id: 'brigas-nunca-mais', title: 'Brigas Nunca Mais', composer: 'Jobim', style: 'bossa', key: 'Dm', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [], tags: ['bossa', 'jobim'] },
    { id: 'anjo-de-mim', title: 'Anjo de Mim', composer: 'Ivan Lins', style: 'bossa', key: 'C', tempo: 100, timeSignature: [4, 4], bars: 32, changes: [], tags: ['mpb', 'ivan-lins'] },
    { id: 'comecar-de-novo', title: 'Começar de Novo', composer: 'Ivan Lins', style: 'bossa', key: 'E', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [], tags: ['mpb', 'ivan-lins'] },
    { id: 'dinorah-dinorah', title: 'Dinorah, Dinorah', composer: 'Ivan Lins', style: 'samba', key: 'G', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [], tags: ['mpb', 'ivan-lins'] },
    { id: 'lembra-de-mim', title: 'Lembra de Mim', composer: 'Ivan Lins', style: 'bossa', key: 'F', tempo: 100, timeSignature: [4, 4], bars: 32, changes: [], tags: ['mpb', 'ivan-lins'] },
    { id: 'madalena', title: 'Madalena', composer: 'Ivan Lins', style: 'samba', key: 'C', tempo: 150, timeSignature: [4, 4], bars: 32, changes: [], tags: ['mpb', 'ivan-lins'] },
    { id: 'vitoriosa', title: 'Vitoriosa', composer: 'Ivan Lins', style: 'bossa', key: 'D', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [], tags: ['mpb', 'ivan-lins'] },
    { id: 'samurai', title: 'Samurai', composer: 'Djavan', style: 'samba', key: 'Dm', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [], tags: ['mpb', 'djavan'] },
    { id: 'flor-de-lis', title: 'Flor de Lis', composer: 'Djavan', style: 'samba', key: 'E', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [], tags: ['mpb', 'djavan'] },
    { id: 'sina', title: 'Sina', composer: 'Djavan', style: 'samba', key: 'A', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [], tags: ['mpb', 'djavan'] },
    { id: 'oceano', title: 'Oceano', composer: 'Djavan', style: 'ballad', key: 'D', tempo: 80, timeSignature: [4, 4], bars: 32, changes: [], tags: ['mpb', 'djavan'] },
    { id: 'meu-bem-querer', title: 'Meu Bem Querer', composer: 'Djavan', style: 'ballad', key: 'E', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [], tags: ['mpb', 'djavan'] },
    { id: 'travessia', title: 'Travessia', composer: 'Milton Nascimento', style: 'ballad', key: 'G', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [], tags: ['mpb', 'milton'] },
    { id: 'maria-maria', title: 'Maria Maria', composer: 'Milton Nascimento', style: 'samba', key: 'C', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [], tags: ['mpb', 'milton'] },
    { id: 'cais', title: 'Cais', composer: 'Milton Nascimento', style: 'ballad', key: 'C', tempo: 70, timeSignature: [4, 4], bars: 32, changes: [], tags: ['mpb', 'milton'] },
    { id: 'pont-de-areia', title: 'Ponta de Areia', composer: 'Milton Nascimento', style: 'samba', key: 'A', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [], tags: ['mpb', 'milton'] },
    { id: 'vera-cruz', title: 'Vera Cruz', composer: 'Milton Nascimento', style: 'samba', key: 'F', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [], tags: ['mpb', 'milton'] },
    { id: 'clube-da-esquina', title: 'Clube da Esquina', composer: 'Milton/Lo', style: 'ballad', key: 'D', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [], tags: ['mpb', 'milton'] },
    { id: 'lamento-sertanejo', title: 'Lamento Sertanejo', composer: 'Dominguinhos', style: 'ballad', key: 'G', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [], tags: ['mpb', 'nordeste'] },
    { id: 'asa-branca', title: 'Asa Branca', composer: 'Luiz Gonzaga', style: 'baião', key: 'F', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [], tags: ['mpb', 'nordeste'] },
    { id: 'carinhoso', title: 'Carinhoso', composer: 'Pixinguinha', style: 'choro', key: 'F', tempo: 80, timeSignature: [4, 4], bars: 32, changes: [], tags: ['choro', 'classic'] },
    { id: 'odeon', title: 'Odeon', composer: 'Ernesto Nazareth', style: 'choro', key: 'C#m', tempo: 100, timeSignature: [4, 4], bars: 32, changes: [], tags: ['choro', 'classic'] },
    { id: 'brasileirinho', title: 'Brasileirinho', composer: 'Waldir Azevedo', style: 'choro', key: 'A', tempo: 180, timeSignature: [2, 4], bars: 32, changes: [], tags: ['choro', 'fast'] },
    { id: 'tico-tico', title: 'Tico-Tico no Fubá', composer: 'Zequinha de Abreu', style: 'choro', key: 'Am', tempo: 160, timeSignature: [4, 4], bars: 32, changes: [], tags: ['choro', 'fast'] },
    { id: 'aquarela-do-brasil', title: 'Aquarela do Brasil', composer: 'Ary Barroso', style: 'samba', key: 'G', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [], tags: ['samba', 'classic'] },
    { id: 'na-baixa-do-sapateiro', title: 'Na Baixa do Sapateiro', composer: 'Ary Barroso', style: 'samba', key: 'C', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [], tags: ['samba', 'classic'] },
    { id: 'risva', title: 'Risque', composer: 'Ary Barroso', style: 'samba', key: 'F', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [], tags: ['samba', 'classic'] },
    { id: 'no-rancho-fundo', title: 'No Rancho Fundo', composer: 'Ary Barroso', style: 'samba', key: 'C', tempo: 100, timeSignature: [4, 4], bars: 32, changes: [], tags: ['samba', 'classic'] },
    { id: 'faceira', title: 'Faceira', composer: 'Ary Barroso', style: 'samba', key: 'F', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [], tags: ['samba', 'classic'] },
    { id: 'eu-sonhei-que-tu-estavas-tao-linda', title: 'Eu Sonhei Que Tu Estavas Tão Linda', composer: 'Lamas/Moraes', style: 'waltz', key: 'C', tempo: 100, timeSignature: [3, 4], bars: 32, changes: [], tags: ['waltz', 'classic'] },
    { id: 'chao-de-estrelas', title: 'Chão de Estrelas', composer: 'Silvio Caldas', style: 'seresta', key: 'C', tempo: 80, timeSignature: [4, 4], bars: 32, changes: [], tags: ['seresta', 'classic'] },
    { id: 'a-deusa-da-minha-rua', title: 'A Deusa da Minha Rua', composer: 'Newton Teixeira', style: 'seresta', key: 'G', tempo: 80, timeSignature: [4, 4], bars: 32, changes: [], tags: ['seresta', 'classic'] },
    { id: 'vinganca', title: 'Vingança', composer: 'Lupicínio Rodrigues', style: 'samba-cancao', key: 'Am', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [], tags: ['samba-cancao'] },
    { id: 'nervos-de-aco', title: 'Nervos de Aço', composer: 'Lupicínio Rodrigues', style: 'samba-cancao', key: 'E', tempo: 80, timeSignature: [4, 4], bars: 32, changes: [], tags: ['samba-cancao'] },
    { id: 'nunca', title: 'Nunca', composer: 'Lupicínio Rodrigues', style: 'samba-cancao', key: 'C', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [], tags: ['samba-cancao'] },
    { id: 'felicidade', title: 'Felicidade', composer: 'Lupicínio Rodrigues', style: 'samba-cancao', key: 'C', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [], tags: ['samba-cancao'] },
    { id: 'se-acaso-voce-chegasse', title: 'Se Acaso Você Chegasse', composer: 'Lupicínio Rodrigues', style: 'samba', key: 'F', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [], tags: ['samba'] },
    { id: 'aviso-aos-navegantes', title: 'Aviso aos Navegantes', composer: 'Lupicínio Rodrigues', style: 'samba', key: 'G', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [], tags: ['samba'] },
    { id: 'nao-deixe-o-samba-morrer', title: 'Não Deixe o Samba Morrer', composer: 'Aloisio/Edson', style: 'samba', key: 'G', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [], tags: ['samba', 'alcione'] },
    { id: 'o-mundo-e-um-moinho', title: 'O Mundo é um Moinho', composer: 'Cartola', style: 'samba', key: 'C', tempo: 80, timeSignature: [4, 4], bars: 32, changes: [], tags: ['samba', 'cartola'] },
    { id: 'as-rosas-nao-falam', title: 'As Rosas Não Falam', composer: 'Cartola', style: 'samba', key: 'Bm', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [], tags: ['samba', 'cartola'] },
    { id: 'preciso-me-encontrar', title: 'Preciso Me Encontrar', composer: 'Candeia', style: 'samba', key: 'Cm', tempo: 100, timeSignature: [4, 4], bars: 32, changes: [], tags: ['samba', 'cartola'] },
    { id: 'o-sol-nascera', title: 'O Sol Nascerá', composer: 'Cartola', style: 'samba', key: 'E', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [], tags: ['samba', 'cartola'] },
    { id: 'alvorada', title: 'Alvorada', composer: 'Cartola', style: 'samba', key: 'C', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [], tags: ['samba', 'cartola'] },
    { id: 'disfarca-e-chora', title: 'Disfarça e Chora', composer: 'Cartola', style: 'samba', key: 'F', tempo: 100, timeSignature: [4, 4], bars: 32, changes: [], tags: ['samba', 'cartola'] },
    { id: 'cordas-de-aco', title: 'Cordas de Aço', composer: 'Cartola', style: 'samba', key: 'D', tempo: 110, timeSignature: [4, 4], bars: 32, changes: [], tags: ['samba', 'cartola'] },
    { id: 'folhas-secas', title: 'Folhas Secas', composer: 'Nelson Cavaquinho', style: 'samba', key: 'G', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [], tags: ['samba'] },
    { id: 'juizo-final', title: 'Juízo Final', composer: 'Nelson Cavaquinho', style: 'samba', key: 'Cm', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [], tags: ['samba'] },
    { id: 'a-flor-e-o-espinho', title: 'A Flor e o Espinho', composer: 'Nelson Cavaquinho', style: 'samba', key: 'E', tempo: 90, timeSignature: [4, 4], bars: 32, changes: [], tags: ['samba'] },
    { id: 'palhaco', title: 'Palhaço', composer: 'Egberto Gismonti', style: 'mpb', key: 'C', tempo: 100, timeSignature: [4, 4], bars: 32, changes: [], tags: ['mpb', 'instrumental'] },
    { id: 'loro', title: 'Loro', composer: 'Egberto Gismonti', style: 'mpb', key: 'G', tempo: 140, timeSignature: [4, 4], bars: 32, changes: [], tags: ['mpb', 'instrumental'] },
    { id: 'frevo', title: 'Frevo', composer: 'Egberto Gismonti', style: 'frevo', key: 'D', tempo: 160, timeSignature: [4, 4], bars: 32, changes: [], tags: ['mpb', 'instrumental'] },
    { id: 'bebe', title: 'Bebê', composer: 'Hermeto Pascoal', style: 'mpb', key: 'Ab', tempo: 120, timeSignature: [4, 4], bars: 32, changes: [], tags: ['mpb', 'hermeto'] },
    { id: 'chorinho-pra-ele', title: 'Chorinho pra Ele', composer: 'Hermeto Pascoal', style: 'choro', key: 'F', tempo: 130, timeSignature: [4, 4], bars: 32, changes: [], tags: ['choro', 'hermeto'] },
    { id: 'lamento', title: 'Lamento', composer: 'Pixinguinha', style: 'choro', key: 'G', tempo: 100, timeSignature: [4, 4], bars: 32, changes: [], tags: ['choro', 'classic'] },
    { id: 'um-a-zero', title: 'Um a Zero', composer: 'Pixinguinha', style: 'choro', key: 'Bb', tempo: 150, timeSignature: [2, 4], bars: 32, changes: [], tags: ['choro', 'classic'] },
    { id: 'vou-vivendo', title: 'Vou Vivendo', composer: 'Pixinguinha', style: 'choro', key: 'F', tempo: 110, timeSignature: [2, 4], bars: 32, changes: [], tags: ['choro', 'classic'] },
    { id: 'rosa', title: 'Rosa', composer: 'Pixinguinha', style: 'waltz', key: 'G', tempo: 90, timeSignature: [3, 4], bars: 32, changes: [], tags: ['waltz', 'classic'] },
    { id: 'ingenuo', title: 'Ingênuo', composer: 'Pixinguinha', style: 'choro', key: 'C', tempo: 80, timeSignature: [2, 4], bars: 32, changes: [], tags: ['choro', 'classic'] },
    { id: 'pedacinhos-do-ceu', title: 'Pedacinhos do Céu', composer: 'Waldir Azevedo', style: 'choro', key: 'A', tempo: 130, timeSignature: [2, 4], bars: 32, changes: [], tags: ['choro', 'classic'] },
    { id: 'delicado', title: 'Delicado', composer: 'Waldir Azevedo', style: 'choro', key: 'C', tempo: 120, timeSignature: [2, 4], bars: 32, changes: [], tags: ['choro', 'classic'] },
    { id: 've-se-gostas', title: 'Vê Se Gostas', composer: 'Waldir Azevedo', style: 'choro', key: 'F', tempo: 130, timeSignature: [2, 4], bars: 32, changes: [], tags: ['choro', 'classic'] },
    { id: 'flor-amorosa', title: 'Flor Amorosa', composer: 'Joaquim Callado', style: 'choro', key: 'C', tempo: 100, timeSignature: [2, 4], bars: 32, changes: [], tags: ['choro', 'classic'] },
    { id: 'apanhei-te-cavaquinho', title: 'Apanhei-te Cavaquinho', composer: 'Ernesto Nazareth', style: 'choro', key: 'G', tempo: 160, timeSignature: [2, 4], bars: 32, changes: [], tags: ['choro', 'classic'] },
];

export function getAllStandards() { return STANDARDS; }
export function getStandardById(id: string) { return STANDARDS.find(s => s.id === id); }
export function getAllTags() {
    return Array.from(new Set(STANDARDS.flatMap(s => s.tags))).sort();
}
