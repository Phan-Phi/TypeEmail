import { Grid, Typography, useTheme } from "@mui/material";
import { useMeasure } from "react-use";
import CoundDown from "./CoundDown";

export default function About() {
  const [ref, { width }] = useMeasure();
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

        <Grid
          item
          xs={12}
          marginTop="8.7rem"
          marginBottom="3rem"
          textAlign="center"
        >
          <Typography variant="h2" width="50%" margin="0 auto">
            More than just drips and newsletters
          </Typography>
          <Typography variant="subtitle1" width="38%" margin="0 auto">
            awareness through email became a must-have, and our ESP wasnt
            cutting
          </Typography>
        </Grid>

        <Grid item xs={12} sx={{ position: "relative" }}>
          {/* <Box ref={ref} width="30%" sx={{ position: "absolute" }}>
            <Image
              src="/img/Rectangle 5612.png"
              width="100%"
              height={width / (500 / 680)}
              alt="iamge"
            />
          </Box> */}
        </Grid>
      </Grid>
    </>
  );
}
