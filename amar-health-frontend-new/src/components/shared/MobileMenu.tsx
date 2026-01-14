"use client";

import { UserInfo } from "@/types/user.interface";
import { LayoutDashboard, Menu } from "lucide-react";
import Link from "next/link";
import UserDropdown from "../modules/Dashboard/UserDropdown";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import AISearchDialog from "./AISSearchDialog";
import { ThemeToggle } from "./ThemeToggle";

interface MobileMenuProps {
  navItems: Array<{ href: string; label: string }>;
  hasAccessToken: boolean;
  userInfo?: UserInfo | null;
  dashboardRoute?: string;
}

const MobileMenu = ({
  navItems,
  hasAccessToken,
  userInfo,
  dashboardRoute,
}: MobileMenuProps) => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px] p-4">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <nav className="flex flex-col space-y-4 mt-8">
            {navItems.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-lg font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t pt-4 flex justify-start gap-3 space-y-4">
                <AISearchDialog />
                <ThemeToggle />
              {hasAccessToken && userInfo ? (
                <>
                  <Link
                    href={dashboardRoute || "/"}
                    className="text-lg font-medium"
                  >
                    <Button className="w-full gap-2">
                      <LayoutDashboard className="h-4 w-4" />
                      Dashboard
                    </Button>
                  </Link>
                  <div className="flex justify-center">
                    <UserDropdown userInfo={userInfo} />
                  </div>
                </>
              ) : (
                <Link href="/login">
                  <Button
                    className="cursor-pointer bg-linear-to-r from-[#04BCD4] to-[#54AC5C] hover:shadow-lg hover:scale-105 transition-all duration-300 text-white font-semibold w-full px-6"
                  >
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
