import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { FunnelIcon } from "@heroicons/react/24/outline";

function SearchPanel() {
  return (
    <div className="bg-white py-4 px-3 search-pannel-shadow rounded-2xl flex justify-between">
      <MagnifyingGlassIcon className="h-6 w-6 text-dark-50"/>
      <input type="text" placeholder="Search room" className="outline-none flex-grow mx-3 text-base md:text-xl" />
      <FunnelIcon className="h-6 w-6 text-dark-50"/>
    </div>
  );
}

export default SearchPanel;
