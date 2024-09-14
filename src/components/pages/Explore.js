import React, { useState, useEffect, useContext } from "react";
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
  Avatar,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import CreatePost from "./CreatePost";
import { AuthContext } from "../context/AuthContext";

function Explore() {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const postsPerPage = 3;
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
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <Container maxWidth="lg" sx={{ minHeight: "100vh", mt: 10 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Routes>
            <Route
              path="/"
              element={
                <Feed
                  posts={posts}
                  loading={loading}
                  onLoadMore={handleLoadMore}
                  onNewPost={() => navigate("/create-post")}
                  user={user}
                />
              }
            />
            <Route path="/new-post" element={<CreatePost />} />
          </Routes>
        </Grid>

        {user && (
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                  mb: 3,
                  "@media (max-width: 600px)": {
                    mb: 2,
                  },
                }}
              >
                <Avatar
                  sx={{
                    width: { xs: 100, md: 150 },
                    height: { xs: 100, md: 150 },
                    mb: { xs: 2, md: 3 },
                    backgroundColor: "grey.300",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.25rem" },
                    textAlign: "center",
                  }}
                >
                  {user.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    fontSize: { xs: "0.75rem", md: "1rem" },
                    textAlign: "center",
                  }}
                >
                  {user.email}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

function Feed({ posts, loading, onLoadMore, onNewPost, user }) {
  return (
    <Box sx={{ mb: 4 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search posts..."
        sx={{ mb: 3 }}
      />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ mb: 3, justifyContent: "center" }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={onNewPost}
          disabled={!user}
          sx={{
            fontWeight: "bold",
            backgroundColor: user ? "#1976d2" : "grey",
            boxShadow: 3,
            fontSize: { xs: "0.875rem", sm: "1rem" },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          Create Post
        </Button>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<SaveIcon />}
          disabled={!user}
          sx={{
            fontWeight: "bold",
            borderColor: user ? "#1976d2" : "grey",
            color: user ? "#1976d2" : "grey",
            boxShadow: 3,
            fontSize: { xs: "0.875rem", sm: "1rem" },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          Saved Posts
        </Button>
      </Stack>

      <Paper
        elevation={3}
        sx={{
          p: 2,
          maxHeight: { xs: 400, sm: 600 },
          overflowY: "auto",
          "@media (max-width: 600px)": {
            p: 1,
          },
        }}
      >
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2,
            "@media (max-width: 600px)": {
              mt: 1,
            },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={onLoadMore}
            disabled={loading}
            sx={{
              fontSize: { xs: "0.875rem", sm: "1rem" },
              padding: { xs: "6px 12px", sm: "8px 16px" },
            }}
          >
            Load More
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default Explore;
