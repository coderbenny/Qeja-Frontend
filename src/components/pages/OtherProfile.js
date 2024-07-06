import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "../context/axios";
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

  return (
    <div className="min-h-screen p-4 bg-gray-100 mt-12">
      <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-md p-4 md:flex-row md:p-8 md:max-w-4xl mx-auto">
        <img
          src={mate?.profile?.profile_pic}
          alt="profile"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-gray-300 object-cover shadow-md"
        />
        <div className="mt-4 md:mt-0 md:ml-8 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold capitalize">
            {mate ? mate.name : "Guest"}
          </h2>
          <div className="flex justify-center md:justify-start space-x-8 my-4">
            <div>
              <h4 className="font-semibold">Followers</h4>
              <p className="text-center">
                {mate?.followers ? mate.followers.length : "--"}
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Following</h4>
              <p className="text-center">
                {mate?.following ? mate.following.length : "--"}
              </p>
            </div>
          </div>
          {mate?.profile && <p className="text-gray-700">{mate.profile.bio}</p>}
          <div className="flex gap-2 items-center">
            <button
              onClick={handleFollow}
              className={`mt-4 p-2 w-full md:w-auto rounded-md bg-blue-600 text-white font-bold ${
                followed ? "hover:bg-blue-700" : "hover:bg-blue-500"
              } shadow-sm`}
            >
              {followed ? "Unfollow" : "Follow"}
            </button>
            <NavLink
              to="/room-mates"
              className="px-3 mt-4 p-2 w-full md:w-auto rounded-md bg-blue-600 text-white font-bold hover:bg-blue-500 shadow-sm"
            >
              Back
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherProfile;
