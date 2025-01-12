import ProductsGrid from "@/components/shop/productGrid";
import { getProducts } from "@/lib/products";
import { SectionBox } from "@/ui/styled-components";
import { CircularProgress, Container, Typography } from "@mui/material";
import { Suspense } from "react";

export async function Products() {
  const products = await getProducts();

  return <ProductsGrid products={products} />;
}

export default function Shop() {
  return (
    <>
      <SectionBox>
        <Container maxWidth={"lg"}>
          <Typography variant="h2">Shop</Typography>
        </Container>
      </SectionBox>
      <Suspense fallback={<CircularProgress />}>
        <Container maxWidth={"lg"}>
          <Products />
        </Container>
      </Suspense>
    </>
  );
}
