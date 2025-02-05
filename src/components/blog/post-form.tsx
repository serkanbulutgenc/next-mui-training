"use client";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import FormButtons from "./form-buttons";
import { createAction } from "@/actions";
import React, { useActionState, useEffect, useState } from "react";

interface IOpt {
  title: string;
  id: string;
}
const initialState = { title: "", content: "" };
const PostForm: React.FC = () => {
  const [state, formAction, pending] = useActionState(
    createAction,
    initialState
  );

  const [value, setValue] = useState<string | undefined>("");
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [options, setOptions] = useState<IOpt[]>([]);

  useEffect(
    (prevState) => {
      async function getCategories() {
        setLoading(true);
        const res = await fetch(
          `https://sbgnc.pythonanywhere.com/api/categories/`
        );
        if (!res.ok) {
          setLoading(false);
          throw new Error(
            "An error occured while getting categories from the server"
          );
        }

        const categories = await res.json();
        setLoading(false);
        setOptions(categories);
      }
      getCategories();

      //return () => setOptions([]);
    },
    [open]
  );

  const handleOpen = () => {
    setLoading(true);
    setOpen(true);
  };

  const handleClose = () => {
    setLoading(false);
    setOpen(false);
  };

  return (
    <form action={formAction}>
      <Stack spacing={5}>
        <FormControl fullWidth>
          <TextField
            size="small"
            variant="outlined"
            label={"Post Title"}
            name="title"
            defaultValue={state.data?.title}
            error={Boolean(state.errors?.title)}
            helperText={state.errors?.title?.toString()}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="post-category-select-label">Category</InputLabel>
          <Select
            labelId="post-category-select-label"
            id="post-category-select"
            label="Category"
            error={Boolean(state.errors?.category)}
            value={value}
            open={open}
            onChange={(event: SelectChangeEvent) =>
              setValue(event.target.value)
            }
            inputProps={{ name: "category" }}
            size="small"
            onClose={handleClose}
            onOpen={handleOpen}
          >
            {loading && (
              <Typography variant="subtitle2" component={"span"}>
                Loding categories
              </Typography>
            )}
            {options &&
              options.length > 0 &&
              options.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.title}
                </MenuItem>
              ))}
          </Select>
          {state.errors?.category && (
            <FormHelperText>
              {state.errors?.category?.toString()}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth>
          <TextField
            error={Boolean(state.errors?.content)}
            name="content"
            size="small"
            multiline
            rows={5}
            variant="outlined"
            label={"Post Content"}
            defaultValue={state.data?.content}
            helperText={state.errors?.content?.toString()}
          />
        </FormControl>
      </Stack>
      <FormButtons />
    </form>
  );
};

export default PostForm;
