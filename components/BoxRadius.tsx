import { Box } from "@mui/material";
import React from "react";

export default function BoxRadius({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        borderRadius: "15px",
        backgroundColor: "blue",
        padding: "5px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      {children}
    </Box>
  );
}
