import { Avatar, IconButton, InputAdornment, TextField } from "@mui/material";
import { AttachFile, EmojiEmotions } from "@mui/icons-material";
import React from "react";

import  ChatSidebar from "../ui/ChatSidebar"


function CommChat() {
  return (
    <div
      className="flex h-screen"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/edited.jpg)`,
        backgroundSize: "cover",
      }}
    >
      {/* Overall Chat Sidebar */}
      <ChatSidebar />

      {/* Open Chat Content */}
      <div
        className="w-3/4 p-4 mt-16"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)", // Adjust the alpha value (last parameter) for transparency
        }}
      >
        <div className="flex flex-col items-center space-y-2 mb-4">
          <Avatar />
          <h2 className="text-lg font-semibold mb-4 text-white">John Doe</h2>
        </div>
        <div className="flex flex-col space-y-4">
          {/* Chat Bubble */}
          <div className="bg-white rounded-lg p-2">
            <p>Hey there! 😊</p>
          </div>
          <div className="bg-white rounded-lg p-2">
            <p>I'm doing great, thanks for asking!</p>
          </div>
          <div className="bg-white rounded-lg p-2">
            <p>Yes, it looks awesome! 👍</p>
          </div>
          <div className="bg-white rounded-lg p-2">
            <p>Sure, let me know when you're free.</p>
          </div>
        </div>
        {/* Input field with upload and emoji options */}
        <TextField
          variant="outlined"
          fullWidth
          className="bg-white sticky bottom-0"
          placeholder="Type a message..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <AttachFile />
                </IconButton>
                <IconButton>
                  <EmojiEmotions />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
}

export default CommChat;
