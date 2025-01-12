import ProductsGrid from "@/components/shop/productGrid";
import { getProducts } from "@/lib/products";
import { CircularProgress, Container } from "@mui/material";
import { Suspense } from "react";

export async function Products() {
  const products = await getProducts();

  return <ProductsGrid products={products} />;
}

export default function Shop() {
  return (
    <>
      <Suspense
        fallback={
          <Container
            maxWidth={"lg"}
            sx={{
              p: 8,
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <CircularProgress />
          </Container>
        }
      >
        <Products />
      </Suspense>
    </>
  );
}
