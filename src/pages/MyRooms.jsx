import RoomItem from "../components/RoomItem";
import SearchPanel from "../components/SearchPanel";
import Pagination from "../components/Pagination";

function MyRooms() {
  return (
    <main className="px-2 py-10 md:px-10">
      <h1 className="mb-6 text-2xl text-center fw-semibold lg:text-4xl md:text-3xl">
        My Rooms
      </h1>
      <SearchPanel />
      <div className="space-y-8 py-9">
        <RoomItem
          image="/images/room-image-1.svg"
          name="Sports training"
          peopleQty={12}
          isPrivate={true}
          description="Join us for daily workouts that focus on building strength, endurance, and flexibility. This room is perfect for all fitness levels. Track your progress, share results, and stay motivated with a supportive community!"
          dailyTasks={[
            "Warm-up exercises",
            "Cardio session",
            "Stretching routine",
          ]}
        />
        <RoomItem
          image="/images/room-image-2.svg"
          name="Healthy Meals"
          peopleQty={5}
          isPrivate={false}
          description="Join us for daily workouts that focus on building strength, endurance, and flexibility. This room is perfect for all fitness levels. Track your progress, share results, and stay motivated with a supportive community!"
          dailyTasks={[
            "Warm-up exercises",
            "Cardio session",
            "Stretching routine",
          ]}
        />
        <RoomItem
          image="/images/room-image-3.svg"
          name="Study Circle"
          peopleQty={4}
          isPrivate={true}
          description="Join us for daily workouts that focus on building strength, endurance, and flexibility. This room is perfect for all fitness levels. Track your progress, share results, and stay motivated with a supportive community!"
          dailyTasks={[
            "Warm-up exercises",
            "Cardio session",
            "Stretching routine",
          ]}
        />
      </div>
      <Pagination />
    </main>
  )
}

export default MyRooms