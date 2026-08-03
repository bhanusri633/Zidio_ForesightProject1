import "../styles/cards.css";

import {
  FaMoneyBillWave,
  FaShoppingCart,
  FaGlobe,
  FaBoxOpen,
} from "react-icons/fa";

import { FaArrowTrendUp } from "react-icons/fa6";

function KPICards({ kpis }) {
  return (
    <div className="cards">

      <div className="card">

        <div className="card-top">

          <div className="icon-box">
            <FaMoneyBillWave className="icon" />
          </div>

          <span className="growth">
            <FaArrowTrendUp />
            18%
          </span>

        </div>

        <h4>Total Sales</h4>

        <h2>
          ₹{(kpis.sales / 1000000).toFixed(2)}M
        </h2>

        <p>Compared to last month</p>

      </div>

      <div className="card">

        <div className="card-top">

          <div className="icon-box">
            <FaShoppingCart className="icon" />
          </div>

          <span className="growth">
            <FaArrowTrendUp />
            12%
          </span>

        </div>

        <h4>Orders</h4>

        <h2>{kpis.orders.toLocaleString()}</h2>

        <p>Compared to last month</p>

      </div>

      <div className="card">

        <div className="card-top">

          <div className="icon-box">
            <FaGlobe className="icon" />
          </div>

          <span className="growth">
            <FaArrowTrendUp />
            8%
          </span>

        </div>

        <h4>Countries</h4>

        <h2>{kpis.countries}</h2>

        <p>Global Reach</p>

      </div>

      <div className="card">

        <div className="card-top">

          <div className="icon-box">
            <FaBoxOpen className="icon" />
          </div>

          <span className="growth">
            <FaArrowTrendUp />
            10%
          </span>

        </div>

        <h4>Average Order</h4>

        <h2>₹{kpis.average.toFixed(2)}</h2>

        <p>Per Transaction</p>

      </div>

    </div>
  );
}

export default KPICards;