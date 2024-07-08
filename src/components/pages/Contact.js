import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://formspree.io/f/mzzpbwng",
        formData
      );
      console.log("Form submitted successfully:", response.data);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      alert("Submitted successfully. We will get in touch shortly.");
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: "url('/20867.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            We value your feedback and are always looking to improve. Whether
            you have suggestions, comments, or any other feedback, please fill
            out the form below, and we'll get back to you soon.
          </Typography>
          <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  id="name"
                  label="Name"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  id="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="subject"
                  label="Subject"
                  variant="outlined"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  id="message"
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
