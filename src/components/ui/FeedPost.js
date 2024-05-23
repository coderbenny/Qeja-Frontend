import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { MdOutlineComment, MdSaveAlt } from "react-icons/md";
import { FaEye } from "react-icons/fa6";

function FeedPost({ post }) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const handleLike = async () => {
    setLiked(!liked);
  };

  const openPost = (id) => {
    navigate(`/posts/${id}`);
  };

  const handleViewProfile = (id) => {
    navigate(`/profiles/${id}`);
  };

  const handleViewPost = (id) => {
    navigate(`/posts/${id}`);
  };

  return (
    <div className="flex flex-col text-white max-h-[400px] bg-slate-950 shadow-md mb-4 p-6 border-2 border-gray-600 rounded-md w-full md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto md:mx-10 lg:mx-20">
      <div className="flex mb-1 justify-between">
        <h3 onClick={() => handleViewProfile(post.userId)} className="font-semibold hover:underline cursor-pointer">
          {post.user}
        </h3>
        <MdSaveAlt className="w-6 h-6 cursor-pointer" />
      </div>
      <p className="mb-2">{post.body}</p>
      <div className="flex flex-col md:flex-row md:space-x-2 mb-4">
        {post.img1 && <img onClick={() => handleViewPost(post.id)} src={post.img1} alt="post" className="h-[200px] w-full md:w-[calc(100%/3)] object-cover cursor-pointer mb-2 md:mb-0" />}
        {post.img2 && <img onClick={() => handleViewPost(post.id)} src={post.img2} alt="post" className="h-[200px] w-full md:w-[calc(100%/3)] object-cover cursor-pointer hidden md:block" />}
        {post.img3 && <img onClick={() => handleViewPost(post.id)} src={post.img3} alt="post" className="h-[200px] w-full md:w-[calc(100%/3)] object-cover cursor-pointer hidden md:block" />}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center cursor-pointer">
          <FaEye className="h-6 w-6" />
          <p className="text-sm">100</p>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={handleLike}
        >
          {liked ? (
            <FcLike className="h-6 w-6" />
          ) : (
            <FcLikePlaceholder className="h-6 w-6" />
          )}
          <p className="text-sm">100</p>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => openPost(post.id)}
        >
          <MdOutlineComment className="h-6 w-6" />
          <p className="text-sm">Comments</p>
        </div>
      </div>
    </div>
  );
}

export default FeedPost;
