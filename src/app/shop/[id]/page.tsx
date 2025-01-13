import { ProductCard, SectionBox } from "@/ui/styled-components";
import {
  Avatar,
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Grid from "@mui/material/Grid2";
import InventoryIcon from "@mui/icons-material/Inventory";
import FolderIcon from "@mui/icons-material/Folder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import DescriptionIcon from "@mui/icons-material/Description";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { getProduct } from "@/lib/products";

export default async function ProductDetail({ params }) {
  const { id: productId } = await params;
  const product = await getProduct(productId);

  return (
    <SectionBox>
      <Container maxWidth={"lg"}>
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <p>Image columns</p>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack spacing={2}>
              <Rating value={3.5} readOnly />

              <Typography variant="h1" component={"div"}>
                {product.title}
              </Typography>

              <Typography variant="h6" component={"div"} color="textSecondary">
                $256
              </Typography>

              <Typography variant="body2" component={"p"}>
                {product.description}
              </Typography>

              <Stack direction={"row"} spacing={2}>
                <TextField
                  variant="outlined"
                  size="small"
                  type="number"
                  defaultValue={1}
                  slotProps={{ input: { placeholder: "Quantity" } }}
                />
                <Button variant={"contained"} size={"small"} color="warning">
                  Add to Cart
                </Button>
              </Stack>
              <Box sx={{ py: 1 }}>
                <Button
                  variant={"text"}
                  startIcon={<FavoriteBorderOutlinedIcon />}
                  size={"small"}
                >
                  Add to Favorites
                </Button>
              </Box>

              <Box sx={{ py: 1 }}>
                <List
                  sx={{
                    width: "50%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  <ListItem dense>
                    <ListItemAvatar>
                      <Avatar>
                        <InventoryIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Sku" secondary={product.upc} />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Category"
                      secondary={product.categories}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <BookmarkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Tags" secondary="tag1, tag2" />
                  </ListItem>
                </List>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth={"lg"}>
        <Box sx={{ py: 2 }}>
          <Tabs value={0} aria-label="icon tabs example">
            <Tab
              icon={<DescriptionIcon />}
              iconPosition="start"
              aria-label="description"
              label={"Description"}
            />
            <Tab
              icon={<ReviewsIcon />}
              iconPosition="start"
              aria-label="review"
              label={"Reviews"}
            />
          </Tabs>
        </Box>
      </Container>
    </SectionBox>
  );
}
