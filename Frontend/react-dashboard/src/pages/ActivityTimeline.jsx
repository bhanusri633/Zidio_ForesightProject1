import Layout from "../components/Layout";
import Footer from "../components/Footer";
import "../styles/pages.css";

function ActivityTimeline() {
  return (
    <Layout>

      <h1 className="page-title">
        🕒 Activity Timeline
      </h1>

      <div className="page-card">

        <div className="timeline-item">
          <strong>09:15 AM</strong>
          <p>Dashboard opened successfully.</p>
        </div>

        <div className="timeline-item">
          <strong>09:20 AM</strong>
          <p>Sales prediction generated using Machine Learning.</p>
        </div>

        <div className="timeline-item">
          <strong>09:28 AM</strong>
          <p>Monthly sales report exported successfully.</p>
        </div>

        <div className="timeline-item">
          <strong>09:35 AM</strong>
          <p>Retail dataset synchronized with the latest records.</p>
        </div>

        <div className="timeline-item">
          <strong>09:45 AM</strong>
          <p>Forecast analysis completed successfully.</p>
        </div>

      </div>

      <Footer />

    </Layout>
  );
}

export default ActivityTimeline;