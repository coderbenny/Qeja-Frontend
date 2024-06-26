import * as React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Grid,
  Paper,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const BackgroundContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url('/22.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const StyledForm = styled("form")(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(3),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  margin: theme.spacing(1, 0),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(2, 0),
  textAlign: "center",
}));

const steps = ["Location & Description", "Amenities", "Additional Details"];

export default function AddProperty() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [amenities, setAmenities] = React.useState({
    wifi: "",
    gated: "",
    hot_shower: "",
    kitchen: "",
    balcony: "",
    parking: "",
    available: "",
  });
  const [images, setImages] = React.useState({
    image1: null,
    image2: null,
    image3: null,
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleToggleChange = (event, newValue, name) => {
    setAmenities({ ...amenities, [name]: newValue });
  };

  const handleImageChange = (event, imageName) => {
    const file = event.target.files[0];
    setImages({ ...images, [imageName]: file });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    const formData = new FormData();
    formData.append("location", event.target.location.value);
    formData.append("description", event.target.description.value);
    formData.append("image1", images.image1);
    formData.append("image2", images.image2);
    formData.append("image3", images.image3);
    // Add more form data as needed

    // Example of sending formData to a backend
    // fetch("/api/property", {
    //   method: "POST",
    //   body: formData,
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log("Success:", data);
    // })
    // .catch(error => {
    //   console.error("Error:", error);
    // });
  };

  return (
    <BackgroundContainer>
      <StyledContainer maxWidth="sm">
        <StyledPaper elevation={3}>
          <Typography component="h1" variant="h5" gutterBottom>
            Add Property
          </Typography>
          <StyledForm onSubmit={handleSubmit}>
            <Stepper activeStep={activeStep} orientation="vertical">
              <Step key={steps[0]}>
                <StepLabel>{steps[0]}</StepLabel>
                <StepContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <StyledTextField
                        variant="outlined"
                        fullWidth
                        label="Property Location"
                        name="location"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <StyledTextField
                        variant="outlined"
                        fullWidth
                        type="file"
                        InputLabelProps={{ shrink: true }}
                        onChange={(event) => handleImageChange(event, "image1")}
                        name="image1"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <StyledTextField
                        variant="outlined"
                        fullWidth
                        type="file"
                        InputLabelProps={{ shrink: true }}
                        onChange={(event) => handleImageChange(event, "image2")}
                        name="image2"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <StyledTextField
                        variant="outlined"
                        fullWidth
                        type="file"
                        InputLabelProps={{ shrink: true }}
                        onChange={(event) => handleImageChange(event, "image3")}
                        name="image3"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <StyledTextField
                        variant="outlined"
                        fullWidth
                        label="Description"
                        name="description"
                        multiline
                        rows={4}
                        required
                      />
                    </Grid>
                  </Grid>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Continue
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
              <Step key={steps[1]}>
                <StepLabel>{steps[1]}</StepLabel>
                <StepContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h6">WiFi</Typography>
                      <ToggleButtonGroup
                        value={amenities.wifi}
                        exclusive
                        onChange={(event, newValue) =>
                          handleToggleChange(event, newValue, "wifi")
                        }
                      >
                        <ToggleButton value="yes">Yes</ToggleButton>
                        <ToggleButton value="no">No</ToggleButton>
                      </ToggleButtonGroup>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6">Gated</Typography>
                      <ToggleButtonGroup
                        value={amenities.gated}
                        exclusive
                        onChange={(event, newValue) =>
                          handleToggleChange(event, newValue, "gated")
                        }
                      >
                        <ToggleButton value="yes">Yes</ToggleButton>
                        <ToggleButton value="no">No</ToggleButton>
                      </ToggleButtonGroup>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6">Hot Shower</Typography>
                      <ToggleButtonGroup
                        value={amenities.hot_shower}
                        exclusive
                        onChange={(event, newValue) =>
                          handleToggleChange(event, newValue, "hot_shower")
                        }
                      >
                        <ToggleButton value="yes">Yes</ToggleButton>
                        <ToggleButton value="no">No</ToggleButton>
                      </ToggleButtonGroup>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6">Kitchen</Typography>
                      <ToggleButtonGroup
                        value={amenities.kitchen}
                        exclusive
                        onChange={(event, newValue) =>
                          handleToggleChange(event, newValue, "kitchen")
                        }
                      >
                        <ToggleButton value="yes">Yes</ToggleButton>
                        <ToggleButton value="no">No</ToggleButton>
                      </ToggleButtonGroup>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6">Balcony</Typography>
                      <ToggleButtonGroup
                        value={amenities.balcony}
                        exclusive
                        onChange={(event, newValue) =>
                          handleToggleChange(event, newValue, "balcony")
                        }
                      >
                        <ToggleButton value="yes">Yes</ToggleButton>
                        <ToggleButton value="no">No</ToggleButton>
                      </ToggleButtonGroup>
                    </Grid>
                  </Grid>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Continue
                      </Button>
                      <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
              <Step key={steps[2]}>
                <StepLabel>{steps[2]}</StepLabel>
                <StepContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <StyledTextField
                        variant="outlined"
                        fullWidth
                        label="Rent"
                        name="rent"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6">Parking</Typography>
                      <ToggleButtonGroup
                        value={amenities.parking}
                        exclusive
                        onChange={(event, newValue) =>
                          handleToggleChange(event, newValue, "parking")
                        }
                      >
                        <ToggleButton value="yes">Yes</ToggleButton>
                        <ToggleButton value="no">No</ToggleButton>
                      </ToggleButtonGroup>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6">Available</Typography>
                      <ToggleButtonGroup
                        value={amenities.available}
                        exclusive
                        onChange={(event, newValue) =>
                          handleToggleChange(event, newValue, "available")
                        }
                      >
                        <ToggleButton value="yes">Yes</ToggleButton>
                        <ToggleButton value="no">No</ToggleButton>
                      </ToggleButtonGroup>
                    </Grid>
                  </Grid>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Submit
                      </Button>
                      <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            </Stepper>
          </StyledForm>
        </StyledPaper>
      </StyledContainer>
    </BackgroundContainer>
  );
}
