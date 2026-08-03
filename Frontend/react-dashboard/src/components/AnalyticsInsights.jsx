import "../styles/analyticsInsights.css";

function AnalyticsInsights() {
  return (
    <div className="analytics-insights">

      <h2>🤖 AI Business Insights</h2>

      <div className="insights-grid">

        <div className="insight-card">
          <h4>📈 Revenue Growth</h4>
          <p>Revenue increased by <strong>18%</strong> compared to last month.</p>
        </div>

        <div className="insight-card">
          <h4>🌍 Best Country</h4>
          <p>United Kingdom generated the highest sales revenue.</p>
        </div>

        <div className="insight-card">
          <h4>🏆 Top Product</h4>
          <p>White Hanging Heart is the best-selling product.</p>
        </div>

        <div className="insight-card">
          <h4>💡 AI Recommendation</h4>
          <p>
            Increase inventory for top-selling products before the holiday
            season to maximize revenue.
          </p>
        </div>

      </div>

    </div>
  );
}

export default AnalyticsInsights;