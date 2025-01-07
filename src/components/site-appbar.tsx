import {
  AppBar,
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { NavLink } from "@/ui/styled-components";

export default function SiteAppBar() {
  return (
    <AppBar
      position="static"
      color="inherit"
      sx={{ borderBottom: "1px solid #fff" }}
    >
      <Toolbar disableGutters>
        <Container maxWidth={"lg"}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              <Grid size={"auto"}>
                <Stack
                  direction={"row"}
                  spacing={1}
                  component={"nav"}
                  divider={<Divider orientation="vertical" flexItem />}
                >
                  <NavLink
                    variant={"text"}
                    color="inherit"
                    component={Link}
                    href="/"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    variant={"text"}
                    color="inherit"
                    component={Link}
                    href="shop"
                  >
                    Shop
                  </NavLink>
                  <NavLink
                    variant={"text"}
                    color="inherit"
                    component={Link}
                    href="about"
                  >
                    About
                  </NavLink>
                  <NavLink
                    variant={"text"}
                    color="inherit"
                    component={Link}
                    href="contact"
                  >
                    Contact
                  </NavLink>
                </Stack>
              </Grid>
              <Grid
                size={6}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography
                  variant={"h6"}
                  component={"div"}
                  color={"textPrimary"}
                  fontFamily={`var(--font-lemon)`}
                >
                  Boutique
                </Typography>
              </Grid>
              <Grid size={"grow"}>
                <Stack
                  direction={"row-reverse"}
                  spacing={1}
                  divider={<Divider orientation="vertical" flexItem />}
                >
                  <IconButton>
                    <AccountCircleIcon />
                  </IconButton>
                  <IconButton>
                    <ShoppingCartIcon />
                  </IconButton>
                  <IconButton>
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
