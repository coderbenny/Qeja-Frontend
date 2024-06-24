import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../context/axios";
import { FaCamera } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

function OtherProfile() {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [mate, setMate] = useState(null);
  const [followed, setFollowed] = useState(false);

  // Helper function to check if user ID exists in followers array
  const isUserFollowed = (followers, userId) => {
    const followersSet = new Set(followers.map((follower) => follower.id));
    return followersSet.has(userId);
  };

  useEffect(() => {
    const getUser = async (id) => {
      try {
        const token = sessionStorage.getItem("access_token");
        const res = await axios.get(`/users/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.status === 200) {
          const data = res.data;
          setMate(data);
          if (Array.isArray(data.followers)) {
            const isFollowed = isUserFollowed(data.followers, user.id);
            setFollowed(isFollowed);
          }
        }
      } catch (error) {
        console.error("An error occurred", error);
      }
    };
    getUser(id);
  }, [id, user.id]);

  const handleFollow = async () => {
    const token = sessionStorage.getItem("access_token");
    try {
      if (!followed) {
        const res = await axios.post(
          `/follow/${mate.id}`,
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
          // Update followers count in the mate state
          setMate((prevMate) => ({
            ...prevMate,
            followers: [...prevMate.followers, { id: user.id }],
          }));
        }
      } else {
        const res = await axios.delete(`/unfollow/${mate.id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.status === 200) {
          setFollowed(false);
          // Update followers count in the mate state
          setMate((prevMate) => ({
            ...prevMate,
            followers: prevMate.followers.filter(
              (follower) => follower.id !== user.id
            ),
          }));
        }
      }
    } catch (error) {
      alert("An error occurred", error);
    }
  };

  console.log(mate);
  console.log(user);

  return (
    <div className="h-screen p-5">
      <div className="flex bg-gray-200 h-[300px] border-2 border-gray-200 rounded-md shadow-md mb-4 w-full items-center justify-center">
        <div className="mt-12 mr-5 items-center flex h-[170px] shadow-md border-2 border-gray-300 rounded-full w-[170px] justify-center">
          <FaCamera className="cursor-pointer" />
        </div>
        <div className="text-center">
          <h2 className="font-bold text-center text-2xl">
            {mate ? mate.name : "Guest"}
          </h2>
          <div className="flex">
            <div className="text-center mr-5">
              <h4 className="font-semibold">Followers</h4>
              <p>{mate?.followers ? mate.followers.length : "--"}</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold">Following</h4>
              <p>{mate?.following ? mate.following.length : "--"}</p>
            </div>
          </div>
          {mate?.profile && (
            <div className="flex flex-col mb-1">
              <p>{mate.profile.bio}</p>
            </div>
          )}
          <button
            onClick={handleFollow}
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
