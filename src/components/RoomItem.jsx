import { useState } from "react";
import RoomInfoModal from "./RoomInfoModal";
import RoomDetails from "./RoomDetails";

function RoomItem({
  name,
  peopleQty,
  peopleMax,
  isPrivate = true,
  image,
  description,
  dailyTasks,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <RoomInfoModal
        open={modalOpen}
        setOpen={setModalOpen}
        name={name}
        peopleQty={peopleQty}
        peopleMax={peopleMax}
        isPrivate={isPrivate}
        description={description}
        dailyTasks={dailyTasks}
      />
      <div
        className="room-item-shadow rounded-xl p-6 flex cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        <div className="flex flex-col flex-grow">
          <h2 className="text-primary font-semibold lg:text-3xl md:text-xl text-lg mb-3">
            {name}
          </h2>
          <RoomDetails isPrivate={isPrivate} peopleQty={peopleQty} peopleMax={peopleMax}/>

          <div className="flex mt-auto">
            <p className="underline lg:text-xl md:text-lg text-md hover:text-secondary inline-block">
              Read info
            </p>
          </div>
        </div>
        <img
          src={image}
          alt="room image"
          className="md:min-h-[150px] min-h-[40px]"
        />
      </div>
    </>
  );
}

export default RoomItem;
