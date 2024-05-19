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
import SelectInput from "./Select";

const steps = [
  {
    label: "Enter your details",
    description: (
      <div className="w-[300px]">
        <Input name="Full Name" />
        <Input name="Email" />
        <SelectInput />
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
    <div
      className="h-screen mt-0"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/edited.jpg)`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center bg-[rgba(255,255,255,0.6)] p-3 shadow-md w-[600px] mt-14 rounded-md justify-center mx-auto">
        <h2 className="text-3xl font-bold mb-2">Get Started</h2>
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
    </div>
  );
}
