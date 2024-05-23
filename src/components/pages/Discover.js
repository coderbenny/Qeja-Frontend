import React from "react";
import DiscoveryCard from "../ui/DiscoveryCard";
import { FaHome, FaKey, FaUserFriends, FaComments } from "react-icons/fa";

function Discover() {
  const discoveries = [
    {
      id: 1,
      title: "Looking to Rent a House?",
      description:
        "Your search for the perfect rental ends here! Discover a curated selection of houses tailored to your preferences. Say goodbye to endless scrolling and hello to your dream home.",
      icon: <FaKey />,
    },
    {
      id: 2,
      title: "Looking for the Perfect Roommate?",
      description:
        "Finding the ideal roommate just got easier! Say goodbye to awkward interviews and incompatible matches. Our platform connects you with like-minded individuals, ensuring harmonious living experiences.",
      icon: <FaUserFriends />,
    },
    {
      id: 3,
      title: "Unlock the Potential of Your Property",
      description:
        "Transform your property into a lucrative asset with our innovative solutions. From attracting the right tenants to maximizing rental income, unlock the full potential of your property effortlessly.",
      icon: <FaHome />,
    },
    {
      id: 4,
      title: "Join Our Community Chat",
      description:
        "Connect with fellow users in our vibrant community chat! Whether you're a property owner, tenant, or seeker of roommates, engage in lively discussions, share tips, and make new connections. Your community awaits!",
      icon: <FaComments />,
    },
  ];

  return (
    <div
      className="p-3 bg-slate-700 h-screen"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/2.jpg)`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-4xl mx-auto text-center text-white py-10">
        <h2 className="mt-5 text-4xl text-gradient-1 font-bold mb-4 tracking-wider">
          Discover
        </h2>
        <p className="text-lg mb-6">
          Experience the ease of finding your perfect home, tenant, or roommate.
          Say goodbye to endless searches and complicated processes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* discovery cards */}
          {discoveries &&
            discoveries.map((disc) => (
              <DiscoveryCard key={disc.id} discovery={disc} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Discover;
