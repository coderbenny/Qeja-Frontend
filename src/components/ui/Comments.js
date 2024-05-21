import React from "react";
// import {useParams}from "react-router-dom";
// import axios from "../context/axios";

function Comments(){
    // const{id}=useParams()
    // const[post,setPost]=useState({})

    // useEffect(()=>{
    //     const getPost = async(id)=>{
    //         try{
    //             const res = await axios.get(`/posts/${id}`)
    //             if (res.status === 200){
    //                 const data = await res.data
    //                 setPost(data)
    //             }
    //         }catch(error){
    //             console.log("An error occured:",error)
    //         }
    //     }
    //     getPost(id)
    // },[])

    const comments = [
        {"user_id":1,"body":"I love this post", "user":"Benny Hinn"},
        {"user_id":2,"body":"You have done some awesome work there, Kudos", "user":"Sam John"},
        {"user_id":2,"body":"Nowadays ypu have really mastered this thing of content creation.", "user":"Sam John"},
        {"user_id":1,"body":"Some fantastic ideas right there. I love your creativity. Keep it up", "user":"Benny Hinn"},
        {"user_id":1,"body":"Some fantastic ideas right there. I love your creativity. Keep it up", "user":"Benny Hinn"},
        {"user_id":1,"body":"Some fantastic ideas right there. I love your creativity. Keep it up", "user":"Benny Hinn"},
    ]

    return(
        <div className="flex flex-col items-center justify-center">
          <h3 className="mb-2 text-center text-xl font-bold trackind-wider">Comments</h3>
          <div className="flex gap-3">
          <div className="flex flex-col w-[400px] mt-3">
                <textarea className="resize-none h-[100px] w-full mb-3"></textarea>
                <button type="button" className="w-full bg-blue-500 text-white">Comment</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 overflow-y-auto p-2 max-h-[300px]">
                {comments && comments.map((comment,index)=>(
                    <div key={index} className="p-2 border-2 rounded-md border-gray-200 bg-slate-950 mb text-sm mb-3 w-[300px]">
                        <div className="flex">
                            <h5 className="text-md">Posted By:</h5>
                            <p className=""> {comment.user}</p>
                        </div>
                            <hr className="mb-1"/>
                        <p className="">{comment.body}</p>
                    </div>
                ))}
            </div>
            {/* Commenting */}
          </div>
        </div>
    )
}

export default Comments;