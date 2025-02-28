import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar (Hidden on mobile, visible on desktop) */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar with Sidebar Toggle */}
        <Navbar toggleSidebar={() => setSidebarOpen(true)} />

        {/* Page Content */}
        <div className="p-6 bg-gray-100 h-full overflow-auto">
          <Outlet />
        </div>
      </div>

      {/* Overlay (Closes Sidebar on Click - Mobile Only) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}></div>
      )}
    </div>
  );
};

export default Layout;
