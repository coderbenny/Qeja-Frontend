import React, { useEffect, useState } from "react";
// import { FaEdit } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "../context/axios";
import { FaCamera } from "react-icons/fa";

function OtherProfile() {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const [followed, setFollowed] = useState(false);
  console.log(user);

  useEffect(() => {
    const getUser = async (id) => {
      try {
        const res = await axios.get(`/users/${id}`, {
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

  const handleFollow = async () => {
    const token = sessionStorage.getItem("access_token");
    if (!followed) {
      try {
        const res = await axios.post(
          `/follow/${user.id}`,
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.status === 200) {
          setFollowed(true);
        }
      } catch (error) {
        alert("An error occured", error);
      }
    }
    try {
      const token = sessionStorage.getItem("access_token");
      const res = await axios.post(
        `/unfollow/${user.id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        setFollowed(false);
      }
    } catch (error) {
      alert("An error occured");
    }
  };

  return (
    <div className="h-screen p-5">
      <div className="flex bg-gray-200 h-[300px] border-2 border-gray-200 rounded-md shadow-md mb-4 w-full items-center justify-center">
        <div className="mt-12 mr-5 items-center flex h-[170px] shadow-md border-2 border-gray-300 rounded-full w-[170px] justify-center">
          <FaCamera className="cursor-pointer" />
        </div>
        <div className="text-center">
          <h2 className="font-bold text-center text-2xl">
            {user ? user.name : "Guest"}
          </h2>
          <div className="flex">
            <div className="text-center mr-5">
              <h4 className="font-semibold">Followers</h4>
              <p className="">{user.followers ? user.followers : "--"}</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold">Following</h4>
              <p className="">{user.following ? user.following : "--"}</p>
            </div>
          </div>
          {/* {user.profile.bio ? (
            <div className="flex flex-col">
              <p className="">{user.profile.bio}</p>
            </div>
          ) : (
            ""
          )} */}
          <button
            onClick={() => handleFollow()}
            className="p-1 w-full rounded-md bg-blue-600 shadow-sm hover:shadow-md text-white font-bold"
          >
            {followed ? "Unfollow" : "Follow"}
          </button>
        </div>
      </div>
      <div className="bg-gray-400 h-[450px] rounded-md w-full"></div>
    </div>
  );
}

export default OtherProfile;
