import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import {
  FaHouseUser,
  FaUserFriends,
  FaBuilding,
  FaComments,
} from "react-icons/fa";
// import useAuth from "../hooks/useAuth";

import AuthButton from "../ui/AuthButton";

function Header() {
  return (
    <div className="fixed top-0 z-50 w-full text-white flex items-center bg-transparent justify-between p-1 h-16">
      <NavLink
        to="/"
        className="flex items-center ml-3 text-2xl tracking-wider cursor-pointer hover:text-blue-400"
      >
        <MdOutlineMapsHomeWork className="" />
      </NavLink>
      <div className="flex justify-between">
        <NavLink
          to="/rentals"
          className="flex items-center mr-5 hover:text-blue-300 cursor-pointer"
        >
          <FaHouseUser className="mr-1" /> Rentals
        </NavLink>
        <NavLink
          to="/room-mates"
          className="flex items-center mr-5 hover:text-blue-300 cursor-pointer"
        >
          <FaUserFriends className="mr-1" /> Roommates
        </NavLink>
        <NavLink
          to="/property-owners"
          className="flex items-center mr-5 hover:text-blue-300 cursor-pointer"
        >
          <FaBuilding className="mr-1" /> Property Owners
        </NavLink>
        <NavLink
          to="/community-chat"
          className="flex items-center mr-5 hover:text-blue-300 cursor-pointer"
        >
          <FaComments className="mr-1" /> Community Chat
        </NavLink>
      </div>
      <AuthButton />
      {/* <button className="p-1 px-3 bg-slate-700 rounded-md hover:bg-slate-800 border-2 border-gray-500 hover:border-gray-300" type="button">Register</button> */}
    </div>
  );
}

export default Header;
