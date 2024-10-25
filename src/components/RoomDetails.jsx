import { UserGroupIcon } from "@heroicons/react/16/solid";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/16/solid";

function RoomDetails({ isPrivate, peopleQty }) {
  const iconsSize = "md:h-[30px] md:w-[30px] h-[25px] w-[25px] mr-2";

  return (
    <div className="flex mb-5 text-base md:text-lg">
      <div className="flex items-center mr-6">
        <UserGroupIcon className={iconsSize} />
        <p className="">
          {peopleQty}
        </p>
      </div>

      <div className="flex items-center">
        {isPrivate ? (
          <LockClosedIcon className={iconsSize} />
        ) : (
          <LockOpenIcon className={iconsSize} />
        )}
        <p className="">{isPrivate ? "Private" : "Open"}</p>
      </div>
    </div>
  );
}

export default RoomDetails;
