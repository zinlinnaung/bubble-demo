import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";

const RadioInput = ({
  label,
  name,
  data,
  handleOnChange,
  rLabel1,
  rLabel2,
}) => {
  return (
    <FormControl sx={{ mt: { md: "2rem", xs: "1rem" } }}>
      <Typography
        id="demo-radio-buttons-group-label"
        sx={{ color: "primary.light", fontWeight: "bold" }}
      >
        {label}
        <span style={{ color: "red" }}> *</span>
      </Typography>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name={name}
        value={data.marital_status}
        onChange={handleOnChange}
        sx={{ mt: "1rem" }}
      >
        <Box sx={{ display: "flex" }}>
          <FormControlLabel
            value={rLabel1}
            control={
              <Radio
                sx={{
                  color: "#fff",
                  "&.Mui-checked": {
                    color: "#fff",
                  },
                }}
              />
            }
            label={<span style={{ fontWeight: "bold" }}>{rLabel1}</span>}
          />
          <FormControlLabel
            value={rLabel2}
            control={
              <Radio
                sx={{
                  color: "#fff",
                  "&.Mui-checked": {
                    color: "#fff",
                  },
                }}
              />
            }
            label={<span style={{ fontWeight: "bold" }}>{rLabel2}</span>}
          />
        </Box>
      </RadioGroup>
    </FormControl>
  );
};

export default RadioInput;
