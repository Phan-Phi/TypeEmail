import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

export default function Footer() {
  const theme = useTheme();

  return (
    <Container>
      <Box textAlign="center">
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
    </Container>
  );
}
