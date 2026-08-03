import Layout from "../components/Layout";
import Footer from "../components/Footer";
import "../styles/pages.css";

function Settings() {
  return (
    <Layout>

      <h1 className="page-title">
        ⚙ Settings
      </h1>

      <div className="page-card">

        <h3>Application Preferences</h3>

        <div className="setting-item">
          <span>🌙 Theme</span>
          <span className="setting-value">Dark Mode</span>
        </div>

        <div className="setting-item">
          <span>🔔 Notifications</span>
          <span className="setting-value">Enabled</span>
        </div>

        <div className="setting-item">
          <span>🌐 Language</span>
          <span className="setting-value">English</span>
        </div>

        <div className="setting-item">
          <span>💰 Currency</span>
          <span className="setting-value">₹ INR</span>
        </div>

        <div className="setting-item">
          <span>🔄 Auto Refresh</span>
          <span className="setting-value">Every 30 Seconds</span>
        </div>

        <div className="setting-item">
          <span>📊 Dashboard Version</span>
          <span className="setting-value">v1.0.0</span>
        </div>

      </div>

      <Footer />

    </Layout>
  );
}

export default Settings;