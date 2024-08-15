import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import FeedPost from "../ui/FeedPost";
import axios from "../context/axios";

function Explore() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3); // Fixed number of posts per page
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `/posts?page=${currentPage}&limit=${postsPerPage}`
        );
        if (res.status === 200) {
          const data = res.data;
          setPosts((prevPosts) => [...prevPosts, ...data]);
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
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="h-[100vh] p-10">
      <div className="flex flex-col md:flex-row mt-20 h-auto">
        <div className="w-full md:w-3/4">
          <Routes>
            <Route
              path="/"
              element={
                <Feed
                  posts={posts}
                  loading={loading}
                  onLoadMore={handleLoadMore}
                />
              }
            />
            <Route path="/new-post" element={<CreatePost />} />
          </Routes>
        </div>

        {/* Sidebar */}
        <div className="text border-2 border-gray-300 p-3 w-full md:w-1/4 rounded-md hidden md:block">
          <div className="flex flex-col bg-gray-200 w-[150px] rounded-full shadow-md justify-center mx-auto items-center text-center h-[150px] mb-5"></div>
          <div className="flex flex-col gap-2 justify-between">
            <button
              type="button"
              className="text-center p-2 bg-blue-500 text-white"
              onClick={() => navigate("/new-post")}
            >
              Create Post
            </button>
            <button type="button" className="p-2 bg-blue-500 text-white">
              Saved Posts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feed({ posts, loading, onLoadMore }) {
  return (
    <div className="flex flex-col w-full md:w-3/4 p-3 max-h-[630px] items-center">
      <input
        className="font-bold mb-4 bg-transparent border-2 border-gray-400 text-white justify-center p-1 mx-auto rounded-md text-center w-[300px]"
        placeholder="Type here to search..."
      />
      <div className="max-h-[600px] overflow-y-auto">
        {posts && posts.length > 0
          ? posts.map((post, index) => <FeedPost key={index} post={post} />)
          : "No posts available"}
      </div>
      {loading && <div>Loading...</div>}
      <button onClick={onLoadMore} className="mt-4 p-2 bg-blue-500 text-white">
        Load More
      </button>
    </div>
  );
}

function CreatePost() {
  return (
    <div className="flex flex-col w-full md:w-3/4 p-3 max-h-[630px] items-center">
      <form>
        <label>Post title</label>
        <input type="text" placeholder="enter post title..." />
        <label>Content</label>
        <textarea
          className="resize-none w-[200px] h-[150px] bg-gray-300"
          placeholder="enter post content..."
        />
        <input type="submit" value="Post" />
      </form>
    </div>
  );
}

export default Explore;
