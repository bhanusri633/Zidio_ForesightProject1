import Layout from "../components/Layout";
import Loading from "../components/Loading";
import KPICards from "../components/KPICards";
import Charts from "../components/Charts";
import Filters from "../components/Filters";
import Footer from "../components/Footer";

import { useEffect, useState } from "react";
import { getDashboardData } from "../api/api";
import ExportPDF from "../components/ExportPDF";
import DashboardSummary from "../components/DashboardSummary";
import ExportExcel from "../components/ExportExcel";
import "../styles/loading.css";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [error, setError] = useState("");

  const [selectedPeriod, setSelectedPeriod] = useState("Last 30 Days");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [selectedProduct, setSelectedProduct] = useState("All Products");
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      setError("");

      const response = await getDashboardData();

      console.log("Dashboard API response:", response.data);

      setDashboardData(response.data);
    } catch (error) {
      console.error("Dashboard API Error:", error);

      setError(
        error.response?.data?.error ||
        error.message ||
        "Unable to connect to backend."
      );
    }
  };

  // Show error instead of infinite loading
  if (error) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#0F172A",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "30px",
        }}
      >
        <h1>⚠️ Dashboard Loading Failed</h1>

        <p style={{ color: "#94A3B8", marginTop: "10px" }}>
          {error}
        </p>

        <button
          onClick={loadDashboard}
          style={{
            marginTop: "20px",
            padding: "12px 24px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: "#3B82F6",
            color: "white",
            fontSize: "16px",
          }}
        >
          🔄 Retry
        </button>
      </div>
    );
  }

  if (!dashboardData) {
    return <Loading />;
  }

  const products = dashboardData.products || [];
  const country = dashboardData.country || [];
  const monthly = dashboardData.monthly || [];

  const filteredProducts = products.filter((item) => {
    const description = item.Description || "";

    const productMatch =
      selectedProduct === "All Products"
        ? true
        : description
            .toLowerCase()
            .includes(selectedProduct.toLowerCase());

    const searchMatch =
      search === ""
        ? true
        : description
            .toLowerCase()
            .includes(search.toLowerCase());

    return productMatch && searchMatch;
  });

  const filteredCountry = country.filter((item) =>
    selectedCountry === "All Countries"
      ? true
      : item.Country === selectedCountry
  );

  const filteredMonthly = monthly;

  return (
    <Layout search={search} setSearch={setSearch}>

      <ExportPDF />

      <ExportExcel data={filteredProducts} />

      <Filters
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        search={search}
        setSearch={setSearch}
      />

      <KPICards kpis={dashboardData.kpis} />

      <DashboardSummary />

      {filteredProducts.length === 0 ? (
        <div
          style={{
            background: "#1E293B",
            padding: "30px",
            borderRadius: "12px",
            color: "white",
            textAlign: "center",
            marginTop: "20px",
            fontSize: "18px",
          }}
        >
          🔍 No matching products found.
        </div>
      ) : (
        <Charts
          monthly={filteredMonthly}
          country={filteredCountry}
          products={filteredProducts}
        />
      )}

      <Footer />

    </Layout>
  );
}

export default Dashboard;
