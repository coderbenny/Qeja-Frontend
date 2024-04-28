import React from "react";
import { MdOutlineMapsHomeWork } from "react-icons/md";
function Header(){
    return(
        <div className="flex justify-between p-1 h-[50px] w-full bg-slate-950 text-white items-center">
            <h1 className="flex items-center ml-3 font-bold text-2xl tracking-wider text-teal-400 "><MdOutlineMapsHomeWork className="mr-1"/> Qeja</h1>
            <div className="flex justify-between">
                <p className="mr-5 hover:text-blue-300 font-semibold cursor-pointer">Rentals</p> 
                <p className="mr-5 hover:text-blue-300 font-semibold cursor-pointer">Roommates</p> 
                <p className="mr-5 hover:text-blue-300 font-semibold cursor-pointer">Property Owners</p> 
                <p className="mr-5 hover:text-blue-300 font-semibold cursor-pointer">Community Chat</p> 
            </div>
            <button className="tracking-wider mr-3 border-2 border-slate-400 text-white hover:bg-teal-400 hover:text-gray-800 font-semibold p-1 rounded-sm px-3" type="button">Login</button>
            {/* <button className="p-1 px-3 bg-slate-700 rounded-md hover:bg-slate-800 border-2 border-gray-500 hover:border-gray-300" type="button">Register</button> */}
        </div>
    )
}

export default Header;