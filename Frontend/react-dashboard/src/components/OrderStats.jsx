import "../styles/orderStats.css";

function OrderStats() {
  return (
    <div className="order-stats">

      <div className="order-card">
        <h4>Total Orders</h4>
        <h2>44,876</h2>
      </div>

      <div className="order-card">
        <h4>Completed</h4>
        <h2>41,120</h2>
      </div>

      <div className="order-card">
        <h4>Pending</h4>
        <h2>3,756</h2>
      </div>

      <div className="order-card">
        <h4>Total Revenue</h4>
        <h2>₹16.29M</h2>
      </div>

    </div>
  );
}

export default OrderStats;