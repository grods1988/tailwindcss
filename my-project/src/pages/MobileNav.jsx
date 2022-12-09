import React from "react";
import { FaCarCrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function MobileNav() {
  return (
    <div className="fixed top-0 left-0 h-3/4 w-[60%] bg-[#E10600] text-3xl p-4  duration-600 ease-in-out  lg:hidden">
      <div className="m-6">
        <FaCarCrash />
      </div>
      <ul className="  flex flex-col uppercase">
        <Link
          className="p-8 border-b-2 border-b-slate-500  font-semibold text-gray-800 hover:bg-slate-900 duration-500  hover:text-[#e10600] hover:rounded-lg  "
          to="/"
        >
          Home
        </Link>
        <Link
          className="p-8 border-b-2 border-b-slate-500  font-semibold text-gray-800  hover:bg-slate-900 duration-500  hover:text-[#e10600] hover:rounded-lg "
          to="/driverRankings"
        >
          Driver Rankings
        </Link>
        <Link
          className="p-8 border-b-2 border-b-slate-500  font-semibold text-gray-800  hover:bg-slate-900 duration-500  hover:text-[#e10600] hover:rounded-lg "
          to="/raceresults"
        >
          race results
        </Link>
        <Link
          className="p-8   font-semibold text-gray-800  hover:bg-slate-900 duration-500  hover:text-[#e10600] hover:rounded-lg "
          to="/news"
        >
          News
        </Link>
      </ul>
    </div>
  );
}

export default MobileNav;
