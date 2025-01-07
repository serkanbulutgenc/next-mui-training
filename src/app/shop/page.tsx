import { SectionBox } from "@/ui/styled-components";
import { Container, Typography } from "@mui/material";

export default async function Shop() {
  const products = await getProducts();
  console.log(products);

  if (!products) {
    return;
  }

  return (
    <SectionBox>
      <Container maxWidth={"lg"}>
        <Typography variant="h2">Shop</Typography>
      </Container>
    </SectionBox>
  );
}

export async function getProducts() {
  const res = await fetch(
    "https://sbulutgenc.pythonanywhere.com/api/products/"
  );

  if (!res.ok) {
    throw new Error("An error occoured");
  }

  return res.json();
}
