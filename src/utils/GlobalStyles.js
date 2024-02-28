import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Global styles go here */
    ::placeholder {
      color: white !important;
      font-weight: bold !important ;
    }

    fieldset {
      border-color: white !important;
    }

    .MuiInputBase-input {
      color: white !important;
    }

    .MuiSvgIcon-root {
      color: white !important;
    }
    
`;

export default GlobalStyles;
