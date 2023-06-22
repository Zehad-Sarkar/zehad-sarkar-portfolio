import { Link } from "react-router-dom";
import zs from "../../../assets/zs.jpg";

const Navbar = () => {
  //navmenu list
  const navMenu = (
    <>
      <Link className="menuLink" to="/">
        Home
      </Link>
      <Link className="menuLink" to="/project">
        Project
      </Link>
      <Link className="menuLink" to="/about">
        About-Me
      </Link>
      <Link className="menuLink" to="/contact">
        Contact
      </Link>
    </>
  );
  return (
    <div className="md:h-28 h-32 bg-[#651fff] rounded-md navbar sunlight-logo">
      <div className="navbar-start">
        <div className=" dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            {navMenu}
          </ul>
        </div>
        <Link className="ml-4 text-4xl font-extrabold normal-case text-[#d96459] reletive ">
          Zehad Sarkar
          <span className="absolute text-2xl font-medium text-[#e64a19] md:top-24  md:left-20 left-12 top-32">
            Web Developer Portfolio
          </span>
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="z-10 px-1 py-1 menu menu-horizontal ">{navMenu}</ul>
      </div>
      <div className="navbar-end">
        <Link>
          <img
            src={zs}
            className="w-16 h-16 "
            style={{ borderRadius: "50%" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
