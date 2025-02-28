import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Page Content (Dashboard, Settings, etc.) */}
        <div className="p-6 bg-gray-100 h-full overflow-auto">
          <Outlet /> {/* This is where the page content will be injected */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
