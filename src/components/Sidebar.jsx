import { NavLink } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { IoSettingsSharp, IoClose } from "react-icons/io5";

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <>
      {/* Sidebar (Mobile: Sliding Panel, Desktop: Fixed) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md p-5 flex flex-col transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        } md:relative md:translate-x-0 transition-transform duration-300 z-50`}>
        {/* Close Button (Only on Mobile) */}
        <button
          className="md:hidden text-2xl self-end mb-4"
          onClick={toggleSidebar}>
          <IoClose />
        </button>

        {/* Sidebar Title */}
        <h2 className="text-xl font-bold mb-6">Soar Task</h2>

        {/* Sidebar Navigation */}
        <nav className="flex flex-col space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md text-gray-700 hover:text-blue-500 transition ${
                isActive ? "font-bold text-blue-600 bg-gray-100" : ""
              }`
            }
            onClick={toggleSidebar}>
            <TiHome size={25} />
            Dashboard
          </NavLink>

          <NavLink
            to="/Settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md text-gray-700 hover:text-blue-500 transition ${
                isActive ? "font-bold text-blue-600 bg-gray-100" : ""
              }`
            }
            onClick={toggleSidebar}>
            <IoSettingsSharp size={25} />
            Settings
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
