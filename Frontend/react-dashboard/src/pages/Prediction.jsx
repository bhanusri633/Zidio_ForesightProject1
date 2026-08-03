import Layout from "../components/Layout";
import PredictionCard from "../components/PredictionCard";
import Footer from "../components/Footer";

function Prediction() {
  return (
    <Layout>

      <h1 className="page-title">
        🤖 Sales Prediction
      </h1>

      <PredictionCard />

      <Footer />

    </Layout>
  );
}

export default Prediction;