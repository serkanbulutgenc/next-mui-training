import { ProductCard } from "@/ui/styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function ProductItem({ product }) {
  return (
    <>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <ProductCard sx={{ position: "relative" }}>
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
          <CardActions
            sx={{ position: "absolute", top: "50%", left: 0, right: 0 }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <IconButton size="small">
                <FavoriteIcon />
              </IconButton>
              <Button size="small">Add to Cart</Button>
              <IconButton size="small">
                <FullscreenIcon />
              </IconButton>
            </Box>
          </CardActions>
        </ProductCard>
      </Grid>
    </>
  );
}
