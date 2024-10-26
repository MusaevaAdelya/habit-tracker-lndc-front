import { useState } from "react";
import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import {
  CheckBadgeIcon,
  SparklesIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import RoomDetails from "./RoomDetails";

function CreatePostModal({ open, setOpen, postImage }) {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-[100]">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-[38px] bg-white text-left info-modal-shadow transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="p-8 ">
              <div className="flex mb-8">
                <XMarkIcon className="w-8" />
                <span className="flex-grow text-xl font-bold text-center md:text-3xl text-primary">
                  Create post
                </span>
              </div>
              <img
                src={postImage}
                alt="post image"
                className="shadow-lg rounded-xl"
              />
              <label
                htmlFor="description"
                className="block mt-8 text-lg font-semibold leading-6 text-primary"
              >
                Describe your progress:
              </label>
              <div className="mt-2 mb-10">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="flex items-center justify-center">
                <Button
                  className={`font-bold rounded-xl py-3 px-6 md:text-lg text-base info-modal-shadow bg-primary text-white`}
                >
                  Create
                </Button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default CreatePostModal;
