import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import {
  FaHouseUser,
  FaUserFriends,
  FaBuilding,
  // FaComments,
} from "react-icons/fa";
import AuthButton from "../ui/AuthButton";
import { VscFeedback } from "react-icons/vsc";
import useAuth from "../hooks/useAuth";

function Header() {
  const { user } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/edited.jpg)`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed", // Make the background image fixed
      }}
      className={`fixed top-0 z-50 w-full text-white flex items-center justify-between p-1 h-16 transition-all ${
        isScrolled ? "bg-blue-950" : "bg-transparent"
      }`}
    >
      <NavLink
        to="/"
        className="flex items-center ml-3 text-xl tracking-wider cursor-pointer hover:text-blue-400"
      >
        <MdOutlineMapsHomeWork className="mr-1" />
        Qeja
      </NavLink>
      <div className="justify-between hidden md:flex">
        <NavLink
          to="/rentals"
          className="flex items-center mr-5 hover:text-blue-300 cursor-pointer"
          onClick={closeMenu}
        >
          <FaHouseUser className="mr-1" /> Rentals
        </NavLink>
        <NavLink
          to="/room-mates"
          className="flex items-center mr-5 hover:text-blue-300 cursor-pointer"
          onClick={closeMenu}
        >
          <FaUserFriends className="mr-1" /> Roommates
        </NavLink>
        <NavLink
          to="/explore"
          className="flex items-center mr-5 hover:text-blue-300 cursor-pointer"
          onClick={closeMenu}
        >
          <VscFeedback className="mr-1" /> Explore
        </NavLink>
      </div>
      <div className="items-center hidden md:flex">
        {user ? (
          <NavLink
            to="/profile"
            className="flex items-center font-semibold underline mr-3 p-1"
          >
            <ImProfile className="mr-1" />
            My Profile
          </NavLink>
        ) : (
          ""
        )}

        <AuthButton />
      </div>
      <div className="md:hidden relative">
        {menuOpen ? (
          <MenuOpenIcon
            onClick={handleOpenMenu}
            className="mr-2 h-[30px] w-[30px] cursor-pointer"
          />
        ) : (
          <MenuIcon
            onClick={handleOpenMenu}
            className="mr-2 h-[30px] w-[30px] cursor-pointer"
          />
        )}
        {menuOpen && (
          <div className="origin-top-right absolute right-0 mt-4 w-40 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 animate-slide-down">
            <NavLink
              to="/profile"
              className="block py-2 px-4 text-gray-800 hover:bg-gray-200 transition duration-200"
              onClick={closeMenu}
            >
              My Profile
            </NavLink>
            <NavLink
              to="/rentals"
              className="block py-2 px-4 text-gray-800 hover:bg-gray-200 transition duration-200"
              onClick={closeMenu}
            >
              Rentals
            </NavLink>
            <NavLink
              to="/room-mates"
              className="block py-2 px-4 text-gray-800 hover:bg-gray-200 transition duration-200"
              onClick={closeMenu}
            >
              Roommates
            </NavLink>
            <NavLink
              to="/explore"
              className="block py-2 px-4 text-gray-800 hover:bg-gray-200 transition duration-200"
              onClick={closeMenu}
            >
              Explore
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
