import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  TextField,
  Box,
  Paper,
  Avatar,
} from "@mui/material";

export default function CreatePost() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // const data = new FormData();
    // data.append("title", formData.title);
    // data.append("content", formData.content);
    // if (formData.image) {
    //   data.append("image", formData.image);
    // }
    // console.log("FormData:", data);
    // You can now send `data` to your backend
  };

  return (
    <div className="h-[100vh]">
      <Container maxWidth="sm" sx={{ mt: 15 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Create a New Post
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            {/* <TextField
              label="Post Title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              fullWidth
              required
            /> */}

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

            <Button variant="contained" component="label">
              Upload Image
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageUpload}
              />
            </Button>

            {formData.image && (
              <Avatar
                src={formData.image}
                alt="Selected Image"
                variant="rounded"
                sx={{ width: "100%", height: "auto", mt: 2 }}
              />
            )}

            <Button type="submit" variant="contained" color="primary">
              Post
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}
