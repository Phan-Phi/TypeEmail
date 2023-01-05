import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  SwipeableDrawer,
  TablePagination,
  Typography,
} from "@mui/material";
import { ThemeSettingContext } from "context/SettingContext";
import useDataContext from "hooks/useDataContext";
import React, { createContext, useContext, useEffect, useState } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Outfit } from "hocs/localFont";

import { extract } from "@extractus/oembed-extractor";
import DOMPurify from "isomorphic-dompurify";

type Anchor = "left";

export default function DemoContext() {
  const data = useContext(ThemeSettingContext);

  const value = useDataContext();

  const [page, setPage] = React.useState(7);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [state, setState] = React.useState({
    left: false,
  });

  const [video, setVideo] = useState(undefined);
  console.log("🚀 ~ file: index.tsx:38 ~ DemoContext ~ video", video);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const url = async () => {
    const result = await extract("https://vimeo.com/751205972");
    setVideo(result);
  };

  useEffect(() => {
    url();
  }, []);

  return (
    <Box
      sx={{
        // background: "linear-gradient(320deg,#f27121,#e94057,#8a2387)",
        height: "2000px",
      }}
    >
      <h1>Font Outfit</h1>
      <Typography sx={{ fontFamily: Outfit.style.fontFamily }}>
        Font Outfit Font Outfit Font Outfit Font Outfit Font Outfit Font Outfit
      </Typography>

      <iframe
        src="https://player.vimeo.com/video/751205972?h=75b80bbe82&amp;app_id=122963"
        width="426"
        height="240"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        title="Regular"
      ></iframe>

      {video && (
        <Box
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(video.html, {
              ALLOWED_TAGS: ["iframe"],
              ADD_ATTR: [
                "allow",
                "allowfullscreen",
                "frameborder",
                "scrolling",
              ],
            }),
          }}
        ></Box>
      )}

      <Box
        sx={{ backgroundColor: "#e95a94", minHeight: "1000px", width: "100%" }}
      >
        <Box sx={{ position: "relative", height: "1000px" }}>
          {/* <Box
            sx={{
              position: "absolute",
              top: 0,
              width: "100%",
              height: "1000px",
              backggroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundImage:
                "url(https://www.sleepiest.com/assets/img/hero/2@1.5x.png)",
            }}
          ></Box> */}

          <Box
            sx={{
              //   position: "absolute",
              //   top: 0,
              //   left: 0,
              //   right: 0,
              //   bottom: 0,
              height: "100px",
            }}
          >
            <Box
              style={{
                width: "100%",
                height: "100px",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                objectFit: "cover",
                backgroundImage:
                  "url(https://www.sleepiest.com/assets/img/hero/3@1.5x.png)",
              }}
            />
          </Box>
        </Box>
      </Box>

      <Card />

      <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Box
        sx={{
          width: 100,
          height: 200,
          background: "rgba(255, 255, 255, 0.14)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: " blur(0.4px)",
          border: "1px solid rgba(255, 255, 255, 0.36)",
        }}
      ></Box>

      <div>
        {(["left"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </Box>
  );
}

function Card() {
  return <Typography>asdasd</Typography>;
}
