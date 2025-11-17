// import { getDefaultDashboardRoute } from "@/lib/auth-utils";
// import { getNavItemsByRole } from "@/lib/navItems.config";
import { getUserInfo } from "../auth/getUserInfo";
import { UserInfo } from "@/src/types/user.interface";
import DashboardNavbarContent from "./DashboardNavbarContent";

const DashboardNavbar = async () => {
    const userInfo = (await getUserInfo()) as UserInfo;
    // const navItems = getNavItemsByRole(userInfo.role);
    // const dashboardHome = getDefaultDashboardRoute(userInfo.role);

    return (
        <DashboardNavbarContent
            userInfo={userInfo}
            // navItems={navItems}
            // dashboardHome={dashboardHome}
        />
    );
};

export default DashboardNavbar;