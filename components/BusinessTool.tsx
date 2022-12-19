import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { Image } from "components";
import { useMeasure } from "react-use";

export default function BusinessTool() {
  const theme = useTheme();
  const [ref, { width }] = useMeasure();

  return (
    <Box sx={{ backgroundColor: theme.palette.common.black }}>
      <Container>
        <Grid container alignItems="center" padding="4rem 0" spacing={4}>
          <Grid item xs={6} md={6}>
            <Box>
              <Typography variant="h2" color={theme.palette.common.white}>
                Join forces with your favorite business tools
              </Typography>
              <Typography
                variant="subtitle1"
                color={theme.palette.neutral.neutral1}
                marginBottom="2.5rem"
              >
                awareness through email became <br />a must-have, and our ESP
                wasnt cutting
              </Typography>

              <Button sx={{ gap: "0.3rem" }} variant="contained">
                <Typography
                  color={theme.palette.common.white}
                  variant="subtitle1"
                >
                  See imagradtions
                </Typography>
                <EastRoundedIcon />
              </Button>
            </Box>
          </Grid>

          <Grid item xs={6} md={6}>
            <Box ref={ref}>
              <Image
                src="/img/businessTool.png"
                width="100%"
                height={width / (534 / 442)}
                alt="businessTool"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
