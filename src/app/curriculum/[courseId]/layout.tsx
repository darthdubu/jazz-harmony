'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation'; // Correct hooks for App Router
import { JAZZ_HARMONY_COURSE } from '@/lib/curriculum/data';
import { useProgressStore } from '@/stores/useProgressStore';

export default function CourseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const params = useParams();
    const pathname = usePathname();
    const { completedLessons } = useProgressStore();

    // We assume the courseId matches our single course for now
    const course = JAZZ_HARMONY_COURSE;

    if (params.courseId !== course.id) {
        // In a real app we'd fetch the specific course
        return <div>Course not found</div>;
    }

    return (
        <div className="flex min-h-screen pt-20">
            {/* Sidebar */}
            <aside className="fixed top-20 bottom-0 left-0 w-80 bg-surface border-r border-white/5 overflow-y-auto hidden lg:block">
                <div className="p-6">
                    <h2 className="font-display text-xl text-gold mb-2">{course.title}</h2>
                    <p className="text-xs text-gray-500 mb-6">{course.description}</p>

                    <div className="space-y-6">
                        {course.modules.map((module) => (
                            <div key={module.id}>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2">
                                    {module.title}
                                </h3>
                                <div className="space-y-1">
                                    {module.lessons.map((lesson) => {
                                        const isCompleted = completedLessons.includes(lesson.id);
                                        const href = `/curriculum/${course.id}/${module.id}/${lesson.id}`;
                                        const isActive = pathname === href;

                                        return (
                                            <Link
                                                key={lesson.id}
                                                href={href}
                                                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${isActive
                                                        ? 'bg-gold/10 text-gold font-medium'
                                                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                                    }`}
                                            >
                                                <span className="truncate mr-2">{lesson.order}. {lesson.title}</span>
                                                {isCompleted && (
                                                    <span className="text-green-400">✓</span>
                                                )}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 lg:ml-80 min-w-0">
                <div className="max-w-4xl mx-auto p-6 md:p-12">
                    {children}
                </div>
            </main>
        </div>
    );
}
