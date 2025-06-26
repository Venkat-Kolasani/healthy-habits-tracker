import { useState, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { Habit, HabitEntry, WeeklyStreak } from '../types/habits';

const defaultHabits: Habit[] = [
  {
    id: 'water',
    name: 'Water Intake',
    icon: 'Droplets',
    unit: 'glasses',
    goal: 8,
    color: 'from-blue-400 to-cyan-500',
    description: 'Stay hydrated throughout the day'
  },
  {
    id: 'sleep',
    name: 'Sleep Hours',
    icon: 'Moon',
    unit: 'hours',
    goal: 8,
    color: 'from-indigo-400 to-purple-500',
    description: 'Get quality rest for better health'
  },
  {
    id: 'steps',
    name: 'Daily Steps',
    icon: 'Footprints',
    unit: 'steps',
    goal: 10000,
    color: 'from-green-400 to-emerald-500',
    description: 'Stay active and move your body'
  },
  {
    id: 'screen',
    name: 'Screen Time',
    icon: 'Smartphone',
    unit: 'hours',
    goal: 4,
    color: 'from-orange-400 to-red-500',
    description: 'Limit screen time for better focus'
  }
];

export function useHabits() {
  const [habits, setHabits] = useLocalStorage<Habit[]>('habits', defaultHabits);
  const [entries, setEntries] = useLocalStorage<HabitEntry[]>('habitEntries', []);
  const [streaks, setStreaks] = useLocalStorage<WeeklyStreak[]>('weeklyStreaks', []);

  const getTodayEntry = useCallback((habitId: string): HabitEntry | undefined => {
    const today = new Date().toISOString().split('T')[0];
    return entries.find(entry => entry.habitId === habitId && entry.date === today);
  }, [entries]);

  const updateHabitEntry = useCallback((habitId: string, value: number) => {
    const today = new Date().toISOString().split('T')[0];
    const habit = habits.find(h => h.id === habitId);
    if (!habit) return;

    const completed = value >= habit.goal;
    const existingEntryIndex = entries.findIndex(
      entry => entry.habitId === habitId && entry.date === today
    );

    const newEntry: HabitEntry = {
      habitId,
      date: today,
      value,
      completed
    };

    if (existingEntryIndex >= 0) {
      const newEntries = [...entries];
      newEntries[existingEntryIndex] = newEntry;
      setEntries(newEntries);
    } else {
      setEntries([...entries, newEntry]);
    }

    // Check for weekly streaks
    checkWeeklyStreak(habitId);
  }, [habits, entries, setEntries]);

  const checkWeeklyStreak = useCallback((habitId: string) => {
    const today = new Date();
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - today.getDay());
    const weekKey = weekStart.toISOString().split('T')[0];

    // Check if all 7 days of the week are completed
    const weekEntries = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + i);
      const dateKey = date.toISOString().split('T')[0];
      const entry = entries.find(e => e.habitId === habitId && e.date === dateKey);
      weekEntries.push(entry);
    }

    const allCompleted = weekEntries.every(entry => entry?.completed);
    const existingStreak = streaks.find(s => s.habitId === habitId && s.week === weekKey);

    if (allCompleted && !existingStreak) {
      setStreaks([...streaks, { habitId, week: weekKey, completed: true }]);
    }
  }, [entries, streaks, setStreaks]);

  const getWeeklyStreakCount = useCallback((habitId: string): number => {
    return streaks.filter(s => s.habitId === habitId && s.completed).length;
  }, [streaks]);

  const updateHabitGoal = useCallback((habitId: string, newGoal: number) => {
    setHabits(habits.map(habit => 
      habit.id === habitId ? { ...habit, goal: newGoal } : habit
    ));
  }, [habits, setHabits]);

  return {
    habits,
    getTodayEntry,
    updateHabitEntry,
    getWeeklyStreakCount,
    updateHabitGoal
  };
}