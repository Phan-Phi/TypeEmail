import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Image } from "components";
import { MenuHeader } from "contants";
import { ITEM_MENU } from "interface";
import Link from "next/link";
import { useWindowScroll } from "react-use";

export default function Header() {
  const { y } = useWindowScroll();
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.common.black,
        position: "fixed",
        top: "0",
        zIndex: 10,
        boxShadow: y >= 160 ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "none",
      }}
    >
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ backgroundColor: theme.palette.common.black }}
        >
          <Box sx={{ cursor: "pointer" }}>
            <Link href="./">
              <Image src="/img/logo.png" width={180} height={90} alt="logo" />
            </Link>
          </Box>

          <Stack direction="row" spacing={4} alignItems="center">
            {MenuHeader.map((el: ITEM_MENU, idx: number) => {
              return (
                <Typography
                  variant="subtitle1"
                  key={idx}
                  sx={{
                    position: "relative",
                    color: theme.palette.neutral.neutral1,
                    cursor: "pointer",
                    "&:hover": {
                      color: theme.palette.primary.light,
                    },
                    "&:after": {
                      background: "none repeat scroll 0 0 transparent",
                      bottom: -5,
                      content: `" "`,
                      display: "block",
                      height: "2px",
                      left: "40%",
                      position: "absolute",
                      backgroundColor: theme.palette.primary.light,
                      transition: "width 0.3s ease 0s, left 0.3s ease 0s",
                      width: 0,
                    },

                    "&:hover:after": {
                      width: "100%",
                      left: 0,
                    },
                  }}
                >
                  {el.name}
                </Typography>
              );
            })}
          </Stack>

          <Box>
            <Button
              variant="contained"
              sx={{ backgroundColor: theme.palette.neutral.neutral1 }}
            >
              Log in
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
