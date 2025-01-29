"use client";
import { Stack, TextField } from "@mui/material";
import FormButtons from "./form-buttons";
import { createAction } from "@/actions";
import { useActionState } from "react";

const initialState = { title: "", content: "" };
const PostForm: React.FC = () => {
  const [state, formAction] = useActionState(createAction, initialState);
  console.log("state", state);
  return (
    <form action={formAction}>
      <Stack spacing={5}>
        <TextField
          size="small"
          variant="standard"
          label={"Post Title"}
          name="title"
          error={Boolean(state.errors?.title)}
        />
        <TextField
          error={Boolean(state.errors?.content)}
          name="content"
          size="small"
          multiline
          rows={5}
          variant="standard"
          label={"Post Content"}
        />
      </Stack>
      <FormButtons />
    </form>
  );
};

export default PostForm;
