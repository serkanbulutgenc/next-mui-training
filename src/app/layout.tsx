import type { Metadata } from "next";
import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter'
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/ui/theme";
import "./globals.css";
import { CssBaseline } from "@mui/material";

const roboto = Roboto({weight:['300', '400', '500','700'], subsets:['latin'], display:'swap', variable:'--font-roboto'})

export const metadata: Metadata = {
  title: "Next App with @mui",
  description: "Next with @mui/material library.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <AppRouterCacheProvider options={{key:'css'}}>
          <ThemeProvider theme={theme}>
          <CssBaseline/>
        {children}
        </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
