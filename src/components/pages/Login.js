import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

import axios from "../context/axios";
import useAuth from "../hooks/useAuth";
function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { setAuth } = useAuth();

  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/login", formData);
      if (res.status === 200) {
        const data = await res.data;
        // console.log(data)
        setAuth({ access_token: data.access_token });
        sessionStorage.setItem("access_token", data.access_token);
        navigate(from, { replace: true });
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Unauthorized error (status code 401)
        setError("Wrong password");
      } else if (error.response && error.response.status === 404) {
        // Unauthorized error (status code 401)
        setError("User does not exist");
      } else {
        setError("An error occurred: " + error.message);
      }
    }
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
          autoComplete="off"
          required
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-4 rounded-md bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-400"
        />
        <input
          type="password"
          autoComplete="off"
          required
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-6 rounded-md bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-400"
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        >
          Login
        </button>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Don't have an account?{" "}
          <NavLink to="/get-started" className="text-blue-500">
            Sign up
          </NavLink>
        </p>
      </form>
    </div>
  );
}

export default Login;
