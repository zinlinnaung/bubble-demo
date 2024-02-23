import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import stateCities from "../utils/StateCities.json";

const MultipleInput = ({ label, name1, name2, data, handleOnChange }) => {
  const states = Object.keys(stateCities);
  const cities =
    label === "မွေးရပ်"
      ? stateCities[data.born_state]
      : stateCities[data.living_state];

      return (
    <Box sx={{ mt: {md:"2rem",xs: "1rem"} }}>
      <Typography
        sx={{ color: "primary.light", fontWeight: "bold", mb: "1rem" }}
      >
        {label}
        <span style={{ color: "red" }}> *</span>
      </Typography>
      <Box sx={{ display: "flex", columnGap: "1rem" }}>
        <FormControl sx={{ overflow: "hidden", flex: 1 }}>
          <InputLabel
            id="demo-simple-select-label"
            sx={{ mt: "-0.5rem", bgcolor: "transparent", fontWeight: "bold" }}
          >
            တိုင်းဒေသကြီး / ပြည်နယ်
          </InputLabel>
          <Select
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={label === "မွေးရပ်" ? data.born_state : data.living_state}
            name={name1}
            size="small"
            sx={{ bgcolor: "#fff", borderRadius: "0.5rem", mt: "rem" }}
            onChange={handleOnChange}
          >
            {states.map((state, index) => (
              <MenuItem key={index} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ overflow: "hidden", flex: 1 }}>
          <InputLabel
            id="demo-simple-select-label"
            sx={{ mt: "-0.5rem", bgcolor: "transparent", fontWeight: "bold" }}
          >
            မြို့နယ်
          </InputLabel>
          <Select
            required
            disabled={label === "မွေးရပ်" ? !data.born_state : !data.living_state}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={label === "မွေးရပ်" ? data.born_city : data.living_city}
            name={name2}
            size="small"
            sx={{ bgcolor: "#fff", borderRadius: "0.5rem", mt: "rem" }}
            onChange={handleOnChange}
          >
            {cities?.map((city, index) => (
              <MenuItem key={index} value={city}>
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MultipleInput;
