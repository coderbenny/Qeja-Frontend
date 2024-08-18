import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Alert,
} from "@mui/material";
import axios from "../context/axios";
import { AuthContext } from "../context/AuthContext";

function Activation() {
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState(user.email);
  const [activationCode, setActivationCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // console.log(email);

  const handleActivate = async () => {
    try {
      const response = await axios.post("/activate", {
        email: email,
        activation_code: activationCode,
      });
      if (response.status === 200) {
        Alert("Account activated successfully.");
        navigate("/");
      }
    } catch (err) {
      setError(
        "An error occurred while activating your account. Please try again."
      );
    }
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
      </Container>
    </Box>
  );
}

export default Activation;
