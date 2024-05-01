import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "../context/axios";

function HouseDetails() {
  const [house, setHouse] = useState({});
  const id = useParams();

  useEffect(() => {
    const fetchHouse = async (id) => {
      const res = await axios.get(`/properties/${id}`);
      if (res.status === 200) {
        const data = res.data;
        setHouse(data);
      }
    };

    if (id) {
      fetchHouse(id["id"]);
    }
  }, []);

  console.log(id);
  return (
    <div
      className="mx-auto h-screen w-full py-20 px-4"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/22.jpg)`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed", // Make the background image fixed
      }}
    >
      <h1 className="text-white text-2xl mb-5 tracking-wide">
        Property Details
      </h1>

      <div className="bg-white p-2 grid grid-cols-1 md:grid-cols-2 md:gap-1 h-[550px]">
        <div className="w-full">
          <img src={house.pic1} alt="house" className="h-[300px] w-full" />
        </div>

        <div className="bg-gray-300 h-full w-full"></div>
      </div>
    </div>
  );
}

export default HouseDetails;
