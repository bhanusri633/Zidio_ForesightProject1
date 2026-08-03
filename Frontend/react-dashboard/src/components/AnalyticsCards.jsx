import "../styles/analyticsCards.css";
import {
  FaMoneyBillWave,
  FaShoppingCart,
  FaGlobe,
  FaBoxOpen,
} from "react-icons/fa";

function AnalyticsCards() {
  return (
    <div className="analytics-cards">

      <div className="analytics-card">
        <FaMoneyBillWave className="analytics-icon" />
        <h4>Total Revenue</h4>
        <h2>₹16.29M</h2>
      </div>

      <div className="analytics-card">
        <FaShoppingCart className="analytics-icon" />
        <h4>Total Orders</h4>
        <h2>44,876</h2>
      </div>

      <div className="analytics-card">
        <FaGlobe className="analytics-icon" />
        <h4>Countries</h4>
        <h2>41</h2>
      </div>

      <div className="analytics-card">
        <FaBoxOpen className="analytics-icon" />
        <h4>Products</h4>
        <h2>5,000+</h2>
      </div>

    </div>
  );
}

export default AnalyticsCards;