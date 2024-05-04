import React from "react";

function SubDetails({ house }) {
  return (
    <div className="">
      <h1 className="font-bold text-4xl mb-2 text-blue-600">House Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-5">
        <div className="flex flex-col p-2 text-center text-white bg-slate-950 border-2 border-gray-300 shadow-md h-[100px] rounded-md">
          <h3 className="font-semibold mb-2 tracking-wide text-white">
            Location
          </h3>
          <h3 className="text-sm text-gray-100">{house.location}</h3>
        </div>
        <div className="flex flex-col p-2 text-center  bg-slate-950 border-2 border-gray-300 shadow-md h-[100px] rounded-md">
          <h3 className="font-semibold mb-2 tracking-wide text-white">Rooms</h3>
          <h3 className="text-sm text-gray-100">{house.rooms}</h3>
        </div>
        <div className="flex flex-col  p-2 items-center text-center bg-slate-950 border-2 border-gray-300 shadow-md h-[100px] rounded-md">
          <h3 className="font-semibold mb-2 tracking-wide text-white">Rent</h3>
          <h3 className="text-sm text-gray-100">{house.rent} Per Month</h3>
        </div>
      </div>

      <div className="mb-3">
        <h3 className="px-2 text-xl bg-slate-950 text-white tracking-wide text-semibold text-semibold">
          Description
        </h3>
        <h3 className="px-2">{house.description}</h3>
      </div>

      <div className="flex flex-col mb-3">
        <h3 className="text-xl px-2 bg-slate-950 text-white tracking-wide">
          Amenities
        </h3>
        <p className="px-2">{house.amenities}</p>
      </div>

      <div className="flex flex-col mb-3">
        <h3 className="text-xl px-2 bg-slate-950 text-white tracking-wide">
          Owner
        </h3>
        <p className="px-2">{house.owner}</p>
      </div>
    </div>
  );
}

export default SubDetails;
