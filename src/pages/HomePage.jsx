import RoomItem from "../components/RoomItem";
import SearchPanel from "../components/SearchPanel";

function HomePage() {
  return (
    <main className=" px-4">
      <p className="text-center fw-semibold lg:text-4xl md:text-3xl text-2xl my-6">Rooms</p>
      <SearchPanel />
      <div className="py-9 space-y-8">
        <RoomItem image="/images/room-image-1.svg" name="Sports training" peopleQty={12} peopleMax={20} isPrivate={true}/>
        <RoomItem image="/images/room-image-2.svg" name="Healthy Meals" peopleQty={5} peopleMax={10} isPrivate={false}/>
        <RoomItem image="/images/room-image-3.svg" name="Study Circle" peopleQty={4} peopleMax={15} isPrivate={true}/>
      </div>
    </main>
  );
}

export default HomePage;
