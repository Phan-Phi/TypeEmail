import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "components";
import { useMeasure } from "react-use";
import StarIcon from "@mui/icons-material/Star";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useMemo, useRef, useState } from "react";
import { TEST_MONIALS } from "contants";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

export default function Testmonials() {
  const theme = useTheme();
  const [ref, { width }] = useMeasure();

  const [count, setCount] = useState(1);

  const slider = useRef<any>(null);

  const renderItem = useMemo(() => {
    return TEST_MONIALS.map((el, idx) => {
      return (
        <Box key={idx} sx={{ display: "flex !important", gap: 5 }}>
          <Box ref={ref} width="50%">
            <Image
              src={el.image}
              width="100%"
              height={width / (502 / 470)}
              style={{ objectFit: "cover" }}
              alt="image"
            />
          </Box>

          <Box width="50%" sx={{ display: "flex", margin: "auto 0" }}>
            <Box>
              <Typography variant="body1" marginBottom="1.7rem">
                {el.content}
              </Typography>
              <Typography
                marginBottom="1rem"
                variant="subtitle1"
                color={theme.palette.neutral.neutral1}
              >
                {el.name}
              </Typography>
              <Box marginBottom="1rem">
                <StarIcon sx={{ color: theme.palette.neutral.neutral6 }} />
                <StarIcon sx={{ color: theme.palette.neutral.neutral6 }} />
                <StarIcon sx={{ color: theme.palette.neutral.neutral6 }} />
              </Box>
              <Typography variant="body1"> {el.rating}</Typography>
            </Box>
          </Box>
        </Box>
      );
    });
  }, [width]);

  return (
    <Container>
      <Grid container marginBottom={19}>
        <Grid item xs={12} marginBottom="4.75rem" marginTop="8rem">
          <Typography
            variant="h2"
            width="50%"
            textAlign="center"
            margin="0 auto"
          >
            See what our customer have to say
          </Typography>
        </Grid>

        <Grid item xs={12} sx={{ "& .slick-prev": { bottom: 0 } }}>
          <Slider ref={slider} {...settings}>
            {renderItem}
          </Slider>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="flex-end"
            marginTop={2}
          >
            <Button
              disabled={count == 1 ? true : false}
              variant="contained"
              onClick={(e) => {
                setCount((el) => {
                  return el - 1;
                });
                slider?.current?.slickPrev();
              }}
              sx={{ padding: "0.8rem" }}
            >
              <ChevronLeftIcon />
            </Button>
            <Button
              disabled={count == TEST_MONIALS.length ? true : false}
              variant="contained"
              onClick={(e) => {
                setCount((el) => {
                  return el + 1;
                });
                slider?.current?.slickNext();
              }}
              sx={{ padding: "0.8rem" }}
            >
              <ChevronRightIcon />
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
