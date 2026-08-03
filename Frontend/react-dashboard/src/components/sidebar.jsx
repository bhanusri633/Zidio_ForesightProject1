import "../styles/sidebar.css";

import {
  FaChartPie,
  FaChartLine,
  FaBrain,
  FaDatabase,
  FaClipboardList,
  FaBell,
  FaHistory,
  FaChartArea,
  FaFileAlt,
  FaInfoCircle,
  FaCog
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="logo">
        <h2>📊 FORESIGHT</h2>
        <p>Retail Analytics</p>
      </div>

      <nav>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaChartPie /> Dashboard
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaChartLine /> Analytics
        </NavLink>

        <NavLink
          to="/prediction"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaBrain /> Prediction
        </NavLink>

        <NavLink
          to="/dataset"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaDatabase /> Dataset
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaClipboardList /> Recent Orders
        </NavLink>

        <NavLink
          to="/forecast"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaChartArea /> Forecast
        </NavLink>

        <NavLink
          to="/timeline"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaHistory /> Activity Timeline
        </NavLink>

        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaBell /> Notifications
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaFileAlt /> Reports
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaInfoCircle /> About
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaCog /> Settings
        </NavLink>

      </nav>

    </div>
  );
}

export default Sidebar;