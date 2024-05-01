import React from "react";

function Filters({ searchTerm, setSearchTerm, filterTerm, setFilterTerm }) {
  return (
    <div className="mb-6 flex ml-3 mr-3 items-center">
      <input
        type="text"
        placeholder="Search by house location..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        className="ml-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        value={filterTerm}
        onChange={(e) => setFilterTerm(e.target.value)}
      >
        <option value="">Filter by Rooms</option>
        <option value="1">Bedsitter</option>
        <option value="2">1 BR</option>
        <option value="3">2 BR</option>
        <option value="4">3 BR</option>
        <option value="5">4 BR</option>
      </select>
      <select
        className="ml-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        value={filterTerm}
        onChange={(e) => setFilterTerm(e.target.value)}
      >
        <option value="">Filter by Location</option>
        <option value="nairobi">Nairobi</option>
        <option value="kisumu">Kisumu</option>
        <option value="mombasa">Mombasa</option>
      </select>
    </div>
  );
}

export default Filters;
