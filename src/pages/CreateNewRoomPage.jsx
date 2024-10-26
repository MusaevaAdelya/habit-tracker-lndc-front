import {
    ChevronLeftIcon,
    PlusCircleIcon,
    MinusCircleIcon,
  } from "@heroicons/react/16/solid";
  import { useNavigate } from "react-router-dom";
  import { PencilIcon } from "@heroicons/react/24/outline";
  import Switcher from "../components/Switcher";
  import React, { useState } from "react";
  
  function CreateNewRoomPage() {
    const navigate = useNavigate();
  
    // State for the form fields
    const [formData, setFormData] = useState({
      roomName: "",
      description: "",
      period: 1,
      closed: false,
      controlByAdmin: false,
      password: "",
      roomImage: "/images/create-room-image.png",
    });
  
    // Handle input changes
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    };
  
    // Handle period increment and decrement
    const handlePeriodChange = (amount) => {
      setFormData((prev) => ({
        ...prev,
        period: Math.max(1, prev.period + amount), // Ensure period is at least 1
      }));
    };
  
    // Handle image upload
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setFormData({ ...formData, roomImage: imageUrl });
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
          <h1 className="flex-grow text-2xl font-semibold text-center md:text-3xl">
            Create new room
          </h1>
        </div>
  
        <form onSubmit={handleSubmit} className="max-w-full mx-auto lg:max-w-[800px]">
          <div className="relative max-w-[250px] mx-auto md:max-w-[300px] rounded-3xl">
            <img
              src={formData.roomImage}
              alt="room image"
              className="object-cover w-full h-full rounded-3xl"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute bottom-0 right-0 w-full h-full opacity-0 cursor-pointer"
            />
            <button
              type="button"
              className="absolute bottom-0 right-0 p-4 transform translate-x-4 translate-y-4 bg-white rounded-full comment-shadow"
            >
              <PencilIcon className="w-8 h-8" stroke="#9B5DE5" />
            </button>
          </div>
  
          <div className="grid grid-cols-1 my-10 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="roomName"
                className="block text-lg font-medium leading-6 text-gray-900"
              >
                Room name
              </label>
              <div className="mt-2">
                <input
                  id="roomName"
                  name="roomName"
                  type="text"
                  value={formData.roomName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
  
            <div className="col-span-full">
              <label
                htmlFor="description"
                className="block text-lg font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  value={formData.description}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
  
            <div className="flex items-center justify-between text-lg col-span-full">
              <span className="font-medium">Period:</span>
              <div className="flex items-center gap-4">
                <MinusCircleIcon
                  className="w-12 cursor-pointer"
                  fill="#9B5DE5"
                  onClick={() => handlePeriodChange(-1)}
                />
                <span>{formData.period}</span>
                <PlusCircleIcon
                  className="w-12 cursor-pointer"
                  fill="#9B5DE5"
                  onClick={() => handlePeriodChange(1)}
                />
              </div>
            </div>
  
            <div className="flex items-center justify-between text-lg col-span-full">
              <span className="font-medium">Closed:</span>
              <Switcher
                checked={formData.closed}
                onChange={() => setFormData((prev) => ({ ...prev, closed: !prev.closed }))}
              />
            </div>
            <div className="flex items-center justify-between text-lg col-span-full">
              <span className="font-medium">Control by admin:</span>
              <Switcher
                checked={formData.controlByAdmin}
                onChange={() => setFormData((prev) => ({ ...prev, controlByAdmin: !prev.controlByAdmin }))}
              />
            </div>
            <div className="sm:col-span-6">
              <label
                htmlFor="password"
                className="block text-lg font-medium leading-6 text-gray-900"
              >
                Room's password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="text"
                  value={formData.password}
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
  
  export default CreateNewRoomPage;
  