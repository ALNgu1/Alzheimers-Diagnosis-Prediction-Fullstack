package com.example.demo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PredictionService {

    @Autowired
    private RestTemplate restTemplate;

    @Value("${flask.api.url:http://localhost:5000}")
    private String flaskApiUrl;


    // Average Values
    private static final int DEFAULT_AGE = 75;
    private static final int DEFAULT_GENDER = 0;
    private static final int DEFAULT_ETHNICITY = 1;
    private static final int DEFAULT_EDUCATION_LEVEL = 1;
    private static final double DEFAULT_BMI = 27.65;
    private static final int DEFAULT_SMOKING = 0;
    private static final double DEFAULT_ALCOHOL_CONSUMPTION = 10.04;
    private static final double DEFAULT_PHYSICAL_ACTIVITY = 4.92;
    private static final double DEFAULT_DIET_QUALITY = 4.99;
    private static final double DEFAULT_SLEEP_QUALITY = 7.05;
    private static final int DEFAULT_FAMILY_HISTORY_ALZHEIMERS = 0;
    private static final int DEFAULT_CARDIOVASCULAR_DISEASE = 0;
    private static final int DEFAULT_DIABETES = 0;
    private static final int DEFAULT_DEPRESSION = 0;
    private static final int DEFAULT_HEAD_INJURY = 0;
    private static final int DEFAULT_HYPERTENSION = 0;
    private static final int DEFAULT_SYSTOLIC_BP = 134;
    private static final int DEFAULT_DIASTOLIC_BP = 90;
    private static final int DEFAULT_CHOLESTEROL_TOTAL = 225;
    private static final int DEFAULT_CHOLESTEROL_LDL = 124;
    private static final int DEFAULT_CHOLESTEROL_HDL = 59;
    private static final int DEFAULT_CHOLESTEROL_TRIGLYCERIDES = 228;
    private static final double DEFAULT_MMSE = 14.76;
    private static final double DEFAULT_FUNCTIONAL_ASSESSMENT = 5.08;
    private static final int DEFAULT_MEMORY_COMPLAINTS = 0;
    private static final int DEFAULT_BEHAVIORAL_PROBLEMS = 0;
    private static final double DEFAULT_ADL = 4.98;
    private static final int DEFAULT_CONFUSION = 0;
    private static final int DEFAULT_DISORIENTATION = 0;
    private static final int DEFAULT_PERSONALITY_CHANGES = 0;
    private static final int DEFAULT_DIFFICULTY_COMPLETING_TASKS = 0;
    private static final int DEFAULT_FORGETFULNESS = 1;

    public FlaskResponse getPrediction (PatientData patientData) {
        try {
            // Convert PatientData to FlaskRequest
            FlaskRequest flaskRequest = convertToFlaskData(patientData);

            // Call Flask API
            String flaskUrl = "http://localhost:5000/xgboost_model";

            return restTemplate.postForObject(flaskUrl, flaskRequest, FlaskResponse.class);
        }
        catch (Exception e) {
            return new FlaskResponse("Error: " + e.getMessage());
        }
    }

    private FlaskRequest convertToFlaskData(PatientData data) {
        FlaskRequest request = new FlaskRequest();

        // Direct mappings (no conversion needed)
        request.setAge(data.getAge() != null ? data.getAge() : DEFAULT_AGE);
        request.setBMI(data.getBmi() != null ? data.getBmi() : DEFAULT_BMI);
        request.setAlcoholConsumption(data.getAlcoholConsumption() != null ? data.getAlcoholConsumption() : DEFAULT_ALCOHOL_CONSUMPTION);
        request.setPhysicalActivity(data.getPhysicalActivity() != null ? data.getPhysicalActivity() : DEFAULT_PHYSICAL_ACTIVITY);
        request.setDietQuality(data.getDietQuality() != null ? data.getDietQuality() : DEFAULT_DIET_QUALITY);
        request.setSleepQuality(data.getSleepQuality() != null ? data.getSleepQuality() : DEFAULT_SLEEP_QUALITY);
        request.setSystolicBP(data.getSystolicBP() != null ? data.getSystolicBP() : DEFAULT_SYSTOLIC_BP);
        request.setDiastolicBP(data.getDiastolicBP() != null ? data.getDiastolicBP() : DEFAULT_DIASTOLIC_BP);
        request.setCholesterolTotal(data.getCholesterolTotal() != null ? data.getCholesterolTotal() : DEFAULT_CHOLESTEROL_TOTAL);
        request.setCholesterolLDL(data.getCholesterolLDL() != null ? data.getCholesterolLDL() : DEFAULT_CHOLESTEROL_LDL);
        request.setCholesterolHDL(data.getCholesterolHDL() != null ? data.getCholesterolHDL() : DEFAULT_CHOLESTEROL_HDL);
        request.setCholesterolTriglycerides(data.getCholesterolTriglycerides() != null ? data.getCholesterolTriglycerides() : DEFAULT_CHOLESTEROL_TRIGLYCERIDES);
        request.setMMSE(data.getMmse() != null ? data.getMmse() : DEFAULT_MMSE);
        request.setFunctionalAssessment(data.getFunctionalAssessment() != null ? convertFAST(data.getFunctionalAssessment()) : DEFAULT_FUNCTIONAL_ASSESSMENT);
        request.setADL(data.getAdl() != null ? data.getAdl() : DEFAULT_ADL);

        //Conversions
        request.setGender(convertGenderToInt(data.getGender()));
        request.setEthnicity(convertEthnicityToInt(data.getEthnicity()));
        request.setEducationLevel(convertEducationLevelToInt(data.getEducationLevel()));
        request.setSmoking(convertYesNoToInt(data.getSmoking()));
        request.setFamilyHistoryAlzheimers(convertYesNoToInt(data.getFamilyHistoryAlzheimers()));
        request.setCardiovascularDisease(convertYesNoToInt(data.getCardiovascularDisease()));
        request.setDiabetes(convertYesNoToInt(data.getDiabetes()));
        request.setDepression(convertYesNoToInt(data.getDepression()));
        request.setHeadInjury(convertYesNoToInt(data.getHeadInjury()));
        request.setHypertension(convertYesNoToInt(data.getHypertension()));
        request.setMemoryComplaints(convertYesNoToInt(data.getMemoryComplaints()));
        request.setBehavioralProblems(convertYesNoToInt(data.getBehavioralProblems()));
        request.setConfusion(convertYesNoToInt(data.getConfusion()));
        request.setDisorientation(convertYesNoToInt(data.getDisorientation()));
        request.setPersonalityChanges(convertYesNoToInt(data.getPersonalityChanges()));
        request.setDifficultyCompletingTasks(convertYesNoToInt(data.getDifficultyCompletingTasks()));
        request.setForgetfulness(convertYesNoToInt(data.getForgetfulness()));


        return request;
    }



    //Conversion Methods
    private int convertGenderToInt(String gender) {
        if (gender == null) return 0;
        return gender.equalsIgnoreCase("Male") ? 1 : 0;
    }

    private double convertFAST(double fast) {
        return (fast * 10) / 7;
    }

    private int convertEthnicityToInt(String ethnicity) {
        if (ethnicity == null) return 1;
        return switch (ethnicity.toLowerCase()) {
            case "caucasian" -> 0;
            case "african american" -> 1;
            case "asian" -> 2;
            case "other" -> 3;
            default -> 1;
        };
    }

    private int convertEducationLevelToInt(String educationLevel) {
        if (educationLevel == null) return 1;
        return switch (educationLevel.toLowerCase()) {
            case "none" -> 0;
            case "high school" -> 1;
            case "bachelor's" -> 2;
            case "higher" -> 3;
            default -> 1;
        };
    }

    private int convertYesNoToInt(String yesNo) {
        if (yesNo == null) return 0;
        return yesNo.equalsIgnoreCase("Yes") ? 1 : 0;
    }
}
