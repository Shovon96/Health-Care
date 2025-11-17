import { UserInfo } from "@/src/types/user.interface";
import { getUserInfo } from "../auth/getUserInfo";
import DashboardSidebarContent from "./DashboardSidebarContent";
import { getNavItemsByRole } from "@/src/lib/navItems.config";
import { getDefaultDashboardRoute } from "@/src/lib/auth-utils";

const DashboardSidebar = async () => {
    const userInfo = (await getUserInfo()) as UserInfo;
    const navItems = getNavItemsByRole(userInfo.role);
    const dashboardHome = getDefaultDashboardRoute(userInfo.role);

    return (
        <DashboardSidebarContent
            userInfo={userInfo}
            navItems={navItems}
            dashboardHome={dashboardHome}
        />
    );
};

export default DashboardSidebar;