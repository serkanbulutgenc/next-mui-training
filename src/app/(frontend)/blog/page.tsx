import BlogGrid from "@/components/blog/blog-grid";
import { getPosts } from "@/lib/posts";
import { Box, CircularProgress } from "@mui/material";
import { Suspense } from "react";

const PostList: React.FC = async () => {
  const posts = await getPosts();

  return <BlogGrid posts={posts.results} />;
};

const BlogPage: React.FC = () => {
  return (
    <Suspense
      fallback={
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      }
    >
      <PostList />
    </Suspense>
  );
};

export default BlogPage;
