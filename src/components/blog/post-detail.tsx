import { SectionBox } from "@/ui/styled-components";
import { Container, Typography } from "@mui/material";
import { Post } from "../../../types";

const PostDetail: React.FC<{ post: Post }> = ({ post }) => {
  console.log("post", post);
  return (
    <SectionBox>
      <Container maxWidth={"lg"}>
        <Typography variant="h2" component={`h3`}>
          {post.title}
        </Typography>

        <Typography variant="body1" component={`div`}>
          {post.content}
        </Typography>
      </Container>
    </SectionBox>
  );
};

export default PostDetail;
