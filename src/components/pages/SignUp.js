import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "../context/axios";

function Signup() {
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role_id: "",
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
      const res = await axios.post("/users", formData);
      if (res.status === 201) {
        e.target.reset();
        alert("Sign Up succesfull");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("Invalid User Data");
      } else if (error.response && error.response.status === 409) {
        setError("User exists, use a unique name and email!");
      } else {
        setError("An error occurred: " + error.message);
      }
    }
  };

  return (
    <div
      // style={{ height: "100vh" }}
      className="flex justify-center items-center bg-gradient-to-r from-teal-400 to-blue-500"
    >
      <form
        className="bg-white p-8 mb-3 h-[100vh] rounded-lg shadow-md w-80"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Sign Up
        </h2>
        <input
          type="text"
          autoComplete="off"
          required
          name="name"
          placeholder="Name"
          // autoComplete="off"
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-4 rounded-md bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-400"
        />
        <input
          type="email"
          autoComplete="off"
          required
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-4 rounded-md bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-400"
        />
        <select
          name="role_id"
          autoComplete="off"
          required
          onChange={handleInputChange}
          value={formData.role_id}
          className="w-full px-3 py-2 mb-4 rounded-md bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-400"
        >
          <option value="" disabled selected>
            Choose your role
          </option>
          <option value="1">Property Owner</option>
          <option value="2">Seeking Rental</option>
          <option value="3">Seeking Roommate</option>
        </select>
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
          Sign Up
        </button>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{" "}
          <NavLink to="/login" className="text-blue-500">
            Log in
          </NavLink>
        </p>
      </form>
    </div>
  );
}

export default Signup;
