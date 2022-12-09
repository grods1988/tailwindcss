import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaCarCrash, FaTimes } from "react-icons/fa";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Button from "../assets/ButtonD";
import ButtonD from "../assets/ButtonD";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const showNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" lg:container mx-auto ">
      <div>
        <nav className="flex h-24 items-center justify-between px-8 capitalize border-b-2 bg-[#E10600] text-white">
          <div className="flex lg:flex-1">
            <a href="/" className="m-1.5 p-1.5 text-2xl font-bold">
              <FaCarCrash className="text-3xl text-white" />
            </a>
          </div>

          <ul className="lg:flex gap-24 hidden text-2xl">
            <Link
              className=" font-semibold text-white hover:text-gray-800 duration-500"
              to="/"
            >
              Home
            </Link>
            <Link
              className=" font-semibold text-white hover:text-gray-800 duration-500"
              to="/driverRankings"
            >
              Driver Rankings
            </Link>
            <Link
              className=" font-semibold text-white hover:text-gray-800 duration-500"
              to="/raceresults"
            >
              race results
            </Link>
            <Link
              className=" font-semibold text-white hover:text-gray-800 duration-500"
              to="/news"
            >
              News
            </Link>
          </ul>

          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
            <ButtonD>Login</ButtonD>
          </div>

          {/* Super important */}
          {isOpen && <MobileNav />}

          <div className="flex lg:hidden">
            <button
              onClick={showNav}
              type="button"
              className=" inline-flex items-center justify-center rounded-md p-2.5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-800"
            >
              {isOpen ? (
                <FaTimes className="text-2xl text-gray-800 hover:focus:outline-1" />
              ) : (
                <FaBars className="text-2xl text-gray-800 hover:focus:outline-1" />
              )}
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
