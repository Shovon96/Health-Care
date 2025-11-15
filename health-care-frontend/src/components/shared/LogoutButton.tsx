"use client";

import { logoutUser } from "../modules/auth/logoutUser";
import { Button } from "../ui/button";

export default function LogoutButton() {
    const handleLogout = async () => {
        await logoutUser();
    }
    return (
        <Button
            onClick={handleLogout}
            className="text-base cursor-pointer font-medium uppercase">
            Logout
        </Button>
    )
}
