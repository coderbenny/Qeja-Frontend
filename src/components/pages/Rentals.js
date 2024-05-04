import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Filters from "../ui/Filter";
import axios from "../context/axios";

const Rentals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem("access_token");
    const fetchProperties = async (token) => {
      try {
        const res = await axios.get("/properties", {
          Authorization: `Bearer ${token}`,
        });
        if (res.status === 200) {
          const data = await res.data;
          setProperties(data);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
    if (token) {
      fetchProperties(token);
    }

    return () => {
      setProperties([]);
    };
  }, []);

  // Navigate to view house details
  const navigate = useNavigate();

  const handleViewMore = (id) => {
    navigate(`/rentals/${id}`);
  };

  return (
    <div
      className="mx-auto w-full py-20 px-4"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/22.jpg)`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed", // Make the background image fixed
      }}
    >
      <Filters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setFilterTerm={setFilterTerm}
        filterTerm={filterTerm}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto">
        {properties &&
          properties.map((house, index) => (
            <div
              key={index}
              className="bg-white w-full rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={house.pic1}
                alt={house.description}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Property Name</h3>
                <p className="text-gray-700 mb-1">
                  <b>Location:</b> {house.location}
                </p>
                <p className="text-gray-700 mb-1">
                  <b>Price:</b> Kes.{house.rent}
                </p>
                <button
                  type="button"
                  onClick={() => handleViewMore(house.id)}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md focus:bg-blue-600"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Rentals;
