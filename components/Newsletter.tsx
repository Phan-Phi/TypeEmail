import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { useMeasure } from "react-use";
import { Image } from "components";
import { useMedia } from "hooks/useMedia";

export default function Newsletter() {
  const [ref, { width }] = useMeasure();
  const theme = useTheme();
  const { isSmDown } = useMedia();

  return (
    <Box sx={{ position: "relative" }} marginBottom="5rem">
      <Container>
        <Grid
          container
          spacing={4}
          sx={{
            [theme.breakpoints.down("sm")]: { flexDirection: "column-reverse" },
          }}
        >
          <Grid item xs={12} md={6} zIndex={2}>
            <Typography variant="h4" width="60%" marginBottom="1rem">
              Drive 30-40% of your revenue with email marekiting
            </Typography>
            <Typography variant="subtitle1" width="75%" marginBottom="2.3rem">
              Unlock customer insights to grow your business faster. Store all
              your customer data collected from storefront to marketing channels
              in one central hub far easy use in every strategy.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Box
                sx={{
                  transition: "ease 0.5s",
                  cursor: "pointer",
                }}
              >
                <WifiTetheringIcon
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.common.white,
                    borderRadius: "50%",
                    fontSize: "4rem",
                    marginBottom: "1.2rem",
                    padding: "1rem",
                    transition: "ease 0.5s",
                  }}
                />
                <Typography variant="body1" marginBottom="1rem">
                  Marketing Automation
                </Typography>
                <Typography
                  variant="subtitle1"
                  color={theme.palette.neutral.neutral1}
                >
                  From open rates to conversion performance, get access to tons
                  of data.
                </Typography>
              </Box>

              <Box
                sx={{
                  transition: "ease 0.5s",
                  cursor: "pointer",
                }}
              >
                <LocalHospitalIcon
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.common.white,
                    borderRadius: "50%",
                    fontSize: "4rem",
                    marginBottom: "1.2rem",
                    padding: "1rem",
                    transition: "ease 0.5s",
                  }}
                />
                <Typography variant="body1" marginBottom="1rem">
                  Experiments
                </Typography>
                <Typography
                  variant="subtitle1"
                  color={theme.palette.neutral.neutral1}
                >
                  From sign up to sale track your contacts every move.
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} zIndex={2}>
            <Box width={isSmDown ? "100%" : "90%"} margin="auto 0">
              <Box
                ref={ref}
                sx={{
                  padding: "2rem",
                  backgroundColor: theme.palette.neutral.neutral7,
                  borderRadius: "1rem",
                }}
              >
                <Image
                  src="/img/Newsletter.png"
                  width="100%"
                  height={width / (280 / 300)}
                  // height={width / (430 / 460)}
                  alt="image"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Box>
          </Grid>

          <Box
            width={isSmDown ? "90%" : "30%"}
            sx={{
              position: "absolute",
              right: 0,
              zIndex: 1,
              [theme.breakpoints.down("sm")]: { top: 0 },
            }}
          >
            <Image
              src="/img/Rectangle 5612.png"
              width="100%"
              height={width / (500 / 750)}
              alt="image"
            />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
