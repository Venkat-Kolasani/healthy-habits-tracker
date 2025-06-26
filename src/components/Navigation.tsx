import React from 'react';
import { Home, Target, TrendingUp, Award, ArrowLeft } from 'lucide-react';
import { Page } from '../types/habits';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  if (currentPage === 'home') return null;

  const navItems = [
    { id: 'tracker' as Page, label: 'Track Habits', icon: Target },
    { id: 'progress' as Page, label: 'Progress', icon: TrendingUp },
    { id: 'achievements' as Page, label: 'Achievements', icon: Award },
  ];

  return (
    <nav className="bg-amber-50/80 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 text-amber-700 hover:text-amber-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Home</span>
          </button>
          
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  currentPage === item.id
                    ? 'bg-amber-200 text-amber-900 shadow-sm'
                    : 'text-amber-700 hover:text-amber-900 hover:bg-amber-100'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}