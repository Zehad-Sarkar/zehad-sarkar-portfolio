import { Outlet } from "react-router-dom";
import Navbar from "../component/Home/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import { Helmet } from "react-helmet-async";

const Main = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
