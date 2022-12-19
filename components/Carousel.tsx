import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import { Image } from "components";
import { useMeasure } from "react-use";
import { RATIO } from "contants";

export default function Carousel() {
  const theme = useTheme();
  const [ref, { width }] = useMeasure();

  return (
    <Box
      sx={{ backgroundColor: theme.palette.common.black, paddingTop: "7rem" }}
    >
      <Container>
        <Grid container sx={{ position: "relative" }}>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              width="75%"
              textAlign="center"
              margin="0 auto"
              sx={{
                background:
                  "linear-gradient(93.52deg, #E6FF4B 8.71%, #00BD82 98.16%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Online shoppers into loyal, lifetime customers with email & sms
              marketing
            </Typography>
          </Grid>

          <Grid item xs={12} marginBottom="26.3rem">
            <Stack
              direction="row"
              spacing={3}
              justifyContent="center"
              marginTop="3.3rem"
            >
              <Box>
                <Button variant="contained">
                  <Typography variant="subtitle1">Get Started</Typography>
                </Button>
              </Box>

              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  variant="subtitle1"
                  color={theme.palette.common.white}
                >
                  How it works
                </Typography>

                <ArrowRightRoundedIcon
                  sx={{
                    color: theme.palette.common.white,
                    border: `1px solid ${theme.palette.primary.main}`,
                    borderRadius: "50%",
                    fontSize: "3rem",
                  }}
                />
              </Stack>
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{ position: "absolute", bottom: -230, width: "100%" }}
          >
            <Box ref={ref}>
              <Image
                width="100%"
                height={width / RATIO.BANNER_HERO}
                alt="bannerHero"
                src="/img/BannerHero.png"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
