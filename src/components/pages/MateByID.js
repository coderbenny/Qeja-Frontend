import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "../context/axios";
import SubDetails from "../ui/SubDetails";

function MateByID() {
  const navigate = useNavigate();
  const [mate, setMate] = useState({});
  const id = useParams();

  useEffect(() => {
    const fetchMate = async (id) => {
      const res = await axios.get(`/roommates/${id}`);
      if (res.status === 200) {
        const data = res.data;
        setMate(data);
      }
    };

    if (id) {
      fetchMate(id["id"]);
    }
  }, []);

  const handleBack = () => {
    navigate("/room-mates");
  };

  console.log(mate);
  return (
    <div
      className="flex mx-auto h-screen w-[300px] items-center justify-center py-20 px-2"
      // style={{
      //   backgroundImage: `url(${process.env.PUBLIC_URL}/22.jpg)`,
      //   backgroundSize: "cover",
      //   backgroundAttachment: "fixed", // Make the background image fixed
      // }}
    >
      <div className="p-2 grid grid-cols-1h-[580px]">
        <h1 className="text-title text-center text-3xl">{mate.name}</h1>
        <img
          src={mate.profile}
          alt={mate.name}
          className="mb-3 h-[400px] mx-auto w-[400px] border-2 border-black"
        />
        <div className="flex flex-col justify-between bg-white p-2">
          {/* <SubDetails house={mate} /> */}
          {/* <div className="flex flex-col bg-gray-800  text-white rounded-md p-4">
          <h3 className="font-semibold mb-1 px-2 bg-gray-800  text-white rounded-md p-1">
            Name
          </h3>
          <p className="text-sm px-2 font-semibold">{mate.name}</p> */}
          {/* </div>{" "} */}
          <div className="flex flex-col mt-auto gap-2">
            <button
              type="button"
              className="p-1 hover:bg-blue-700 bg-slate-700 shadow-md w-[500px] text-white "
            >
              Chat
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

export default MateByID;
