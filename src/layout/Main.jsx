import { Outlet } from "react-router-dom";
import Navbar from "../component/Home/Navbar/Navbar";
import Footer from "../component/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
