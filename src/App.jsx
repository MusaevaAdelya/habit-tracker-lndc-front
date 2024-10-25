import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage";
import MyRoomsPage from "./pages/MyRooms";
import RoomPage from "./pages/RoomPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="my-rooms" element={<MyRoomsPage/>}/>
          <Route path="room/:id" element={<RoomPage />} />
        </Route>
        <Route path="sign-in" element={<SignInPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
