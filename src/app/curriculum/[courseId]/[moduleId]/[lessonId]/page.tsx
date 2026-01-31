'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { JAZZ_HARMONY_COURSE } from '@/lib/curriculum/data';
import { useProgressStore } from '@/stores/useProgressStore';
import Fretboard from '@/components/Fretboard/Fretboard';
import ProgressionPlayer from '@/components/Player/ProgressionPlayer';
import FretboardCycles from '@/components/Tools/FretboardCycles';
import M3GeometryTrainer from '@/components/Training/M3GeometryTrainer';

// A simple Markdown component (replace with proper MDX or library later)
const MarkdownBlock = ({ content }: { content: string }) => {
    // Basic cleanup for demonstration
    const html = content
        .replace(/### (.*)/g, '<h3 class="text-lg font-semibold text-white/90 mt-6 mb-2">$1</h3>') // h3 first
        .replace(/## (.*)/g, '<h2 class="text-2xl font-display text-gold mt-8 mb-4">$1</h2>') // then h2
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
        .replace(/\n- \*\*(.*?)\*\*(.*)/g, '<br /><span class="ml-4 text-gold">• <strong>$1</strong>$2</span>') // bullet + bold
        .replace(/\n- (.*)/g, '<br /><span class="ml-4">• $1</span>') // list items
        .replace(/\n/g, '<br />');

    return <div dangerouslySetInnerHTML={{ __html: html }} className="text-gray-300 leading-relaxed space-y-4" />;
};

export default function LessonPage() {
    const params = useParams(); // courseId, moduleId, lessonId
    const router = useRouter();
    const { markLessonComplete, isLessonCompleted, setCurrentLocation } = useProgressStore();

    const course = JAZZ_HARMONY_COURSE;
    const courseModule = course.modules.find(m => m.id === params.moduleId);
    const lesson = courseModule?.lessons.find(l => l.id === params.lessonId);

    // Update current location on mount
    useEffect(() => {
        if (params.courseId && params.moduleId && params.lessonId) {
            setCurrentLocation(
                params.courseId as string,
                params.moduleId as string,
                params.lessonId as string
            );
        }
    }, [params, setCurrentLocation]);

    if (!courseModule || !lesson) return <div>Lesson not found</div>;

    const isComplete = isLessonCompleted(lesson.id);

    // Logic for "Next Lesson"
    const handleComplete = () => {
        markLessonComplete(lesson.id);
        // Find next lesson
        const currentLessonIdx = module.lessons.findIndex(l => l.id === lesson.id);
        if (currentLessonIdx < module.lessons.length - 1) {
            const nextLesson = module.lessons[currentLessonIdx + 1];
            router.push(`/curriculum/${course.id}/${module.id}/${nextLesson.id}`);
        } else {
            // Find next module?
            const currentModuleIdx = course.modules.findIndex(m => m.id === module.id);
            if (currentModuleIdx < course.modules.length - 1) {
                const nextModule = course.modules[currentModuleIdx + 1];
                const nextLesson = nextModule.lessons[0];
                if (nextLesson) {
                    router.push(`/curriculum/${course.id}/${nextModule.id}/${nextLesson.id}`);
                }
            } else {
                // Course Done!
                router.push(`/curriculum`);
            }
        }
    };

    return (
        <div className="animate-in fade-in duration-500">
            {/* Header */}
            <div className="mb-8 border-b border-white/10 pb-6">
                <div className="text-xs text-gold font-bold uppercase tracking-wider mb-2">
                    {module.title}
                </div>
                <h1 className="text-4xl font-display font-bold text-white mb-4">{lesson.title}</h1>
                <p className="text-xl text-gray-400">{lesson.description}</p>
            </div>

            {/* Content Blocks */}
            <div className="space-y-12 mb-16">
                {lesson.blocks.map((block) => (
                    <div key={block.id} className="bg-surface/50 rounded-xl p-1 md:p-0">
                        {block.type === 'markdown' && (
                            <div className="prose prose-invert max-w-none">
                                <MarkdownBlock content={block.content} />
                            </div>
                        )}

                        {block.type === 'fretboard' && (
                            <div className="bg-surface-dark border border-white/5 rounded-xl p-6">
                                <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-4">Interactive Fretboard</h3>
                                <Fretboard
                                    showNotes={true}
                                    showIntervals={true}
                                    positions={block.metadata?.positions || []}
                                />
                                <div className="text-center text-xs text-gray-500 mt-2">
                                    {block.metadata?.caption || 'Interactive Visualization'}
                                </div>
                            </div>
                        )}

                        {block.type === 'm3-trainer' && (
                            <div className="mt-8">
                                <M3GeometryTrainer />
                            </div>
                        )}

                        {block.type === 'circle-of-fifths' && (
                            <div className="mt-8">
                                <FretboardCycles />
                            </div>
                        )}

                        {block.type === 'video' && (
                            <div className="bg-surface-dark border border-white/5 rounded-xl overflow-hidden">
                                <div className="aspect-w-16 aspect-h-9 relative pb-[56.25%] bg-black">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${block.content}`}
                                        title="Lesson Video"
                                        className="absolute top-0 left-0 w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                {block.metadata?.caption && (
                                    <div className="p-4 text-sm text-gray-400 border-t border-white/5 bg-surface-light/5">
                                        🎥 <strong>Watch:</strong> {block.metadata.caption}
                                    </div>
                                )}
                            </div>
                        )}

                        {block.type === 'progression' && (
                            <div className="bg-surface-dark border border-white/5 rounded-xl p-6">
                                <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-4">Practice Track</h3>
                                <ProgressionPlayer progressionId={block.content} />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Action Bar */}
            <div className="fixed bottom-0 left-0 right-0 lg:left-80 bg-surface/90 backdrop-blur-md border-t border-white/10 p-4 md:p-6 z-40">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <span className="text-sm text-gray-500 hidden md:inline">
                        {lesson.duration} min est. duration
                    </span>

                    <button
                        onClick={handleComplete}
                        className={`
                            px-8 py-3 rounded-lg font-bold text-lg transition-all transform hover:scale-105
                            ${isComplete
                                ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                                : 'bg-gold text-surface-dark hover:bg-gold-light shadow-lg shadow-gold/20'}
                        `}
                    >
                        {isComplete ? 'Completed! Next Lesson →' : 'Mark Complete & Continue'}
                    </button>
                </div>
            </div>

            <div className="h-24"></div>
            {/* Spacer for fixed bottom bar */}
        </div>
    );
}
