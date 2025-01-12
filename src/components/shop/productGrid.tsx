import Grid from "@mui/material/Grid2";
import ProductItem from "./ProductItem";
import { SectionBox } from "@/ui/styled-components";

export default function ProductsGrid({ products }) {
  return (
    <SectionBox>
      <Grid container spacing={2}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Grid>
    </SectionBox>
  );
}
