import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Prediction from "./pages/Prediction";
import Dataset from "./pages/Dataset";
import About from "./pages/About";

import RecentOrders from "./pages/RecentOrders";
import Forecast from "./pages/Forecast";
import ActivityTimeline from "./pages/ActivityTimeline";
import Notifications from "./pages/Notifications";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Dashboard />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/analytics" element={<Analytics />} />

      <Route path="/prediction" element={<Prediction />} />

      <Route path="/dataset" element={<Dataset />} />

      <Route path="/orders" element={<RecentOrders />} />

      <Route path="/forecast" element={<Forecast />} />

      <Route path="/timeline" element={<ActivityTimeline />} />

      <Route path="/notifications" element={<Notifications />} />

      <Route path="/reports" element={<Reports />} />

      <Route path="/about" element={<About />} />

      <Route path="/settings" element={<Settings />} />

    </Routes>
  );
}

export default App;