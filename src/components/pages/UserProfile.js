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

  const handleCancelEdit = () => {
    setEditing(false);
  };

  return (
    <div className="min-h-[100vh] p-4 bg-gray-100 mt-12">
      {!editing ? (
        <>
          <div className="flex flex-col items-center bg-white shadow-md rounded-md p-4 md:flex-row md:p-8 md:max-w-4xl mx-auto">
            <div className="md:w-1/3 flex flex-col items-center justify-center">
              <div className="relative mb-2 flex items-center justify-center mx-auto h-[200px] md:h-[250px] shadow-md border-2 border-gray-300 rounded-full w-[200px] md:w-[250px] overflow-hidden bg-gray-200">
                <img
                  src={
                    profile?.profile_pic || "https://via.placeholder.com/150"
                  }
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
                <FaCamera className="absolute bottom-2 right-2 text-gray-700 cursor-pointer" />
              </div>
              <button
                onClick={handleEditClick}
                className="p-1 rounded-md bg-blue-600 text-white font-bold mt-4 md:mt-2 hover:bg-blue-700 shadow-sm"
              >
                Edit Profile
              </button>
            </div>

            <div className="md:w-2/3 mt-4 md:mt-0 md:ml-8 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold capitalize">
                {user?.name || "Guest"}
              </h2>
              <div className="flex justify-center md:justify-start space-x-8 my-4">
                <div>
                  <h4 className="font-semibold">Followers</h4>
                  <p className="text-center">{user?.followers || "--"}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Following</h4>
                  <p className="text-center">{user?.following || "--"}</p>
                </div>
              </div>
              <div className="mt-4 w-full">
                <p className="text-left text-gray-700">{profile?.bio || ""}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 h-auto md:h-[250px] rounded-md w-full shadow-md mt-4 p-4">
            <CustomTabPanel />
          </div>
        </>
      ) : (
        <div className="mt-4 md:max-w-4xl mx-auto">
          <EditProfile
            setEditing={setEditing}
            profile={profile}
            setProfile={setProfile}
            onCancel={handleCancelEdit}
          />
        </div>
      )}
    </div>
  );
}

export default UserProfile;
