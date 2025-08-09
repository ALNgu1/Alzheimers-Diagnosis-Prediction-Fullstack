import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import './AlzheimersPredictionForm.css';
import memoryLossIcon from './memory-loss-icon.png'

const AlzheimersPredictionForm = ({ onNavigateToAnalysis }) => {
  const [formData, setFormData] = useState({
    // Demographics
    age: '',
    gender: '',
    ethnicity: '',
    educationLevel: '',
    
    // Physical Health
    bmi: '',
    smoking: '',
    alcoholConsumption: '',
    physicalActivity: '',
    dietQuality: '',
    sleepQuality: '',
    
    // Medical History
    familyHistoryAlzheimers: '',
    cardiovascularDisease: '',
    diabetes: '',
    depression: '',
    headInjury: '',
    hypertension: '',
    
    // Vital Signs
    systolicBP: '',
    diastolicBP: '',
    cholesterolTotal: '',
    cholesterolLDL: '',
    cholesterolHDL: '',
    cholesterolTriglycerides: '',
    
    // Cognitive Assessment
    mmse: '',
    functionalAssessment: '',
    adl: '',
    
    // Symptoms
    memoryComplaints: '',
    behavioralProblems: '',
    confusion: '',
    disorientation: '',
    personalityChanges: '',
    difficultyCompletingTasks: '',
    forgetfulness: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080';
        const response = await fetch(`${apiUrl}/api/predict`, {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      onNavigateToAnalysis(data);
      
    } catch (err) {
      if (err.message.includes('fetch')) {
        setError('Cannot connect to the prediction service. Please ensure the backend server is running on port 8080.');
      } else {
        setError(`Prediction failed: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      age: '', gender: '', ethnicity: '', educationLevel: '',
      bmi: '', smoking: '', alcoholConsumption: '', physicalActivity: '',
      dietQuality: '', sleepQuality: '', familyHistoryAlzheimers: '',
      cardiovascularDisease: '', diabetes: '', depression: '', headInjury: '',
      hypertension: '', systolicBP: '', diastolicBP: '', cholesterolTotal: '',
      cholesterolLDL: '', cholesterolHDL: '', cholesterolTriglycerides: '',
      mmse: '', functionalAssessment: '', adl: '', memoryComplaints: '',
      behavioralProblems: '', confusion: '', disorientation: '',
      personalityChanges: '', difficultyCompletingTasks: '', forgetfulness: ''
    });
    setError('');
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <h1> <img src={memoryLossIcon} alt="Memory loss icon" className="memory-icon" /> Alzheimer's Risk Assessment</h1>
          <p>Complete the form below to assess potential risk factors</p>
        </div>

        <div className="form-content">
          <div className="section">
            <h2>Demographics</h2>
            <div className="input-grid-4">
              <div className="input-group">
                <label>Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="Enter age"
                />
              </div>
              
              <div className="input-group">
                <label>Gender</label>
                <select name="gender" value={formData.gender} onChange={handleInputChange}>
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              
              <div className="input-group">
                <label>Ethnicity</label>
                <select name="ethnicity" value={formData.ethnicity} onChange={handleInputChange}>
                  <option value="">Select ethnicity</option>
                  <option value="Caucasian">Caucasian</option>
                  <option value="African American">African American</option>
                  <option value="Asian">Asian</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="input-group">
                <label>Education Level</label>
                <select name="educationLevel" value={formData.educationLevel} onChange={handleInputChange}>
                  <option value="">Select education</option>
                  <option value="None">None</option>
                  <option value="High School">High School</option>
                  <option value="Bachelor's">Bachelor's</option>
                  <option value="Higher">Higher</option>
                </select>
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Physical Health</h2>
            <div className="input-grid-3">
              <div className="input-group">
                <label>BMI</label>
                <input type="number" step="0.1" name="bmi" value={formData.bmi} onChange={handleInputChange} placeholder="Body Mass Index" />
              </div>
              
              <div className="input-group">
                <label>Smoking</label>
                <select name="smoking" value={formData.smoking} onChange={handleInputChange}>
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className="input-group">
                <label>Alcohol Consumption (units per week)</label>
                <input type="number" min="0" step="0.1" name="alcoholConsumption" value={formData.alcoholConsumption} onChange={handleInputChange} placeholder="e.g., 14" />
              </div>
              
              <div className="input-group">
                <label>Physical Activity (1-10)</label>
                <input type="number" min="1" max="10" name="physicalActivity" value={formData.physicalActivity} onChange={handleInputChange} />
              </div>

              <div className="input-group">
                <label>Diet Quality (1-10)</label>
                <input type="number" min="1" max="10" name="dietQuality" value={formData.dietQuality} onChange={handleInputChange} />
              </div>
              
              <div className="input-group">
                <label>Sleep Quality (1-10)</label>
                <input type="number" min="1" max="10" name="sleepQuality" value={formData.sleepQuality} onChange={handleInputChange} />
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Medical History</h2>
            <div className="input-grid-3">
              {[
                { key: 'familyHistoryAlzheimers', label: 'Family History of Alzheimers' },
                { key: 'cardiovascularDisease', label: 'Cardiovascular Disease' },
                { key: 'diabetes', label: 'Diabetes' },
                { key: 'depression', label: 'Depression' },
                { key: 'headInjury', label: 'Head Injury' },
                { key: 'hypertension', label: 'Hypertension' }
              ].map(({ key, label }) => (
                <div key={key} className="input-group">
                  <label>{label}</label>
                  <select name={key} value={formData[key]} onChange={handleInputChange}>
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              ))}
            </div>
          </div>

          <div className="section">
            <h2>Vital Signs</h2>
            <div className="input-grid-3">
              <div className="input-group">
                <label>Systolic BP (mmHg)</label>
                <input type="number" name="systolicBP" value={formData.systolicBP} onChange={handleInputChange} placeholder="e.g., 120" />
              </div>

              <div className="input-group">
                <label>Diastolic BP (mmHg)</label>
                <input type="number" name="diastolicBP" value={formData.diastolicBP} onChange={handleInputChange} placeholder="e.g., 80" />
              </div>

              <div className="input-group">
                <label>Total Cholesterol (mg/dL)</label>
                <input type="number" name="cholesterolTotal" value={formData.cholesterolTotal} onChange={handleInputChange} placeholder="e.g., 200" />
              </div>

              <div className="input-group">
                <label>LDL Cholesterol (mg/dL)</label>
                <input type="number" name="cholesterolLDL" value={formData.cholesterolLDL} onChange={handleInputChange} placeholder="e.g., 100" />
              </div>

              <div className="input-group">
                <label>HDL Cholesterol (mg/dL)</label>
                <input type="number" name="cholesterolHDL" value={formData.cholesterolHDL} onChange={handleInputChange} placeholder="e.g., 50" />
              </div>

              <div className="input-group">
                <label>Triglycerides (mg/dL)</label>
                <input type="number" name="cholesterolTriglycerides" value={formData.cholesterolTriglycerides} onChange={handleInputChange} placeholder="e.g., 150" />
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Cognitive Assessment</h2>
            <div className="cognitive-grid">
              <div className="input-group">
                <label>
                  MMSE Score (0-30)
                  <a href="https://muhc.ca/sites/default/files/micro/m-PT-OT/OT/Mini-Mental-State-Exam-%28MMSE%29.pdf" 
                     target="_blank" rel="noopener noreferrer" className="info-link">
                    What is MMSE?
                  </a>
                </label>
                <input type="number" min="0" max="30" name="mmse" value={formData.mmse} onChange={handleInputChange} placeholder="0-30" />
              </div>
              
              <div className="input-group">
                <label>Functional Assessment (0-7)</label>
                <input type="number" min="0" max="7" name="functionalAssessment" value={formData.functionalAssessment} onChange={handleInputChange} placeholder="0-7" />
              </div>
              
              <div className="input-group">
                <label>ADL Score (0-10)</label>
                <input type="number" min="0" max="10" name="adl" value={formData.adl} onChange={handleInputChange} placeholder="0-10" />
              </div>
            </div>

            <h3>Symptoms</h3>
            <div className="symptoms-grid">
              {[
                { key: 'memoryComplaints', label: 'Memory Complaints' },
                { key: 'behavioralProblems', label: 'Behavioral Problems' },
                { key: 'confusion', label: 'Confusion' },
                { key: 'disorientation', label: 'Disorientation' },
                { key: 'personalityChanges', label: 'Personality Changes' },
                { key: 'difficultyCompletingTasks', label: 'Difficulty Completing Tasks' },
                { key: 'forgetfulness', label: 'Forgetfulness' }
              ].map(({ key, label }) => (
                <div key={key} className="input-group">
                  <label>{label}</label>
                  <select name={key} value={formData[key]} onChange={handleInputChange}>
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              ))}
            </div>
          </div>

          <div className="button-container">
            <button onClick={handleSubmit} disabled={loading} className="submit-button">
              {loading ? (
                <>
                  <div className="spinner"></div>
                  Processing...
                </>
              ) : (
                'Get Prediction'
              )}
            </button>
            <button onClick={resetForm} className="reset-button">Reset Form</button>
          </div>

          {error && (
            <div className="error-message">
              <AlertCircle className="error-icon" />
              <div>
                <h3>Error</h3>
                <p>{error}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlzheimersPredictionForm;