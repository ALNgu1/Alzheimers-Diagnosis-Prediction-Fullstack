package com.example.demo;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FlaskRequest {


    @JsonProperty("Age") private int Age;
    @JsonProperty("Gender") private int Gender;
    @JsonProperty("Ethnicity") private int Ethnicity;
    @JsonProperty("EducationLevel") private int EducationLevel;
    @JsonProperty("BMI") private double BMI;
    @JsonProperty("Smoking") private int Smoking;
    @JsonProperty("AlcoholConsumption") private double AlcoholConsumption;
    @JsonProperty("PhysicalActivity") private double PhysicalActivity;
    @JsonProperty("DietQuality") private double DietQuality;
    @JsonProperty("SleepQuality") private double SleepQuality;
    @JsonProperty("FamilyHistoryAlzheimers") private int FamilyHistoryAlzheimers;
    @JsonProperty("CardiovascularDisease") private int CardiovascularDisease;
    @JsonProperty("Diabetes") private int Diabetes;
    @JsonProperty("Depression") private int Depression;
    @JsonProperty("HeadInjury") private int HeadInjury;
    @JsonProperty("Hypertension") private int Hypertension;
    @JsonProperty("SystolicBP") private int SystolicBP;
    @JsonProperty("DiastolicBP") private int DiastolicBP;
    @JsonProperty("CholesterolTotal") private int CholesterolTotal;
    @JsonProperty("CholesterolLDL") private int CholesterolLDL;
    @JsonProperty("CholesterolHDL") private int CholesterolHDL;
    @JsonProperty("CholesterolTriglycerides") private int CholesterolTriglycerides;
    @JsonProperty("MMSE") private double MMSE;
    @JsonProperty("FunctionalAssessment") private double FunctionalAssessment;
    @JsonProperty("MemoryComplaints") private int MemoryComplaints;
    @JsonProperty("BehavioralProblems")private int BehavioralProblems;
    @JsonProperty("ADL") private double ADL;
    @JsonProperty("Confusion") private int Confusion;
    @JsonProperty("Disorientation") private int Disorientation;
    @JsonProperty("PersonalityChanges") private int PersonalityChanges;
    @JsonProperty("DifficultyCompletingTasks") private int DifficultyCompletingTasks;
    @JsonProperty("Forgetfulness") private int Forgetfulness;

    public FlaskRequest() {}

    public void setAge(int age) { this.Age = age; }
    public void setGender(int gender) { this.Gender = gender; }
    public void setEthnicity(int ethnicity) { this.Ethnicity = ethnicity; }
    public void setEducationLevel(int educationLevel) { this.EducationLevel = educationLevel; }
    public void setBMI(double BMI) { this.BMI = BMI; }
    public void setSmoking(int smoking) { this.Smoking = smoking; }
    public void setAlcoholConsumption(double alcoholConsumption) { this.AlcoholConsumption = alcoholConsumption; }
    public void setPhysicalActivity(double physicalActivity) { this.PhysicalActivity = physicalActivity; }
    public void setDietQuality(double dietQuality) { this.DietQuality = dietQuality; }
    public void setSleepQuality(double sleepQuality) { this.SleepQuality = sleepQuality; }
    public void setFamilyHistoryAlzheimers(int familyHistoryAlzheimers) { this.FamilyHistoryAlzheimers = familyHistoryAlzheimers; }
    public void setCardiovascularDisease(int cardiovascularDisease) { this.CardiovascularDisease = cardiovascularDisease; }
    public void setDiabetes(int diabetes) { this.Diabetes = diabetes; }
    public void setDepression(int depression) { this.Depression = depression; }
    public void setHeadInjury(int headInjury) { this.HeadInjury = headInjury; }
    public void setHypertension(int hypertension) { this.Hypertension = hypertension; }
    public void setSystolicBP(int systolicBP) { this.SystolicBP = systolicBP; }
    public void setDiastolicBP(int diastolicBP) { this.DiastolicBP = diastolicBP; }
    public void setCholesterolTotal(int cholesterolTotal) { this.CholesterolTotal = cholesterolTotal; }
    public void setCholesterolLDL(int cholesterolLDL) { this.CholesterolLDL = cholesterolLDL; }
    public void setCholesterolHDL(int cholesterolHDL) { this.CholesterolHDL = cholesterolHDL; }
    public void setCholesterolTriglycerides(int cholesterolTriglycerides) { this.CholesterolTriglycerides = cholesterolTriglycerides; }
    public void setMMSE(double MMSE) { this.MMSE = MMSE; }
    public void setFunctionalAssessment(double functionalAssessment) { this.FunctionalAssessment = functionalAssessment; }
    public void setMemoryComplaints(int memoryComplaints) { this.MemoryComplaints = memoryComplaints; }
    public void setBehavioralProblems(int behavioralProblems) { this.BehavioralProblems = behavioralProblems; }
    public void setADL(double ADL) { this.ADL = ADL; }
    public void setConfusion(int confusion) { this.Confusion = confusion; }
    public void setDisorientation(int disorientation) { this.Disorientation = disorientation; }
    public void setPersonalityChanges(int personalityChanges) { this.PersonalityChanges = personalityChanges; }
    public void setDifficultyCompletingTasks(int difficultyCompletingTasks) { this.DifficultyCompletingTasks = difficultyCompletingTasks; }
    public void setForgetfulness(int forgetfulness) { this.Forgetfulness = forgetfulness; }
}