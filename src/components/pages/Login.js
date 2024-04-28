import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login button clicked");
  };

  return (
    <div className="shadow-xl flex justify-center items-center h-screen bg-gradient-to-r from-teal-400 to-blue-500">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-80"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className="w-full px-3 py-2 mb-4 rounded-md bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full px-3 py-2 mb-6 rounded-md bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        >
          Login
        </button>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Don't have an account?{" "}
          <NavLink to="/signup" className="text-blue-500">
            Sign up
          </NavLink>
        </p>
      </form>
    </div>
  );
}

export default Login;
