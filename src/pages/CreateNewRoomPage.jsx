import {
  ChevronLeftIcon,
  PlusCircleIcon,
  MinusCircleIcon,
} from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";
import { PencilIcon } from "@heroicons/react/24/outline";
import Switcher from "../components/Switcher";

function CreateNewRoomPage() {
  const navigate = useNavigate();
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

      <form action="" className="max-w-full mx-auto  lg:max-w-[800px]">
        <div className="relative max-w-[250px] mx-auto md:max-w-[300px] rounded-3xl">
          <img
            src="/images/create-room-image.png"
            alt="room image"
            className="rounded-3xl"
          />
          <button className="absolute bottom-0 right-0 p-4 transform translate-x-4 translate-y-4 bg-white rounded-full comment-shadow">
            <PencilIcon className="w-8 h-8" stroke="#9B5DE5" />
          </button>
        </div>

        <div className="grid grid-cols-1 my-10 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-6">
            <label
              htmlFor="first-name"
              className="block text-lg font-medium leading-6 text-gray-900"
            >
              Room name
            </label>
            <div className="mt-2">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="about"
              className="block text-lg font-medium leading-6 text-gray-900"
            >
              Description
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Enter room description...
            </p>
          </div>

          <div className="flex items-center justify-between text-lg col-span-full">
            <span className="font-medium">Period:</span>
            <div className="flex items-center gap-4">
              <MinusCircleIcon className="w-12" fill="#9B5DE5" />
              <span>1</span>
              <PlusCircleIcon className="w-12" fill="#9B5DE5" />
            </div>
          </div>
          <div className="flex items-center justify-between text-lg col-span-full">
            <span className="font-medium">Closed:</span>
            <Switcher />
          </div>
          <div className="flex items-center justify-between text-lg col-span-full">
            <span className="font-medium">Control by admin:</span>
            <Switcher />
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="first-name"
              className="block text-lg font-medium leading-6 text-gray-900"
            >
              Room's password
            </label>
            <div className="mt-2">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end mt-6 gap-x-6">
          <button
            type="button"
            className="text-lg font-semibold leading-6 text-gray-900"
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
