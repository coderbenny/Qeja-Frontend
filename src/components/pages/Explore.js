import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import FeedPost from "../ui/FeedPost";
import axios from "../context/axios";
// import PostDetails from "../ui/PostDetails";

function Explore() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3); // Fixed number of posts per page
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/posts?page=${currentPage}&limit=${postsPerPage}`);
        if (res.status === 200) {
          const data = res.data;
          setPosts(prevPosts => [...prevPosts, ...data]);
        }
      } catch (error) {
        console.log("An error occurred:", error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, [currentPage]); // Trigger fetch when currentPage changes

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div className="p-10 bg-black text=white">
      <div className="flex mt-20 h-[630px]">
        <Routes>
          <Route path="/" element={<Feed posts={posts} loading={loading} onLoadMore={handleLoadMore} />} />
        </Routes>

        {/* Sidebar */}
        <div className="text border-2 border-gray-600 p-3 w-1/4 rounded-md hiddden md:display-block">
          <div className="flex flex-col bg-gray-400 rounded-md shadow-md justify-center items-center text-center h-[150px] mb-5">
            <h1 className="font-bold text-4xl text-white">Some Information Here</h1>
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

function Feed({ posts, loading, onLoadMore }) {
  return (
    <div className="flex flex-col w-3/4 p-3 max-h-[630px] items-center">
      <input className="font-bold mb-4 bg-transparent border-2 border-gray-500 text-white justify-center p-1 mx-auto rounded-md text-center w-[300px]" placeholder="Type here to search..." />
      <div className="max-h-[600px] overflow-y-auto">
        {posts && posts.length > 0
          ? posts.map((post, index) => <FeedPost key={index} post={post} />)
          : "No posts available"}
      </div>
      {loading && <div>Loading...</div>}
      <button onClick={onLoadMore} className="mt-4 p-2 bg-blue-500 text-white">Load More</button>
    </div>
  );
}

export default Explore;
