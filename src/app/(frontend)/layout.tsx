import SiteAppBar from "@/components/site-appbar";
import { ShopHeroBox } from "@/ui/styled-components";
import { Box, Breadcrumbs, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function FrontEndLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteAppBar />
      {/* <ShopHeroBox component={"section"}>
        <Container maxWidth={"lg"}>
          <Box
            sx={{
              px: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h3" component={"p"} sx={{ fontWeight: 700 }}>
              SHOP
            </Typography>

            <Box>
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/">
                  Home
                </Link>

                <Typography sx={{ color: "text.primary" }}>Shop</Typography>
              </Breadcrumbs>
            </Box>
          </Box>
        </Container>
      </ShopHeroBox>*/}
      <main>{children}</main>
    </>
  );
}
