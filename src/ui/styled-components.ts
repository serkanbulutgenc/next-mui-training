"use client";
import { Box, Button, Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const NavLink = styled(Button, {
  name: "MuiNavLink",
  slot: "root",
  label: "AppNavLink",
})(({ theme }) => ({
  //color: theme.palette.text.primary,
  "&:hover": {
    color: theme.palette.secondary.light,
    //backgroundColor:'transparent'
  },
  "&.active": {
    color: theme.palette.secondary.light,
    backgroundColor: theme.palette.background.paper,
    fontWeight: 700,
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
  label: "ShopHeroBox",
})(({ theme }) => ({
  width: "auto",
  height: "auto",
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  marginBottom: theme.spacing(4),
  backgroundColor: `rgb(248,249,250)`,
}));

export const SectionBox = styled("section", {
  name: "MuiSectionBox",
  slot: "root",
})(({ theme }) => ({
  width: "auto",
  height: "auto",
}));

export const ProductCard = styled(Card, {
  name: "ProductCard",
  slot: "root",
  label: "MuiProductCard",
})(({ theme }) => ({
  textAlign: "center",
  boxShadow: "none",
  borderRadius: 0,
  "&:hover": {
    cursor: "pointer",
    "& .MuiCardActions-root": {
      transition: "opacity 0.3s",
      opacity: 1,
    },
    "& .MuiCardMedia-root": {
      opacity: 0.3,
      transition: "opacity 0.3s",
    },
  },
  "& .MuiCardActions-root": {
    p: 1,
    backgroundColor: "rgba(0,0,0,.1)",
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    opacity: 0,
    transition: "opacity 0.3s",
  },
}));
