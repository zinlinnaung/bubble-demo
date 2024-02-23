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
    <Box sx={{ mt: {md:"2rem",xs: "1rem"} }}>
      <Typography sx={{ color: "primary.light", fontWeight: "bold" }}>
        {label}
        <span style={{ color: "red" }}> *</span>
      </Typography>
      <TextField
        placeholder={placeholder}
        required
        type={type}
        name={name}
        value={data}
        onChange={handleOnChange}
        fullWidth
        size="small"
        sx={{ bgcolor: "#fff", borderRadius: "0.5rem", mt: "1rem" }}
      />
    </Box>
  );
};

export default SingleInput;
