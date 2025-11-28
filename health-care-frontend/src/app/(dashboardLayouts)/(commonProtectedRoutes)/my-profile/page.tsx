import { getUserInfo } from "@/src/components/modules/auth/getUserInfo";
import MyProfile from "@/src/components/modules/commonProtectedPages/MyProfile";

export default async function page() {
    const userInfo = await getUserInfo();
    return <MyProfile userInfo={userInfo} />;
}
