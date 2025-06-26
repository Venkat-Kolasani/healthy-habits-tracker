import React from 'react';
import { Target, TrendingUp, Award, ArrowRight, Droplets, Moon, Footprints, Smartphone } from 'lucide-react';
import { Page } from '../types/habits';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const features = [
    {
      icon: Droplets,
      title: 'Water Intake',
      description: 'Stay hydrated with daily water tracking',
      color: 'from-blue-400/20 to-cyan-400/20'
    },
    {
      icon: Moon,
      title: 'Sleep Quality',
      description: 'Monitor your rest for better health',
      color: 'from-indigo-400/20 to-purple-400/20'
    },
    {
      icon: Footprints,
      title: 'Daily Steps',
      description: 'Keep active with step counting',
      color: 'from-green-400/20 to-emerald-400/20'
    },
    {
      icon: Smartphone,
      title: 'Screen Time',
      description: 'Balance digital wellness mindfully',
      color: 'from-orange-400/20 to-red-400/20'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-200/30 to-amber-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-amber-200/50 px-4 py-2 rounded-full mb-8 animate-fade-in">
              <Target className="w-5 h-5 text-amber-700" />
              <span className="text-amber-800 font-medium">Build Better Habits</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-amber-900 mb-8 animate-fade-in-delay leading-tight">
              Healthy
              <span className="block bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Habits
              </span>
              <span className="block text-5xl md:text-6xl text-amber-700">Tracker</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-amber-700 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay-2">
              Transform your daily routine with mindful tracking of water, sleep, steps, and screen time. 
              Build lasting habits that nurture your wellbeing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
              <button
                onClick={() => onNavigate('tracker')}
                className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Tracking</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => onNavigate('progress')}
                className="bg-white/80 backdrop-blur-sm text-amber-800 px-8 py-4 rounded-2xl font-semibold text-lg border border-amber-200 hover:bg-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                View Progress
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-amber-200/50 hover:bg-white/80 hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-3">{feature.title}</h3>
                <p className="text-amber-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center animate-fade-in-delay-4">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-amber-700" />
              </div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-4">Set Mindful Goals</h3>
              <p className="text-amber-700 leading-relaxed">
                Create personalized targets that align with your wellness journey and lifestyle.
              </p>
            </div>
            
            <div className="text-center animate-fade-in-delay-5">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-amber-700" />
              </div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-4">Track with Ease</h3>
              <p className="text-amber-700 leading-relaxed">
                Simple, intuitive tracking that fits seamlessly into your daily routine.
              </p>
            </div>
            
            <div className="text-center animate-fade-in-delay-6">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-amber-700" />
              </div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-4">Celebrate Progress</h3>
              <p className="text-amber-700 leading-relaxed">
                Earn meaningful achievements and celebrate your commitment to better health.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-amber-200/50 animate-fade-in-delay-7">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-xl text-amber-700 mb-8 max-w-2xl mx-auto">
              Start building healthier habits today. No signup required – your progress is saved locally and privately.
            </p>
            <button
              onClick={() => onNavigate('tracker')}
              className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-10 py-5 rounded-2xl font-semibold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 mx-auto"
            >
              <span>Begin Tracking</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}