import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

import axios from "../context/axios";
import useAuth from "../hooks/useAuth";

const LogoutButton = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.delete("/logout");
      if (res.status === 200) {
        setAuth("");
        sessionStorage.removeItem("access_token");
        navigate("/login");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button
      type="button"
      className="flex items-center mr-3 border-2 border-white text-white hover:border-teal-500 hover:bg-teal-400 hover:text-gray-800 font-semibold p-1 rounded-md px-3 tracking-wider"
      onClick={handleLogout}
    >
      <FaSignOutAlt className="mr-2" /> Logout
    </button>
  );
};

function AuthButton() {
  const { auth } = useAuth();
  return (
    <div>
      {auth ? (
        <LogoutButton />
      ) : (
        <NavLink
          className="flex items-center mr-3 border-2 border-white text-white hover:border-teal-500 hover:bg-teal-400 hover:text-gray-800 font-semibold p-1 rounded-md px-3 tracking-wider"
          to="/login"
        >
          <FaSignInAlt className="mr-2" /> Login
        </NavLink>
      )}
    </div>
  );
}

export default AuthButton;
