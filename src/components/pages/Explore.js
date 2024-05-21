import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import FeedPost from "../ui/FeedPost";
import axios from "../context/axios";
// import PostDetails from "../ui/PostDetails";

function Explore() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get("/posts");
        if (res.status === 200) {
          const data = res.data;
          setPosts(data);
        }
      } catch (error) {
        console.log("An error occurred:", error);
      }
    };

    getPosts();
  }, []);

  console.log(posts);

  // const posts = [
  //   {
  //     id: 1,
  //     user: "Jane Doe",
  //     body: "Latest houses in Nairobi",
  //     pics: ["pic1", "pic2"],
  //   },
  //   {
  //     id: 2,
  //     user: "Sam Kent",
  //     body: "Cheapest houses",
  //     pics: ["pic1", "pic2"],
  //   },
  //   {
  //     id: 3,
  //     user: "Wendy Sandra",
  //     body: "New apartments in nairobi west",
  //     pics: ["pic1", "pic2", "pic3"],
  //   },
  //   {
  //     id: 4,
  //     user: "Sidney Martin",
  //     body: "The newest houses",
  //     pics: ["pic1", "pic2", "pic3"],
  //   },
  //   {
  //     id: 5,
  //     user: "Candy Jones",
  //     body: "Projects that i have going on",
  //     pics: ["pic1", "pic2", "pic3"],
  //   },
  // ];

  return (
    <div className="p-10 bg-black text=white">
      <div className="flex mt-20 h-[630px]">
        <Routes>
          <Route path="/" element={<Feed posts={posts} />} />
        </Routes>

        {/* Sidebar */}
        <div className="text bg-white p-3 w-1/4 rounded-md">
          <div className="flex flex-col border-2 border-blue-400 rounded-md shadow-md justify-center items-center text-center h-[150px] mb-5">
            <h1 className="font-bold text-2xl text-blue-400">Some Information Here</h1>
          </div>
          <div className="flex flex-col gap-2 justify-between">
          <button type="button" className="p-2 bg-blue-500 text-white">Create Post</button>
          <button type="button" className="p-2 bg-blue-500 text-white">Saved Posts</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feed({ posts }) {
  return (
    <div className="flex flex-col w-3/4 p-3 max-h-[630px] items-center">
      <input className="font-bold mb-4 bg-transparent border-2 border-gray-500 text-white justify-center p-1 mx-auto rounded-md text-center w-[300px]" placeholder="Type here to search..." /> 
    <div className="max-h-[600px] overflow-y-auto"> 
      {posts
        ? posts.map((post, index) => <FeedPost key={index} post={post} />)
        : "Loading"}
    </div>
    </div>
  );
}

export default Explore;
