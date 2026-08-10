import Sidebar from "./sidebar";
import Header from "./Header";

import "../styles/dashboard.css";

function Layout({ children, search, setSearch }) {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <Header
          search={search}
          setSearch={setSearch}
        />

        {children}

      </div>

    </div>
  );
}

export default Layout;
