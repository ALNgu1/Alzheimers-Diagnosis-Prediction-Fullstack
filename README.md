# Alzheimer's Diagnosis Prediction

This full-stack project predicts Alzheimer's diagnosis based on user input data. Users fill out a medical form and get an instant prediction using machine learning. Incomplete fields are estimated with averages.

**🌐 Live Demo**: http://my-react-app-bucket-alzpred124.s3-website-us-east-1.amazonaws.com

## Tech Stack
- **Frontend**: React.js (hosted on AWS S3)
- **Backend**: Spring Boot (Java) (running on AWS EC2)
- **ML API**: Flask (Python) (running on AWS EC2)
- **XGBoost Model**: Machine learning for diagnosis prediction

## Architecture
React (S3) → Spring Boot (EC2) → Flask (EC2) → ML Model

## How it Works
1. User fills out health assessment form on the web app
2. React sends data to Spring Boot API on EC2
3. Spring Boot forwards to Flask ML API
4. ML model returns diagnosis prediction
5. Result displayed to user

## Local Development
If you want to run this locally:

### Frontend
```bash
cd front_end
npm install
npm start
```

### Backend
```bash
cd back_end/demo
mvn spring-boot:run
```

### ML API
```bash
cd ml_model
pip install -r requirements.txt
python model_api.py
```

Visit `http://localhost:3000` for local development.

## Data Source
Citation:
Rabie El Kharoua (2024). Alzheimer's Disease Dataset. Kaggle.
DOI: 10.34740/KAGGLE/DSV/8668279
URL: https://www.kaggle.com/dsv/8668279

**Disclaimer**: For educational purposes only. Not a replacement for professional medical diagnosis.