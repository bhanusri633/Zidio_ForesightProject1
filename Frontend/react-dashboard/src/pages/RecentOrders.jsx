import Layout from "../components/Layout";
import OrderStats from "../components/OrderStats";
import RecentOrders from "../components/RecentOrders";
import Footer from "../components/Footer";

function RecentOrdersPage() {
  return (
    <Layout>

      <h1 className="analytics-title">
        📋 Recent Orders
      </h1>

      <OrderStats />

      <RecentOrders />
      <Footer />
    </Layout>
  );
}

export default RecentOrdersPage;