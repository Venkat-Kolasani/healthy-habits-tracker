import React from 'react';
import { TrendingUp, Calendar, Target, Award } from 'lucide-react';
import { useHabits } from '../hooks/useHabits';

export function ProgressPage() {
  const { habits, getTodayEntry, getWeeklyStreakCount } = useHabits();

  const getProgressData = () => {
    return habits.map(habit => {
      const todayEntry = getTodayEntry(habit.id);
      const progress = todayEntry ? (todayEntry.value / habit.goal) * 100 : 0;
      const streakCount = getWeeklyStreakCount(habit.id);
      
      return {
        ...habit,
        todayProgress: Math.min(progress, 100),
        todayValue: todayEntry?.value || 0,
        isCompleted: todayEntry?.completed || false,
        streakCount
      };
    });
  };

  const progressData = getProgressData();
  const totalCompleted = progressData.filter(h => h.isCompleted).length;
  const averageProgress = progressData.reduce((sum, h) => sum + h.todayProgress, 0) / progressData.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Your Progress</h1>
          <p className="text-xl text-amber-700">See how you're doing with your healthy habits</p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-amber-200/50 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-amber-900 mb-2">{totalCompleted}/{habits.length}</h3>
            <p className="text-amber-700">Habits Completed Today</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-amber-200/50 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-amber-900 mb-2">{Math.round(averageProgress)}%</h3>
            <p className="text-amber-700">Average Progress</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-amber-200/50 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-amber-900 mb-2">
              {progressData.reduce((sum, h) => sum + h.streakCount, 0)}
            </h3>
            <p className="text-amber-700">Total Streaks</p>
          </div>
        </div>

        {/* Detailed Progress */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-amber-200/50 mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
            <Calendar className="w-6 h-6 mr-3" />
            Today's Detailed Progress
          </h2>
          
          <div className="space-y-6">
            {progressData.map((habit) => (
              <div key={habit.id} className="border-b border-amber-200 pb-6 last:border-b-0">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${habit.color} text-white`}>
                      <div className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-amber-900">{habit.name}</h3>
                      <p className="text-amber-700">{habit.description}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-xl font-bold text-amber-900">
                      {habit.todayValue} / {habit.goal} {habit.unit}
                    </div>
                    {habit.streakCount > 0 && (
                      <div className="flex items-center justify-end space-x-1 text-amber-700">
                        <Award className="w-4 h-4" />
                        <span className="text-sm">{habit.streakCount} weeks</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-amber-100 rounded-full h-3">
                    <div 
                      className={`h-full bg-gradient-to-r ${habit.color} rounded-full transition-all duration-500`}
                      style={{ width: `${habit.todayProgress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-amber-700 mt-1">
                    <span>0</span>
                    <span className="font-medium">{Math.round(habit.todayProgress)}%</span>
                    <span>{habit.goal}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Motivational Message */}
        <div className="text-center bg-gradient-to-r from-amber-200/50 to-orange-200/50 rounded-3xl p-8 border border-amber-300/50">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">Keep Up the Great Work!</h3>
          <p className="text-amber-800 text-lg leading-relaxed max-w-2xl mx-auto">
            Every small step counts towards building lasting healthy habits. 
            Consistency over perfection - you're doing amazing!
          </p>
        </div>
      </div>
    </div>
  );
}