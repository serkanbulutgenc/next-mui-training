import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";

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
