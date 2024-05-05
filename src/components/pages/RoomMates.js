import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Filters from "../ui/Filter";
import axios from "../context/axios";

const RoomMates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [roommates, setRoommates] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem("access_token");
    const fetchRoommates = async (token) => {
      try {
        const res = await axios.get("/roommates", {
          Authorization: `Bearer ${token}`,
        });
        if (res.status === 200) {
          const data = await res.data;
          setRoommates(data);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
    if (token) {
      fetchRoommates(token);
    }

    return () => {
      setRoommates([]);
    };
  }, []);

  // Navigate to view house details
  const navigate = useNavigate();

  const handleViewMore = (id) => {
    navigate(`/room-mates/${id}`);
  };

  return (
    <div className="mx-auto w-full py-20 px-4 cursor-pointer bg-gray-100">
      <Filters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setFilterTerm={setFilterTerm}
        filterTerm={filterTerm}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto">
        {roommates &&
          roommates.map((roommate, index) => (
            <div
              key={index}
              className="rental-card bg-white rounded-md border-2 border-gray-200 overflow-hidden transition duration-300 ease-in-out transform hover:shadow-lg mb-1"
              onClick={() => handleViewMore(roommate.id)}
            >
              <img
                src={roommate.profile_pic}
                alt={roommate.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{roommate.name}</h3>
                <p className="text-gray-700 mb-1">
                  <b>Location:</b> {roommate.location}
                </p>
                <button className="view-details-btn hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out">
                  View Details
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RoomMates;
