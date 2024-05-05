import React from "react";

function UserProfile() {
  return (
    <div className="h-screen">
      {/* <h1 className="font-bold text-black text-2xl mt-30">User Profile</h1> */}

      <div className="flex">
        {/* Left part */}
        <div className="p-3 flex flex-col bg-slate-950 w-1/4 h-screen">
          <div className="bg-blue-600">
            <div className="rounded-full bg-white h-50 w-50 mt--[100px]"></div>
          </div>

          <div className="bg-white text-black flex flex-col">
            <div className="flex">
              <button type="button">Message</button>
              <button type="button">Follow</button>
            </div>
            <h3 className="font-bold">Bio</h3>
            <p className="">Lorem ipsul dolor specul dos iter ipsum mara.</p>
          </div>
        </div>

        {/* Right part */}
        <div className="bg-slate-500 w-3/4 h-screen"></div>
      </div>
    </div>
  );
}

export default UserProfile;
