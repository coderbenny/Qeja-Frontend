import React, { useState, useEffect } from "react";
import HomeSub from "../ui/HomeSub";
import ReactTypingFxDemo from "../ui/ReactTypingEffectDemo";
import FAQ from "./FAQ";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import axios from "../context/axios";
import useAuth from "../hooks/useAuth";

function Home() {
  const { user, setUser } = useAuth();
  const [showHomeSub, setShowHomeSub] = useState(true);

  const handleReadMoreClick = () => {
    setShowHomeSub(!showHomeSub);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const token = sessionStorage.getItem("access_token");
        if (token) {
          const response = await axios.get("/whoami", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.status === 200) {
            const data = response.data;
            setUser({
              id: data.id,
              name: data.name,
              email: data.email,
              token: token,
              role_id: data.role_id,
              profile: data.profile,
              properties: data.properties,
              received_messages: data.received_messages,
              sent_messages: data.sent_messages,
              followers: Array.isArray(data.followers)
                ? data.followers.length
                : 0,
              following: Array.isArray(data.followed)
                ? data.followed.length
                : 0,
            });
          } else {
            throw new Error("Unexpected response status: " + response.status);
          }
        } else {
          throw new Error("User not logged in!");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    if (!user) {
      getUser();
    }
  }, [user, setUser]);

  console.log(user);

  return (
    <>
      <div
        className="flex flex-col items-center justify-center h-screen"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/edited.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <div className="h-[180px]">
          <h1 className="font-bold text-gradient-2 shadow-md tracking-widest text-9xl typing-effect uppercase bg-slate-900">
            Qeja
          </h1>
          <ReactTypingFxDemo />
        </div>
        <div className="flex flex-col w-full items-center">
          <div className="flex md:px-2 w-full sm:w-[550px] mb-4 justify-between h-[30px] items-center border-2 border-teal-500 md:rounded-xl text-gray-300 p-1 text-xs sm:text-sm">
            <p className="px-1 text-white tracking-wider">
              {user
                ? `Welcome ${user.name}`
                : "Register today and be part of a wonderful society"}
            </p>
            <span
              className="flex items-center text-slate-950 px-2 justify-center font-semibold cursor-pointer bg-teal-400 text-xs sm:text-sm rounded-md"
              onClick={handleReadMoreClick}
            >
              {showHomeSub ? "See Less" : "See More"}{" "}
              {showHomeSub ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
            </span>
          </div>
          {showHomeSub && <HomeSub />}
        </div>
      </div>
      <FAQ />
    </>
  );
}

export default Home;
