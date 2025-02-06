import { Box, Typography } from "@mui/material";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";

const AppDashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <DashboardLayout>
      <PageContainer>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" component={"div"}>
            Dashboard Layout Header
          </Typography>
        </Box>
        {children}
      </PageContainer>
    </DashboardLayout>
  );
};

export default AppDashboardLayout;
