import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { useMemo } from "react";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import { MENU_SERVICE } from "contants";
import { useMedia } from "hooks/useMedia";

export default function Service() {
  const theme = useTheme();
  const { isSmDown, isMdDown } = useMedia();

  const renderMenuService = useMemo(() => {
    return MENU_SERVICE.map((el, idx) => {
      return (
        <Grid
          key={idx}
          item
          xs={12}
          md={4}
          sx={{
            "& :hover.MuiBox-root": {
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            },
            "& :hover .MuiSvgIcon-root": {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.common.white,
            },
          }}
        >
          <Box
            sx={{
              transition: "ease 0.5s",
              cursor: "pointer",
              padding: "2.6rem 2.2rem 4rem 2.2rem",
            }}
          >
            <LocalPostOfficeIcon
              sx={{
                backgroundColor: theme.palette.neutral.neutral1,
                color: theme.palette.common.black,
                borderRadius: "50%",
                fontSize: "4rem",
                marginBottom: "2.7rem",
                padding: "1rem",
                transition: "ease 0.5s",
              }}
            />
            <Typography variant="body1" marginBottom="1rem">
              {el.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color={theme.palette.neutral.neutral1}
            >
              {el.text}
            </Typography>
          </Box>
        </Grid>
      );
    });
  }, []);

  return (
    <Container>
      <Grid container marginBottom="7rem">
        <Grid item xs={12} marginBottom="3.6rem">
          <Typography variant={isSmDown ? "h4" : "h2"} textAlign="center">
            Our some service
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>{renderMenuService}</Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
