# Alzheimer's Diagnosis Prediction

This full-stack project predicts Alzheimer's diagnosis based on user input data. Users fill out a medical form and get an instant prediction using machine learning. Incomplete fields are estimated with averages.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Spring Boot (Java)
- **ML API**: Flask (Python)
- **XGBoost Model**: Machine learning for diagnosis prediction

## Architecture
React → Spring Boot → Flask → ML Model

### Frontend
```bash
cd front_end
npm install
npm start
```

### Backend
```bash
cd back_end
mvn spring-boot:run
```

### ML API
```bash
cd ml_model
pip install -r requirements.txt
python model_api.py
```

Visit `http://localhost:3000` to use the app.

## How it Works
1. User fills out health assessment form
2. React sends data to Spring Boot API
3. Spring Boot forwards to Flask ML API
4. ML model returns diagnosis prediction
5. Result displayed to user


## Data Source
Citation:
Rabie El Kharoua (2024). Alzheimer's Disease Dataset. Kaggle.
DOI: 10.34740/KAGGLE/DSV/8668279
URL: https://www.kaggle.com/dsv/8668279

**Disclaimer**: For educational purposes only. Not a replacement for professional medical diagnosis.