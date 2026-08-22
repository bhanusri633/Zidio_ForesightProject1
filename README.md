# 📊 FORESIGHT – AI Sales Forecasting & Retail Analytics Dashboard

## 📌 Overview

FORESIGHT is an AI-powered Sales Forecasting and Retail Analytics Dashboard developed as part of the Zidio Development internship.

The project analyzes the Online Retail II dataset, provides interactive sales analytics, and uses machine learning to predict transaction-level sales values.

The system combines data preprocessing, exploratory data analysis, machine learning, Flask REST APIs, and a React dashboard.

---

## 🎯 Objectives

- Analyze historical retail sales data
- Identify sales trends and business insights
- Perform data preprocessing and feature engineering
- Build a machine learning model for sales prediction
- Develop a Flask REST API
- Develop an interactive React dashboard
- Provide data visualization and reporting features

---

## 🚀 Key Features

- 📊 Sales KPI dashboard
- 📈 Monthly sales analysis
- 🌍 Country-wise sales analysis
- 🏆 Top-selling product analysis
- 🤖 Machine learning sales prediction
- 📋 Retail transaction data exploration
- 🔎 Search and filtering
- 📦 Recent orders
- 📑 Reports
- 📤 Excel and PDF export
- 🔔 Dashboard notifications
- 📱 Responsive user interface

---

## 🤖 Machine Learning

The project uses **Linear Regression** for transaction-level sales prediction.

### Input Features

- Quantity
- Price
- Year
- Month
- Day

### Target Variable

```text
TotalAmount = Quantity × Price
```

The trained model is saved using Joblib and is used by the Flask backend to generate predictions.

---

## 📊 Data Processing

The project uses the **Online Retail II dataset**.

The data processing workflow includes:

1. Loading the retail dataset
2. Cleaning missing values
3. Removing duplicate records
4. Processing transaction dates
5. Creating date-based features
6. Calculating transaction amount
7. Saving the cleaned dataset

### Feature Engineering

The following features are created:

- Year
- Month
- Day
- DayOfWeek

The transaction value is calculated as:

```text
TotalAmount = Quantity × Price
```

The processed dataset is stored in:

```text
Data/cleaned_retail_data.csv
```

---

## 📈 Analytics

The Analytics section provides visual insights into retail sales performance.

It includes:

- Monthly sales trends
- Country-wise sales performance
- Top-selling products
- Revenue analysis
- Sales insights
- Interactive charts
- Data filtering

Charts are implemented using Recharts.

---

## 🔌 Backend

The backend is developed using **Python Flask**.

The backend is responsible for:

- Loading the trained machine learning model
- Receiving prediction requests
- Processing user inputs
- Generating predictions
- Returning prediction results to the frontend
- Providing dashboard data

### Backend Structure

```text
Backend/
├── app.py
├── train_model.py
└── sales_forecast_model.pkl
```

### API Endpoints

#### Home

```text
GET /
```

Used to check whether the Flask API is running.

#### Prediction

```text
POST /predict
```

Example request:

```json
{
  "Quantity": 10,
  "Price": 5.5,
  "Year": 2011,
  "Month": 6,
  "Day": 15
}
```

#### Dashboard

```text
GET /dashboard
```

Provides dashboard data such as KPIs, monthly sales, country-wise sales, and top products.

---

## 🖥️ Frontend

The frontend is developed using **React.js and Vite**.

### Main Sections

- Dashboard
- Analytics
- Prediction
- Forecast
- Dataset
- Recent Orders
- Reports
- Notifications
- Settings
- About

The frontend communicates with the Flask backend using Axios.

### Prediction Flow

```text
User Input
    ↓
React Prediction Page
    ↓
Axios API Request
    ↓
Flask /predict API
    ↓
Machine Learning Model
    ↓
Prediction Result
    ↓
React Dashboard
    ↓
Display Prediction
```

---

## 📊 Dashboard

The Dashboard provides an overview of retail sales performance.

It displays:

- Total Sales
- Total Orders
- Total Countries
- Average Order Value
- Sales charts
- Revenue information
- Recent orders
- Business insights

---

## 📦 Recent Orders

The Recent Orders section displays transaction information in a structured table.

It includes:

- Invoice
- Customer
- Country
- Product
- Quantity
- Amount
- Status

The table supports:

- Search
- Sorting
- Pagination

---

## 📤 Export Functionality

### Excel Export

The dashboard supports Excel export using:

- XLSX
- FileSaver

### PDF Export

The dashboard supports PDF export using:

- jsPDF
- html2canvas

These features allow dashboard information to be exported for reporting and further analysis.

---

## 🔔 Notifications

The dashboard includes a notification system for displaying important dashboard activities.

Notifications can provide information related to:

- Predictions
- Report exports
- Dataset activities
- Dashboard updates
- User actions

Toast notifications are also used to provide feedback to users.

---

## 🔎 Search and Filtering

The dashboard provides search and filtering functionality to make the retail data easier to explore.

Users can search and filter information displayed in different dashboard sections and transaction tables.

---

## 🏗️ System Architecture

```text
             ONLINE RETAIL II DATASET
                      │
                      ▼
               DATA PROCESSING
                      │
                      ▼
              FEATURE ENGINEERING
                      │
                      ▼
          EXPLORATORY DATA ANALYSIS
                      │
                      ▼
               MODEL TRAINING
                      │
                      ▼
              LINEAR REGRESSION
                      │
                      ▼
               SAVED ML MODEL
                      │
                      ▼
                FLASK BACKEND
                      │
                      ▼
                  REST API
                      │
                      ▼
                REACT FRONTEND
                      │
          ┌───────────┼───────────┐
          │           │           │
          ▼           ▼           ▼
      ANALYTICS   PREDICTION   REPORTS
          │           │           │
          └───────────┼───────────┘
                      │
                      ▼
               BUSINESS INSIGHTS
```

---

## 🔄 Complete Project Workflow

```text
Online Retail II Dataset
          ↓
Data Cleaning
          ↓
Data Transformation
          ↓
Feature Engineering
          ↓
Exploratory Data Analysis
          ↓
Model Training
          ↓
Model Evaluation
          ↓
Saved Machine Learning Model
          ↓
Flask Backend
          ↓
REST API
          ↓
React Frontend
          ↓
Interactive Dashboard
          ↓
Sales Analytics & Prediction
```

---

## 📂 Project Structure

```text
Zidio_ForesightProject1/
│
├── Backend/
│   ├── app.py
│   ├── train_model.py
│   └── sales_forecast_model.pkl
│
├── Data/
│   ├── online_retail_II 3.xlsx
│   └── cleaned_retail_data.csv
│
├── Frontend/
│   └── react-dashboard/
│       ├── public/
│       ├── src/
│       │   ├── api/
│       │   ├── components/
│       │   ├── pages/
│       │   ├── styles/
│       │   ├── App.jsx
│       │   └── main.jsx
│       ├── index.html
│       ├── package.json
│       ├── package-lock.json
│       └── vite.config.js
│
├── Models/
├── README.md
└── requirements.txt
```

---

## 🛠️ Technologies Used

### Data Science & Machine Learning

- Python
- Pandas
- NumPy
- Scikit-learn
- Linear Regression
- Joblib

### Backend

- Flask
- Flask-CORS
- REST API

### Frontend

- React.js
- Vite
- React Router
- Axios
- Recharts
- React Icons
- Framer Motion
- React Toastify
- CSS3

### Export

- XLSX
- FileSaver
- jsPDF
- html2canvas

### Development Tools

- Visual Studio Code
- Git
- GitHub
- npm

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/bhanusri633/Zidio_ForesightProject1.git
cd Zidio_ForesightProject1
```

### 2. Backend Setup

Install the required Python dependencies:

```bash
pip install -r requirements.txt
```

Run the Flask backend:

```bash
python Backend/app.py
```

### 3. Frontend Setup

Open another terminal:

```bash
cd Frontend/react-dashboard
npm install
npm run dev
```

Open the local URL provided by Vite in your browser.

---

## 🔗 Frontend–Backend Integration

The React frontend communicates with the Flask backend using Axios.

The prediction workflow is:

```text
React Prediction Page
        ↓
Axios Request
        ↓
Flask /predict API
        ↓
Machine Learning Model
        ↓
Prediction Result
        ↓
Axios Response
        ↓
React Dashboard
        ↓
Display Result
```

This integration allows users to interact with the machine learning model directly through the React dashboard.

---

## 👩‍💻 My Contribution

My primary contribution to FORESIGHT was **Frontend and Dashboard Development**.

I worked on:

- React dashboard development
- Dashboard layouts
- KPI cards
- Analytics interface
- Prediction interface
- Flask API integration
- Charts and visualizations
- Search and filtering
- Sorting and pagination
- Excel and PDF export
- Notifications
- Responsive UI
- Loading states
- Toast notifications
- Frontend testing and debugging
- Git and GitHub workflow

---

## 📊 Project Outcome

FORESIGHT combines:

```text
Data Processing
      +
Exploratory Data Analysis
      +
Machine Learning
      +
Flask REST API
      +
React Dashboard
      +
Data Visualization
      +
Business Analytics
```

The final system provides an interactive platform for analyzing retail sales data and generating machine learning-based transaction-level sales predictions.

---

## 🔮 Future Enhancements

Possible future enhancements include:

- Advanced time-series forecasting
- Product-level demand forecasting
- Inventory forecasting
- Customer behavior analysis
- Real-time sales monitoring
- Cloud deployment
- Database integration
- User authentication
- Advanced dashboard filtering

---

## 🎓 Internship Information

**Organization:** Zidio Development

**Project:** FORESIGHT – AI Sales Forecasting & Retail Analytics Dashboard

**Domain:** Data Science / Data Analytics / Machine Learning

**Role:** Frontend Developer & Data Science Project Contributor

---

## 📜 License

This project was developed for educational and internship purposes as part of the Zidio Development internship program.