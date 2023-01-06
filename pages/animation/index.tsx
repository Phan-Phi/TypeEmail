import { Box, Button } from "@mui/material";
import React from "react";

export default function Animation() {
  return (
    <Box>
      <Box
        sx={{
          animationDuration: "3s",
          animationName: "button",
          animationIterationCount: "infinite",
          animationDirection: "alternate",
          animationTimingFunction: "ease-in",

          "@keyframes button": {
            from: {
              padding: "2rem",
            },
            to: {
              padding: "20rem",
            },
          },
        }}
      >
        <Button>click</Button>
      </Box>
    </Box>
  );
}
