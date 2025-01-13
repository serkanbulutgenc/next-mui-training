import { SectionBox } from "@/ui/styled-components";
import {
  Avatar,
  Box,
  Button,
  Container,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Rating,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import InventoryIcon from "@mui/icons-material/Inventory";
import FolderIcon from "@mui/icons-material/Folder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import DescriptionIcon from "@mui/icons-material/Description";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { getProduct } from "@/lib/products";
import Image from "next/image";

export default async function ProductDetail({ params }) {
  const { id: productId } = await params;
  const product = await getProduct(productId);

  return (
    <SectionBox>
      <Container maxWidth={"lg"}>
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Grid container columnGap={2}>
              <Grid size={{ xs: 12, md: 2 }}>
                <ImageList
                  cols={1}
                  rowHeight={75}
                  gap={4}
                  sx={{ my: 0, minHeight: "350px", height: "auto" }}
                >
                  {product.images.map((image) => (
                    <ImageListItem key={image.id}>
                      <Image src={image.original} alt={product.title} fill />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Grid>
              <Grid size={{ xs: 12, md: 9 }}>
                <Box
                  sx={{
                    p: 2,
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <Image
                    src={product.images[0]?.original}
                    alt={product.title}
                    style={{ objectFit: "contain" }}
                    fill
                  />
                </Box>
              </Grid>
            </Grid>
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
                <TableContainer>
                  <Table
                    padding="normal"
                    sx={{ width: "100%" }}
                    size="small"
                    aria-label="product attribute table"
                  >
                    <TableBody>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          SKU
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {product.upc}
                        </TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          Category
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {product.categories.toString()}
                        </TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          Tags
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {`tag 1`}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth={"lg"}>
        <Box sx={{ py: 5 }}>
          <TabContext value={"2"}>
            <Box sx={{ width: "100%" }}>
              <TabList aria-label="product tab list">
                <Tab
                  icon={<DescriptionIcon />}
                  value={"1"}
                  iconPosition="start"
                  aria-label="description"
                  label={"Description"}
                />
                <Tab
                  value={"2"}
                  icon={<ReviewsIcon />}
                  iconPosition="start"
                  aria-label="review"
                  label={"Reviews"}
                />
              </TabList>
            </Box>
            <TabPanel value={"1"}>Item one</TabPanel>
            <TabPanel value={"2"}>Item two</TabPanel>
          </TabContext>
        </Box>
      </Container>
    </SectionBox>
  );
}
