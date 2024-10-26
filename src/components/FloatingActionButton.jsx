import { PlusIcon, VideoCameraIcon, PhotoIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

function FloatingActionButton({ onSubButtonClick }) {
  return (
    <div className="fixed bottom-0 right-0 z-10 flex items-end justify-end w-24 h-24 p-2 group">
      {/* Main Button */}
      <div className="absolute z-50 flex items-center justify-center p-3 text-white rounded-full shadow-xl bg-primary">
        <PlusIcon className="w-8 h-8 group-hover:rotate-45 transition-all duration-[0.6s]" stroke="white"/>
      </div>
      {/* Sub Left */}
      <div
        onClick={onSubButtonClick}
        className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16 flex p-2 hover:p-3 bg-green-300 hover:bg-green-400 text-white cursor-pointer"
      >
        <VideoCameraIcon className="w-6 h-6"/>
      </div>
      {/* Sub Top */}
      <div
        onClick={onSubButtonClick}
        className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16 flex p-2 hover:p-3 bg-blue-300 hover:bg-blue-400 text-white cursor-pointer"
      >
        <PhotoIcon className="w-6 h-6"/>
      </div>
      {/* Sub Middle */}
      <div
        onClick={onSubButtonClick}
        className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14 flex p-2 hover:p-3 bg-yellow-300 hover:bg-yellow-400 text-white cursor-pointer"
      >
        <DocumentTextIcon className="w-6 h-6"/>
      </div>
    </div>
  );
}

export default FloatingActionButton;
