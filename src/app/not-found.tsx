import { SectionBox } from "@/ui/styled-components";
import { Alert, AlertTitle, Container, Typography } from "@mui/material";

export default function NotFoundPage() {
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
          Not Found
        </Typography>

        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          The page that you requested from server couldn't find.
        </Alert>
      </Container>
    </SectionBox>
  );
}
