import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Myanmar Sans Pro",
    fontWeightBold: "700",
  },
  palette: {
    // use for mui components like Button and input
    primary: {
      main: "rgba(75, 155, 75, 0.82)",
      light: "#00ADE6",
    },
    // use for typo color and line
    secondary: {
      main: "#FFB127",
    },
  },
});
