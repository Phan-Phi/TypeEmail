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
import { useMedia } from "hooks/useMedia";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

export default function Testmonials() {
  const { isSmDown, isMdDown } = useMedia();
  const theme = useTheme();
  const [ref, { width }] = useMeasure();

  const [count, setCount] = useState(1);

  const slider = useRef<any>(null);

  const renderItem = useMemo(() => {
    return TEST_MONIALS.map((el, idx) => {
      return (
        <Box
          key={idx}
          sx={{
            display: "flex !important",
            gap: 5,
            [theme.breakpoints.down("sm")]: {
              display: "flex !important",
              flexDirection: " column-reverse",
            },
          }}
        >
          <Box ref={ref} width={isSmDown ? "100%" : "50%"}>
            <Image
              src={el.image}
              width="100%"
              height={width / (502 / 470)}
              style={{ objectFit: "cover" }}
              alt="image"
            />
          </Box>

          <Box
            width={isSmDown ? "100%" : "50%"}
            sx={{ display: "flex", margin: "auto 0" }}
          >
            <Box>
              <Typography
                variant="body1"
                marginBottom="1.7rem"
                sx={{
                  display: "-webkit-box",
                  WebkitLineClamp: 6,
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  minHeight: 6 * 28,
                }}
              >
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
      <Grid container marginBottom={isSmDown ? 8.5 : 19}>
        <Grid
          item
          xs={12}
          marginBottom={isSmDown ? "3rem" : "4.75rem"}
          marginTop={isSmDown ? "3.5rem" : "8rem"}
        >
          <Typography
            variant={isSmDown ? "h4" : "h2"}
            width={isSmDown ? "60%" : isMdDown ? "80%" : "50%"}
            textAlign={isSmDown ? "left" : "center"}
            margin={isSmDown ? "0 left" : "0 auto"}
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
