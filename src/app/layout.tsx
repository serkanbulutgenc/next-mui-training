import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Lemon, Roboto } from "next/font/google";
import { CssBaseline, LinearProgress } from "@mui/material";
import { Navigation } from "@toolpad/core";
import { NextAppProvider } from "@toolpad/core/nextjs";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import theme from "@/ui/theme";
import "./globals.css";
import React from "react";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});
const lemon = Lemon({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-lemon",
});

export const metadata: Metadata = {
  title: "Next App with @mui",
  description: "Next with @mui/material library.",
};

const navigation: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    title: "Dashboard",
    segment: "dashboard",
    icon: <DashboardIcon />,
    children: [],
  },
  {
    kind: "header",
    title: "Blog",
  },

  {
    title: "Blog",
    segment: "dashboard/blog",
    children: [
      { title: "Posts", segment: "posts" },
      { title: "Categories", segment: "categories" },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-toolpad-color-scheme="light" suppressHydrationWarning>
      <body className={`${roboto.variable} ${lemon.variable}`}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <React.Suspense fallback={<LinearProgress />}>
            <NextAppProvider navigation={navigation} theme={theme}>
              <CssBaseline />
              {children}
            </NextAppProvider>
          </React.Suspense>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
