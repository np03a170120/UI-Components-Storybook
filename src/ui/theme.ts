import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1F3D7C",
    },
    secondary: {
      main: "#007DAF",
    },
    error: {
      main: "#C0000B",
    },
    success: {
      main: "#006E20",
      light: "#B5F2B0",
    },
    info: {
      main: "#005BC0",
      light: "#DAE2FF",
    },
    warning: {
      main: "#9D4300",
      light: "#FEF3EB",
    },
    background: {
      default: "#F7FBFF",
    },
  },
  typography: {
    fontFamily: "inter",
    h1: {
      fontSize: "3rem",
      fontWeight: "600",
      lineHeight: "130%",
      color: "#1D1B20",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "600",
      lineHeight: "130%",
      color: "#1D1B20",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: "600",
      lineHeight: "130%",
      color: "#1D1B20",
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: "600",
      lineHeight: "130%",
      color: "#1D1B20",
    },
    h5: {
      fontSize: "1.125rem",
      fontWeight: "600",
      lineHeight: "130%",
      color: "#1D1B20",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: "600",
      lineHeight: "130%",
      color: "#1D1B20",
    },
    body1: {
      fontSize: 14,
    },
    subtitle1: {
      fontSize: 14,
      color: "#45484F",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "inter",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
      defaultProps: {
        size: "small",
        variant: "contained",
      },
    },
    MuiTable: {
      defaultProps: {
        size: "small",
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          // backgroundColor: "red",
        },
      },
      defaultProps: {
        size: "small",
      },
    },
    MuiFormControl: {
      defaultProps: {
        size: "small",
      },
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          shrink: true,
        },
      },
    },
  },
});

export default theme;
