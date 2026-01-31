export type ContentBlockType = 'text' | 'markdown' | 'video' | 'fretboard' | 'progression' | 'quiz' | 'm3-trainer' | 'circle-of-fifths';

export interface ContentBlock {
    id: string;
    type: ContentBlockType;
    content: string; // Text content or JSON string for complex data
    metadata?: Record<string, unknown>; // Extra props like { positions: [...], progressionId: '...' }
}

export interface Lesson {
    id: string;
    title: string;
    description: string;
    duration: number; // Estimated minutes
    blocks: ContentBlock[];
    order: number;
}

export interface CourseModule {
    id: string;
    title: string;
    description: string;
    lessons: Lesson[];
    order: number;
}

export interface Course {
    id: string;
    title: string;
    description: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    modules: CourseModule[];
    tags: string[];
}
