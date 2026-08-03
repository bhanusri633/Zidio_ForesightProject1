import "../styles/summary.css";

function DashboardSummary() {
  return (
    <div className="summary-card">

      <h2>📊 Business Summary</h2>

      <div className="summary-grid">

        <div className="summary-item">
          <h4>📈 Revenue Growth</h4>
          <p>+18% compared to last month</p>
        </div>

        <div className="summary-item">
          <h4>🌍 Top Country</h4>
          <p>United Kingdom</p>
        </div>

        <div className="summary-item">
          <h4>🏆 Best Product</h4>
          <p>White Hanging Heart</p>
        </div>

        <div className="summary-item">
          <h4>🤖 AI Recommendation</h4>
          <p>
            Increase inventory before the holiday season to maximize revenue.
          </p>
        </div>

      </div>

    </div>
  );
}

export default DashboardSummary;