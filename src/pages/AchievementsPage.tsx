import React from 'react';
import { Award, Star, Trophy, Medal } from 'lucide-react';
import { useHabits } from '../hooks/useHabits';

export function AchievementsPage() {
  const { habits, getWeeklyStreakCount } = useHabits();

  const getAchievements = () => {
    return habits.map(habit => {
      const streakCount = getWeeklyStreakCount(habit.id);
      const achievements = [];
      
      // Generate achievements based on streak count
      if (streakCount >= 1) achievements.push({ type: 'First Week', icon: Medal, color: 'from-bronze-400 to-bronze-600' });
      if (streakCount >= 4) achievements.push({ type: 'Monthly Master', icon: Trophy, color: 'from-silver-400 to-silver-600' });
      if (streakCount >= 12) achievements.push({ type: 'Quarterly Champion', icon: Award, color: 'from-gold-400 to-gold-600' });
      if (streakCount >= 26) achievements.push({ type: 'Half-Year Hero', icon: Star, color: 'from-purple-400 to-purple-600' });
      
      return {
        ...habit,
        streakCount,
        achievements
      };
    });
  };

  const achievementData = getAchievements();
  const totalAchievements = achievementData.reduce((sum, h) => sum + h.achievements.length, 0);
  const totalStreaks = achievementData.reduce((sum, h) => sum + h.streakCount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Your Achievements</h1>
          <p className="text-xl text-amber-700">Celebrate your commitment to healthy habits</p>
        </div>

        {/* Achievement Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-amber-200/50 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-amber-900 mb-2">{totalAchievements}</h3>
            <p className="text-amber-700 text-lg">Total Achievements Earned</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-amber-200/50 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-amber-900 mb-2">{totalStreaks}</h3>
            <p className="text-amber-700 text-lg">Weekly Streaks Completed</p>
          </div>
        </div>

        {/* Achievements by Habit */}
        <div className="space-y-8">
          {achievementData.map((habit) => (
            <div key={habit.id} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-amber-200/50">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${habit.color} text-white`}>
                  <div className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-amber-900">{habit.name}</h2>
                  <p className="text-amber-700">{habit.streakCount} weeks completed</p>
                </div>
              </div>

              {habit.achievements.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {habit.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-6 text-center border border-amber-200"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                        <achievement.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-amber-900 mb-1">{achievement.type}</h3>
                      <p className="text-sm text-amber-700">Achievement Unlocked!</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-amber-600" />
                  </div>
                  <p className="text-amber-700">Complete your first week to earn achievements!</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Motivational Section */}
        <div className="mt-12 text-center bg-gradient-to-r from-amber-200/50 to-orange-200/50 rounded-3xl p-8 border border-amber-300/50">
          <Award className="w-16 h-16 text-amber-700 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-amber-900 mb-4">Keep Building Your Legacy</h3>
          <p className="text-amber-800 text-lg leading-relaxed max-w-2xl mx-auto">
            Every achievement represents your dedication to better health. 
            Keep tracking your habits and watch your collection of badges grow!
          </p>
        </div>
      </div>
    </div>
  );
}