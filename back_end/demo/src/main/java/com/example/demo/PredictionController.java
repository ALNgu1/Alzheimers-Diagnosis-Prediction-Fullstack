package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class PredictionController {

    @Autowired
    private PredictionService predictionService;

    @PostMapping("/predict")
    public FlaskResponse predictAlzheimers(@RequestBody PatientData patientData) {
        try {
            return predictionService.getPrediction(patientData);
        }
        catch(Exception e) {
            return new FlaskResponse("Error: " + e.getMessage());
        }
    }

}
