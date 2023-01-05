import React, { useMemo, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Sling as Hamburger } from "hamburger-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import { useCallback } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import PullRelease from "components/PullRelease";

import { useTransition } from "@react-spring/web";
import { styled } from "@stitches/react";
import * as Dialog from "@radix-ui/react-dialog";
import { useTrail, a } from "@react-spring/web";

import styles from "../../styles/styles.module.css";

import axios from "axios";

const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1000, friction: 100 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};
// const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

export default function DemoSwiper() {
  const [open, set] = useState(true);
  const [img, setImg] = useState([]);

  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));
  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
  });

  const [isOpen, setIsOpen] = useState(false);

  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/albums/",
    params: { ids: "3IBcauSj5M2A6lTeffJzdv" },
    headers: {
      "X-RapidAPI-Key": "dc7d65ae49mshe0e91c0397252d8p10a718jsn2894eb975510",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <>
      {/* <Hamburger toggled={isOpen} toggle={setOpen} rounded /> */}

      <PullRelease />

      <Box className={styles.container} onClick={() => set((state) => !state)}>
        <Trail open={open}>
          <span>Lorem</span>
          <span>Ipsum</span>
          <span>Dolor</span>
          <span>Sit</span>
        </Trail>
      </Box>

      <Dropzone
        {...{
          accept: {
            "image/*": [],
          },

          onDrop: (acceptedFiles) => {
            console.log(
              "🚀 ~ file: index.tsx:56 ~ DemoSwiper ~ acceptedFiles",
              acceptedFiles
            );

            setImg(acceptedFiles);
          },

          onFileDialogOpen: () => {
            return <Button>open</Button>;
          },
        }}
      >
        {({ getRootProps, getInputProps }) => {
          return (
            <div className="container">
              <div
                {...getRootProps({
                  className: "dropzone",
                  onDrop: (event) => event.stopPropagation(),
                })}
              >
                <Grid container>
                  <Grid item xs={1}>
                    <input
                      {...getInputProps()}
                      style={{ backgroundColor: "red" }}
                    />
                  </Grid>
                  {img &&
                    img.map((el, idx: number) => {
                      const img = URL.createObjectURL(el);
                      return (
                        <Grid item xs={1} key={idx}>
                          <img src={img} width={100} />
                        </Grid>
                      );
                    })}
                </Grid>
              </div>
            </div>
          );
        }}
      </Dropzone>
    </>
  );
}
const TriggerPart = styled("span", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  borderRadius: 8,
});

const TriggerShadow = styled(TriggerPart, {
  background: "hsl(0deg 0% 0% / 0.1)",
  transform: "translateY(2px)",
  transition: "transform 250ms ease-out",
});

const TriggerEdge = styled(TriggerPart, {
  background: `linear-gradient(
      to left,
      hsl(0deg 0% 69%) 0%,
      hsl(0deg 0% 85%) 8%,
      hsl(0deg 0% 85%) 92%,
      hsl(0deg 0% 69%) 100%
    )`,
});
const TriggerLabel = styled("span", {
  display: "block",
  position: "relative",
  borderRadius: 8,
  color: "#569AFF",
  fontSize: "14px",
  padding: "16px 24px",
  background: "#fafafa",
  transform: "translateY(-4px)",
  width: "100%",
  userSelect: "none",
  transition: "transform 250ms ease-out",
});

const Trigger = styled(Dialog.Trigger, {
  border: "none",
  fontWeight: 600,
  cursor: "pointer",
  background: "transparent",
  position: "relative",
  padding: 0,
  cursor: "pointer",
  transition: "filter 250ms ease-out",

  "&:hover": {
    filter: "brightness(110%)",

    [`& ${TriggerLabel}`]: {
      transform: "translateY(-6px)",
    },

    [`& ${TriggerShadow}`]: {
      transform: "translateY(4px)",
    },
  },

  "&:active": {
    [`& ${TriggerLabel}`]: {
      transform: "translateY(-2px)",
      transition: "transform 34ms",
    },

    [`& ${TriggerShadow}`]: {
      transform: "translateY(1px)",
      transition: "transform 34ms",
    },
  },
});

const OverlayBackground = styled(animated(Dialog.Overlay), {
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  pointerEvents: "all",
  position: "fixed",
  inset: 0,
});

const Content = styled(animated(Dialog.Content), {
  position: "absolute",
  width: "50vw",
  height: "60vh",
  backgroundColor: "#fafafa",
  borderRadius: 8,
  padding: "24px 24px 32px",
});

const DialogHeader = styled("header", {
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: 16,
});

const CloseButton = styled(Dialog.Close, {
  backgroundColor: "transparent",
  border: "none",
  position: "absolute",
  top: 16,
  right: 16,
  cursor: "pointer",
  color: "#1B1A22",
});

const Title = styled(Dialog.Title, {
  fontSize: 20,
});
