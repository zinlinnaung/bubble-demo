import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans Myanmar",
    fontWeightBold: "700",
  },
  palette: {
    // use for mui components like Button and input
    primary: {
      main: "#4B9B4BD1",
      light: "#fff",
    },
    // use for typo color and line
    secondary: {
      main: "#2A8347",
      light: "#fff",
    },
  },
});
