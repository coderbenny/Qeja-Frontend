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
    navigate(`/explore/posts/${id}`);
  };

  return (
    <div className="flex flex-col text-white max-h-[300px] ml-10 shadow-md mb-4 p-6 border-2 border-gray-300 rounded-md">
      <div className="flex mb-1 justify-between">
        <h3 className="font-semibold">{post.user}</h3>
        <MdSaveAlt className="w-6 h-6 mr-5 cursor-pointer" />
      </div>
      <p className="mb-2">{post.body}</p>
      {/* <div className="flex gap-1 h-[200px] mb-2">
        {post.img1 ? (
          <img
            src={img1}
            alt={post.img1}
            className="h-[150px] w-[300px] bg-gray-500 shadow-md"
          />
        ) : (
          ""
        )}
        {post.img2 ? (
          <img
            src={img2}
            alt={post.img2}
            className="h-[150px] w-[300px] bg-gray-500 shadow-md"
          />
        ) : (
          ""
        )}
        {post.img3 ? (
          <img
            src={img3}
            alt={post.img3}
            className="h-[150px] w-[300px] bg-gray-500 shadow-md"
          />
        ) : (
          ""
        )}

        {/* {post.pics.length > 0
          ? post.pics.map((pic, index) => (
              <img
                key={index}
                src="example"
                alt={post.pic}
                className="h-[150px] w-[300px] bg-gray-500 shadow-md"
              />
            ))
          : ""} */}
      {/* </div> */}
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
            <FcLikePlaceholder className="h-6 w-6" />
          ) : (
            <FcLike className="h-6 w-6" />
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
