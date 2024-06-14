import React, { useContext, useState } from "react";
import axios from "../context/axios";
import { AuthContext } from "../context/AuthContext";

function EditProfile({ profile, setEditing, setProfile }) {
  const { setUser } = useContext(AuthContext);

  const [name, setName] = useState(profile?.name || "");
  const [bio, setBio] = useState(profile?.bio || "");
  const [location, setLocation] = useState(profile?.location || "");
  const [profilePic, setProfilePic] = useState(profile?.profile_pic || "");

  const handleSave = async (e) => {
    e.preventDefault();

    const updatedFields = {};
    if (name !== profile?.name) updatedFields.name = name;
    if (bio !== (profile?.bio || "")) updatedFields.bio = bio;
    if (location !== (profile?.location || ""))
      updatedFields.location = location;
    if (profilePic !== (profile?.profile_pic || ""))
      updatedFields.profile_pic = profilePic;

    if (Object.keys(updatedFields).length === 0) {
      alert("No changes made");
      setEditing(false);
      return;
    }

    try {
      const user_id = profile.id;
      const res = await axios.patch(`/users/${user_id}`, updatedFields);
      if (res.status === 200) {
        const updatedProfile = res.data;
        setProfile(updatedProfile);
        setUser((prevUser) => ({
          ...prevUser,
          profile: updatedProfile,
        }));
        alert("Profile updated successfully");
        setEditing(false);
      }
    } catch (error) {
      console.log("An error occurred", error);
      alert("An error occurred");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="flex flex-col items-center bg-white border-2 border-gray-300 rounded-md shadow-lg mb-4 w-full max-w-md p-4 mt-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Profile</h2>
        <form
          className="flex flex-col justify-center w-full"
          onSubmit={handleSave}
        >
          <div className="flex flex-col w-full">
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
                type="submit"
                className="p-2 w-full mr-2 rounded-md bg-green-600 shadow-sm hover:shadow-md text-white font-bold"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="p-2 w-full ml-2 rounded-md bg-red-600 shadow-sm hover:shadow-md text-white font-bold"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
