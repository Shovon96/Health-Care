import { UserRole } from "@prisma/client";

export type IUserPayload = {
    email: string;
    role: UserRole
}