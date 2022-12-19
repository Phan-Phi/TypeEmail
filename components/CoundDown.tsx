import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { COUND_DOWN } from "contants";
import React, { useMemo } from "react";

export default function CoundDown() {
  const theme = useTheme();

  const renderCoundDown = useMemo(() => {
    return COUND_DOWN.map((el, idx) => {
      return (
        <Grid
          item
          xs={4}
          key={idx}
          textAlign="center"
          color={theme.palette.common.black}
          padding="3rem 0"
        >
          <Typography variant="h3" marginBottom="1rem">
            {el.title}
          </Typography>
          <Typography variant="subtitle1">{el.text}</Typography>
        </Grid>
      );
    });
  }, []);

  return (
    <Box sx={{ backgroundColor: theme.palette.secondary.light }}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Grid container>{renderCoundDown}</Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
