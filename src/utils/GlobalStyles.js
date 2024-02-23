import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Global styles go here */
    ::placeholder {
      color: black !important;
      opacity: 0.6 !important;
      font-weight: bold !important ;
    }

    .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input, 
    .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input,
    .css-1x5jdmq,
    .css-1uvydh2 {
      padding: 9px !important;
    }

    legend,
    .css-556ay-MuiFormLabel-root-MuiInputLabel-root,
    .css-86ywzc-MuiFormLabel-root-MuiInputLabel-root,
    .css-1y84a21 {
      display: none !important;
    }
    
`;

export default GlobalStyles;
