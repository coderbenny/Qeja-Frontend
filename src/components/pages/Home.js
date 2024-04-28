import React, { useState } from "react";
import HomeSub from "../ui/HomeSub";
import ReactTypingFxDemo from "../ui/ReactTypingEffectDemo";
import Discover from "./Discover";

import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";

function Home() {
  const [showHomeSub, setShowHomeSub] = useState(true);

  const handleReadMoreClick = () => {
    setShowHomeSub(!showHomeSub);
  };

  return (
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
          <p className="px-1 text-white" >
            Register today and be part of a wonderful society
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

        <Discover/>
      </div>
    </div>
  );
}

export default Home;
