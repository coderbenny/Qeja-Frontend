import React,{useState,useEffect} from "react";
import {useParams, NavLink} from "react-router-dom";
import axios from "../context/axios";
import Comments from "./Comments";

function PostDetails() {
  const{id}=useParams()
  const[post,setPost]=useState('')

  useEffect(()=>{
    const getpost = async(id)=>{
      try{
        const res = await axios.get(`/posts/${id}`)
        if (res.status === 200){
          const data = res.data
          setPost(data)
        }
      }catch(error){
        console.log("An error occured:",error)
      }
    }
    getpost(id)
  },[])


  return (
    <div className="flex flex-col  p-10 items-center h-screen bg-black text-white">
      <div className="flex items-center justify-between mt-20">
        <h1 className="font-bold text-2xl">PostDetails</h1>
        <NavLink to="/explore" className="text-left p-1 text-white rounded-md">Back</NavLink>
      </div>
      <div className="grid grid-cols-1">
        <div className="flex flex-col mb-2">
          <h3 className="font-bold ho ver:text-underline mb-2">{post.user}</h3>
          <h3 className="mb-2">{post.body}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 mb-2">
            <img src={post.img1} alt="post" className="h-[200px] w-[350px] cursor-pointer"/>
            <img src={post.img2} alt="post" className="h-[200px] w-[350px] cursor-pointer"/>
            <img src={post.img3} alt="post" className="h-[200px] w-[350px] cursor-pointer"/>
          </div>
        </div>
        <Comments/>
      </div>
    </div>
  );
}

export default PostDetails;
