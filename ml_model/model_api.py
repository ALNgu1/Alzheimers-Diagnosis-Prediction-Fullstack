from flask import Flask, request, jsonify
import joblib
import numpy as np
import shap

averages = {
    "Age": 75,
    "Gender": 0,
    "Ethnicity": 1,
    "EducationLevel": 1,
    "BMI": 27.65,
    "Smoking": 0,
    "AlcoholConsumption": 10.04,
    "PhysicalActivity": 4.92,
    "DietQuality": 4.99,
    "SleepQuality": 7.05,
    "FamilyHistoryAlzheimers": 0,
    "CardiovascularDisease": 0,
    "Diabetes": 0,
    "Depression": 0,
    "HeadInjury": 0,
    "Hypertension": 0,
    "SystolicBP": 134,
    "DiastolicBP": 90,
    "CholesterolTotal": 225,
    "CholesterolLDL": 124,
    "CholesterolHDL": 59,
    "CholesterolTriglycerides": 228,
    "MMSE": 14.76,
    "FunctionalAssessment": 5.08,
    "MemoryComplaints": 0,
    "BehavioralProblems": 0,
    "ADL": 4.98,
    "Confusion": 0,
    "Disorientation": 0,
    "PersonalityChanges": 0,
    "DifficultyCompletingTasks": 0,
    "Forgetfulness": 1
}

xgboost_model = joblib.load("model.pkl")
app = Flask(__name__)

# Initialize SHAP explainer once for efficiency
explainer = shap.Explainer(xgboost_model)

def get_top_features(model_input_array):
    """Get top 5 features that influenced the prediction"""
    feature_names = list(averages.keys())
    
    # Get SHAP values
    shap_values = explainer(model_input_array)
    contributions = shap_values.values[0]
    
    # Create and sort feature list by absolute contribution
    features = []
    for i, name in enumerate(feature_names):
        features.append({
            "name": name,
            "impact": float(contributions[i]),
            "strength": float(abs(contributions[i]))
        })
    
    # Sort by strength (absolute value) and return top 5
    features.sort(key=lambda x: x['strength'], reverse=True)
    return features[:5]

@app.route('/xgboost_model', methods=["POST"])
def predict_alzheimers_results():
    try:
        float_data = request.get_json()
        feature_values = []
        
        # Process input data
        for feature in averages.keys():
            input_val = float_data.get(feature)
            if input_val == "":
                feature_values.append(averages[feature])
            else:
                feature_values.append(float(input_val))
        
        # Prediction
        model_input_array = np.array([feature_values])
        pred_prob = xgboost_model.predict_proba(model_input_array)[0][1]
        
        # Get risk level
        if pred_prob <= 0.2:
            result = "You are very unlikely to have Alzheimer's disease"
        elif pred_prob <= 0.4:
            result = "You are unlikely to have Alzheimer's disease"
        elif pred_prob <= 0.6:
            result = "You have a moderate likelihood of Alzheimer's disease"
        elif pred_prob <= 0.8:
            result = "You are likely to have Alzheimer's disease"
        else:
            result = "You are very likely to have Alzheimer's disease"
        
        # Get top contributing features
        top_features = get_top_features(model_input_array)
        
        return jsonify({
            "result": result,
            "top_features": top_features
        })
        
    except Exception as exception:
        return {"error": str(exception)}, 400

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=False)