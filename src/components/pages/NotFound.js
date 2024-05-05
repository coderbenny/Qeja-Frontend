import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">Oops!</h1>
        <h2 className="text-4xl font-bold text-gray-600 mb-6">
          404 - Page Not Found
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          It seems like you've stumbled upon a page that doesn't exist.
        </p>
        {/* <img
          src="/404-image.svg" // Replace with your custom image
          alt="404 Error"
          className="w-80 mb-8" */}
        {/* /> */}
        <NavLink
          to="/"
          className="text-blue-500 hover:text-blue-700 font-bold text-lg"
        >
          Go back to Home
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
