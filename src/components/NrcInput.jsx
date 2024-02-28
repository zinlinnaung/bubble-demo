import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import stateCities from "../utils/StateCities.json";
import SingleInput from "./SingleInput";

const NrcInput = ({ label, nrc1, nrc2, nrc3, data, handleOnChange }) => {
  const states = Object.keys(stateCities);
  const cities =
    label === "မွေးရပ်"
      ? stateCities[data.born_state]
      : stateCities[data.living_state];

  return (
    <Box sx={{ mt: { md: "2rem", xs: "1.5rem" } }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <FormControl sx={{ overflow: "hidden", width: "100%" }}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ mt: "-0.5rem", bgcolor: "transparent", color: "white" }}
            >
              ၁/
            </InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={label === "မွေးရပ်" ? data.born_city : data.living_city}
              name={nrc1}
              size="small"
              // sx={{ borderRadius: "0.5rem", color: "white" }}
              // onChange={handleOnChange}
            >
              <MenuItem value={"Ten"}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ overflow: "hidden", width: "100%" }}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ mt: "-0.5rem", bgcolor: "transparent", color: "white" }}
            >
              အလန
            </InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={label === "မွေးရပ်" ? data.born_city : data.living_city}
              name={nrc2}
              size="small"
              // sx={{ borderRadius: "0.5rem", color: "white" }}
              // onChange={handleOnChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          {/* <FormControl sx={{ overflow: "hidden", width: "100%" }}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ mt: "-0.5rem", bgcolor: "transparent", color: "white" }}
            >
              (နိုင် )
            </InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={label === "မွေးရပ်" ? data.born_city : data.living_city}
              name={nrc3}
              size="small"
              // sx={{ borderRadius: "0.5rem" }}
              // onChange={handleOnChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl> */}

          <TextField
            id="standard-input"
            // placeholder="Nrc Number"
            // label={label}
            // type={type}
            name="nrc_number"
            value="(နိုင်)"
            onChange={handleOnChange}
            size="small"
            sx={{ borderRadius: "1rem" }}
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
          />
          <TextField
            id="standard-input"
            placeholder="မှတ်ပုံတင်နံပါတ်"
            label={label}
            // type={type}
            name="nrc_number"
            // value={data}
            onChange={handleOnChange}
            fullWidth
            size="small"
            sx={{ borderRadius: "1rem" }}
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default NrcInput;
