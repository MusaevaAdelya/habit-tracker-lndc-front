import { UserGroupIcon } from "@heroicons/react/16/solid";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/16/solid";

function RoomItem({ name, peopleQty, peopleMax, isPrivate = true, image }) {
  return (
    <div className="room-item-shadow rounded-xl p-6 flex">
      <div className="flex flex-col flex-grow">
        <p className="text-primary font-semibold lg:text-3xl md:text-xl text-lg mb-3">
          {name}
        </p>
        <div className="flex mb-5 lg:text-xl md:text-lg text-md">
          <div className="flex items-center mr-6">
            <UserGroupIcon className="md:h-[40px] md:w-[40px] h-[30px] w-[30px]" />
            <p className="">{peopleQty} / {peopleMax}</p>
          </div>

          <div className="flex items-center">
            {isPrivate ? (
              <LockClosedIcon className="md:h-[40px] md:w-[40px] h-[30px] w-[30px]" />
            ) : (
              <LockOpenIcon className="md:h-[40px] md:w-[40px] h-[30px] w-[30px]" />
            )}
            <p className="">{isPrivate ? "Private" : "Open"}</p>
          </div>
        </div>

        {/* The paragraph is now at the bottom */}
        <p className="underline lg:text-xl md:text-lg text-md mt-auto ">Read info</p>
      </div>
      <img src={image} alt="room image" className="md:min-h-[150px] min-h-[40px]" />
    </div>
  );
}

export default RoomItem;
