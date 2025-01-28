"use client";
import { SectionBox } from "@/ui/styled-components";
import { Alert, AlertTitle, Container, Typography } from "@mui/material";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <SectionBox>
      <Container maxWidth={"lg"}>
        <Typography
          variant="h1"
          component={"div"}
          gutterBottom
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            py: 2,
            my: 2,
          }}
        >
          Opppsss...
        </Typography>

        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error.message}
        </Alert>
      </Container>
    </SectionBox>
  );
}
