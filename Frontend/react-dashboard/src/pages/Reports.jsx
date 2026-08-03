import Layout from "../components/Layout";
import Footer from "../components/Footer";
import ExportPDF from "../components/ExportPDF";
import ExportExcel from "../components/ExportExcel";
import "../styles/pages.css";

function Reports() {
  return (
    <Layout>

      <h1 className="page-title">
        📄 Reports
      </h1>

      <div className="page-card">

        <h3>Generate Reports</h3>

        <p>
          Download sales reports in different formats for
          business analysis and sharing.
        </p>

        <br />

        <div className="report-buttons">

          <ExportPDF />

          <ExportExcel data={[]} />

          <button className="btn">
            📑 Export CSV
          </button>

        </div>

        <br />

        <h3>Available Reports</h3>

        <ul>
          <li>📊 Monthly Sales Report</li>
          <li>📈 Sales Forecast Report</li>
          <li>🌍 Country Performance Report</li>
          <li>📦 Product Performance Report</li>
          <li>🤖 AI Recommendation Report</li>
        </ul>

      </div>

      <Footer />

    </Layout>
  );
}

export default Reports;