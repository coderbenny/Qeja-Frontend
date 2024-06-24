import React, { useState, useEffect } from "react";
import { FaCamera } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import EditProfile from "../ui/EditProfile";
import axios from "../context/axios";
import CustomTabPanel from "../ui/CustomTabPanel";

function UserProfile() {
  const { user } = useAuth();
  const [profile, setProfile] = useState({});
  const [editing, setEditing] = useState(false);

  console.log(user);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const token = sessionStorage.getItem("access_token");
        if (token) {
          const response = await axios.get(`/users/${user.id}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.status === 200) {
            const data = response.data;
            setProfile(data.profile);
          } else {
            throw new Error("Unexpected response status: " + response.status);
          }
        } else {
          throw new Error("User not logged in!");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
    getUserProfile();
  }, [user.id]);

  const handleEditClick = () => {
    setEditing(true);
  };

  return (
    <div className="h-full p-5 bg-gradient-to-r from-blue-500 to-indigo-600">
      {!editing ? (
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row bg-white h-auto md:h-[300px] border-2 border-gray-300 rounded-md shadow-lg mb-4 w-full items-center justify-center p-4">
            <div className="flex flex-col mr-0 md:mr-3 mt-4 md:mt-12 items-center justify-center">
              <div className="relative mb-2 items-center flex mx-auto h-[150px] shadow-md border-2 border-gray-300 rounded-full w-[150px] justify-center overflow-hidden bg-gray-200">
                <img
                  src={profile?.profile_pic || "/default-profile.png"}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
                <FaCamera className="absolute bottom-2 right-2 text-gray-700 cursor-pointer" />
              </div>
              <button
                onClick={handleEditClick}
                className="p-1 w-full rounded-md bg-blue-600 shadow-sm hover:shadow-md text-white font-bold"
              >
                Edit Profile
              </button>
            </div>

            <div className="text-center items-center mt-4 md:mt-0">
              <div className="flex items-center w-full justify-between">
                <h2 className="font-bold text-2xl text-gray-800 capitalize">
                  {user?.name || "Guest"}
                </h2>
              </div>
              <div className="flex mb-2">
                <div className="text-center mr-5">
                  <h4 className="font-semibold text-gray-700">Followers</h4>
                  <p className="text-gray-600">{user?.followers || "--"}</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-700">Following</h4>
                  <p className="text-gray-600">{user?.following || "--"}</p>
                </div>
              </div>
              <div className="flex flex-col mb-2 w-full md:w-[250px]">
                <p className="text-left text-gray-700">{profile?.bio || ""}</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 h-auto md:h-[250px] rounded-md w-full shadow-md p-4">
            <CustomTabPanel />
          </div>
        </div>
      ) : (
        <EditProfile
          profile={profile}
          setProfile={setProfile}
          setEditing={setEditing}
        />
      )}
    </div>
  );
}

export default UserProfile;
