import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "../context/axios";
import SubDetails from "../ui/SubDetails";
import SwipeCard from "../ui/SwipeCard";

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
    <div className="mx-auto h-screen w-full py-20 px-2">
      <div className="p-2 grid grid-cols-1 md:grid-cols-2 h-[580px]">
        <div className="w-full bg-white p-2">
          <SwipeCard img1={house.pic1} img2={house.pic2} img3={house.pic3} />
        </div>
        <div className="flex flex-col justify-between bg-white p-2">
          <SubDetails title="House" house={house} />
          <div className="flex justify-between mt-auto gap-2">
            <button
              type="button"
              className="p-1 hover:bg-blue-700 items-center bg-slate-700 shadow-md w-[500px] text-white"
            >
              View Contact
            </button>
            <button
              onClick={handleBack}
              type="button"
              className="p-1 hover:bg-blue-700 bg-slate-700 shadow-md w-[500px] text-white mt-auto"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseDetails;
