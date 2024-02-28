import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

// const WhiteTextField = styled(TextField)({
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: 'white', // Change border color
//     },
//     '&:hover fieldset': {
//       borderColor: 'white', // Change border color on hover
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: 'white', // Change border color when focused
//     },
//   },
//   '& .MuiInputLabel-root': {
//     color: 'white !important', // Change label color
//   },
//   '& .MuiInputBase-input': {
//     color: 'white', // Change text color
//   },
// });

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
        sx={{ borderRadius: "0.5rem", mt: "1rem" }}
        InputLabelProps={{
          style: {
            color: "white",
          },
        }}
      />
    </Box>
  );
};

export default SingleInput;
