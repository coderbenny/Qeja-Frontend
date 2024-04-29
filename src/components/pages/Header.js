import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FaHouseUser, FaUserFriends, FaBuilding, FaComments, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

function Header() {

  const {auth} = useAuth()

  return (
    <div className="items-center fixed top-0 z-50 w-full bg-slate-900 text-white flex items-center justify-between p-1 h-16">
      <NavLink
        to="/"
        className="flex items-center ml-3 font-bold text-2xl tracking-wider cursor-pointer hover:text-blue-400"
      >
        <MdOutlineMapsHomeWork className="" />
      </NavLink>
      <div className="flex justify-between">
        <NavLink to="/rentals" className="flex items-center mr-5 hover:text-blue-300 font-semibold cursor-pointer">
          <FaHouseUser className="mr-1" /> Rentals
        </NavLink>
        <NavLink to="/room-mates" className="flex items-center mr-5 hover:text-blue-300 font-semibold cursor-pointer">
          <FaUserFriends className="mr-1" /> Roommates
        </NavLink>
        <NavLink to="/property-owners" className="flex items-center mr-5 hover:text-blue-300 font-semibold cursor-pointer">
          <FaBuilding className="mr-1" /> Property Owners
        </NavLink>
        <NavLink to="/community-chat" className="flex items-center mr-5 hover:text-blue-300 font-semibold cursor-pointer">
          <FaComments className="mr-1" /> Community Chat
        </NavLink>
      </div>
      <NavLink
  className="flex items-center mr-3 border-2 border-slate-400 text-white hover:bg-teal-400 hover:text-gray-800 font-semibold p-1 rounded-md px-3 tracking-wider"
  to={auth ? "/logout" : "/login"}
>
  {auth ? (
    <>
      <FaSignOutAlt className="mr-2" /> Logout
    </>
  ) : (
    <>
      <FaSignInAlt className="mr-2" /> Login
    </>
  )}
</NavLink>

      {/* <button className="p-1 px-3 bg-slate-700 rounded-md hover:bg-slate-800 border-2 border-gray-500 hover:border-gray-300" type="button">Register</button> */}
    </div>
  );
}

export default Header;
