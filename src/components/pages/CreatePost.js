import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  TextField,
  Box,
  Paper,
} from "@mui/material";

export default function CreatePost() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target;
    console.log("Data:", data);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Create a New Post
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Post Title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            fullWidth
            required
          />

          <TextField
            label="Content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            fullWidth
            multiline
            rows={4}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Post
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
