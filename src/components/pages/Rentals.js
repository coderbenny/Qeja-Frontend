import React, { useEffect, useState } from "react";
import Filters from "../ui/Filter";
import axios from "../context/axios";

const Rentals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");

  const [properties, setProperties] = useState([]);

  // const filteredProperty = properties.filter((property) => {
  //   return (
  //     property.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
  //     (filterTerm === "" ||
  //       property.location.toLowerCase().includes(filterTerm.toLowerCase()))
  //   );
  // });

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get("/properties");
        if (res.status === 200) {
          const data = await res.data;
          setProperties(data);
        }
      } catch (error) {
        console.error("An error occured:", error);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div
      className="w-full mx-auto h-screen py-20"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/22.jpg)`,
        backgroundSize: "cover",
        // backgroundAttachment: "fixed", // Make the background image fixed
      }}
    >
      <Filters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setFilterTerm={setFilterTerm}
        filterTerm={filterTerm}
      />
      <div className="grid grid-cols-1 p-3 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {properties &&
          properties.map((house, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden w-[300px]"
            >
              <img
                src={house.pic1}
                alt={house.description}
                className="w-full h-56"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {house.location}
                </h3>
                <p className="text-gray-600 mb-2">Location: {house.location}</p>
                <p className="text-gray-600 mb-4">Price: Kes.{house.rent}</p>
                <button
                  disabled
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
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
