import React from "react";
import { Routes, Route } from "react-router-dom";
import FeedPost from "../ui/FeedPost";
// import PostDetails from "../ui/PostDetails";

function Explore() {
  const posts = [
    {
      id: 1,
      user: "Jane Doe",
      body: "Latest houses in Nairobi",
      pics: ["pic1", "pic2"],
    },
    {
      id: 2,
      user: "Sam Kent",
      body: "Cheapest houses",
      pics: ["pic1", "pic2"],
    },
    {
      id: 3,
      user: "Wendy Sandra",
      body: "New apartments in nairobi west",
      pics: ["pic1", "pic2", "pic3"],
    },
    {
      id: 4,
      user: "Sidney Martin",
      body: "The newest houses",
      pics: ["pic1", "pic2", "pic3"],
    },
    {
      id: 5,
      user: "Candy Jones",
      body: "Projects that i have going on",
      pics: ["pic1", "pic2", "pic3"],
    },
  ];

  return (
    <div className="p-10">
      <div className="flex mt-20 h-[630px]">
        <Routes>
          <Route path="/" element={<Feed posts={posts} />} />
        </Routes>

        {/* Sidebar */}
        <div className="border-2 border-gray-300 w-1/4 rounded-md"></div>
      </div>
    </div>
  );
}

function Feed({ posts }) {
  return (
    <div className="w-3/4 p-3 max-h-[630px] overflow-y-auto">
      {posts.map((post, index) => (
        <FeedPost key={index} post={post} />
      ))}
    </div>
  );
}

export default Explore;
