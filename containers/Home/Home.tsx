import { Box, useTheme } from "@mui/material";
import About from "components/About";
import BusinessTool from "components/BusinessTool";
import Carousel from "components/Carousel";
import Laibrary from "components/Laibrary";
import Testmonials from "components/Layout/Testmonials";
import Newsletter from "components/Newsletter";
import Service from "components/Service";

export default function Home() {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.secondary.main }}>
      <Carousel />
      <About />
      <Newsletter />
      <Service />
      <BusinessTool />
      <Testmonials />
      <Laibrary />
    </Box>
  );
}
