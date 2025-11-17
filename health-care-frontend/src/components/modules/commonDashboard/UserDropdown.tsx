"use client";

import LogoutButton from "@/src/components/shared/LogoutButton";
import { Button } from "@/src/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; import { UserInfo } from "@/src/types/user.interface";
;
import { Settings, User } from "lucide-react";
import Link from "next/link";
import { logoutUser } from "../auth/logoutUser";

interface UserDropdownProps {
    userInfo: UserInfo;
}

const UserDropdown = ({ userInfo }: UserDropdownProps) => {
    // const handleLogout = async () => {
    //     await logoutUser();
    // };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full cursor-pointer bg-primary/10 hover:bg-primary/20">
                    <span className="text-sm font-semibold">
                        {userInfo.name.charAt(0).toUpperCase()}
                    </span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium">{userInfo.name}</p>
                        <p className="text-xs text-muted-foreground">{userInfo.email}</p>
                        <p className="text-xs text-primary capitalize">
                            {userInfo.role.toLowerCase()}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href={"/my-profile"} className="cursor-pointer">
                        <User className="mr-2 h-4 w-4" />
                        Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href={"/change-password"} className="cursor-pointer">
                        <Settings className="mr-2 h-4 w-4" />
                        Change Password
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <div className="p-2">
                    <LogoutButton />
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserDropdown;