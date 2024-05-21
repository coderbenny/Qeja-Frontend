import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { MdOutlineComment, MdSaveAlt } from "react-icons/md";
import { FaEye } from "react-icons/fa6";

function FeedPost({ post }) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState("");

  const handleLike = async () => {
    setLiked(!liked);
  };

  const openPost = (id) => {
    navigate(`/posts/${id}`);
  };

  const handleViewProfile = (id)=>{
    navigate(`/profiles/${id}`)
  }

  return (
    <div className="flex flex-col text-white max-h-[350px] ml-10 mr-4 bg-slate-950 shadow-md mb-4 p-6 border-2 border-gray-600 rounded-md">
      <div className="flex mb-1 justify-between">
        <h3 onClick={handleViewProfile} className="font-semibold hover:underline cursor-pointer">{post.user}</h3>
        <MdSaveAlt className="w-6 h-6 mr-5 cursor-pointer" />
      </div>
      <p className="mb-2">{post.body}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 mb-2">
        <img src={post.img1} alt="post" className="h-[150px] w-[300px]"/>
        <img src={post.img2} alt="post" className="h-[150px] w-[300px]"/>
        <img src={post.img3} alt="post" className="h-[150px] w-[300px]"/>
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
