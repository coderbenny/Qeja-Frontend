import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../context/axios";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const roleMapping = {
  1: "Property Owner",
  2: "Seeking Rental",
  3: "Seeking Roommate",
};

const steps = [
  {
    label: "Enter your details",
    description: (formData, handleChange) => (
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          margin="normal"
          name="name"
          required
          label="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          required
          margin="normal"
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          select
          required
          name="role_id"
          label="Role"
          value={formData.role_id}
          onChange={handleChange}
        >
          <MenuItem value="1">Property Owner</MenuItem>
          <MenuItem value="2">Seeking Rental</MenuItem>
          <MenuItem value="3">Seeking Roommate</MenuItem>
        </TextField>
      </Box>
    ),
  },
  {
    label: "Create a password",
    description: (formData, handleChange) => (
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          margin="normal"
          name="password"
          required
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          name="confirmPassword"
          required
          label="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={formData.password !== formData.confirmPassword}
          helperText={
            formData.password !== formData.confirmPassword &&
            "Passwords do not match"
          }
        />
      </Box>
    ),
  },
  {
    label: "Review & Submit",
    description: (formData) => (
      <Box sx={{ mb: 2 }}>
        <Typography variant="body1">
          <strong>Name:</strong> {formData.name}
        </Typography>
        <Typography variant="body1">
          <strong>Email:</strong> {formData.email}
        </Typography>
        <Typography variant="body1">
          <strong>Role:</strong> {roleMapping[formData.role_id]}
        </Typography>
      </Box>
    ),
  },
];

export default function VerticalLinearStepper() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role_id: "",
    password: "",
    confirmPassword: "",
  });
  const [activeStep, setActiveStep] = useState(0);
  const [error, setError] = useState("");

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      handleSubmit();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({
      name: "",
      email: "",
      role_id: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const { confirmPassword, ...dataToSend } = formData; // Exclude confirmPassword

    try {
      const res = await axios.post("/users", dataToSend);
      if (res.status === 201) {
        alert("Sign Up successful");
        handleReset();
        navigate("/login");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("Invalid User Data");
      } else if (error.response && error.response.status === 409) {
        setError("User exists, use a unique name and email!");
      } else {
        setError("An error occurred: " + error.message);
      }
    }
  };

  return (
    <div
      className="mt-0"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/edited.jpg)`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Box className="flex flex-col items-center bg-[rgba(255,255,255,0.6)] p-3 shadow-md w-[600px] mt-14 rounded-md justify-center mx-auto">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          className="text-blue-600 text-3xl font-bold mb-2"
        >
          Get Started
        </Typography>
        <Typography variant="body1" className="w-[350px] mb-2">
          Fill in your information below to sign up and begin your journey with
          us.
        </Typography>
        <Box sx={{ maxWidth: 400 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography>
                    {index < 2
                      ? step.description(formData, handleChange)
                      : step.description(formData)}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? "Register" : "Continue"}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                All steps completed - Click register to complete registration.
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
        {error && (
          <Typography color="error" className="mt-2">
            {error}
          </Typography>
        )}
      </Box>
    </div>
  );
}
