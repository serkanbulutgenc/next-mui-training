import Grid from "@mui/material/Grid2";
import type { Post } from "../../../types.js";
import { SectionBox } from "@/ui/styled-components";
import { Container } from "@mui/material";
import BlogItem from "@/components/blog/blog-item";

const BlogGrid: React.FC<{
  posts: Array<Post>;
  children?: React.ReactNode;
  props?: any;
}> = ({ posts, children, props }) => {
  return (
    <SectionBox>
      <Container maxWidth={"lg"}>
        <Grid container spacing={2}>
          {posts.map((post: Post) => (
            <BlogItem key={post.id} {...props} post={post} />
          ))}
        </Grid>
      </Container>
    </SectionBox>
  );
};

export default BlogGrid;
