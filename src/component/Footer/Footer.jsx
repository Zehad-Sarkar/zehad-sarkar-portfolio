import React from "react";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Download from "../ResumeDownload/Download";

const Footer = () => {
  return (
    <footer className="text-gray-300 bg-gray-900 rounded-md">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <h4 className="text-xl font-bold">Contact</h4>
            <p className="mt-2 select-none">Email: zehadsarkar22@gmail.com</p>
            <p className="select-none"></p>
          </div>
          {/* middle service */}
          <div className="grid flex-col gap-2 md:flex">
            <Link className="ml-1" to="/">Home</Link>
            <Link className="ml-1" to="/about">About-Me</Link>
            <Link className="ml-1" to="/contact">Contact</Link>
            <Link className="flex gap-1 ml-1">
              <Download />
            </Link>
          </div>
          <div className="mb-4 md:mb-0">
            <h4 className="text-xl font-bold text-center">Follow Me</h4>
            <div className="flex gap-2 mt-2">
              {/* linkedin profile */}
              <a
                href="https://www.linkedin.com/in/r-a-zehad-sarkar-developer/"
                target="_blank"
                className="mr-4 text-purple-500 hover:text-purple-300"
              >
                <FaLinkedin className="w-24 h-12" />
              </a>
              {/* github profile */}
              <a
                href="https://github.com/Zehad-Sarkar"
                target="_blank"
                className="text-purple-500 hover:text-purple-300"
              >
                <FaGithub className="w-24 h-12" />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-700" />
        <p className="text-sm text-center">
          &copy; 2023 Web Developer Portfolio. All rights reserved. | Design
          inspired by Zehad Sarkar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
