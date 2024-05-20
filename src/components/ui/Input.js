import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({ name }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch", mt: 0 },
      }}
      noValidate
      autoComplete="off"
      // onChange={handleChange}
    >
      <TextField
        id="standard-basic"
        label={name}
        name={name}
        variant="standard"
      />
    </Box>
  );
}
