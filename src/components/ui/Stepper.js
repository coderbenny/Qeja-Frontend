import * as React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Input from "./Input";
import TextArea from "./TextArea";
import SelectInput from "./Select";

const steps = [
  {
    label: "Enter your details",
    description: (formData, handleChange) => (
      <div className="w-[300px]">
        <Input
          name="username"
          label="Full Name"
          value={formData.username}
          onChange={handleChange}
        />
        <Input
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <SelectInput
          name="role"
          value={formData.role}
          onChange={handleChange}
        />
        <TextArea
          name="bio"
          label="Bio"
          value={formData.bio}
          onChange={handleChange}
        />
      </div>
    ),
  },
  {
    label: "Create a password",
    description: (formData, handleChange) => (
      <div className="w-[300px]">
        <Input
          name="password"
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Input
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>
    ),
  },
  {
    label: "Review & Submit",
    description: (formData) => (
      <div className="w-[300px]">
        <h3 className="">
          <b className="mr-2">Name:</b>
          {formData.username}
        </h3>
        <p className="">
          <b className="mr-2">Email:</b>
          {formData.email}
        </p>
        <p className="">
          <b className="mr-2">Bio:</b>
          {formData.bio}
        </p>
        <p className="">
          <b className="mr-2">Role:</b>
          {formData.role}
        </p>
      </div>
    ),
  },
];

export default function VerticalLinearStepper() {
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    role: "",
    bio: "",
    password: "",
    confirmPassword: "",
  });
  const [activeStep, setActiveStep] = React.useState(0);
  const [error, setError] = React.useState("");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({
      username: "",
      email: "",
      role: "",
      bio: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/users", formData);
      if (res.status === 201) {
        alert("Sign Up successful");
        handleReset();
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
      className="h-screen mt-0"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/edited.jpg)`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center bg-[rgba(255,255,255,0.6)] p-3 shadow-md w-[600px] mt-14 rounded-md justify-center mx-auto">
        <h2 className="text-blue-500 text-3xl font-bold mb-2">Get Started</h2>
        <p className="w-[350px] mb-2">
          Fill in your information below to sign up and begin your journey with
          us.
        </p>
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
                        onClick={
                          index === steps.length - 1 ? handleSubmit : handleNext
                        }
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
      </div>
    </div>
  );
}
