import React, { useState } from 'react';
import { StatsOverview } from '../components/StatsOverview';
import { HabitCard } from '../components/HabitCard';
import { AchievementBadge } from '../components/AchievementBadge';
import { useHabits } from '../hooks/useHabits';
import { Heart } from 'lucide-react';

export function TrackerPage() {
  const { habits, getTodayEntry, updateHabitEntry, getWeeklyStreakCount, updateHabitGoal } = useHabits();
  const [achievement, setAchievement] = useState<{ habitName: string; streakCount: number } | null>(null);

  const handleHabitUpdate = (habitId: string, value: number) => {
    const previousEntry = getTodayEntry(habitId);
    const habit = habits.find(h => h.id === habitId);
    
    updateHabitEntry(habitId, value);
    
    // Check for new achievement
    if (habit && value >= habit.goal && (!previousEntry || !previousEntry.completed)) {
      const streakCount = getWeeklyStreakCount(habitId);
      if (streakCount > 0) {
        setAchievement({ habitName: habit.name, streakCount });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Track Your Habits</h1>
          <p className="text-xl text-amber-700">Update your daily progress and watch your streaks grow!</p>
        </div>

        <StatsOverview />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {habits.map((habit) => (
            <HabitCard
              key={habit.id}
              habit={habit}
              entry={getTodayEntry(habit.id)}
              streakCount={getWeeklyStreakCount(habit.id)}
              onUpdate={(value) => handleHabitUpdate(habit.id, value)}
              onUpdateGoal={(newGoal) => updateHabitGoal(habit.id, newGoal)}
            />
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 max-w-2xl mx-auto border border-amber-200/50">
            <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-amber-900 mb-4">Building Healthy Habits</h3>
            <p className="text-amber-700 leading-relaxed">
              Consistency is key to forming lasting habits. Track your progress daily, 
              celebrate small wins, and don't be too hard on yourself. Every step forward 
              is progress worth celebrating!
            </p>
          </div>
        </div>
      </div>
      
      <AchievementBadge
        habitName={achievement?.habitName || ''}
        streakCount={achievement?.streakCount || 0}
        show={achievement !== null}
        onClose={() => setAchievement(null)}
      />
    </div>
  );
}