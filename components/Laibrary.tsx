import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { Image } from "components";
import { ITEM_TABPANEL, ITEM_TABS } from "contants";
import React, { useMemo, useState } from "react";
import { useMeasure } from "react-use";
import TabPanel from "./Tabs/TabPanel";
import TabsMUI from "./Tabs/Tabs";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { useMedia } from "hooks/useMedia";

export default function Laibrary() {
  const theme = useTheme();
  const { isSmDown, isMdDown } = useMedia();
  const [ref, { width }] = useMeasure();

  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  const renderTabs = useMemo(() => {
    return (
      <TabsMUI value={ITEM_TABS} onChange={handleChange} id={currentTab} />
    );
  }, [currentTab]);

  const renderTabPanel = useMemo(() => {
    return (
      <TabPanel value={currentTab} index={currentTab}>
        <Grid container spacing={3}>
          {ITEM_TABPANEL.map(
            (
              el: { id: number; name: string; subTitle: string; image: string },
              idx: number
            ) => {
              return (
                <Grid item key={idx} xs={12} md={4}>
                  <Box ref={ref}>
                    <Image
                      src={el.image}
                      width="100%"
                      height={width / (320 / 230)}
                      alt="image"
                      style={{ objectFit: "cover" }}
                    />
                    <Typography
                      marginTop="1.2rem"
                      variant="body2"
                      color={theme.palette.primary.main}
                    >
                      {el.name}
                    </Typography>
                    <Typography
                      marginTop="0.5rem"
                      variant="body1"
                      color={theme.palette.common.black}
                    >
                      {el.subTitle}
                    </Typography>
                  </Box>
                </Grid>
              );
            }
          )}
        </Grid>
      </TabPanel>
    );
  }, [currentTab, width]);

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} textAlign="center" marginBottom="2rem">
          <Typography variant={isSmDown ? "h4" : "h2"}>
            Sendlane Resource Library
          </Typography>
          <Typography
            variant="subtitle1"
            width={isSmDown ? "75%" : "35%"}
            margin="0 auto"
          >
            Cat in tuch with of our compare and take a personal tour of Sraklune
          </Typography>
        </Grid>

        <Grid item xs={12} marginBottom="3rem">
          {renderTabs}
        </Grid>
        <Grid item xs={12}>
          {renderTabPanel}

          <Box textAlign="center" marginTop="2rem" marginBottom="6rem">
            <Button
              sx={{ gap: "0.3rem", paddingX: "2rem" }}
              variant="contained"
            >
              <Typography
                color={theme.palette.common.white}
                variant="subtitle1"
              >
                See Update
              </Typography>
              <EastRoundedIcon />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
