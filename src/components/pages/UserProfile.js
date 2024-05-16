import React from "react";
import { FaEdit } from "react-icons/fa";

function UserProfile() {
  return (
    <div className="h-screen p-5">
      <div className="flex bg-gray-200 h-[300px] border-2 border-gray-200 rounded-md shadow-md mb-4 w-full items-center justify-center">
        <div className="mt-12 mr-5 h-[170px] bg-gray-400 rounded-full w-[170px] justify-center"></div>
        <div className="text-center">
          <div className="flex items-center w-full justify-between">
            <h2 className="font-bold text-2xl">John Doe</h2>
            <FaEdit />
          </div>
          <div className="flex">
            <div className="text-center mr-5">
              <h4 className="font-semibold">Followers</h4>
              <p className="">100</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold">Following</h4>
              <p className="">100</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-400 h-[450px] rounded-md w-full"></div>
    </div>
  );
}

export default UserProfile;
