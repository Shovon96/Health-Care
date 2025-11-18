"use client";

import { Badge } from "@/src/components/ui/badge";
import { ScrollArea } from "@/src/components/ui/scroll-area";
import { Separator } from "@/src/components/ui/separator";
import { SheetTitle } from "@/src/components/ui/sheet";
import { getIconComponent } from "@/src/lib/icon-mapper";
import { cn } from "@/src/lib/utils";
import { NavSection } from "@/src/types/dashboard.interface";
import { UserInfo } from "@/src/types/user.interface";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DashboardMobileSidebarContentProps {
    userInfo: UserInfo;
    navItems: NavSection[];
    dashboardHome: string;
}

const DashboardMobileSidebar = ({
    userInfo,
    navItems,
    dashboardHome,
}: DashboardMobileSidebarContentProps) => {
    const pathname = usePathname();
    return (
        <div className=" flex h-full flex-col">
            {/* Logo */}
            <div className="flex h-16 items-center border-b px-6">
                <Link href="/" className="flex items-center space-x-2 py-1">
                    <Image
                        src="https://i.ibb.co.com/pvDNJ40s/health-care-logo.png"
                        alt="health-care"
                        width={160}
                        height={70}
                    />
                </Link>
            </div>
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

            {/* Navigation */}
            <ScrollArea className="flex-1 px-3 py-4">
                <nav className="space-y-6">
                    {navItems.map((section, sectionIdx) => (
                        <div key={sectionIdx}>
                            {section.title && (
                                <h4 className="mb-2 px-3 text-xs font-semibold text-muted-foreground uppercase">
                                    {section.title}
                                </h4>
                            )}
                            <div className="space-y-1">
                                {section.items.map((item) => {
                                    const isActive = pathname === item.href;
                                    const Icon = getIconComponent(item.icon as string);

                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={cn(
                                                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
                                                isActive
                                                    ? "bg-primary text-primary-foreground"
                                                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                                            )}
                                        >
                                            <Icon className="h-4 w-4" />
                                            <span className="flex-1">{item.title}</span>
                                            {item.badge && (
                                                <Badge variant={isActive ? "secondary" : "default"}>
                                                    {item.badge}
                                                </Badge>
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>
                            {sectionIdx < navItems.length - 1 && (
                                <Separator className="my-4" />
                            )}
                        </div>
                    ))}
                </nav>
            </ScrollArea>

            {/* User Info at Bottom */}
            <div className="border-t p-4">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">
                            {userInfo.name.charAt(0).toUpperCase()}
                        </span>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <p className="text-sm font-medium truncate">{userInfo.name}</p>
                        <p className="text-xs text-muted-foreground capitalize">
                            {userInfo.role.toLowerCase()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardMobileSidebar;