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
              followers: data.followers,
              following: data.following,
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
  }, []);

  return (
    <>
      <div
        className="flex flex-col items-center justify-center min-h-screen"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/edited.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <div className="h-[180px] sm:h-[300px]">
          <h1 className="font-bold mt-20 text-gradient-2 shadow-md text-6xl sm:text-9xl typing-effect uppercase bg-slate-900 text-center">
            Qeja
          </h1>
          <ReactTypingFxDemo />
        </div>
        <div className="flex flex-col w-full items-center px-4 sm:px-0">
          <div className="flex w-full max-w-[550px] mb-4 justify-between h-[30px] items-center border-2 border-teal-500 rounded-xl text-gray-300 p-1 text-sm">
            <p className="px-1 text-white tracking-wider text-center sm:text-left">
              {user
                ? `Welcome ${user.name}`
                : "Register today and be part of a wonderful society"}
            </p>
            <span
              className="flex items-center text-slate-950 px-2 juatify-center font-semibold cursor-pointer bg-teal-400 text-sm rounded-md"
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
