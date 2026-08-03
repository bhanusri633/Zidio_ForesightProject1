import Layout from "../components/Layout";
import Footer from "../components/Footer";
import "../styles/pages.css";

function About() {
  return (
    <Layout>

      <h1 className="page-title">
        ℹ About Project
      </h1>

      <div className="about-grid">

        <div className="page-card">
          <h3>🤖 Project Description</h3>

          <p>
            AI Powered Sales Forecasting Dashboard is a full-stack web
            application that predicts future retail sales using Machine
            Learning and provides interactive business insights through
            charts and analytics.
          </p>
        </div>

        <div className="page-card">
          <h3>✨ Key Features</h3>

          <ul>
            <li>✔ Sales Prediction</li>
            <li>✔ Interactive Dashboard</li>
            <li>✔ Forecast Analytics</li>
            <li>✔ Dataset Analysis</li>
            <li>✔ AI Recommendations</li>
            <li>✔ Export PDF & Excel</li>
          </ul>
        </div>

        <div className="page-card">
          <h3>💻 Technologies Used</h3>

          <ul>
            <li>React.js</li>
            <li>Flask API</li>
            <li>Python</li>
            <li>Scikit-Learn</li>
            <li>Pandas</li>
            <li>NumPy</li>
            <li>Recharts</li>
            <li>HTML • CSS • JavaScript</li>
          </ul>
        </div>

        <div className="page-card">
          <h3>📊 Dataset & Model</h3>

          <p><b>Dataset:</b> Online Retail II</p>

          <p><b>Records:</b> 44,876+</p>

          <p><b>Countries:</b> 41</p>

          <p><b>ML Model:</b> Linear Regression</p>
        </div>

      </div>

      <Footer />

    </Layout>
  );
}

export default About;