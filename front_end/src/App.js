import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import AlzheimersPredictionForm from './components/AlzheimersPredictionForm';
import AnalysisPage from './components/AnalysisPage';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [analysisData, setAnalysisData] = useState(null);

  const handleNavigateToAnalysis = (data) => {
    setAnalysisData(data);
    setCurrentPage('analysis');
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
    setAnalysisData(null);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'landing':
        return <LandingPage setCurrentPage={setCurrentPage} onNavigateToAnalysis={handleNavigateToAnalysis} />;
      case 'assessment':
        return <AlzheimersPredictionForm onNavigateToAnalysis={handleNavigateToAnalysis} />;
      case 'analysis':
        return <AnalysisPage analysisData={analysisData} onBack={handleBackToLanding} />;
      default:
        return <LandingPage setCurrentPage={setCurrentPage} onNavigateToAnalysis={handleNavigateToAnalysis} />;
    }
  };

  return (
    <div className="app-container">
      {renderPage()}
    </div>
  );
};

export default App;