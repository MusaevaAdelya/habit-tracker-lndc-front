import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage";
import MyRooms from "./pages/MyRooms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/my-rooms" element={<MyRooms/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
