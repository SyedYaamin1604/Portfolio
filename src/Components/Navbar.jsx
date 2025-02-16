import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBriefcase, FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GrContact, GrProjects } from "react-icons/gr";
import "animate.css";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* <======= Navbar Container =====================================> */}
      <div className="navbar flex justify-between px-6 sm:px-10 lg:px-20 xl:px-40 bg-fixed items-center bg-black text-white fixed top-0 w-full z-50">
        <Link to="/">
          <a className="btn border-none hover:bg-blue-800 bg-black social-icon">
            <span className="text-white text-[1rem] font-semibold sm:text-[2rem] xl:text-[2.5rem]">
              Syed
            </span>
            <span className="text-blue-400 font-extrabold text-[1.1rem] sm:text-[2.1rem] xl:text-[2.6rem]">
              {" "}
              Yaamin
            </span>
          </a>
        </Link>

        {/* <======= Bars Button ===================================>*/}
        <div className="lg:hidden">
          <button onClick={() => setOpen(!open)}>
            <h1 className="text-blue-400 font-bold text-xl sm:text-3xl hover:bg-blue-800 p-2 rounded-2xl">
              <FaBars />
            </h1>
          </button>
        </div>

        {/* <======= Desktop Menu Styling ===================================>*/}
        <div className="hidden lg:block">
          <ul className="flex justify-start items-center gap-8 text-md font-medium py-2 xl:gap-5">
            <li
              className={`${
                isActive("/") ? "bg-blue-800 text-blue-400" : "bg-black"
              } p-2 hover:bg-blue-800 rounded-xl xl:p-3`}
            >
              <Link className="flex items-center gap-2" to="/">
                <FaHome /> <span>Home</span>
              </Link>
            </li>
            <li
              className={`${
                isActive("/about") ? "bg-blue-800 text-blue-400" : "bg-black"
              } p-2 hover:bg-blue-800 rounded-xl xl:p-3`}
            >
              <Link className="flex items-center gap-2" to="/about">
                <CgProfile /> <span>About</span>
              </Link>
            </li>
            <li
              className={`${
                isActive("/contact") ? "bg-blue-800 text-blue-400" : "bg-black"
              } p-2 hover:bg-blue-800 rounded-xl xl:p-3`}
            >
              <Link className="flex items-center gap-2" to="/contact">
                <GrContact /> <span>Contact</span>
              </Link>
            </li>
            <li
              className={`${
                isActive("/projects") ? "bg-blue-800 text-blue-400" : "bg-black"
              } p-2 hover:bg-blue-800 rounded-xl xl:p-3`}
            >
              <Link className="flex items-center gap-2" to="/projects">
                <GrProjects /> <span>Projects</span>
              </Link>
            </li>
            {/* <li className={`${isActive('/experience') ? 'bg-blue-800 text-blue-400' : 'bg-black'} p-2 hover:bg-blue-800 rounded-xl xl:p-3`}>
                            <Link className="flex items-center gap-2" to="/experience">
                                <FaBriefcase /> <span>Experience</span>
                            </Link>
                        </li> */}
          </ul>
        </div>
      </div>

      {/* <=============== Mobile Menu ====================================> */}
      <div
        className={`w-full px-10 py-3 pt-20 bg-blue-950 text-white lg:hidden ${
          open ? "block animate__animated animate__slideInDown" : "hidden"
        }`}
      >
        <div className="flex justify-center">
          <ul className="flex flex-col text-center text-lg font-medium bg-transparent">
            <li
              className={`${
                isActive("/") ? "bg-blue-800 text-blue-400" : "bg-blue-950"
              } p-2 hover:bg-blue-800 rounded-xl`}
            >
              <Link className="flex items-center gap-2" to="/">
                <FaHome /> <span>Home</span>
              </Link>
            </li>
            <li
              className={`${
                isActive("/about") ? "bg-blue-800 text-blue-400" : "bg-blue-950"
              } p-2 hover:bg-blue-800 rounded-xl`}
            >
              <Link className="flex items-center gap-2" to="/about">
                <CgProfile /> <span>About</span>
              </Link>
            </li>
            <li
              className={`${
                isActive("/contact")
                  ? "bg-blue-800 text-blue-400"
                  : "bg-blue-950"
              } p-2 hover:bg-blue-800 rounded-xl`}
            >
              <Link className="flex items-center gap-2" to="/contact">
                <GrContact /> <span>Contact</span>
              </Link>
            </li>
            <li
              className={`${
                isActive("/projects")
                  ? "bg-blue-800 text-blue-400"
                  : "bg-blue-950"
              } p-2 hover:bg-blue-800 rounded-xl`}
            >
              <Link className="flex items-center gap-2" to="/projects">
                <GrProjects /> <span>Projects</span>
              </Link>
            </li>
            <li
              className={`${
                isActive("/experience")
                  ? "bg-blue-800 text-blue-400"
                  : "bg-blue-950"
              } p-2 hover:bg-blue-800 rounded-xl`}
            >
              <Link className="flex items-center gap-2" to="/experience">
                <FaBriefcase /> <span>Experience</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
