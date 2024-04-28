import React from "react";
import { NavLink } from "react-router-dom";

function Header(){
    return(
        <div className="flex justify-between p-1 h-[50px] w-full bg-slate-950 text-white items-center">
            <h1 className="ml-3 font-bold text-2xl tracking-wider">Qeja</h1>
            <div className="flex justify-between">
                <p className="mr-5 cursor-pointer">Rentals</p> 
                <p className="mr-5 cursor-pointer">Roommates</p> 
                <p className="mr-5 cursor-pointer">Property Owners</p> 
                <p className="mr-5 cursor-pointer">Community Chat</p> 
            </div>
            <button className="tracking-wider mr-3 bg-blue-700 text-white p-1 rounded-sm px-3" type="button">Login</button>
            {/* <button className="p-1 px-3 bg-slate-700 rounded-md hover:bg-slate-800 border-2 border-gray-500 hover:border-gray-300" type="button">Register</button> */}
        </div>
    )
}

export default Header;