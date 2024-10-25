import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
