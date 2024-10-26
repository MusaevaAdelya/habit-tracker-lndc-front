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

function StreakModal({ open, setOpen }) {
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
                  Congratulations
                </span>
              </div>
              <img
                src="/images/fire.gif"
                alt="post image"
                className="md:max-w-[300px] max-w-[200px] mx-auto"
              />

              <div className="flex flex-col items-center justify-center mb-10 text-2xl font-semibold md:text-4xl">
                <span className="text-inherit">10</span>
                <span className="text-inherit">days streak!</span>
              </div>

              <div className="flex items-center justify-center">
                <Button
                  className={`font-bold rounded-xl py-3 px-6 md:text-xl text-lg info-modal-shadow bg-primary text-white`}
                >
                  Keep going
                </Button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default StreakModal;
