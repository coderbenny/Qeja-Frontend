import React from "react";

function HomeSub(){
    return(
        <div className="w-[550px] text-center rounded-bl-md rounded-br-md p-1">
            <h2 className="text-gradient text-4xl font-bold mb-2 tracking-widest">Discover. Rent. Connect</h2>
            <p className="text-gray-200 mb-5 whitespace-normal">Your premier destination for seamless housing solutions. <br/>Whether you are searching for your dream home, seeking a compatible roommate, or ready to rent out your property, we are here to simplify the process and connect you with like-minded individuals.</p>
            <div className="flex items-center text-white justify-center">
                <button type="button"  className="p-3 rounded-md px-4 bg-blue-800 mr-10 hover:bg-blue-600 ">Get Started</button>
                <button type="button"  className="p-3 px-4 border-2 border-blue-600 hover:bg-blue-600 rounded-md">Learn More</button>
            </div>
        </div>
    )
}

export default HomeSub;