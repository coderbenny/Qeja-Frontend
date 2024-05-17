import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { MdOutlineMapsHomeWork } from "react-icons/md";
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          to="/explore"
          className="flex items-center mr-5 hover:text-blue-300 cursor-pointer"
        >
          <VscFeedback className="mr-1" /> Explore
        </NavLink>
        {/* <NavLink
          to="/community-chat"
          className="flex items-center mr-5 hover:text-blue-300 cursor-pointer"
        >
          <FaComments className="mr-1" /> Community Chat
        </NavLink> */}
      </div>
      <div className="flex items-center">
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
    </div>
  );
}

export default Header;
