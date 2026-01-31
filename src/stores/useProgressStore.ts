import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { supabase } from '@/lib/supabase/client';

interface ProgressState {
    completedLessons: string[];
    currentCourseId: string | null;
    currentModuleId: string | null;
    currentLessonId: string | null;
    xp: number;

    // Actions
    markLessonComplete: (lessonId: string) => void;
    setCurrentLocation: (courseId: string, moduleId: string, lessonId: string) => void;
    addXp: (amount: number) => void;
    isLessonCompleted: (lessonId: string) => boolean;
    syncWithCloud: (userId: string) => Promise<void>; // New Action
}

export const useProgressStore = create<ProgressState>()(
    persist(
        (set, get) => ({
            completedLessons: [],
            currentCourseId: null,
            currentModuleId: null,
            currentLessonId: null,
            xp: 0,

            markLessonComplete: (lessonId) => {
                const { completedLessons } = get();
                if (!completedLessons.includes(lessonId)) {
                    set({
                        completedLessons: [...completedLessons, lessonId],
                        xp: get().xp + 100
                    });

                    // Optimistic sync if user is logged in
                    if (supabase) {
                        supabase.auth.getUser().then(({ data: { user } }) => {
                            if (user) {
                                get().syncWithCloud(user.id);
                            }
                        });
                    }
                }
            },

            setCurrentLocation: (courseId, moduleId, lessonId) => {
                set({ currentCourseId: courseId, currentModuleId: moduleId, currentLessonId: lessonId });
            },

            addXp: (amount) => {
                set({ xp: get().xp + amount });
            },

            isLessonCompleted: (lessonId) => {
                return get().completedLessons.includes(lessonId);
            },

            syncWithCloud: async (userId: string) => {
                if (!supabase) return;

                const localState = get();

                // 1. Fetch remote profile
                const { data: remoteProfile, error } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', userId)
                    .single();

                if (error && error.code !== 'PGRST116') { // Ignore "not found"
                    console.error('Error fetching profile:', error);
                    return;
                }

                // 2. Merge Strategies
                let mergedCompleted = [...localState.completedLessons];
                let mergedXp = localState.xp;

                if (remoteProfile) {
                    // Merge remote -> local
                    const remoteCompleted = remoteProfile.completed_lessons || [];
                    mergedCompleted = Array.from(new Set([...mergedCompleted, ...remoteCompleted]));
                    // Take the higher XP value (simple strategy)
                    mergedXp = Math.max(mergedXp, remoteProfile.xp || 0);

                    // Update local state to reflect merge
                    set({
                        completedLessons: mergedCompleted,
                        xp: mergedXp
                    });
                }

                // 3. Push merged state -> remote
                await supabase.from('profiles').upsert({
                    id: userId,
                    updated_at: new Date().toISOString(),
                    completed_lessons: mergedCompleted,
                    xp: mergedXp,
                    current_course: localState.currentCourseId
                });
            }
        }),
        {
            name: 'jazz-harmony-progress',
            storage: createJSONStorage(() => localStorage),
            // Optional: onRehydrateStorage could handle auto-sync if we wanted
        }
    )
);
