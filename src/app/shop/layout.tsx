import { ShopHeroBox } from "@/ui/styled-components";
import { Box, Breadcrumbs, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ShopHeroBox component={"section"}>
        <Container maxWidth={"lg"}>
          <Box
            sx={{
              px: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" component={"p"}>
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
      </ShopHeroBox>
      {children}
    </>
  );
}
