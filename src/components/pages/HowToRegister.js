// src/HowToRegister.js
import React from "react";
import { Box, Typography, Stepper, Step, StepLabel, Grid } from "@mui/material";

const steps = [
  // "Open the App",
  "Navigate to Registration",
  "Select Role",
  "Fill Registration Form",
  "Submit and Verify",
];

const HowToRegister = () => {
  return (
    <Box
      sx={{
        // width: "100vw", // Full width of the viewport
        minHeight: "100vh", // Full height of the viewport
        p: 5,
        backgroundImage: "url('/cityscape.jpg')", // Background image from public directory
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "center",
      }}
    >
      {/* Title with white text */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "white", fontWeight: "bold" }}
        className="text-center"
      >
        How To Get Started
      </Typography>

      {/* Stepper with white text */}
      <Stepper
        orientation="vertical"
        activeStep={-1}
        sx={{
          "& .MuiStepLabel-label": {
            color: "white !important", // Force label text color to white
          },
          "& .MuiSvgIcon-root": {
            color: "white", // Icon color
          },
        }}
      >
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Grid for step descriptions */}
      <Grid container spacing={2} sx={{ mt: 4, width: "100%" }}>
        {steps.map((label, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                textAlign: "center",
                p: 2,
                border: "1px solid #ddd",
                borderRadius: 2,
                backgroundColor: "rgba(255, 255, 255, 0.8)", // Light overlay for text visibility
              }}
            >
              <Typography variant="h6">{label}</Typography>
              {getDescription(label)}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const getDescription = (step) => {
  switch (step) {
    // case "Open the App":
    //   return (
    //     <>
    //       <img
    //         src="/images/open-app.png"
    //         alt="Open the App"
    //         style={{ width: "100%" }}
    //       />
    //       <Typography variant="body2" className="text-gray-600">
    //         Download the app from the App Store or Google Play and open it on
    //         your device.
    //       </Typography>
    //     </>
    //   );
    case "Navigate to Registration":
      return (
        <>
          <img
            src="/images/navigate-registration.png"
            alt="Navigate to Registration"
            style={{ width: "100%" }}
          />
          <Typography variant="body2" className="text-gray-600">
            Find the registration option on the home screen and tap on it to
            proceed.
          </Typography>
        </>
      );
    case "Select Role":
      return (
        <>
          <img
            src="/images/select-role.png"
            alt="Select Role"
            style={{ width: "100%" }}
          />
          <Typography variant="body2" className="text-gray-600">
            Choose whether you are a Property Owner, a Tenant, or looking for a
            Roommate.
          </Typography>
        </>
      );
    case "Fill Registration Form":
      return (
        <>
          <img
            src="/images/fill-form.png"
            alt="Fill Registration Form"
            style={{ width: "100%" }}
          />
          <Typography variant="body2" className="text-gray-600">
            Fill out the form with your details and follow the prompts to
            complete the process.
          </Typography>
        </>
      );
    case "Submit and Verify":
      return (
        <>
          <img
            src="/images/submit-verify.png"
            alt="Submit and Verify"
            style={{ width: "100%" }}
          />
          <Typography variant="body2" className="text-gray-600">
            Submit your registration and verify your email address to activate
            your account.
          </Typography>
        </>
      );
    default:
      return null;
  }
};

export default HowToRegister;
