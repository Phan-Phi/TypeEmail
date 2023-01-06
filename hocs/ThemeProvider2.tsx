import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";

const COLORS = {
  white: "#FFFFFF",
  black: "#000000",

  primaryMain: "#741012",
  primaryLight: "#FDFDFD",
  primaryDark: "#242424",

  secondaryMain: "#DDD1BB",
  secondaryLight: "#C0AA83",
  secondaryDark: "#997E4E",

  neutral1: "#141416",
  neutral2: "#23262F",
  neutral3: "#353945",
  neutral4: "#777E90",
  neutral5: "#B1B5C3",
  neutral6: "#E6E8EC",
  neutral7: "#F4F5F6",
  neutral8: "#FCFCFD",
};

export default function ThemeProvider2({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: COLORS.primaryMain,
        light: COLORS.primaryLight,
        dark: COLORS.primaryDark,
      },

      secondary: {
        main: COLORS.secondaryMain,
        light: COLORS.secondaryLight,
        dark: COLORS.secondaryDark,
      },

      common: {
        black: COLORS.black,
        white: COLORS.white,
      },

      neutral: {
        neutral1: COLORS.neutral1,
        neutral2: COLORS.neutral2,
        neutral3: COLORS.neutral3,
        neutral4: COLORS.neutral4,
        neutral5: COLORS.neutral5,
        neutral6: COLORS.neutral6,
        neutral7: COLORS.neutral7,
        neutral8: COLORS.neutral8,
      },
    },

    typography: {
      h1: {
        fontSize: "64px",
        fontWeight: "700",
        lineHeight: "64px",
      },
      h2: {
        fontSize: "48px",
        fontWeight: "700",
        lineHeight: "56px",
      },
      h3: {
        fontSize: "40px",
        fontWeight: "700",
        lineHeight: "48px",
      },
      h4: {
        fontSize: "32px",
        fontWeight: "700",
        lineHeight: "40px",
      },

      body1: {
        fontSize: "24px",
        fontWeight: "400",
        lineHeight: "32px",
      },
      body1Bold: {
        fontSize: "24px",
        fontWeight: "600",
        lineHeight: "32px",
      },

      body2: {
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "24px",
      },
      body2Bold: {
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "24px",
      },

      caption: {
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "24px",
      },
      captionBold: {
        fontSize: "14px",
        fontWeight: "800",
        lineHeight: "24px",
      },

      caption2: {
        fontSize: "12px",
        fontWeight: "400",
        lineHeight: "20px",
      },
      caption2Bold: {
        fontSize: "12px",
        fontWeight: "600",
        lineHeight: "20px",
      },

      hairline1: {
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "16px",
      },
      hairline2: {
        fontSize: "12px",
        fontWeight: "700",
        lineHeight: "12px",
      },

      button1: {
        fontSize: "16px",
        fontWeight: "800",
        lineHeight: "16px",
      },
      button2: {
        fontSize: "14px",
        fontWeight: "800",
        lineHeight: "16px",
      },
    },
  });

  const theme = createTheme({
    ...defaultTheme,

    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
        },

        styleOverrides: {
          root: {
            borderRadius: "0.8rem",
            padding: "1rem 1.5rem",
            color: defaultTheme.palette.common.black,
          },

          contained: {
            backgroundColor: defaultTheme.palette.secondary.light,
          },

          outlined: {
            border: `1px solid ${defaultTheme.palette.secondary.light}`,
          },
        },
      },

      MuiFormLabel: {
        styleOverrides: {
          root: {
            ...defaultTheme.typography.hairline2,
            color: defaultTheme.palette.neutral.neutral5,

            "&.Mui-focused": {
              color: defaultTheme.palette.secondary.light,
            },
          },
        },
      },

      MuiInputBase: {
        styleOverrides: {
          root: {
            ...defaultTheme.typography.captionBold,
            borderRadius: "0.8rem",
            border: `2px solid ${defaultTheme.palette.common.black}`,
            padding: "0.75rem 1rem",

            "&::before,::after": {
              display: "none",
            },

            "&.Mui-focused": {
              border: `2px solid ${defaultTheme.palette.secondary.light}`,
            },

            "& ::placeholder": {
              color: defaultTheme.palette.neutral.neutral5,
              opacity: 1,
            },

            "&.Mui-error": {
              color: defaultTheme.palette.primary.main,
              border: `2px solid ${defaultTheme.palette.primary.main}`,
            },
          },
        },
      },

      MuiTab: {
        styleOverrides: {
          root: {
            ...defaultTheme.typography.captionBold,
            padding: "0.6rem, 1rem",
            color: defaultTheme.palette.secondary.light,
            textTransform: "capitalize",
            borderRadius: "0.6rem",

            "&.Mui-selected": {
              color: defaultTheme.palette.common.black,
              backgroundColor: defaultTheme.palette.secondary.light,
            },

            "&:hover": {
              border: `2px solid ${defaultTheme.palette.secondary.light}`,
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            "& .MuiTabs-indicator": {
              display: "none",
            },
          },
        },
      },

      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: "0.5rem",
            backgroundColor: defaultTheme.palette.secondary.light,
            color: defaultTheme.palette.common.white,
          },
        },
      },

      MuiPagination: {
        styleOverrides: {
          root: {
            color: defaultTheme.palette.secondary.light,

            "& .MuiButtonBase-root": {
              ...defaultTheme.typography.button2,
              color: defaultTheme.palette.secondary.light,
              backgroundColor: "none",
            },

            "& .MuiPaginationItem-root": {
              ...defaultTheme.typography.button2,
              color: defaultTheme.palette.secondary.light,
            },

            "& .Mui-selected": {
              color: defaultTheme.palette.common.black,
            },
          },
        },
      },

      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: defaultTheme.palette.neutral.neutral5,
          },
        },
      },

      MuiSlider: {
        styleOverrides: {
          root: {
            height: "1rem",

            "& .MuiSlider-rail": {
              backgroundColor: "#E6E8EC",
            },

            "& .MuiSlider-track": {
              backgroundColor: defaultTheme.palette.secondary.light,
              border: "none",
            },

            "& .MuiSlider-thumb": {
              backgroundColor: defaultTheme.palette.secondary.light,
            },
            "& .MuiSlider-valueLabel": {
              backgroundColor: defaultTheme.palette.primary.dark,
              borderRadius: "10px",
            },
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            "& .MuiTypography-root": {
              color: defaultTheme.palette.common.black,
              ...defaultTheme.typography.captionBold,
            },
          },
        },
      },

      MuiRadio: {
        styleOverrides: {
          root: {
            color: defaultTheme.palette.common.black,
            "&.Mui-checked": {
              color: defaultTheme.palette.secondary.light,
            },
          },
        },
      },

      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: defaultTheme.palette.common.black,
            "&.Mui-checked": {
              color: defaultTheme.palette.secondary.light,
            },
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

// 7.58
