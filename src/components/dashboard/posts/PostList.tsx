"use client";
import { Box, Chip, Typography } from "@mui/material";
import {
  DataGrid,
  GridActionsCellItem,
  GridCallbackDetails,
  GridColDef,
  GridFilterModel,
  GridPaginationModel,
} from "@mui/x-data-grid";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useEffect, useState } from "react";
import { Post } from "../../../../types";
import { getPosts } from "@/lib/posts";

const columns: GridColDef<Post>[] = [
  { field: "id", headerName: "ID" },
  {
    field: "title",
    headerName: "Title",
    width: 150,
  },
  {
    field: "slug",
    headerName: "Slug",
    type: "singleSelect",
    flex: 1.5,
    // valueOptions: () => {
    //   return ["foo", "bar", "baz"];
    // },
  },
  {
    field: "category",
    headerName: "Category",
    type: "string",
    flex: 0.5,
    //valueGetter: (field) => String(field) + " -  test",
    //valueFormatter: (value, row) => value + " - " + row.slug,
  },
  {
    field: "status",
    type: "custom",
    headerName: "Status",
    flex: 0.5,
    renderCell: (params) => {
      return params.row.published_at !== null ? (
        <Chip
          variant="filled"
          sx={{ borderRadius: 1 }}
          size="small"
          color="success"
          label="Published"
        />
      ) : (
        <Chip
          variant="filled"
          sx={{ borderRadius: 1 }}
          size="small"
          color="warning"
          label="Draft"
        />
      );
    },
  },
  {
    field: "actions",
    type: "actions",
    flex: 1,
    headerName: "Actions",
    getActions: (params) => [
      <GridActionsCellItem
        key={params.id}
        label="View"
        icon={<VisibilityIcon />}
        onClick={() => {
          alert("view");
        }}
      />,
      <GridActionsCellItem
        key={params.id}
        label="Edit"
        icon={<EditIcon />}
        onClick={() => {
          alert("Edit");
        }}
      />,
      <GridActionsCellItem
        key={params.id}
        label="Delete"
        icon={<DeleteIcon />}
        onClick={() => {
          alert("Edit");
        }}
      />,
    ],
  },
];

const PostList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [rowCount, setRowCount] = useState<number | undefined>(0);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });

  useEffect(() => {
    console.log("effect");
    const { pageSize: limit, page: offset } = paginationModel;

    async function postsRow() {
      setLoading(true);
      const res = await getPosts(limit, offset);
      setPosts(res.results);
      setRowCount(res.count);
      setLoading(false);
    }
    postsRow();
  }, [paginationModel]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <DataGrid
        density="standard"
        rows={posts}
        loading={loading}
        columns={columns}
        keepNonExistentRowsSelected
        filterMode="server"
        slots={
          {
            // noRowsOverlay: () => {
            //   return <p>No data!!!</p>;
            // },
          }
        }
        filterModel={{
          items: [{ field: "title", operator: "startsWith" }],
        }}
        onFilterModelChange={(value) => {
          console.log("filter", value);
        }}
        paginationMode="server"
        rowCount={rowCount}
        paginationModel={paginationModel}
        onPaginationModelChange={(
          model: GridPaginationModel,
          details: GridCallbackDetails
        ) => {
          setPaginationModel(model);
        }}
        initialState={{
          columns: {
            columnVisibilityModel: {
              id: false,
            },
          },
          pagination: {},
        }}
        pageSizeOptions={[5, 10, 20, 50]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};
export default PostList;
