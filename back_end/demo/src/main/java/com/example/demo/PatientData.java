package com.example.demo;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PatientData {

    @JsonProperty("age") private Integer age;
    @JsonProperty("gender") private String gender;
    @JsonProperty("ethnicity") private String ethnicity;
    @JsonProperty("educationLevel") private String educationLevel;
    @JsonProperty("bmi") private Double bmi;
    @JsonProperty("smoking") private String smoking;
    @JsonProperty("alcoholConsumption") private Double alcoholConsumption;
    @JsonProperty("physicalActivity") private Double physicalActivity;
    @JsonProperty("dietQuality") private Double dietQuality;
    @JsonProperty("sleepQuality") private Double sleepQuality;
    @JsonProperty("familyHistoryAlzheimers") private String familyHistoryAlzheimers;
    @JsonProperty("cardiovascularDisease") private String cardiovascularDisease;
    @JsonProperty("diabetes") private String diabetes;
    @JsonProperty("depression") private String depression;
    @JsonProperty("headInjury") private String headInjury;
    @JsonProperty("hypertension") private String hypertension;
    @JsonProperty("systolicBP") private Integer systolicBP;
    @JsonProperty("diastolicBP") private Integer diastolicBP;
    @JsonProperty("cholesterolTotal") private Integer cholesterolTotal;
    @JsonProperty("cholesterolLDL") private Integer cholesterolLDL;
    @JsonProperty("cholesterolHDL") private Integer cholesterolHDL;
    @JsonProperty("cholesterolTriglycerides") private Integer cholesterolTriglycerides;
    @JsonProperty("mmse") private Double mmse;
    @JsonProperty("functionalAssessment") private Double functionalAssessment;
    @JsonProperty("memoryComplaints") private String memoryComplaints;
    @JsonProperty("behavioralProblems") private String behavioralProblems;
    @JsonProperty("adl") private Double adl;
    @JsonProperty("confusion") private String confusion;
    @JsonProperty("disorientation") private String disorientation;
    @JsonProperty("personalityChanges") private String personalityChanges;
    @JsonProperty("difficultyCompletingTasks") private String difficultyCompletingTasks;
    @JsonProperty("forgetfulness") private String forgetfulness;

    public Integer getAge() { return age; }
    public String getGender() { return gender; }
    public String getEthnicity() { return ethnicity; }
    public String getEducationLevel() { return educationLevel; }
    public Double getBmi() { return bmi; }
    public String getSmoking() { return smoking; }
    public Double getAlcoholConsumption() { return alcoholConsumption; }
    public Double getPhysicalActivity() { return physicalActivity; }
    public Double getDietQuality() { return dietQuality; }
    public Double getSleepQuality() { return sleepQuality; }
    public String getFamilyHistoryAlzheimers() { return familyHistoryAlzheimers; }
    public String getCardiovascularDisease() { return cardiovascularDisease; }
    public String getDiabetes() { return diabetes; }
    public String getDepression() { return depression; }
    public String getHeadInjury() { return headInjury; }
    public String getHypertension() { return hypertension; }
    public Integer getSystolicBP() { return systolicBP; }
    public Integer getDiastolicBP() { return diastolicBP; }
    public Integer getCholesterolTotal() { return cholesterolTotal; }
    public Integer getCholesterolLDL() { return cholesterolLDL; }
    public Integer getCholesterolHDL() { return cholesterolHDL; }
    public Integer getCholesterolTriglycerides() { return cholesterolTriglycerides; }
    public Double getMmse() { return mmse; }
    public Double getFunctionalAssessment() { return functionalAssessment; }
    public String getMemoryComplaints() { return memoryComplaints; }
    public String getBehavioralProblems() { return behavioralProblems; }
    public Double getAdl() { return adl; }
    public String getConfusion() { return confusion; }
    public String getDisorientation() { return disorientation; }
    public String getPersonalityChanges() { return personalityChanges; }
    public String getDifficultyCompletingTasks() { return difficultyCompletingTasks; }
    public String getForgetfulness() { return forgetfulness; }
}
