import { useState } from "react";
import axios from "axios";
import "../styles/prediction.css";
import { FaRobot } from "react-icons/fa";
import { toast } from "react-toastify";

function PredictionCard() {

  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const resetPrediction = () => {
    setQuantity("");
    setPrice("");
    setYear("");
    setMonth("");
    setDay("");
    setPrediction(null);
  };

  const predictSales = async () => {

    if (
      Number(month) < 1 ||
      Number(month) > 12 ||
      Number(day) < 1 ||
      Number(day) > 31
    ) {
      toast.error("Enter a valid date.");
      return;
    }

    if (!quantity || !price || !year || !month || !day) {
      toast.warning("Please fill all the fields.");
      return;
    }
    
    if (month < 1 || month > 12) {
      toast.warning("Month should be between 1 and 12.");
      return;
    }

    if (day < 1 || day > 31) {
      toast.warning("Day should be between 1 and 31.");
      return;
    }

    setLoading(true);

    try {

      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        {
          Quantity: Number(quantity),
          Price: Number(price),
          Year: Number(year),
          Month: Number(month),
          Day: Number(day),
        }
      );

      setPrediction(response.data["Predicted Sales"]);
      toast.success("Prediction generated successfully!");

    } catch (error) {

      console.error(error);
      toast.error("Prediction Failed!");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="prediction-card">

      <h3>
        <FaRobot /> Sales Prediction
      </h3>

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <input
        type="number"
        placeholder="Month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      />

      <input
        type="number"
        placeholder="Day"
        value={day}
        onChange={(e) => setDay(e.target.value)}
      />

      <button
        onClick={predictSales}
        disabled={loading}
      >
        {loading ? "Predicting..." : "Predict Sales"}
      </button>

      <button
        className="reset-btn"
        onClick={resetPrediction}
      >
        Reset
      </button>

      <div className="prediction-result">

        <span>Predicted Revenue</span>

        <h2>
          {prediction !== null
            ? `₹${prediction.toFixed(2)}`
            : "₹0.00"}
        </h2>

        <p>
          {prediction !== null
            ? "Prediction Complete ✅"
            : "Enter values and click Predict"}
        </p>

      </div>

    </div>

  );

}

export default PredictionCard;