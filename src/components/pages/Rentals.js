import React, { useEffect, useState } from "react";
import Filters from "../ui/Filter";
import axios from "../context/axios";
import HouseCard from "../ui/HouseCard";

const Rentals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const token = sessionStorage.getItem("access_token");
        if (!token) return;

        const res = await axios.get("/properties", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 200) {
          setProperties(res.data);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchProperties();

    return () => {
      setProperties([]);
    };
  }, []);

  return (
    <div className="mx-auto w-full py-20 px-4 cursor-pointer bg-gray-100">
      <Filters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setFilterTerm={setFilterTerm}
        filterTerm={filterTerm}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto">
        {properties.length > 0 ? (
          properties.map((house, index) => (
            <HouseCard key={index} house={house} />
          ))
        ) : (
          <div className="flex flex-col p-3 items-center mx-auto justify-center text-center text-gray-500">
            <h2 className="text-center text-3xl mx-auto">
              No Houses available
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rentals;
