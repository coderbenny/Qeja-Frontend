import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: 3,
        px: 2,
        background:
          "radial-gradient(circle, rgba(0,30,60,1) 0%, rgba(0,20,40,1) 100%)",
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Box>
          <Typography variant="h6" component="h1" sx={{ fontWeight: "bold" }}>
            Qeja
          </Typography>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Qeja. All rights reserved.
          </Typography>
        </Box>
        <Box sx={{ mt: { xs: 2, sm: 0 }, textAlign: "center" }}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
            Socials
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}
          >
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              <Facebook />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              <Twitter />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              <Instagram />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              <LinkedIn />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
