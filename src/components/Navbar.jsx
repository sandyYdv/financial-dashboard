import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import ProfileImage from "../assets/image-1.webp";
import { IoSettingsOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const preloadImage = (src) => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = src;
  document.head.appendChild(link);
};

const Navbar = ({ toggleSidebar }) => {
  useEffect(() => {
    preloadImage(ProfileImage);
  }, []);

  const location = useLocation();

  return (
    <>
      <div className="bg-white flex  md:flex-row  px-6 justify-between">
        {/* Hamburger Menu for Mobile */}
        <div className="flex items-center md:hidden">
          <button onClick={toggleSidebar} className="text-2xl mr-3">
            <GiHamburgerMenu />
          </button>
          <h1 className=" flex items-center text-lg font-semibold">
            {location.pathname === "/"
              ? "Dashboard"
              : location.pathname.slice(1)}
          </h1>
        </div>
        <h1 className="hidden md:flex md:text-lg md:font-semibold md:m-6">
          {location.pathname === "/" ? "Dashboard" : location.pathname.slice(1)}
        </h1>

        {/* Navbar Content */}
        <div className="flex  ">
          {/* Search Bar (Hidden on Mobile) */}
          <div className="relative w-full max-w-xs mt-5">
            <FaSearch className="absolute left-3 top-6 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for something"
              className="hidden md:flex md:border md:border-gray-400 md:p-2 md:rounded-lg  md:pl-10"
            />
          </div>

          {/* Icons & Profile */}
          <div className="hidden md:flex md:m-3 md:p-2">
            <IoSettingsOutline size={40} />
          </div>
          <div className="hidden md:flex md:m-3 p-2">
            <IoIosNotificationsOutline size={40} />
          </div>

          <img src={ProfileImage} alt="Profile" className="rounded-full w-16" />
        </div>
      </div>

      {/* Search Bar (Visible Only on Mobile) */}
      <div className="flex justify-center items-center w-full md:hidden">
        <div className="relative w-full max-w-xs">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for something"
            className="border border-gray-400 p-2 rounded-lg m-3 w-full pl-10"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
