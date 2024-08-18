import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Snackbar,
  Alert as MuiAlert,
} from "@mui/material";
import axios from "../context/axios";
import { AuthContext } from "../context/AuthContext";

function Activation() {
  // const { user } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [activationCode, setActivationCode] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleActivate = async () => {
    const details = { email: email, activation_code: parseInt(activationCode) };
    console.log(details);
    try {
      const response = await axios.post("/activate", details);
      if (response.status === 200) {
        setMessage("Account activated successfully.");
        setOpen(true);
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "An error occurred while activating your account. Please try again."
      );
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url('/edited.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h5" sx={{ mb: 3, textAlign: "center" }}>
            Activate Your Account
          </Typography>
          {error && (
            <Typography color="error" sx={{ mb: 2, textAlign: "center" }}>
              {error}
            </Typography>
          )}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Activation Code"
              variant="outlined"
              fullWidth
              value={activationCode}
              onChange={(e) => setActivationCode(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleActivate}
            >
              Activate
            </Button>
          </Box>
        </Paper>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <MuiAlert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {message}
          </MuiAlert>
        </Snackbar>
      </Container>
    </Box>
  );
}

export default Activation;
