import React, { useState } from "react";

function EditProfile({ user, setEditing }) {
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.profile?.bio || "");
  const [location, setLocation] = useState(user.profile?.location || "");
  const [profilePic, setProfilePic] = useState(user.profile?.profile_pic || "");

  const handleSave = () => {
    // Add logic to save profile details to the server
    setEditing(false);
  };

  return (
    <div className="h-screen p-5 bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="flex flex-col items-center bg-white border-2 border-gray-300 rounded-md shadow-lg mb-4 w-full p-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Profile</h2>
        <div className="flex flex-col w-full max-w-md">
          <label className="mb-2 text-gray-600">Name</label>
          <input
            className="mb-4 p-2 border-2 border-gray-300 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="mb-2 text-gray-600">Bio</label>
          <textarea
            className="mb-4 p-2 border-2 border-gray-300 rounded-md"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <label className="mb-2 text-gray-600">Location</label>
          <input
            className="mb-4 p-2 border-2 border-gray-300 rounded-md"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <label className="mb-2 text-gray-600">Profile Picture URL</label>
          <input
            className="mb-4 p-2 border-2 border-gray-300 rounded-md"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          />
          <div className="flex justify-between">
            <button
              onClick={handleSave}
              className="p-2 w-full mr-2 rounded-md bg-green-600 shadow-sm hover:shadow-md text-white font-bold"
            >
              Save
            </button>
            <button
              onClick={() => setEditing(false)}
              className="p-2 w-full ml-2 rounded-md bg-red-600 shadow-sm hover:shadow-md text-white font-bold"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
