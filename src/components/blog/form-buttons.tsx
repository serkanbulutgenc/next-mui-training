"use client";
import { Box, Button } from "@mui/material";
import { useFormStatus } from "react-dom";

const FormButtons: React.FC = () => {
  const { pending } = useFormStatus();
  console.log("p", pending);
  return (
    <Box sx={{ display: "flex", justifyContent: "end", gap: 1, py: 3 }}>
      <Button
        size="small"
        variant="contained"
        color="secondary"
        type="submit"
        disabled={pending}
      >
        Add
      </Button>
      <Button size="small" variant="contained" color="warning" type="reset">
        Cancel
      </Button>
    </Box>
  );
};

export default FormButtons;
