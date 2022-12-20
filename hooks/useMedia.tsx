import { useMediaQuery, useTheme } from "@mui/material";

export function useMedia() {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isLgDown = useMediaQuery(theme.breakpoints.down("lg"));
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  return { isSmDown, isSmUp, isMdDown, isMdUp, isLgDown, isLgUp };
}
