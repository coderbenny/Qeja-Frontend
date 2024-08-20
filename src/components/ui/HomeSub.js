import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
import { AuthContext } from "../context/AuthContext";

function HomeSub() {
  // const { auth } = useAuth();
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full sm:max-w-[550px] text-center rounded-bl-md rounded-br-md p-4">
      <h2 className="text-gradient text-2xl sm:text-4xl font-bold mb-2 tracking-wider">
        Discover. Rent. Connect
      </h2>
      <p className="text-gray-200 mb-5 whitespace-normal text-sm sm:text-base">
        Are you{" "}
        <b>
          <i>searching</i>
        </b>{" "}
        for your dream home or ready to{" "}
        <b>
          <i>rent out</i>
        </b>{" "}
        your property? We are here to{" "}
        <b>
          <i>simplify</i>
        </b>{" "}
        the process and{" "}
        <b>
          <i>connect</i>
        </b>{" "}
        you with like-minded individuals.
        <br />
        Welcome to your{" "}
        <b>
          <i>premier</i>
        </b>{" "}
        destination for seamless housing solutions
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center">
        {user?.role_id === 1 ? (
          <NavLink
            to="/dashboard"
            className="w-full text-white sm:w-auto p-3 rounded-md px-4 bg-blue-800 mb-2 sm:mb-0 sm:mr-4 hover:bg-blue-600"
          >
            Dashboard
          </NavLink>
        ) : null}
        {/* <NavLink
          to="/signup"
          className="w-full sm:w-auto p-3 rounded-md text-white px-4 bg-blue-800 mb-2 sm:mb-0 sm:mr-4 hover:bg-blue-600"
        >
          Get Started
        </NavLink> */}
        {user?.role_id === 1 ? (
          ""
        ) : (
          <NavLink
            to="/discover"
            className="w-full sm:w-auto p-3 px-4 border-2 text-white border-blue-600 rounded-md hover:bg-blue-600"
          >
            Learn More
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default HomeSub;
