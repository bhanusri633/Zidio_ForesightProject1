from flask import Flask, request, jsonify
import joblib
import numpy as np

# Create Flask app
app = Flask(__name__)

# Load trained model
model = joblib.load("sales_forecast_model.pkl")

# Home page
@app.route("/")
def home():
    return "Sales Forecast API is Running!"

# Prediction API
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

# Run the server
if __name__ == "__main__":
    app.run(debug=True)