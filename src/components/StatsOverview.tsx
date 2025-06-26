import React from 'react';
import { TrendingUp, Target, Award, Calendar } from 'lucide-react';
import { useHabits } from '../hooks/useHabits';

export function StatsOverview() {
  const { habits, getTodayEntry, getWeeklyStreakCount } = useHabits();

  const todayCompletedCount = habits.filter(habit => getTodayEntry(habit.id)?.completed).length;
  const totalStreaks = habits.reduce((sum, habit) => sum + getWeeklyStreakCount(habit.id), 0);
  const averageCompletion = habits.length > 0 ? Math.round((todayCompletedCount / habits.length) * 100) : 0;

  const stats = [
    {
      label: 'Today\'s Habits',
      value: `${todayCompletedCount}/${habits.length}`,
      icon: Target,
      color: 'from-amber-400 to-orange-400',
      description: 'Completed today'
    },
    {
      label: 'Completion Rate',
      value: `${averageCompletion}%`,
      icon: TrendingUp,
      color: 'from-green-400 to-emerald-400',
      description: 'Daily average'
    },
    {
      label: 'Weekly Streaks',
      value: totalStreaks.toString(),
      icon: Award,
      color: 'from-yellow-400 to-orange-400',
      description: 'Badges earned'
    },
    {
      label: 'Active Days',
      value: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
      icon: Calendar,
      color: 'from-purple-400 to-indigo-400',
      description: 'Keep it up!'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div 
          key={stat.label}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-6 border border-amber-200/50 transform transition-all duration-300 hover:scale-105 animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-2xl bg-gradient-to-r ${stat.color} text-white shadow-lg`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-amber-900">{stat.value}</div>
              <div className="text-sm text-amber-700">{stat.description}</div>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-amber-800">{stat.label}</h3>
        </div>
      ))}
    </div>
  );
}