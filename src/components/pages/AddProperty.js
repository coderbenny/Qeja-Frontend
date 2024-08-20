import { storage } from "../context/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "../context/axios";
import { AuthContext } from "../context/AuthContext";

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
  const { user, setUser } = React.useContext(AuthContext);
  const [activeStep, setActiveStep] = React.useState(0);
  const [amenities, setAmenities] = React.useState({
    location: "",
    description: "",
    rent: "",
    wifi: "",
    gated: "",
    hot_shower: "",
    kitchen: "",
    balcony: "",
    parking: "",
    available: "",
    rooms: "",
    user_id: user.id,
  });

  const [images, setImages] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleToggleChange = (event, newValue, amenityKey) => {
    if (newValue !== null) {
      setAmenities({ ...amenities, [amenityKey]: newValue === "true" });
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const name = event.target.name;
    if (file) {
      setImages((prevImages) => ({ ...prevImages, [name]: file }));
    }
  };

  const handleUploadImages = async () => {
    const imageUrls = {};

    for (const [imageName, imageFile] of Object.entries(images)) {
      if (!imageFile) continue;
      const storageRef = ref(storage, `images/${imageFile.name}`);
      try {
        await uploadBytes(storageRef, imageFile);
        const downloadURL = await getDownloadURL(storageRef);
        imageUrls[imageName] = downloadURL;
      } catch (error) {
        console.error(`Failed to upload ${imageName}:`, error);
        throw error;
      }
    }
    return imageUrls;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = sessionStorage.getItem("access_token");

    try {
      const imageUrls = Object.keys(images).length
        ? await handleUploadImages()
        : {};
      const updatedAmenities = {
        ...amenities,
        rooms: parseInt(amenities.rooms),
        ...imageUrls,
      };

      const res = await axios.post("/properties", updatedAmenities, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 201) {
        alert("Property Added Successfully");
        setUser({
          ...user,
          properties: [...user.properties, updatedAmenities],
        });
      }
    } catch (error) {
      alert("An error occurred while adding the property.");
      console.error("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAmenities({ ...amenities, [name]: value });
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
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    <Grid container spacing={2}>
                      {index === 0 && (
                        <>
                          <Grid item xs={12}>
                            <StyledTextField
                              variant="outlined"
                              fullWidth
                              label="Property Location"
                              name="location"
                              required
                              onChange={handleInputChange}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <StyledTextField
                              variant="outlined"
                              fullWidth
                              type="file"
                              InputLabelProps={{ shrink: true }}
                              onChange={handleImageChange}
                              name="img1"
                              required
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <StyledTextField
                              variant="outlined"
                              fullWidth
                              type="file"
                              InputLabelProps={{ shrink: true }}
                              onChange={handleImageChange}
                              name="img2"
                              required
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <StyledTextField
                              variant="outlined"
                              fullWidth
                              type="file"
                              InputLabelProps={{ shrink: true }}
                              onChange={handleImageChange}
                              name="img3"
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
                              onChange={handleInputChange}
                            />
                          </Grid>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <Grid item xs={12}>
                            <Typography variant="h6">WiFi</Typography>
                            <ToggleButtonGroup
                              value={amenities.wifi.toString()}
                              exclusive
                              onChange={(event, newValue) =>
                                handleToggleChange(event, newValue, "wifi")
                              }
                            >
                              <ToggleButton value="true">Yes</ToggleButton>
                              <ToggleButton value="false">No</ToggleButton>
                            </ToggleButtonGroup>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="h6">Gated</Typography>
                            <ToggleButtonGroup
                              value={amenities.gated.toString()}
                              exclusive
                              onChange={(event, newValue) =>
                                handleToggleChange(event, newValue, "gated")
                              }
                            >
                              <ToggleButton value="true">Yes</ToggleButton>
                              <ToggleButton value="false">No</ToggleButton>
                            </ToggleButtonGroup>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="h6">Hot Shower</Typography>
                            <ToggleButtonGroup
                              value={amenities.hot_shower.toString()}
                              exclusive
                              onChange={(event, newValue) =>
                                handleToggleChange(
                                  event,
                                  newValue,
                                  "hot_shower"
                                )
                              }
                            >
                              <ToggleButton value="true">Yes</ToggleButton>
                              <ToggleButton value="false">No</ToggleButton>
                            </ToggleButtonGroup>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="h6">Kitchen</Typography>
                            <ToggleButtonGroup
                              value={amenities.kitchen.toString()}
                              exclusive
                              onChange={(event, newValue) =>
                                handleToggleChange(event, newValue, "kitchen")
                              }
                            >
                              <ToggleButton value="true">Yes</ToggleButton>
                              <ToggleButton value="false">No</ToggleButton>
                            </ToggleButtonGroup>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="h6">Balcony</Typography>
                            <ToggleButtonGroup
                              value={amenities.balcony.toString()}
                              exclusive
                              onChange={(event, newValue) =>
                                handleToggleChange(event, newValue, "balcony")
                              }
                            >
                              <ToggleButton value="true">Yes</ToggleButton>
                              <ToggleButton value="false">No</ToggleButton>
                            </ToggleButtonGroup>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="h6">Parking</Typography>
                            <ToggleButtonGroup
                              value={amenities.parking.toString()}
                              exclusive
                              onChange={(event, newValue) =>
                                handleToggleChange(event, newValue, "parking")
                              }
                            >
                              <ToggleButton value="true">Yes</ToggleButton>
                              <ToggleButton value="false">No</ToggleButton>
                            </ToggleButtonGroup>
                          </Grid>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <Grid item xs={12}>
                            <StyledTextField
                              variant="outlined"
                              fullWidth
                              label="Rent"
                              name="rent"
                              required
                              onChange={handleInputChange}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <StyledTextField
                              variant="outlined"
                              fullWidth
                              label="Number of Rooms"
                              name="rooms"
                              required
                              onChange={handleInputChange}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="h6">Available</Typography>
                            <ToggleButtonGroup
                              value={amenities.available.toString()}
                              exclusive
                              onChange={(event, newValue) =>
                                handleToggleChange(event, newValue, "available")
                              }
                            >
                              <ToggleButton value="true">Yes</ToggleButton>
                              <ToggleButton value="false">No</ToggleButton>
                            </ToggleButtonGroup>
                          </Grid>
                        </>
                      )}
                    </Grid>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                          disabled={activeStep === steps.length - 1}
                        >
                          {index === steps.length - 1 ? "Finish" : "Continue"}
                        </Button>
                        <Button
                          disabled={activeStep === 0}
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
              <Box sx={{ textAlign: "center", mt: 3 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={loading}
                >
                  {loading ? "Adding Property..." : "Add Property"}
                </Button>
              </Box>
            )}
          </StyledForm>
        </StyledPaper>
      </StyledContainer>
    </BackgroundContainer>
  );
}
