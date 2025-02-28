import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md p-5 flex flex-col">
      <h2 className="text-xl font-bold mb-6">Soar Task</h2>
      <nav className="flex flex-col space-y-4">
        <NavLink to="/" className="text-gray-700 hover:text-blue-500">
          Dashboard
        </NavLink>
        <NavLink to="/settings" className="text-gray-700 hover:text-blue-500">
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
