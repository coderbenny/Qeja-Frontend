import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "../context/axios";
import SubDetails from "../ui/SubDetails";

function HouseDetails() {
  const navigate = useNavigate();
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

  const handleBack = () => {
    navigate("/rentals");
  };

  // console.log(house);
  return (
    <div
      className="mx-auto h-screen w-full py-20 px-2"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/22.jpg)`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed", // Make the background image fixed
      }}
    >
      <h1
        className="text-white text-2xl mb-5 tracking-wide cursor-pointer ml-1"
        onClick={handleBack}
      >
        Back
      </h1>

      <div className="p-2 grid grid-cols-1 md:grid-cols-2 md:gap-10 h-[580px]">
        <div className="w-full bg-white p-2">
          <img src={house.pic1} alt="house" className="h-[380px] w-full mb-2" />
          <div className="flex justify-between">
            <img src={house.pic2} alt="house" className="h-[200px] w-[370px]" />
            <img src={house.pic3} alt="house" className="h-[200px] w-[370px]" />
          </div>
        </div>
        <div className="flex flex-col justify-between bg-white p-2">
          <SubDetails house={house} />
          <button
            type="button"
            className="p-1 hover:bg-blue-600 bg-slate-700 shadow-md text-white mt-auto"
          >
            Schedule Viewing
          </button>
        </div>
      </div>
    </div>
  );
}

export default HouseDetails;
