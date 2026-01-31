'use client';

import React from 'react';
import Link from 'next/link';
import { JAZZ_HARMONY_COURSE } from '@/lib/curriculum/data';
import { useProgressStore } from '@/stores/useProgressStore';

export default function CurriculumDashboard() {
    const { xp, completedLessons, currentCourseId, currentModuleId, currentLessonId } = useProgressStore();
    const course = JAZZ_HARMONY_COURSE;

    // Calculate total progress
    const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);
    const completedCount = completedLessons.length; // Simply count all for now
    const percentage = Math.round((completedCount / totalLessons) * 100);

    // Determine "Resume" link
    let resumeLink = `/curriculum/${course.id}/${course.modules[0].id}/${course.modules[0].lessons[0].id}`; // Default start
    let buttonText = "Start Course";

    if (currentCourseId === course.id && currentModuleId && currentLessonId) {
        resumeLink = `/curriculum/${currentCourseId}/${currentModuleId}/${currentLessonId}`;
        buttonText = "Resume Learning";
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Header / Stats */}
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
                <div>
                    <h1 className="font-display text-4xl text-white mb-2">My Academy</h1>
                    <p className="text-gray-400">Welcome back, Student.</p>
                </div>
                <div className="flex gap-6 text-right">
                    <div>
                        <div className="text-3xl font-display text-gold">{xp}</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">XP Earned</div>
                    </div>
                    <div>
                        <div className="text-3xl font-display text-white">{percentage}%</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">Course Progress</div>
                    </div>
                </div>
            </div>

            <h2 className="text-xl font-display text-white mb-6">Enrolled Courses</h2>

            {/* Course Card */}
            <div className="bg-surface rounded-xl border border-white/5 overflow-hidden hover:border-gold/30 transition-colors group">
                <div className="p-6 md:p-8 grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <div className="flex gap-3 mb-4">
                            <span className="bg-gold/10 text-gold text-xs font-bold px-2 py-1 rounded">
                                {course.level.toUpperCase()}
                            </span>
                            <span className="bg-surface-light text-gray-400 text-xs font-bold px-2 py-1 rounded">
                                {course.modules.length} MODULES
                            </span>
                        </div>
                        <h3 className="text-3xl font-display font-bold text-white mb-3 group-hover:text-gold transition-colors">
                            {course.title}
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            {course.description}
                        </p>

                        {/* Progress Bar */}
                        <div className="w-full bg-surface-dark h-2 rounded-full overflow-hidden mb-2">
                            <div
                                className="bg-gold h-full transition-all duration-1000 ease-out"
                                style={{ width: `${percentage}%` }}
                            ></div>
                        </div>
                        <div className="text-xs text-gray-500">
                            {completedCount} of {totalLessons} lessons completed
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start md:items-end border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-8">
                        <Link
                            href={resumeLink}
                            className="w-full md:w-auto px-8 py-4 bg-gold hover:bg-gold-light text-surface-dark font-bold rounded-lg text-center transition-all transform group-hover:scale-105 shadow-lg shadow-gold/10"
                        >
                            {buttonText}
                        </Link>
                        <p className="text-xs text-gray-500 mt-4 text-center md:text-right">
                            Next: {currentLessonId ? 'Continue where you left off' : 'Module 1: Foundations'}
                        </p>
                    </div>
                </div>
            </div>

            {/* Recent Activity / Recommendations could go here */}
        </div>
    );
}
