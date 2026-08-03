import "../styles/header.css";
import { FaBell, FaSearch } from "react-icons/fa";
import { useState } from "react";

function Header({ search, setSearch }) {

  const [notificationCount, setNotificationCount] = useState(3);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="header">

      <div className="header-left">
        <h1>Sales Forecasting Dashboard</h1>
        <p>AI Powered Retail Analytics</p>
      </div>

      <div className="header-right">

        <div className="search-box">
          <FaSearch />

          <input
            type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="notification-wrapper">

          <FaBell className="bell" />

          <span
            className="notification-badge"
            onClick={() => setNotificationCount(0)}
          >
            {notificationCount > 0 ? notificationCount : ""}
          </span>

        </div>

        <div className="profile-menu">

          <img
            src="https://i.pravatar.cc/45"
            alt="profile"
            className="profile"
            onClick={() => setShowMenu(!showMenu)}
          />

          {showMenu && (

            <div className="dropdown-menu">

              <div className="dropdown-item">
                👤 My Profile
              </div>

              <div className="dropdown-item">
                ⚙ Settings
              </div>

              <div className="dropdown-item">
                🚪 Logout
              </div>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Header;