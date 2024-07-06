import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  TextField,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function Inbox() {
  const { user } = useContext(AuthContext);
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    // Load the conversation for the selected chat
    // For demonstration purposes, using a static conversation
    setMessages([
      { sender: chat.sender.name, content: chat.content },
      { sender: "Me", content: "Hello! How are you doing" },
    ]);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      const newMessage = { sender: "Me", content: message };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      <Box className="w-full md:w-1/3 bg-gray-200 h-full p-2 overflow-y-auto">
        <h2 className="font-bold text-lg mb-2 text-center text-blue-500">
          Messages
        </h2>
        <List>
          {user?.received_messages.length > 0 ? (
            user.received_messages.map((m, index) => (
              <React.Fragment key={index}>
                <ListItem button onClick={() => handleChatSelect(m)}>
                  <ListItemText primary={m.sender.name} secondary={m.content} />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))
          ) : (
            <p className="text-center mt-5">No messages yet</p>
          )}
        </List>
      </Box>
      <Box className="w-full md:w-2/3 bg-white h-full flex flex-col">
        {selectedChat ? (
          <>
            <Box className="flex-grow p-4 overflow-y-auto">
              <h3 className="font-bold text-xl mb-2">
                {selectedChat.sender.name}
              </h3>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 p-2 rounded-lg ${
                    msg.sender === "Me"
                      ? "bg-blue-500 text-white self-end"
                      : "bg-gray-300 text-black self-start"
                  }`}
                >
                  <p>{msg.content}</p>
                </div>
              ))}
            </Box>
            <Box className="p-2 flex items-center border-t">
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Type a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") handleSendMessage();
                }}
              />
              <IconButton color="primary" onClick={handleSendMessage}>
                <SendIcon />
              </IconButton>
            </Box>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-center text-gray-500">
              Select a chat to start a conversation
            </p>
          </div>
        )}
      </Box>
    </div>
  );
}

export default Inbox;
