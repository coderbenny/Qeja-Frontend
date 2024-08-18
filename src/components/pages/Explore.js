import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import FeedPost from "../ui/FeedPost";
import axios from "../context/axios";
import {
  Container,
  Grid,
  Typography,
  Button,
  CircularProgress,
  TextField,
  Box,
  Paper,
  // IconButton,
  Avatar,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";

function Explore() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `/posts?page=${currentPage}&limit=${postsPerPage}`
        );
        if (res.status === 200) {
          setPosts((prevPosts) => [...prevPosts, ...res.data]);
        }
      } catch (error) {
        console.log("An error occurred:", error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, [currentPage, postsPerPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <Container maxWidth="lg" sx={{ minHeight: "100vh", mt: 10 }}>
      <Grid container spacing={3}>
        {/* Feed Section */}
        <Grid item xs={12} md={8}>
          <Routes>
            <Route
              path="/"
              element={
                <Feed
                  posts={posts}
                  loading={loading}
                  onLoadMore={handleLoadMore}
                />
              }
            />
            <Route path="/new-post" element={<CreatePost />} />
          </Routes>
        </Grid>

        {/* Sidebar Section */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              sx={{ mb: 3 }}
            >
              <Avatar
                sx={{
                  width: 150,
                  height: 150,
                  mb: 3,
                  backgroundColor: "grey.300",
                }}
              />
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={() => navigate("/new-post")}
                fullWidth
                sx={{ mb: 2 }}
              >
                Create Post
              </Button>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<SaveIcon />}
                fullWidth
              >
                Saved Posts
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

function Feed({ posts, loading, onLoadMore }) {
  return (
    <Box sx={{ mb: 4 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search posts..."
        sx={{ mb: 3 }}
      />
      <Paper elevation={3} sx={{ p: 2, maxHeight: 600, overflowY: "auto" }}>
        {posts && posts.length > 0 ? (
          posts.map((post, index) => <FeedPost key={index} post={post} />)
        ) : (
          <Typography align="center">No posts available</Typography>
        )}
        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <CircularProgress />
          </Box>
        )}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={onLoadMore}
            disabled={loading}
          >
            Load More
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

function CreatePost() {
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
    // Implement post creation logic here
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

export default Explore;
