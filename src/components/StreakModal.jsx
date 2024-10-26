import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/16/solid";

function StreakModal({ open, setOpen }) {
  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-[100]">
      <DialogBackdrop
        className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            className="relative transform overflow-hidden rounded-[38px] bg-white text-left info-modal-shadow transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div className="p-8">
              <div className="flex mb-8">
                <XMarkIcon
                  className="w-8 cursor-pointer"
                  onClick={() => setOpen(false)}
                />
                <span className="flex-grow text-xl font-bold text-center md:text-3xl text-primary">
                  Congratulations
                </span>
              </div>
              <img
                src="/images/fire.gif"
                alt="fire streak"
                className="md:max-w-[300px] max-w-[200px] mx-auto mb-6"
              />

              <div className="flex flex-col items-center justify-center mb-10 text-2xl font-semibold md:text-4xl">
                <span className="text-inherit">10</span>
                <span className="text-inherit">days streak!</span>
              </div>

              <div className="flex items-center justify-center">
                <button
                  onClick={() => setOpen(false)}
                  className="px-6 py-3 text-lg font-bold text-white rounded-xl md:text-xl info-modal-shadow bg-primary"
                >
                  Keep going
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default StreakModal;
