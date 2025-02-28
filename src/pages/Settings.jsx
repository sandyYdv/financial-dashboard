import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../context/AppContext";
import ProfileImage from "../assets/image-1.webp";

const Settings = () => {
  const { user } = useAppContext();
  const [activeTab, setActiveTab] = useState("Edit Profile");
  const tabs = ["Edit Profile", "Preferences", "Security"];
  const [profileData, setProfileData] = useState(user);
  const [errors, setErrors] = useState({});

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProfilePictureChange = (e) => {
    setProfileData((prevData) => ({
      ...prevData,
      profilePicture: URL.createObjectURL(e.target.files[0]),
    }));
  };
  const validateForm = () => {
    let newErrors = {};
    if (!profileData.name) newErrors.name = "Name is required.";
    if (!profileData.email) newErrors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(profileData.email))
      newErrors.email = "Enter a valid email.";
    if (!profileData.username) newErrors.username = "Username is required.";
    if (!profileData.password || profileData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (!profileData.city) newErrors.city = "City is required.";
    if (!profileData.country) newErrors.country = "Country is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSave = () => {
    if (validateForm()) {
      console.log("Profile Data:", profileData);
      alert("Changes Saved!");
    }
  };

  return (
    <div className="p-4 font-sans md:p-6">
      <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-6">
        {tabs.map((tab, index) => {
          return (
            <button
              key={index}
              className={`px-4 py-2 text-gray font-semibold  outline-none rounded-md focus:outline-none   ${
                activeTab === tab ? " text-black border-b-4" : " text-gray-400 "
              }`}
              onClick={() => handleTabChange(tab)}
              aria-selected={activeTab === tab}
              role="tab">
              {tab}
            </button>
          );
        })}
      </nav>

      {activeTab === "Edit Profile" && (
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-row  relative m-10">
            <div className="rounded-full overflow-hidden w-32 h-32 mb-4">
              <img
                src={profileData.profilePicture || ProfileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <label
              htmlFor="imageInput"
              className="absolute top-22 md:top-20 left-20 md:right-2 bg-gray-200 rounded-full p-2 cursor-pointer">
              <FontAwesomeIcon icon={faPencilAlt} className="text-gray-700" />
            </label>
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="hidden"
            />
          </div>
          <div className="space-y-4 w-full">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleInputChange}
                  id="name"
                  className="mt-1 p-2 border border-gray-400 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="username">
                  User Name
                </label>
                <input
                  type="text"
                  name="username"
                  value={profileData.username}
                  onChange={handleInputChange}
                  id="username"
                  className="mt-1 p-2 border border-gray-400 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
                />
                {errors.username && (
                  <p className="text-red-500 text-xs">{errors.username}</p>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  id="email"
                  className="mt-1 p-2 border border-gray-400 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={profileData.password}
                  onChange={handleInputChange}
                  id="password"
                  className="mt-1 p-2 border border-gray-400 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs">{errors.password}</p>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="dob">
                  Date of Birth
                </label>
                <input
                  type="text"
                  name="dob"
                  value={profileData.dob}
                  onChange={handleInputChange}
                  id="dob"
                  className="mt-1 p-2 border border-gray-400 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
                />
                {errors.dob && (
                  <p className="text-red-500 text-xs">{errors.dob}</p>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="presentAddress">
                  Present Address
                </label>
                <input
                  type="text"
                  name="presentAddress"
                  value={profileData.presentAddress}
                  onChange={handleInputChange}
                  id="presentAddress"
                  className="mt-1 p-2 border border-gray-400 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
                />
                {errors.presentAddress && (
                  <p className="text-red-500 text-xs">
                    {errors.presentAddress}
                  </p>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="permanentAddress">
                  Permanent Address
                </label>
                <input
                  type="text"
                  name="permanentAddress"
                  value={profileData.permanentAddress}
                  onChange={handleInputChange}
                  id="permanentAddress"
                  className="mt-1 p-2 border border-gray-400 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
                />
                {errors.permanentAddress && (
                  <p className="text-red-500 text-xs">
                    {errors.permanentAddress}
                  </p>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="city">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={profileData.city}
                  onChange={handleInputChange}
                  id="city"
                  className="mt-1 p-2 border border-gray-400 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
                />
                {errors.city && (
                  <p className="text-red-500 text-xs">{errors.city}</p>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="postalCode">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={profileData.postalCode}
                  onChange={handleInputChange}
                  id="postalCode"
                  className="mt-1 p-2 border border-gray-400 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
                />
                {errors.postalCode && (
                  <p className="text-red-500 text-xs">{errors.postalCode}</p>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="country">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={profileData.country}
                  onChange={handleInputChange}
                  id="country"
                  className="mt-1 p-2 border border-gray-400 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
                />
                {errors.country && (
                  <p className="text-red-500 text-xs">{errors.country}</p>
                )}
              </div>
            </form>

            <div className="flex justify-center w-full md:justify-end">
              <button
                className="bg-black hover:bg-gray-500 text-white font-bold py-3 px-12 rounded-lg focus:outline-none  "
                onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
