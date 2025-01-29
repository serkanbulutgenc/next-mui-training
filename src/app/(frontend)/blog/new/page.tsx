import PostForm from "@/components/blog/post-form";
import { SectionBox } from "@/ui/styled-components";
import { Container, Typography } from "@mui/material";

const NewPostPage: React.FC = () => {
  return (
    <SectionBox>
      <Container maxWidth={"sm"}>
        <Typography variant="h3" component={"p"}>
          New Post
        </Typography>
        <PostForm />
      </Container>
    </SectionBox>
  );
};

export default NewPostPage;
