import HeroSection from "@/components/hero";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <>
      <Container maxWidth={"lg"}>
        <HeroSection />
      </Container>
    </>
  );
}
