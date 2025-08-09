package com.example.demo;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

public class FlaskResponse {
    @JsonProperty("result")
    private String result;

    @JsonProperty("top_features")
    private List<TopFeature> topFeatures;

    public FlaskResponse() {}

    public FlaskResponse(String result) {
        this.result = result;
    }

    //Return result - mostly for errors
    public String getResult() {
        return result;
    }


    public List<TopFeature> getTopFeatures() {
        return topFeatures;
    }

}
