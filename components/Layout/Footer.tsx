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
import { useMemo } from "react";
import { MENU_FOOTER } from "contants";

export default function Footer() {
  const theme = useTheme();

  const renderMenuFooter = useMemo(() => {
    return MENU_FOOTER.map((el, idx) => {
      if (el.block_type == "image") {
        return (
          <Grid item xs={1} md={3} key={idx}>
            <Image width={150} height={30} src={el.title} alt="logo Footer" />
            <Box marginTop="1.9rem">
              {el.content.map((el, idx) => {
                return (
                  <Typography
                    key={idx}
                    variant="subtitle1"
                    color={theme.palette.neutral.neutral1}
                    marginBottom="1rem"
                  >
                    {el.value}
                  </Typography>
                );
              })}
            </Box>
          </Grid>
        );
      } else if (el.block_type == "title") {
        return (
          <Grid item xs={1} md={3} key={idx}>
            <Typography variant="subtitle1" color={theme.palette.common.white}>
              {el.title}
            </Typography>
            <Box marginTop="1.9rem">
              {el.content.map((el, idx) => {
                return (
                  <Typography
                    key={idx}
                    variant="subtitle1"
                    color={theme.palette.neutral.neutral1}
                    marginBottom="1rem"
                  >
                    {el.value}
                  </Typography>
                );
              })}
            </Box>
          </Grid>
        );
      }
    });
  }, []);

  return (
    <Container>
      <Box textAlign="center" marginBottom="4.75rem" marginTop="5rem">
        <Typography variant="h2" marginBottom="1rem">
          See it for yourself
        </Typography>
        <Typography variant="subtitle1" marginBottom="2.2rem">
          Cat in touch with of our compare and
          <br /> take a personal tour of Sraklune
        </Typography>
        <Button sx={{ gap: "0.3rem" }}>
          Request a Demo
          <EastRoundedIcon />
        </Button>
      </Box>

      <Grid container spacing={2} marginBottom="6.5rem">
        {renderMenuFooter}
      </Grid>
    </Container>
  );
}
