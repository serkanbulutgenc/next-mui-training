"use client";
import { SectionBox } from "@/ui/styled-components";
import { Alert, AlertTitle, Container, Typography } from "@mui/material";

interface IErrorPage {
  error: Error & { digest?: string };
  reset: () => void;
}

const BlogErrorPage: React.FC<IErrorPage> = ({ error, reset }) => {
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
          {`${error.name} : ${error.message}`}
        </Alert>
      </Container>
    </SectionBox>
  );
};

export default BlogErrorPage;
