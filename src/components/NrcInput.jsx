import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import stateCities from "../utils/StateCities.json";

const NrcInput = ({ label, nrc1, nrc2, nrc3, data, handleOnChange }) => {
  const states = Object.keys(stateCities);
  const cities =
    label === "မွေးရပ်"
      ? stateCities[data.born_state]
      : stateCities[data.living_state];

  return (
    <Box sx={{ mt: { md: "2rem", xs: "1.5rem" } }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <Box sx={{ display: "flex", gap: "3rem" }}>
          <FormControl sx={{ overflow: "hidden", flex: 4 }}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ mt: "-0.5rem", bgcolor: "transparent" }}
            >
              မှတ်ပုံတင်
            </InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={label === "မွေးရပ်" ? data.born_city : data.living_city}
              name={nrc1}
              size="small"
              sx={{ borderRadius: "0.5rem" }}
              onChange={handleOnChange}
            ></Select>
          </FormControl>
          <FormControl sx={{ overflow: "hidden", flex: 4 }}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ mt: "-0.5rem", bgcolor: "transparent" }}
            >
              AhLaNa (အလန )
            </InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={label === "မွေးရပ်" ? data.born_city : data.living_city}
              name={nrc2}
              size="small"
              sx={{ borderRadius: "0.5rem" }}
              onChange={handleOnChange}
            ></Select>
          </FormControl>
          <FormControl sx={{ overflow: "hidden", flex: 4 }}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ mt: "-0.5rem", bgcolor: "transparent" }}
            >
              (နိုင် )
            </InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={label === "မွေးရပ်" ? data.born_city : data.living_city}
              name={nrc3}
              size="small"
              sx={{ borderRadius: "0.5rem" }}
              onChange={handleOnChange}
            ></Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default NrcInput;
