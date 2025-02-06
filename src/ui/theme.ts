"use client";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontSize: 10,
      //htmlFontSize: 14,
      fontFamily: "var(--font-roboto)",
      fontWeightBold: 400,
      h1: { fontSize: "2.01rem" },
      h2: {
        fontSize: "1.95rem",
      },
      h3: {
        fontSize: "1.65rem",
      },
      h4: {
        fontSize: "1.4rem",
      },
      h5: {
        fontSize: "1.15rem",
      },
      h6: {
        fontSize: "1rem",
      },
    },
    components: {
      MuiShopHeroBox: {
        defaultProps: {
          component: "section",
        },
      },

      MuiNavLink: {
        styleOverrides: {
          root: {
            //backgroundColor:'red'
          },
        },
      },
      ProductCard: {
        defaultProps: {
          elevation: "0",
        },
        styleOverrides: {
          root: {},
        },
      },
      MuiColoredBox: {
        styleOverrides: {
          root: {
            backgroundColor: "green",
          },
        },
      },
      MuiAppBar: {
        defaultProps: {
          elevation: 0,
        },
      },
      MuiIconButton: {
        defaultProps: {
          size: "small",
          disableRipple: true,
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            textTransform: "unset",
          },
        },
      },
    },
    cssVariables: {
      colorSchemeSelector: "data-toolpad-color-scheme",
    },
    colorSchemes: { light: true, dark: true },
  })
);

export default theme;
