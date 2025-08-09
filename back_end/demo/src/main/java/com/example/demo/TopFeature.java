package com.example.demo;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TopFeature {
    @JsonProperty("name")
    private String name;

    @JsonProperty("impact")
    private Double impact;

    @JsonProperty("strength")
    private Double strength;


    public TopFeature() {}



    public String getName() {
        return name;
    }

    public Double getImpact() {
        return impact;
    }

    public Double getStrength() {
        return strength;
    }


    public boolean isProtective() {
        return impact != null && impact < 0;
    }

    public boolean isRiskFactor() {
        return impact != null && impact > 0;
    }

    public String getType() {
        if (isProtective()) {
            return "Protective";
        } else if (isRiskFactor()) {
            return "Risk";
        } else {
            return "Neutral";
        }
    }
}