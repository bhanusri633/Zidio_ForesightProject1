import "../styles/forecastSummary.css";

function ForecastSummary() {
  return (
    <div className="forecast-summary">

      <div className="summary-card">
        <h4>📈 Forecast Accuracy</h4>
        <h2>96%</h2>
        <p>Excellent prediction performance</p>
      </div>

      <div className="summary-card">
        <h4>💰 Expected Revenue</h4>
        <h2>₹17.25M</h2>
        <p>Next 30 Days Forecast</p>
      </div>

      <div className="summary-card">
        <h4>📦 Expected Orders</h4>
        <h2>47,200</h2>
        <p>Predicted customer orders</p>
      </div>

      <div className="summary-card">
        <h4>📊 Growth Forecast</h4>
        <h2 style={{ color: "#22C55E" }}>+8.4%</h2>
        <p>Compared to previous month</p>
      </div>

    </div>
  );
}

export default ForecastSummary;