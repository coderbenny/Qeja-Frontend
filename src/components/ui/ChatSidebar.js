import React from "react";
import Avatar from "../ui/Avatar";

function ChatSidebar(){
    return(
        <div className="bg-black w-1/4 p-4 mt-16">
            <h2 className="text-lg text-white font-semibold mb-4">Chats</h2>
            <div className="flex flex-col space-y-4">
            {/* Chat Bubble */}
            <div className="flex bg-[#0D47A1] text-white items-center rounded-lg p-2">
                <Avatar />
                <div className="ml-3">
                    <h3 className="">John Doe</h3>
                    <p className="text-sm">Hey, how's it going?</p>
                </div>
            </div>
            
            </div>
      </div>
    )
}

export default ChatSidebar;