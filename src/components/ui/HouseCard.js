import { useState } from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export default function HouseCard({ house }) {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const handleViewMore = (id) => {
    navigate(`/rentals/${id}`);
  };

  const handlelike = () => {
    setLiked(!liked);
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
          <h3 className="text-lg font-semibold mb-2">Property Name</h3>
          {liked ? (
            <FcLike className="h-[20px] w-[20px]" onClick={handlelike} />
          ) : (
            <FcLikePlaceholder
              className="h-[20px] w-[20px]"
              onClick={handlelike}
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
