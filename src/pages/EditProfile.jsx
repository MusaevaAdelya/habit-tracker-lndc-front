import {
    ChevronLeftIcon,
    PlusCircleIcon,
    MinusCircleIcon,
  } from "@heroicons/react/16/solid";
  import { useNavigate } from "react-router-dom";
  import { PencilIcon } from "@heroicons/react/24/outline";
  import Switcher from "../components/Switcher";
  import React, { useState } from "react";
  
  function EditProfile() {
    const navigate = useNavigate();
  
    // State for the form fields
    const [formData, setFormData] = useState({
      username: "",
      email: "",
      telephone: "",
      profileImage: "/images/create-room-image.png",
    });
  
    // Handle input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    // Handle image upload
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setFormData({ ...formData, profileImage: imageUrl });
      }
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form data to be sent:", formData);
      // Add your API call or backend integration here
    };
  
    return (
      <main className="relative min-h-screen px-2 py-10 md:px-10">
        <div className="flex items-center mb-6">
          <ChevronLeftIcon
            className="h-10 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <h1 className="flex-grow mb-8 text-2xl font-semibold text-center md:text-3xl">
            Edit Profile
          </h1>
        </div>
  
        <form onSubmit={handleSubmit} className="max-w-full mx-auto lg:max-w-[800px]">
          <div className="relative max-w-[250px] mx-auto md:max-w-[300px] rounded-full">
            <img
              src={formData.profileImage}
              alt="profile image"
              className="object-cover w-full h-full rounded-full"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute bottom-0 right-0 w-full h-full opacity-0 cursor-pointer"
            />
            <button
              type="button"
              className="absolute bottom-0 right-0 p-4 transform -translate-x-3 -translate-y-3 bg-white rounded-full comment-shadow"
            >
              <PencilIcon className="w-8 h-8" stroke="#9B5DE5" />
            </button>
          </div>
  
          <div className="grid grid-cols-1 my-10 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="username"
                className="block text-lg font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
  
            <div className="sm:col-span-6">
              <label
                htmlFor="telephone"
                className="block text-lg font-medium leading-6 text-gray-900"
              >
                Telephone
              </label>
              <div className="mt-2">
                <input
                  id="telephone"
                  name="telephone"
                  type="text"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label
                htmlFor="email"
                className="block text-lg font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end mt-6 gap-x-6">
            <button
              type="button"
              className="text-lg font-semibold leading-6 text-gray-900"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 text-lg font-semibold text-white rounded-md shadow-sm px-7 bg-primary hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </main>
    );
  }
  
  export default EditProfile;
  