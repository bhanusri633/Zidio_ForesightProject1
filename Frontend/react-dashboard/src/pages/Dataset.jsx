import Layout from "../components/Layout";
import DatasetStats from "../components/DatasetStats";
import DatasetTable from "../components/DatasetTable";
import Footer from "../components/Footer";

function Dataset() {
  return (
    <Layout>
      <DatasetStats />
      <DatasetTable />

      <h2 style={{ color: "white", marginBottom: "20px" }}>
        📁 Dataset Information
      </h2>

      <div className="chart-card">

        <h3>Online Retail II Dataset</h3>

        <p><b>Total Records:</b> 44,876</p>
        <p><b>Total Countries:</b> 41</p>
        <p><b>Target Variable:</b> Sales</p>
        <p><b>Features:</b> Quantity, Price, Year, Month, Day</p>

        <br/>

        <h3>Data Cleaning</h3>

        <ul>
          <li>✔ Removed missing values</li>
          <li>✔ Removed duplicate records</li>
          <li>✔ Removed invalid values</li>
        </ul>

      </div>
      <Footer />
    </Layout>
  );
}

export default Dataset;