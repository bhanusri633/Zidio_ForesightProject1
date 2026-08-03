import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Charts from "../components/Charts";
import { getDashboardData } from "../api/api";
import AnalyticsCards from "../components/AnalyticsCards";
import AnalyticsFilters from "../components/AnalyticsFilters";
import AnalyticsInsights from "../components/AnalyticsInsights";
import Footer from "../components/Footer";

function Analytics() {

  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await getDashboardData();
      setDashboardData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!dashboardData) {
    return (
      <Layout>
        <h1 className="analytics-title">
          📊 Analytics Dashboard
        </h1>
      </Layout>
    );
  }

  return (
    <Layout>

      <h1 className="analytics-title">
        📊 Analytics Dashboard
      </h1>

      <AnalyticsCards />

      <AnalyticsFilters />

      <Charts
        monthly={dashboardData.monthly}
        country={dashboardData.country}
        products={dashboardData.products}
      />

      <AnalyticsInsights />

      <Footer />

    </Layout>
  );
}

export default Analytics;