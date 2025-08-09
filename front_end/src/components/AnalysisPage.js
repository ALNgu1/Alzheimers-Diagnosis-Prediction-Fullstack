import React from 'react';
import { ArrowLeft, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';
import './AnalysisPage.css';
import memoryLossIcon from './memory-loss-icon.png'
const getStrengthDescription = (strength) => {
  if (strength >= 0.7) return "strongly";
  if (strength >= 0.4) return "moderately"; 
  if (strength >= 0.2) return "slightly";
  return "minimally";
};

const getFeatureDisplayName = (name) => {
  const nameMap = {
    'FunctionalAssessment': 'Functional Assessment',
    'BehavioralProblems': 'Behavioral Problems',
    'ADL': 'Activities of Daily Living',
    'MemoryComplaints': 'Memory Complaints',
    'MMSE': 'Mini-Mental State Examination',
    'Age': 'Age',
    'Gender': 'Gender',
    'Ethnicity': 'Ethnicity',
    'EducationLevel': 'Education Level',
    'BMI': 'Body Mass Index',
    'Smoking': 'Smoking Status',
    'AlcoholConsumption': 'Alcohol Consumption',
    'PhysicalActivity': 'Physical Activity',
    'DietQuality': 'Diet Quality',
    'SleepQuality': 'Sleep Quality',
    'FamilyHistoryAlzheimers': 'Family History of Alzheimer\'s',
    'CardiovascularDisease': 'Cardiovascular Disease',
    'Diabetes': 'Diabetes',
    'Depression': 'Depression',
    'HeadInjury': 'Head Injury',
    'Hypertension': 'Hypertension',
    'SystolicBP': 'Systolic Blood Pressure',
    'DiastolicBP': 'Diastolic Blood Pressure',
    'CholesterolTotal': 'Total Cholesterol',
    'CholesterolLDL': 'LDL Cholesterol',
    'CholesterolHDL': 'HDL Cholesterol',
    'CholesterolTriglycerides': 'Triglycerides',
    'Confusion': 'Confusion',
    'Disorientation': 'Disorientation',
    'PersonalityChanges': 'Personality Changes',
    'DifficultyCompletingTasks': 'Difficulty Completing Tasks',
    'Forgetfulness': 'Forgetfulness'
  };
  return nameMap[name] || name;
};


const AnalysisPage = ({ analysisData, onBack }) => {
  const getRiskLevel = () => {
    const result = analysisData.result.toLowerCase();
    if (result.includes('very unlikely') || result.includes('no risk')) return 'low';
    if (result.includes('unlikely') || result.includes('low risk')) return 'low';
    if (result.includes('possible') || result.includes('moderate')) return 'moderate';
    return 'high';
  };

  return (
    <div className="analysis-container">
      <div className="analysis-content">
        <div className="analysis-header">
          <h1><img src={memoryLossIcon} alt="Memory loss icon" className="mem-icon" /> Analysis Results</h1>
          <button onClick={onBack} className="back-button">
            <ArrowLeft className="back-icon" />
            Back
          </button>
        </div>

        <div className={`diagnosis-card ${getRiskLevel()}`}>
          <div className="diagnosis-content">
            <div className="diagnosis-icon">
              {getRiskLevel() === 'low' ? '✅' : '⚠️'}
            </div>
            <div>
              <h2>Diagnosis</h2>
              <p>{analysisData.result}</p>
            </div>
          </div>
        </div>

        <div className="features-card">
          <h2>Key Factors in Your Assessment</h2>
          
          <div className="features-list">
            {analysisData.top_features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-header">
                  <div className="feature-info">
                    <div className={`feature-icon ${feature.protective ? 'protective' : 'risk'}`}>
                      {feature.protective ? <TrendingDown /> : <TrendingUp />}
                    </div>
                    <div>
                      <h3>{getFeatureDisplayName(feature.name)}</h3>
                      <span className={`feature-badge ${feature.protective ? 'protective' : 'risk'}`}>
                        {feature.type}
                      </span>
                    </div>
                  </div>
                  <span className="feature-rank">#{index + 1}</span>
                </div>

                <div className="strength-bar">
                  <div 
                    className={`strength-fill ${feature.protective ? 'protective' : 'risk'}`}
                    style={{ width: `${Math.min(feature.strength * 100, 100)}%` }}
                  ></div>
                </div>

                <p className="feature-description">
                  {index === 0 ? (
                    <span className="highlight">The most important feature in your assessment was </span>
                  ) : (
                    <span>The </span>
                  )}
                  <span className="highlight">{getFeatureDisplayName(feature.name)}</span>
                  {" feature "}
                  <span className={`impact-text ${feature.protective ? 'protective' : 'risk'}`}>
                    {getStrengthDescription(feature.strength)} influenced
                  </span>
                  {" the model "}
                  {feature.protective 
                    ? "away from an Alzheimer's diagnosis" 
                    : "toward an Alzheimer's diagnosis"
                  }.
                  {feature.strength >= 0.7 && (
                    <span className="strong-factor">
                      This is considered a {feature.protective ? 'strong protective factor' : 'significant risk factor'}.
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>

          <div className="disclaimer">
            <AlertTriangle className="disclaimer-icon" />
            <div>
              <h4>Important Disclaimer</h4>
              <p>
                This analysis is for informational purposes only and should not replace professional medical advice. 
                Please consult with a healthcare provider for proper medical evaluation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;
