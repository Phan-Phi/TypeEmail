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
    },
  },
});
const theme = createTheme({
  ...defaultTheme,
  typography: {
    fontFamily: ["Sora", "Roboto"].join(","),
    h1: { fontWeight: 600, fontSize: "3.25rem", lineHeight: "4rem" },
    h2: { fontWeight: 600, fontSize: "3.1rem", lineHeight: "4rem" },
    h3: { fontWeight: 600, fontSize: "2.7rem", lineHeight: "3.4rem" },
    subtitle1: { fontWeight: 400, fontSize: "1.3rem", lineHeight: "1.75rem" },
  },

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
  },
});

export default function ComponentThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
