import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const SingleInput = ({
  label,
  name,
  data,
  handleOnChange,
  type = "text",
  placeholder = "",
}) => {
  return (
    <Box sx={{ mt: { md: "3rem", xs: "1rem" } }}>
      <TextField
        id="standard-input"
        placeholder={placeholder}
        label={label}
        type={type}
        name={name}
        value={data}
        onChange={handleOnChange}
        fullWidth
        size="small"
        sx={{ borderRadius: "0.5rem", mt:'1rem',}}
      />
    </Box>
  );
};

export default SingleInput;
