import { Link } from "react-router-dom";
import zs from "../../../assets/zs.jpg";
import Download from "../../ResumeDownload/Download";

const Navbar = () => {
  //navmenu list
  const navMenu = (
    <>
      <Link className="md:text-indigo-800 menuLink" to="/">
        Home
      </Link>
      <Link className="md:text-indigo-800 menuLink" to="/project">
        Projects
      </Link>
      <Link className="md:text-indigo-800 menuLink">
        <Download />
      </Link>
    </>
  );
  return (
    <div className="md:h-28 h-32 bg-[#c7dada] rounded-md navbar sunlight-logo">
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
            className="p-2 mt-10 text-purple-500 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            {navMenu}
          </ul>
        </div>
        <Link className="ml-4 text-3xl font-extrabold text-purple-600 normal-case md:text-4xl reletive ">
          Zehad Sarkar
          <span className="absolute text-2xl font-medium text-purple-600 md:top-20 md:left-40 left-12 top-24">
            Web Developer
          </span>
        </Link>
      </div>
      <div className="hidden text-purple-500 navbar-end lg:flex">
        <ul className="z-10 px-1 py-1 text-purple-500 menu menu-horizontal">
          {navMenu}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
