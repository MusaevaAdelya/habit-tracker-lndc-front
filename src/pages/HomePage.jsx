import RoomItem from "../components/RoomItem";
import SearchPanel from "../components/SearchPanel";
import Pagination from "../components/Pagination";

function HomePage() {
  return (
    <main className="px-2 md:px-10 py-10">
      <h1 className="text-center fw-semibold lg:text-4xl md:text-3xl text-2xl mb-6">
        Rooms
      </h1>
      <SearchPanel />
      <div className="py-9 space-y-8">
        <RoomItem
          image="/images/room-image-1.svg"
          name="Sports training"
          peopleQty={12}
          peopleMax={20}
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
          peopleMax={10}
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
          peopleMax={15}
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
  );
}

export default HomePage;
