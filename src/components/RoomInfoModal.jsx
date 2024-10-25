import { useState } from "react";
import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/16/solid";
import RoomDetails from "./RoomDetails";

function RoomInfoModal({
  open,
  setOpen,
  name,
  peopleQty,
  peopleMax,
  isPrivate,
  description,
  dailyTasks,
}) {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-[38px] bg-white text-left info-modal-shadow transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="p-6">
              <div>
                <h3 className="font-semibold text-primary text-xl md:text-2xl lg:text-3xl text-center leading-tight mb-4">
                  {name}
                </h3>
                <p className="md:text-lg text-base">
                  <span className="text-primary font-semibold  mr-2">
                    Description:
                  </span>
                  {description}
                </p>
              </div>
              <div>
                <h4 className="mt-5 mb-3 text-center text-lg">Daily tasks</h4>
                <ul className="space-y-2 mb-9">
                  {dailyTasks.map((task, index) => (
                    <li key={index} className="flex items-center">
                      <CheckBadgeIcon className="h-6 w-6 text-primary mr-1" />
                      {task}
                    </li>
                  ))}
                </ul>
                <RoomDetails
                  isPrivate={isPrivate}
                  peopleQty={peopleQty}
                  peopleMax={peopleMax}
                />
                <div className="flex justify-center pt-4">
                  <Button className="bg-primary font-bold text-white rounded-xl py-3 px-6 md:text-lg text-base">
                    Join
                  </Button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default RoomInfoModal;
