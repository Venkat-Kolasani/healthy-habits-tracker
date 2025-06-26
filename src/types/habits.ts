export interface Habit {
  id: string;
  name: string;
  icon: string;
  unit: string;
  goal: number;
  color: string;
  description: string;
}

export interface HabitEntry {
  habitId: string;
  date: string;
  value: number;
  completed: boolean;
}

export interface WeeklyStreak {
  habitId: string;
  week: string;
  completed: boolean;
}

export type Page = 'home' | 'tracker' | 'progress' | 'achievements';