import "../styles/forecastInsights.css";

function ForecastInsights() {
  return (
    <div className="forecast-insights">

      <h3>🤖 AI Forecast Insights</h3>

      <div className="insight-card">
        <h4>Revenue Trend</h4>
        <p>Sales expected to increase by 8.4% over the next month.</p>
      </div>

      <div className="insight-card">
        <h4>Risk Level</h4>
        <p style={{color:"#22C55E"}}>Low</p>
      </div>

      <div className="insight-card">
        <h4>Recommendation</h4>
        <p>
          Increase inventory before the holiday season to meet expected demand.
        </p>
      </div>

    </div>
  );
}

export default ForecastInsights;