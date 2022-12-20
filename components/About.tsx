import { Grid, Typography, useTheme } from "@mui/material";
import { useMedia } from "hooks/useMedia";
import CoundDown from "./CoundDown";

export default function About() {
  const { isSmDown, isMdDown } = useMedia();
  const theme = useTheme();

  return (
    <>
      <Grid
        container
        sx={{
          paddingTop: isSmDown ? "14rem" : "20rem",
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Grid item xs={12}>
          <CoundDown />
        </Grid>

        <Grid
          item
          xs={12}
          marginTop={isSmDown ? "3.8rem" : "8.7rem"}
          marginBottom="3rem"
          textAlign="center"
        >
          <Typography
            variant={isSmDown ? "h4" : "h2"}
            width={isSmDown ? "80%" : isMdDown ? "70%" : "50%"}
            margin="0 auto"
          >
            More than just drips and newsletters
          </Typography>
          <Typography
            variant="subtitle1"
            width={isSmDown ? "60%" : isMdDown ? "65%" : "38%"}
            margin="0 auto"
          >
            awareness through email became a must-have, and our ESP wasnt
            cutting
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
