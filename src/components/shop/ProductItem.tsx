import { ProductCard } from "@/ui/styled-components";
import { LinkOffRounded } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";

export default function ProductItem({ product }) {
  return (
    <>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <ProductCard sx={{ position: "relative" }}>
          <CardActionArea href={`shop/${product.id}`} LinkComponent={Link}>
            <CardMedia
              image={product.images[0]?.original}
              title={product.title}
              sx={{ height: 300, width: "100%" }}
            />
            <CardContent>
              <Typography variant={"h6"} component={"div"}>
                {product.title}
              </Typography>
              <Typography
                variant={"subtitle2"}
                component={"p"}
                color={"textSecondary"}
              >
                {253.6}
              </Typography>
            </CardContent>
            <CardActions sx={{}}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <IconButton
                  aria-label="favorite"
                  size="small"
                  color="secondary"
                >
                  <FavoriteIcon />
                </IconButton>
                <Button variant={"contained"} size="small" color="warning">
                  Add to Cart
                </Button>
                <IconButton
                  aria-label="product-detail"
                  size="small"
                  color="secondary"
                >
                  <FullscreenIcon />
                </IconButton>
              </Box>
            </CardActions>
          </CardActionArea>
        </ProductCard>
      </Grid>
    </>
  );
}
