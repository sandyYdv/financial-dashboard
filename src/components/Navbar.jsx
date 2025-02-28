import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import ProfileImage from "../assets/image-1.webp";

const preloadImage = (src) => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = src;
  document.head.appendChild(link);
};

const Navbar = () => {
  useEffect(() => {
    preloadImage(ProfileImage); // Adjust the path accordingly
  }, []);

  const location = useLocation();
  console.log(location);
  return (
    <div className=" bg-white shadow-md flex items-center px-6 justify-between">
      <h1 className="text-lg font-semibold">
        {location.pathname === "/" ? "Dashboard" : location.pathname.slice(1)}
      </h1>
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Search for something"
          className="border p-2 rounded-lg m-3"
        />
        <div className="m-3 p-2">
          <IoSettingsOutline size={40} />
        </div>
        <div className="m-3 p-2">
          <IoIosNotificationsOutline size={40} />
        </div>

        <img
          src={ProfileImage}
          alt="Profile Image"
          className="rounded-full w-16"
        />
      </div>
    </div>
  );
};

export default Navbar;
