import React, { useState } from "react";
import { FaBars, FaCartPlus, FaRegTimesCircle, FaUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-between px-2">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <FaRegTimesCircle /> : <FaBars />}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <div className="flex gap-3">
            <button>
              <FiSearch className="text-xl" />
            </button>
            <button>
              <FaUser className="text-xl" />
            </button>
            <button className="text-xl">
              <FaCartPlus />
            </button>
          </div>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5 flex gap-6">
            <button>
              <FiSearch className="text-2xl" />
            </button>
            <button>
              <FaUser className="text-2xl" />
            </button>
            <button className="text-2xl">
              <FaCartPlus />
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
