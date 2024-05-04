import React from "react";

function SubDetails({ house }) {
  const sharePost = async () => {
    try {
      // Check if the Web Share API is supported
      if (navigator.share) {
        await navigator.share({
          title: "Check out this house",
          url: window.location.href, // Get the current URL of the post
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        console.log("Web Share API is not supported");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl mb-4 p-1">House Details</h1>
        <p
          className="cursor-pointer items-center border-2 rounded-sm shadow-sm border-slate-950 p-1 flex"
          onClick={sharePost}
        >
          <img src="/share.svg" alt="share" className="h-5 w-5" />
          Click to share
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="flex flex-col bg-gray-800 text-white rounded-md p-4">
          <h3 className="font-semibold mb-2">Location</h3>
          <p className="text-sm">{house.location}</p>
        </div>
        <div className="flex flex-col bg-gray-800 text-white rounded-md p-4">
          <h3 className="font-semibold mb-2">Rooms</h3>
          <p className="text-sm">{house.rooms}</p>
        </div>
        <div className="flex flex-col bg-gray-800 text-white rounded-md p-4">
          <h3 className="font-semibold mb-2">Rent</h3>
          <p className="text-sm">Ksh.{house.rent} Per Month</p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg bg-gray-800 text-white rounded-md py-2 px-4">
          Description
        </h3>
        <p className="py-2 px-4">{house.description}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg bg-gray-800 text-white rounded-md py-2 px-4 mb-1">
          Amenities
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          <div>
            <p className="flex items-center text-sm text-gray-800 font-semibold">
              <img src="/wifi.svg" alt="Wifi Icon" className="h-5 w-5 mr-2" />
              Wifi: {house.wifi ? "Available" : "Not Available"}
            </p>
            <p className="flex items-center text-sm text-gray-800 font-semibold">
              <img
                src="/gated.svg"
                alt="Gated Access Icon"
                className="h-5 w-5 mr-2"
              />
              Gated Access: {house.gated ? "Available" : "Not Available"}
            </p>
            <p className="flex items-center text-sm text-gray-800 font-semibold">
              <img
                src="/shower.svg"
                alt="Hot Shower Icon"
                className="h-5 w-5 mr-2"
              />
              Hot Shower: {house.hot_shower ? "Available" : "Not Available"}
            </p>
          </div>
          <div>
            <p className="flex items-center text-sm text-gray-800 font-semibold">
              <img
                src="/kitchen.svg"
                alt="Kitchen Icon"
                className="h-5 w-5 mr-2"
              />
              Kitchen: {house.kitchen ? "Available" : "Not Available"}
            </p>
            <p className="flex items-center text-sm text-gray-800 font-semibold">
              <img
                src="/balcony.svg"
                alt="Balcony Icon"
                className="h-5 w-5 mr-2"
              />
              Balcony: {house.balcony ? "Available" : "Not Available"}
            </p>
            <p className="flex items-center text-sm text-gray-800 font-semibold">
              <img
                src="/parking.svg"
                alt="Parking Icon"
                className="h-5 w-5 mr-2"
              />
              Parking: {house.parking ? "Available" : "Not Available"}
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg bg-gray-800 text-white rounded-md py-2 px-4">
          Owner
        </h3>
        <p className="py-2 px-4">{house.owner}</p>
      </div>
    </div>
  );
}

export default SubDetails;
