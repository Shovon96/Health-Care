import { UserRole } from "../lib/auth-utils"

export interface NavItems {
    title: string,
    href: string,
    icon?: string | "",
    badge?: string | number,
    description?: string,
    roles: UserRole[];
}

export interface NavSection {
    title?: string,
    items: NavItems[]
}