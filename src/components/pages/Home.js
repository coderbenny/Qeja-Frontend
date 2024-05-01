import React, { useState, useEffect } from "react";
import HomeSub from "../ui/HomeSub";
import ReactTypingFxDemo from "../ui/ReactTypingEffectDemo";
import FAQ from "./FAQ";

import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import useAuth from "../hooks/useAuth";
import axios from "../context/axios";

function Home() {
  const { auth, setAuth } = useAuth();

  const [showHomeSub, setShowHomeSub] = useState(true);

  const handleReadMoreClick = () => {
    setShowHomeSub(!showHomeSub);
  };

  console.log(auth);

  useEffect(() => {
    const getUser = async (setAuth) => {
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
            setAuth({
              name: data.name,
              email: data.email,
              token: token,
              role_id: data.role_id,
            });
          } else {
            throw new Error("Unexpected response status: " + response.status);
          }
        } else {
          throw new Error("Access token not found in sessionStorage");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
    getUser();
  }, []);

  return (
    <>
      <div
        className="flex flex-col items-center justify-center h-screen"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/edited.jpg)`,
          backgroundSize: "cover",
          // backgroundAttachment: "fixed", // Make the background image fixed
        }}
      >
        <div className="h-[180px]">
          <h1 className="font-bold text-gradient-2 shadow-md tracking-widest text-9xl typing-effect uppercase bg-slate-900">
            Qeja
          </h1>
          <ReactTypingFxDemo />
        </div>
        <div className="flex flex-col w-full items-center">
          <div className="flex px-2 w-[550px] mb-4 justify-between h-[30px] items-center border-2 border-teal-500 rounded-xl text-gray-300 p-1 text-sm">
            <p className="px-1 text-white tracking-wider">
              {auth
                ? `Welcome ${auth.name}`
                : "Register today and be part of a wonderful society"}
            </p>
            <span
              className="flex items-center font-semibold text-slate-950 px-2 juatify-center font-semibold cursor-pointer bg-teal-400 text-sm rounded-md"
              onClick={handleReadMoreClick}
            >
              {showHomeSub ? (
                <>
                  See Less <IoIosArrowDropup />
                </>
              ) : (
                <>
                  See More <IoIosArrowDropdown />
                </>
              )}
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
