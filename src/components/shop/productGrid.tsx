import Grid from "@mui/material/Grid2";
import ProductItem from "./ProductItem";
import { SectionBox } from "@/ui/styled-components";
import { Container } from "@mui/material";

export default function ProductsGrid({ products }) {
  return (
    <SectionBox>
      <Container maxWidth={"lg"}>
        <Grid container spacing={2}>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Grid>
      </Container>
    </SectionBox>
  );
}
