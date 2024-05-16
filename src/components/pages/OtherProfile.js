import React, { useEffect, useState } from "react";
// import { FaEdit } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "../context/axios";

function OtherProfile() {
  const { id } = useParams();
  const [user, setUser] = useState("");

  useEffect(() => {
    const getUser = async (id) => {
      try {
        const res = await axios.get(`/roommates/${id}`, {
          headers: {
            "Content-Application": "application/json",
            Authorization: `Bearer {token}`,
          },
        });
        if (res.status === 200) {
          const data = res.data;
          setUser(data);
        }
      } catch (error) {
        console.error("An error occured", error);
      }
    };
    getUser(id);
  }, []);

  return (
    <div className="h-screen p-5">
      <div className="flex bg-gray-200 h-[300px] border-2 border-gray-200 rounded-md shadow-md mb-4 w-full items-center justify-center">
        <div className="mt-12 mr-5 h-[170px] bg-gray-400 rounded-full w-[170px] justify-center"></div>
        <div className="text-center">
          <h2 className="font-bold text-center text-2xl">
            {user ? user.name : "Guest"}
          </h2>
          <div className="flex">
            <div className="text-center mr-5">
              <h4 className="font-semibold">Followers</h4>
              <p className="">{user ? 100 : "--"}</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold">Following</h4>
              <p className="">{user ? 100 : "--"}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-400 h-[450px] rounded-md w-full"></div>
    </div>
  );
}

export default OtherProfile;
