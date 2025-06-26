import React, { useEffect, useState } from 'react';
import { Award, Star } from 'lucide-react';

interface AchievementBadgeProps {
  habitName: string;
  streakCount: number;
  show: boolean;
  onClose: () => void;
}

export function AchievementBadge({ habitName, streakCount, show, onClose }: AchievementBadgeProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className={`fixed top-4 right-4 z-50 transform transition-all duration-300 ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white p-6 rounded-3xl shadow-2xl max-w-sm border border-amber-300">
        <div className="flex items-center space-x-3 mb-3">
          <div className="animate-spin-slow">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Achievement Unlocked!</h3>
            <p className="text-amber-100">Weekly streak completed</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Star className="w-5 h-5 text-amber-200" />
          <span className="font-medium">{habitName} - Week {streakCount}</span>
        </div>
        
        <div className="mt-3 flex space-x-1">
          {[...Array(Math.min(streakCount, 5))].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-amber-200 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}