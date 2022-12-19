import { Box } from "@mui/material";
import React from "react";

type Props = {
  value: number;
  index: number;
  children: React.ReactNode;
};

export default function TabPanel(props: Props) {
  const { value, index, children } = props;
  return <Box>{value === index ? <Box>{children}</Box> : null}</Box>;
}
