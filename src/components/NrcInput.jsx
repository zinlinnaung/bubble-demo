import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import stateCities from "../utils/StateCities.json";
import SingleInput from "./SingleInput";
import nrcConstants from "../constants/nrcConstants.json";

const NrcInput = () => {
  const [data, setData] = useState({
    stateCode: "၁/",
    township: "ခဖန",
    nrcStatus: "နိုင်",
  });

  const states = Object.keys(nrcConstants);
  const townships = nrcConstants[data.stateCode];

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

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
              value={data.stateCode}
              name="stateCode"
              size="small"
              onChange={handleOnChange}
            >
              {states.map((state, index) => (
                <MenuItem key={index} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ overflow: "hidden", width: "100%" }}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ mt: "-0.5rem", bgcolor: "transparent", color: "white" }}
            >
              ခဖန
            </InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.township}
              name="township"
              size="small"
              onChange={handleOnChange}
            >
              {townships?.map((township, index) => (
                <MenuItem key={index} value={township}>
                  {township}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ overflow: "hidden", width: "100%" }}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ mt: "-0.5rem", bgcolor: "transparent", color: "white" }}
            >
              (နိုင်)
            </InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.nrcStatus}
              name="nrcStatus"
              size="small"
              onChange={handleOnChange}
            >
              <MenuItem value="နိုင်">နိုင်</MenuItem>
              <MenuItem value="ဧည့်">ဧည့်</MenuItem>
              <MenuItem value="ပြု">ပြု</MenuItem>
            </Select>
          </FormControl>

          {/* <TextField
            id="standard-input"
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
          /> */}
          <TextField
            id="standard-input"
            placeholder="မှတ်ပုံတင်နံပါတ်"
            type="text"
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
