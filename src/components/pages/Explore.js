import React from "react";

function Explore() {
  const posts = ["one", "two", "three", "four", "five"];

  return (
    <div className="p-10">
      <h1 className="mt-10">Explore</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-gray-200 h-[600px]">
        <div className="bg-slate-900 w-3/4"></div>
        <div className="bg-black"></div>
      </div>
    </div>
  );
}

export default Explore;
