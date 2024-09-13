import { createTheme } from "@mui/material/styles";
import {
  colorBlack,
  colorWhite,
  dullBlack,
  fontWeight_400,
  fontWeight_600,
  fontWeight_700,
  h1Font,
  h2Font,
  h3Font,
  h4Font,
  h5Font,
  h6Font,
  lightGray,
  primaryColor,
  secondaryColor,
} from "./variables";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: dullBlack,
    },
    secondary: {
      main: secondaryColor,
    },
    action: {
      disabledBackground: lightGray,
      disabled: colorWhite,
    },
    background: {
      default: colorWhite,
    },
    common: {
      white: colorWhite,
      black: colorBlack,
    },
  },

  typography: {
    fontFamily: "Poppins",
    h1: {
      color: primaryColor,
      fontSize: h1Font,
      fontWeight: fontWeight_700,
    },
    h2: {
      color: primaryColor,
      fontSize: h2Font,
      fontWeight: fontWeight_700,
    },
    h3: {
      color: primaryColor,
      fontSize: h3Font,
      fontWeight: fontWeight_700,
    },
    h4: {
      color: primaryColor,
      fontSize: h4Font,
      fontWeight: fontWeight_700,
    },
    h5: {
      color: primaryColor,
      fontSize: h5Font,
      fontWeight: fontWeight_700,
    },
    h6: {
      color: lightGray,
      fontSize: h6Font,
      fontWeight: fontWeight_400,
    },

    subtitle1: {
      color: secondaryColor,
      fontSize: h4Font,
      fontWeight: fontWeight_600,
    },
    subtitle2: {
      color: primaryColor,
      fontSize: h5Font,
      fontWeight: fontWeight_400,
    },
    body1: {
      color: primaryColor,
      fontSize: h4Font,
      fontWeight: fontWeight_400,
    },
    body2: {
      color: primaryColor,
      fontSize: h2Font,
      fontWeight: fontWeight_400,
    },
  },
});

export default theme;
