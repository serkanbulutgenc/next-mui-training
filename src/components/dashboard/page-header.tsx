"use client";
import { Box, Breadcrumbs, Typography } from "@mui/material";

const PageHeader: React.FC = () => {
  return (
    <Box sx={{ my: 2 }}>
      <Breadcrumbs />
      <Typography variant="h3" component={"h6"}>
        Page Header
      </Typography>
    </Box>
  );
};

export default PageHeader;
