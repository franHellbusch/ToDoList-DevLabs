import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "'Nunito', serif",
    h1: {
      fontSize: "2.5rem",
      lineHeight: 1,
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      lineHeight: 1,
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      lineHeight: 1,
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.25rem",
      lineHeight: 1,
      fontWeight: 500,
    },
    h5: {
      fontSize: "1rem",
      lineHeight: 1,
      fontWeight: 500,
    },
    h6: {
      fontSize: "0.875rem",
      lineHeight: 1,
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1,
      color: "#333333",
    },
    subtitle2: {
      fontSize: "1.25rem",
      lineHeight: 1,
      fontWeight: 600,
      color: "#333333",
    },
    body1: {
      fontSize: "13px",
      color: "#666666",
    },
    body2: {
      fontSize: "16px",
      color: "#666666",
    },
  },
  palette: {
    primary: {
      main: "#0548e6",
      light: "#376ceb",
      dark: "#0332a1",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
      disabled: "#969696",
    },
    background: {
      default: "#fff",
      paper: "#f5f5f5",
    },
  },
});
