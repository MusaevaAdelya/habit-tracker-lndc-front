import { useState } from "react";
import RoomInfoModal from "./RoomInfoModal";
import RoomDetails from "./RoomDetails";

function RoomItem({
  name,
  peopleQty,
  isPrivate = true,
  image,
  description,
  isJoined,
  goal

}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <RoomInfoModal
        open={modalOpen}
        setOpen={setModalOpen}
        name={name}
        peopleQty={peopleQty}
        isPrivate={isPrivate}
        description={description}
        goal={goal}
        isJoined={isJoined}
      />
      <div
        className="flex p-6 cursor-pointer room-item-shadow rounded-xl"
        onClick={() => setModalOpen(true)}
      >
        <div className="flex flex-col flex-grow">
          <h2 className="mb-3 text-lg font-semibold text-primary lg:text-3xl md:text-xl">
            {name}
          </h2>
          <RoomDetails isPrivate={isPrivate} peopleQty={peopleQty} />

          <div className="flex mt-auto">
            <p className="inline-block underline lg:text-xl md:text-lg text-md hover:text-secondary">
              Read info
            </p>
          </div>
        </div>
        <img
          src={image}
          className="h-[150px]"
        />
      </div>
    </>
  );
}

export default RoomItem;
