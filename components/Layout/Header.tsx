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

export default function Header() {
  const theme = useTheme();
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box sx={{ cursor: "pointer" }}>
          <Link href="./">
            <Image src="/img/logo.png" width={150} height={150} alt="logo" />
          </Link>
        </Box>

        <Stack direction="row" spacing={4} alignItems="center">
          {MenuHeader.map((el: ITEM_MENU, idx: number) => {
            return (
              <Typography
                variant="subtitle1"
                key={idx}
                sx={{
                  color: theme.palette.neutral.neutral1,
                  cursor: "pointer",
                  "&:hover": {
                    color: theme.palette.primary.light,
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
  );
}
