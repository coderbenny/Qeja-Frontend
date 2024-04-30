import React, { useState } from 'react';

// Sample data for houses
const houses = [
  {
    id: 1,
    name: 'Modern Villa with Pool',
    location: 'Nairobi',
    price: '20,000/month',
    image: 'https://via.placeholder.com/600x400',
  },
  {
    id: 2,
    name: 'Cozy Cottage near Beach',
    location: 'Mombasa',
    price: '15,000/month',
    image: 'https://via.placeholder.com/600x400',
  },
  {
    id: 3,
    name: 'Luxury Apartment Downtown',
    location: 'Kisumu',
    price: '30,000/month',
    image: 'https://via.placeholder.com/600x400',
  },
  {
    id: 4,
    name: 'Luxury Apartment Downtown',
    location: 'Kisumu',
    price: '30,000/month',
    image: 'https://via.placeholder.com/600x400',
  },
];

const Rentals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTerm, setFilterTerm] = useState('');

  const filteredHouses = houses.filter(house => {
    return house.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
      (filterTerm === '' || house.location.toLowerCase().includes(filterTerm.toLowerCase()));
  });

  return (
    <div className="container w-full mx-auto h-screen py-12"
    style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/22.jpg)`,
        backgroundSize: "cover",
        // backgroundAttachment: "fixed", // Make the background image fixed
      }}
    >
      <div className="mb-6 flex ml-3 mr-3 mt-7 items-center">
        <input
          type="text"
          placeholder="Search by house location..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select
          className="ml-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={filterTerm}
          onChange={e => setFilterTerm(e.target.value)}
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
          onChange={e => setFilterTerm(e.target.value)}
        >
          <option value="">Filter by Location</option>
          <option value="nairobi">Nairobi</option>
          <option value="kisumu">Kisumu</option>
          <option value="mombasa">Mombasa</option>
        </select>
      </div>
      <div className="grid grid-cols-1 p-3 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredHouses.map((house, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={house.image} alt={house.name} className="w-full h-56 object-cover object-center" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{house.name}</h3>
              <p className="text-gray-600 mb-2">Location: {house.location}</p>
              <p className="text-gray-600 mb-4">Price: Kes.{house.price}</p>
              <button disabled  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
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
