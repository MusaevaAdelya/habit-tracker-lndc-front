import { useParams } from "react-router-dom";

const roomInfo={
    name:"Weight Warriors"
}

function RoomPage() {
  const { id } = useParams();
  return <main className="min-h-screen">
    <h1 className="text-2xl font-semibold text-center mt-7">{roomInfo.name}</h1>
    <h2><span></span></h2>
  </main>;
}

export default RoomPage;
