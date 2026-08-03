from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import pandas as pd

# Create Flask app
app = Flask(__name__)
CORS(app)

# Load trained model
model = joblib.load("sales_forecast_model.pkl")

# Load cleaned dataset
df = pd.read_csv("../Data/cleaned_retail_data.csv")

# ---------------- Home ----------------

@app.route("/")
def home():
    return "Sales Forecast API is Running!"

# ---------------- Prediction API ----------------

@app.route("/predict", methods=["POST"])
def predict():

    data = request.get_json()

    quantity = data["Quantity"]
    price = data["Price"]
    year = data["Year"]
    month = data["Month"]
    day = data["Day"]

    features = np.array([[quantity, price, year, month, day]])

    prediction = model.predict(features)

    return jsonify({
        "Predicted Sales": float(prediction[0])
    })

# ---------------- Dashboard API ----------------

@app.route("/dashboard", methods=["GET"])
def dashboard():

    total_sales = round(df["TotalAmount"].sum(), 2)

    total_orders = int(df["Invoice"].nunique())

    total_countries = int(df["Country"].nunique())

    average_order = round(total_sales / total_orders, 2)

    monthly_sales = (
        df.groupby("Month")["TotalAmount"]
        .sum()
        .reset_index()
    )

    country_sales = (
        df.groupby("Country")["TotalAmount"]
        .sum()
        .sort_values(ascending=False)
        .head(5)
        .reset_index()
    )

    top_products = (
        df.groupby("Description")["Quantity"]
        .sum()
        .sort_values(ascending=False)
        .head(5)
        .reset_index()
    )

    return jsonify({

        "kpis": {
            "sales": total_sales,
            "orders": total_orders,
            "countries": total_countries,
            "average": average_order
        },

        "monthly": monthly_sales.to_dict(orient="records"),

        "country": country_sales.to_dict(orient="records"),

        "products": top_products.to_dict(orient="records")

    })

# ---------------- Run ----------------

if __name__ == "__main__":
    app.run(debug=True)