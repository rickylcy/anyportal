import { createTheme } from "@mui/material/styles";

const Colors = {
  primary: "#151515",
  secondary: "#fff",
  success: "#4CAF50",
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  ///////////////
  // Solid Color
  ///////////////
  white: "#fff",
  black: "#151515",
  darkgray: "#222",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    dark: {
      main: Colors.black,
    },
    white: {
      main: Colors.white,
    },
    darkgray: {
      main: Colors.darkgray,
    },
    lightgray: {
      main: Colors.dove_gray,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "Roboto",
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default theme;
