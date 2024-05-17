import React from "react";
// import { FaEdit } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { FaCamera } from "react-icons/fa";

function UserProfile() {
  const { user } = useAuth();
  return (
    <div className="h-screen p-5">
      <div className="flex bg-gray-200 h-[300px] border-2 border-gray-200 rounded-md shadow-md mb-4 w-full items-center justify-center">
        <div className="flex flex-col mr-3 mt-12 items-center justify-center">
          <div className="flex-col mb-2 items-center flex mx-auto h-[150px] shadow-md border-2 border-gray-300 rounded-full w-[150px] justify-center">
            <FaCamera className="cursor-pointer" />
          </div>{" "}
          <button className="p-1 w-full rounded-md bg-blue-600 shadow-sm hover:shadow-md text-white font-bold">
            Edit Profile
          </button>
        </div>

        <div className="text-center items-center">
          <div className="flex items-center w-full justify-between">
            <h2 className="font-bold text-2xl">{user ? user.name : "Guest"}</h2>
            {/* {user ? <FaEdit /> : ""} */}
          </div>
          <div className="flex mb-2">
            <div className="text-center mr-5">
              <h4 className="font-semibold">Followers</h4>
              <p className="">{user.followers ? user.followers : "--"}</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold">Following</h4>
              <p className="">{user.following ? user.following : "--"}</p>
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <p className="">{user.profile.bio}</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-400 h-[450px] rounded-md w-full"></div>
    </div>
  );
}

export default UserProfile;
