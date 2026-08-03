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

  const [selectedPeriod, setSelectedPeriod] = useState("Last 30 Days");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [selectedProduct, setSelectedProduct] = useState("All Products");
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const response = await getDashboardData();
      setDashboardData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!dashboardData) {
      return <Loading />;
  }

  const filteredProducts = dashboardData.products.filter((item) => {
    const productMatch =
      selectedProduct === "All Products"
        ? true
        : item.Description.toLowerCase().includes(
            selectedProduct.toLowerCase()
          );

    const searchMatch =
      search === ""
        ? true
        : item.Description.toLowerCase().includes(search.toLowerCase());

    return productMatch && searchMatch;
  });

  const filteredCountry = dashboardData.country.filter((item) =>
    selectedCountry === "All Countries"
      ? true
      : item.Country === selectedCountry
  );

  const filteredMonthly = dashboardData.monthly;
  const dynamicKPIs = {
    sales: filteredProducts.reduce(
      (sum, item) => sum + (item.Quantity * item.UnitPrice),
      0
    ),

    orders: filteredProducts.length,

    countries: filteredCountry.length,

    average:
      filteredProducts.length > 0
        ? filteredProducts.reduce(
            (sum, item) => sum + (item.Quantity * item.UnitPrice),
            0
          ) / filteredProducts.length
        : 0,
  };
  return (
  <Layout search={search} setSearch={setSearch}>

    <ExportPDF />

    <ExportExcel
      data={filteredProducts}
    />

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