import Layout from "../components/Layout";
import Footer from "../components/Footer";
import "../styles/pages.css";

function Notifications() {
  return (
    <Layout>

      <h1 className="page-title">
        🔔 Notifications
      </h1>

      <div className="page-card">

        <div className="notification-item">
          <h4>📈 Sales Increased</h4>
          <p>Revenue increased by <b>18%</b> compared to last month.</p>
        </div>

        <div className="notification-item">
          <h4>⚠ Low Stock Alert</h4>
          <p>
            White Hanging Heart inventory is running low.
            Restock is recommended.
          </p>
        </div>

        <div className="notification-item">
          <h4>🤖 AI Recommendation</h4>
          <p>
            Increase inventory before the holiday season
            to maximize expected revenue.
          </p>
        </div>

        <div className="notification-item">
          <h4>📄 Report Generated</h4>
          <p>
            Monthly Sales Report has been generated and
            exported successfully.
          </p>
        </div>

        <div className="notification-item">
          <h4>📊 Dataset Updated</h4>
          <p>
            Online Retail II dataset has been synchronized
            with the latest records.
          </p>
        </div>

      </div>

      <Footer />

    </Layout>
  );
}

export default Notifications;