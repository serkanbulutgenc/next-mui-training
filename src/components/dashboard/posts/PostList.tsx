"use client";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: "id", headerName: "ID" },
  {
    field: "title",
    headerName: "Title",
  },
  {
    field: "slug",
    headerName: "Slug",
  },
  {
    field: "category",
    headerName: "Category",
  },
];

const rows = [
  { id: 1, title: "Snow", slug: "Jon", category: "14" },
  { id: 2, title: "Snow", slug: "Jon", category: "15" },
  { id: 3, title: "Snow", slug: "Jon", category: "16" },
  { id: 4, title: "Snow", slug: "Jon", category: "17" },
];

const PostList: React.FC = () => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        density="standard"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};
export default PostList;
