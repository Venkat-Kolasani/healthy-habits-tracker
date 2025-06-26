import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { Habit, HabitEntry } from '../types/habits';

interface HabitCardProps {
  habit: Habit;
  entry?: HabitEntry;
  streakCount: number;
  onUpdate: (value: number) => void;
  onUpdateGoal: (newGoal: number) => void;
}

export function HabitCard({ habit, entry, streakCount, onUpdate, onUpdateGoal }: HabitCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempGoal, setTempGoal] = useState(habit.goal);
  const [inputValue, setInputValue] = useState(entry?.value || 0);

  const IconComponent = Icons[habit.icon as keyof typeof Icons] as React.ComponentType<any>;
  const progress = entry ? Math.min((entry.value / habit.goal) * 100, 100) : 0;
  const isCompleted = entry?.completed || false;

  const handleSaveGoal = () => {
    onUpdateGoal(tempGoal);
    setIsEditing(false);
  };

  const handleValueChange = (newValue: number) => {
    setInputValue(newValue);
    onUpdate(newValue);
  };

  const formatValue = (value: number) => {
    if (habit.unit === 'steps') {
      return value.toLocaleString();
    }
    return value.toString();
  };

  return (
    <div className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-amber-200/50 ${isCompleted ? 'ring-2 ring-green-400/50' : ''}`}>
      <div className={`h-2 bg-gradient-to-r ${habit.color}`}></div>
      
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className={`p-4 rounded-2xl bg-gradient-to-r ${habit.color} text-white shadow-lg`}>
              <IconComponent className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-900">{habit.name}</h3>
              <p className="text-amber-700">{habit.description}</p>
            </div>
          </div>
          
          {streakCount > 0 && (
            <div className="flex items-center space-x-2 bg-amber-200/50 px-4 py-2 rounded-full">
              <Icons.Award className="w-5 h-5 text-amber-700" />
              <span className="text-sm font-medium text-amber-800">{streakCount}</span>
            </div>
          )}
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-amber-700 font-medium">Progress</span>
            <span className="text-amber-900 font-semibold">
              {formatValue(entry?.value || 0)} / {formatValue(habit.goal)} {habit.unit}
            </span>
          </div>
          
          <div className="relative">
            <div className="w-full bg-amber-100 rounded-full h-4 overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r ${habit.color} transition-all duration-700 ease-out rounded-full`}
                style={{ width: `${progress}%` }}
              />
            </div>
            {isCompleted && (
              <div className="absolute -top-1 -right-1">
                <div className="animate-bounce">
                  <Icons.CheckCircle className="w-6 h-6 text-green-500" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <label className="block text-amber-800 font-medium mb-2">
              Today's {habit.name}
            </label>
            <input
              type="number"
              min="0"
              max={habit.unit === 'steps' ? 50000 : 24}
              value={inputValue}
              onChange={(e) => handleValueChange(Number(e.target.value))}
              className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-colors bg-white/80 text-amber-900"
              placeholder={`Enter ${habit.unit}`}
            />
          </div>
          
          <div className="flex-shrink-0">
            {isEditing ? (
              <div className="flex space-x-2">
                <input
                  type="number"
                  min="1"
                  value={tempGoal}
                  onChange={(e) => setTempGoal(Number(e.target.value))}
                  className="w-20 px-3 py-2 text-sm border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-400 bg-white/80"
                />
                <button
                  onClick={handleSaveGoal}
                  className="px-3 py-2 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition-colors"
                >
                  ✓
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setIsEditing(true);
                  setTempGoal(habit.goal);
                }}
                className="text-amber-700 hover:text-amber-900 transition-colors flex items-center space-x-2 bg-amber-100/50 px-3 py-2 rounded-lg"
              >
                <Icons.Edit2 className="w-4 h-4" />
                <span className="text-sm font-medium">Goal: {formatValue(habit.goal)}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}