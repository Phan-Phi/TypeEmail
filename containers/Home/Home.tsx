import { Box, useTheme } from "@mui/material";
import About from "components/About";
import BusinessTool from "components/BusinessTool";
import Carousel from "components/Carousel";
import Laibrary from "components/Laibrary";
import Testmonials from "components/Layout/Testmonials";
import Newsletter from "components/Newsletter";
import Service from "components/Service";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });

    AOS.refresh();
  }, []);

  return (
    <Box sx={{ backgroundColor: theme.palette.secondary.main }}>
      <Carousel />

      <Box data-aos="fade-up" data-aos-once="true">
        <About />
      </Box>

      <Box data-aos="fade-right" data-aos-once="true">
        <Newsletter />
      </Box>

      <Box data-aos="flip-left" data-aos-once="true">
        <Service />
      </Box>

      <Box data-aos="flip-up" data-aos-once="true">
        <BusinessTool />
      </Box>

      <Box data-aos="zoom-in" data-aos-once="true">
        <Testmonials />
      </Box>

      <Laibrary />
    </Box>
  );
}
