import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/16/solid";

function CreatePostModal({ open, setOpen, postImage, onCreate }) {
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
                <XMarkIcon className="w-8 cursor-pointer" onClick={() => setOpen(false)} />
                <span className="flex-grow text-xl font-bold text-center md:text-3xl text-primary">
                  Create post
                </span>
              </div>
              {postImage && (
                <img
                  src={postImage}
                  alt="post image"
                  className="mb-4 shadow-lg rounded-xl"
                />
              )}
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
                <button
                  onClick={() => {
                    setOpen(false);
                    onCreate();
                  }}
                  className="px-6 py-3 text-base font-bold text-white rounded-xl md:text-lg info-modal-shadow bg-primary"
                >
                  Create
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default CreatePostModal;
