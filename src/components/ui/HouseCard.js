import { useState } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import axios from "../context/axios";

export default function HouseCard({ house }) {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const likeProperty = async (propertyId) => {
    try {
      const token = sessionStorage.getItem("access_token");
      const res = await axios.post(
        `/properties/${propertyId}/like`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        setLiked(true); // Update local state to reflect property has been liked
        alert("You have successfully liked the property.");
      }
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  const handleLikeToggle = (propertyId) => {
    if (!liked) {
      likeProperty(propertyId);
    } else {
      // Implement unliking logic if needed
    }
  };

  const handleViewMore = (id) => {
    navigate(`/rentals/${id}`);
  };

  return (
    <div className="rental-card bg-white rounded-md border-2 border-gray-200 overflow-hidden transition duration-300 ease-in-out transform hover:shadow-lg mb-1">
      <img
        src={house.pic1}
        alt={house.description}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold mb-2">Property</h3>
          {liked ? (
            <FcLike
              className="h-[20px] w-[20px]"
              onClick={() => handleLikeToggle(house.id)}
            />
          ) : (
            <FcLikePlaceholder
              className="h-[20px] w-[20px]"
              onClick={() => console.log("Unliked property number " + house.id)}
            />
          )}
        </div>
        <p className="text-gray-700 mb-1">
          <b>Location:</b> {house.location}
        </p>
        <p className="text-gray-700 mb-1">
          <b>Price:</b> Kes.{house.rent}
        </p>
        <button
          className="view-details-btn hover:bg-blue-700 text-white w-full py-2 px-4 rounded-md transition duration-300 ease-in-out"
          onClick={() => handleViewMore(house.id)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}
