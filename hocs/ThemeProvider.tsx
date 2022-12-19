import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const color = {
  primary: {
    primary1: "#00BD82",
    primary2: "#DFFF1B",
    primary3: "linear-gradient(93.52deg, #E6FF4B 8.71%, #00BD82 98.16%)",
  },
  neutral1: "#1E1E1E",
  neutral2: "#FFFFFF",
  neutral3: "#B5B3AF",
  neutral4: "#FDF9F1",
  neutral5: "#E2F471",
  neutral6: "#FFC828",
  neutral7: "#DFD3BB",
};

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: color.primary.primary1,
      light: color.primary.primary2,
      dark: color.primary.primary3,
    },
    common: { white: color.neutral2, black: color.neutral1 },
    secondary: {
      main: color.neutral4,
      light: color.neutral5,
    },
    neutral: {
      neutral1: color.neutral3,
      neutral6: color.neutral6,
      neutral7: color.neutral7,
    },
  },
  typography: {
    fontFamily: ["Sora", "Roboto"].join(","),
    h1: { fontWeight: 600, fontSize: "3.25rem", lineHeight: "4rem" },
    h2: { fontWeight: 600, fontSize: "3rem", lineHeight: "4rem" },
    h3: { fontWeight: 600, fontSize: "2.7rem", lineHeight: "3.4rem" },
    h4: { fontWeight: 600, fontSize: "2.2rem", lineHeight: "3rem" },
    subtitle1: { fontWeight: 400, fontSize: "1.3rem", lineHeight: "1.75rem" },
    body1: { fontWeight: 600, fontSize: "1.3rem", lineHeight: "1.75rem" },
    body2: { fontWeight: 600, fontSize: "1.1rem", lineHeight: "1.3rem" },
  },
});
const theme = createTheme({
  ...defaultTheme,

  components: {
    MuiButton: {
      defaultProps: {},
      styleOverrides: {
        root: {
          color: "white",
          backgroundColor: defaultTheme.palette.primary.main,
          borderRadius: "0.6rem",
          textTransform: "none",
        },

        contained: {
          padding: "1rem 3rem",
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTabs-flexContainer": {
            justifyContent: "center",
            gap: "10px",
          },
          "& .MuiButtonBase-root": {
            ...defaultTheme.typography.body1,
            textTransform: "none",
          },
          "& .Mui-selected": {
            backgroundColor: defaultTheme.palette.common.black,
            borderRadius: "0.8rem",
            color: defaultTheme.palette.primary.light,
            ...defaultTheme.typography.body1,
          },
          "& .MuiTabs-indicator": { display: "none" },
        },
      },
    },
  },
});

export default function ComponentThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
