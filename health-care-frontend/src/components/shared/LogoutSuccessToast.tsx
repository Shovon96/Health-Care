"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react";
import { toast } from "sonner";

export default function LogoutSuccessToast() {
    const searchParams = useSearchParams();
    const router = useRouter()

    useEffect(() => {
        if (searchParams.get("logout") === "true") {
            toast.success("Logout successful");
            const newUrl = new URL(window.location.href);
            newUrl.searchParams.delete("logout");
            router.replace(newUrl.toString());
        }
    }, [searchParams])
    return null;
}
