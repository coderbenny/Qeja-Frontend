import * as React from "react";
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

const steps = [
  {
    label: "Enter your details",
    description: (
      <div className="w-[300px]">
        <Input
          name="Full Name"
          className="p-1 border-2 border-blue-200"
          // placeholder="Enter Full Name..."
        />
        <Input
          name="Email"
          className="p-1 border-2 border-blue-200"
          // placeholder="Enter Full Name..."
        />
        <TextArea label="Bio" />
      </div>
    ),
  },
  {
    label: "Create a password",
    description: (
      <div className="w-[300px]">
        <Input
          name="Password"
          className="p-1 border-2 border-blue-200"
          // placeholder="Enter Full Name..."
        />
        <Input
          name="Confirm Password"
          className="p-1 border-2 border-blue-200"
          // placeholder="Enter Full Name..."
        />
      </div>
    ),
  },
  {
    label: "Review & Submit",
    description: (
      <div className="w-[300px]">
        <h3 className="">
          <b className="mr-2">Name:</b>John Doe
        </h3>
        <p className="">
          <b className="mr-2">Email:</b>john@mail.com
        </p>
        <p className="">
          <b className="mr-2">Bio:</b>This is my bio
        </p>
        <p className="">
          <b className="mr-2">Role:</b>Seeking Rental
        </p>
      </div>
    ),
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <h2 className="text-2xl font-bold mb-2 mt-10">Get Started</h2>
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
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
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
              All steps completed - Click the button below to complete
              registration.
            </Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Register
            </Button>
          </Paper>
        )}
      </Box>
    </div>
  );
}
