import Layout from "../components/Layout";
import ForecastSummary from "../components/ForecastSummary";
import ForecastChart from "../components/ForecastChart";
import ForecastInsights from "../components/ForecastInsights";
import Footer from "../components/Footer";

function Forecast() {
  return (
    <Layout>

      <h1 className="analytics-title">
        📈 Forecast Dashboard
      </h1>

      <ForecastSummary />

      <ForecastChart />

      <ForecastInsights />
       <Footer />
    </Layout>
  );
}

export default Forecast;