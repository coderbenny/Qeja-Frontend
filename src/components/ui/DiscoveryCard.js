import React from "react";

function DiscoveryCard({ discovery }) {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-800 p-6 rounded-lg shadow-xl border-slate-800 hover:border-teal-500 border-2 cursor-pointer">
      <div className="bg-blue-800 p-3 rounded-full mb-6">{discovery.icon}</div>
      <h3 className="text-xl font-semibold mb-4">{discovery.title}</h3>
      <p className="text-gray-300">{discovery.description}</p>
    </div>
  );
}

export default DiscoveryCard;
