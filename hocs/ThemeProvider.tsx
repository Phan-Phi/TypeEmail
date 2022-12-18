import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const color = {
  primary: { primary1: "#00BD82", primary2: "#DFFF1B" },
  neutral1: "#1E1E1E",
  neutral2: "#FFFFFF",
  neutral3: "#B5B3AF",
};

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: color.primary.primary1,
      light: color.primary.primary2,
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
