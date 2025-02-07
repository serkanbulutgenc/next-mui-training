import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Lemon, Roboto } from "next/font/google";
import { CssBaseline, LinearProgress } from "@mui/material";
import { Navigation, Session } from "@toolpad/core";
import { NextAppProvider } from "@toolpad/core/nextjs";

import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import ArticleIcon from "@mui/icons-material/Article";

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
    icon: <DashboardIcon />,
    segment: "dashboard",
  },
  { kind: "divider" },
  { kind: "header", title: "Blog" },
  { icon: <ArticleIcon />, title: "Posts", segment: "dashboard/posts" },
  {
    icon: <CategoryIcon />,
    title: "Categories",
    segment: "dashboard/categories",
  },
];

const session: Session = {
  user: { name: "foo", email: "foo@mail.com", id: "1" },
};

export const authFunction = () => {
  return {
    signIn: async () => {
      "use server";
      console.log("sign in function");
    },
    signOut: async () => {
      "use server";
      console.log("sign out function");
    },
  };
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const auth = await authFunction();
  return (
    <html lang="en" data-toolpad-color-scheme="light" suppressHydrationWarning>
      <body className={`${roboto.variable} ${lemon.variable}`}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <React.Suspense fallback={<LinearProgress />}>
            <NextAppProvider
              navigation={navigation}
              theme={theme}
              session={session}
              authentication={auth}
            >
              <CssBaseline />
              {children}
            </NextAppProvider>
          </React.Suspense>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
