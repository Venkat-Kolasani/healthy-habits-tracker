import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TrackerPage } from './pages/TrackerPage';
import { ProgressPage } from './pages/ProgressPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { Page } from './types/habits';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onNavigate={setCurrentPage} />;
      case 'tracker':
        return <TrackerPage />;
      case 'progress':
        return <ProgressPage />;
      case 'achievements':
        return <AchievementsPage />;
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      
      {currentPage !== 'home' && (
        <footer className="bg-amber-900/90 text-amber-100 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-amber-200">
              Built with ❤️ for healthier habits. Keep up the great work!
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;