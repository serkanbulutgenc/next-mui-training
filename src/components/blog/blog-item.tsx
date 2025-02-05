import Grid from "@mui/material/Grid2";
import { Card, CardContent, Link as MuiLink, Typography } from "@mui/material";
import type { Post } from "../../../types";
import Link from "next/link";

const BlogItem: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
      <Card variant="outlined">
        <CardContent>
          <MuiLink href={`blog/${post.slug}`} component={Link}>
            <Typography variant="h5" component={"div"}>
              {post.title}
            </Typography>
          </MuiLink>

          <Typography variant="body2" component={"div"}>
            {post.summary}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default BlogItem;
