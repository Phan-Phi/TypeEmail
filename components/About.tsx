import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import CoundDown from "./CoundDown";

export default function About() {
  const theme = useTheme();

  return (
    <>
      <Grid
        container
        sx={{
          paddingTop: "20rem",
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Grid item xs={12}>
          <CoundDown />
        </Grid>

        <Grid item xs={12} marginTop="8.7rem">
          <Typography variant="h2">
            More than just drips and newsletters
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
