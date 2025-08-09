import React from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';
import AlzheimersPredictionForm from './AlzheimersPredictionForm';
import './LandingPage.css';
import memoryLossIcon from './memory-loss-icon.png'

const LandingPage = ({ setCurrentPage, onNavigateToAnalysis }) => {
  const scrollToAssessment = () => {
    const assessmentSection = document.getElementById('assessment-section');
    assessmentSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <div className="hero-icon"> 
            <img src={memoryLossIcon} alt="Memory loss icon" className="hero-icon-f" /> 
            </div>
          <h1 className="hero-title">Alzheimer's Risk Assessment</h1>
          <p className="hero-subtitle">
            Machine learning tool for understanding Alzheimer's disease risk factors
          </p>
          <button onClick={scrollToAssessment} className="hero-button">
            Begin Assessment
            <ArrowRight className="button-arrow" />
          </button>
        </div>
      </div>

      <div className="disclaimers">
        <div className="disclaimer-grid">
          <div className="disclaimer-card privacy">
            <AlertCircle className="disclaimer-icon" />
            <div>
              <h3>Privacy Protection</h3>
              <p className="disclaimer-highlight">🔒 Your data is NOT stored or saved</p>
              <p>• All information is processed in real-time only</p>
              <p>• No personal data is retained after your session</p>
              <p>• Your information never leaves your browser session</p>
            </div>
          </div>
          
          <div className="disclaimer-card medical">
            <AlertCircle className="disclaimer-icon" />
            <div>
              <h3>Medical Disclaimer</h3>
              <p className="disclaimer-highlight">⚠️ This is NOT medical advice</p>
              <p>• Research and educational purposes only</p>
              <p>• Not a substitute for professional medical consultation</p>
              <p>• Results should not influence medical decisions</p>
              <p>• Consult healthcare professionals for medical concerns</p>
            </div>
          </div>
        </div>
        
        <div className="limitations-card">
          <AlertCircle className="limitations-icon" />
          <div>
            <h4>Important Limitations</h4>
            <p>
              This tool is designed for research and educational purposes. It provides statistical risk assessments 
              based on machine learning models trained on clinical datasets, but cannot replace professional medical 
              evaluation. Individual health decisions should always be made in consultation with qualified healthcare providers 
              who can consider your complete medical history and current condition.
            </p>
          </div>
        </div>
      </div>

      <div id="assessment-section">
        <AlzheimersPredictionForm onNavigateToAnalysis={onNavigateToAnalysis} />
      </div>
    </div>
  );
};

export default LandingPage;