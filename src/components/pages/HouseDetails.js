import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
} from "@mui/material";
import axios from "../context/axios";
import SubDetails from "../ui/SubDetails";
import SwipeCard from "../ui/SwipeCard";
import useAuth from "../hooks/useAuth";

function HouseDetails() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [house, setHouse] = useState({});
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchHouse = async (id) => {
      const res = await axios.get(`/properties/${id}`);
      if (res.status === 200) {
        const data = res.data;
        setHouse(data);
      }
    };

    if (id) {
      fetchHouse(id);
    }
  }, [id]);

  const handleBack = () => {
    navigate("/rentals");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setMessage("");
  };

  const handleSendMessage = async (owner_id) => {
    // Logic to send message to the owner
    try {
      const res = await axios.post(`/users/${owner_id}`, {
        userId: auth.user.id,
        propertyId: id,
        message,
      });
      if (res.status === 200) {
        alert("Message sent successfully!");
        handleClose();
      }
    } catch (error) {
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="mx-auto h-screen w-full py-20 px-2">
      <div className="p-2 grid grid-cols-1 md:grid-cols-2 h-[580px]">
        <div className="w-full bg-white p-2">
          <SwipeCard img1={house.pic1} img2={house.pic2} img3={house.pic3} />
        </div>
        <div className="flex flex-col justify-between bg-white p-2">
          <SubDetails title="House" house={house} />
          <div className="flex justify-between mt-auto gap-2">
            <Button
              onClick={handleClickOpen}
              variant="contained"
              color="primary"
              fullWidth
            >
              Message Owner
            </Button>
            <Button
              onClick={handleBack}
              variant="contained"
              color="primary"
              fullWidth
            >
              Back
            </Button>
          </div>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Message Owner</DialogTitle>
        <DialogContent>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              autoFocus
              margin="dense"
              id="message"
              label="Enter your message"
              type="text"
              fullWidth
              variant="outlined"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSendMessage} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default HouseDetails;
