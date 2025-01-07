"use client";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const NavLink = styled(Button, {
  name: "MuiNavLink",
  slot: "root",
  label: "AppNavLink",
})(({ theme }) => ({
  color: theme.palette.text.primary,
  "&:hover": {
    color: theme.palette.secondary.light,
    //backgroundColor:'transparent'
  },
}));

export const ColoredBox = styled(Box, {
  name: "MuiColoredBox",
  slot: "root",
})(({ theme }) => ({
  width: 200,
  height: 300,
  backgroundColor: theme.palette.secondary.main,
}));

export const ShopHeroBox = styled(Box, {
  name: "MuiShopHeroBox",
  slot: "root",
})(({ theme }) => ({
  width: "auto",
  height: "auto",
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  backgroundColor: `rgb(248,249,250)`,
}));

export const SectionBox = styled("section", {
  name: "MuiSectionBox",
  slot: "root",
})(({ theme }) => ({
  width: "auto",
  height: "auto",
}));
