import { Box, Typography } from "@mui/material";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import FeedIcon from "@mui/icons-material/Feed";
const AppDashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <DashboardLayout branding={{ title: "AppDash" }} slots={{}}>
      <PageContainer>{children}</PageContainer>
    </DashboardLayout>
  );
};

export default AppDashboardLayout;
