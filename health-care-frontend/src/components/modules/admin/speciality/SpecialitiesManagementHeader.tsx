"use client";

import { useState, useTransition } from "react";
import SpecialitiesFormDialog from "./SpecialitiesFormDialog";
import { useRouter } from "next/navigation";
import ManagementPageHeader from "@/src/components/shared/ManagementPageHeader";
import { Plus } from "lucide-react";


export default function SpecialitiesManagementHeader() {

    const router = useRouter();
    const [, startTransition] = useTransition();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleSuccess = () => {
        startTransition(() => {
            router.refresh();
        });
    }

    return (
        <div>
            <SpecialitiesFormDialog
                open={isDialogOpen}
                onClose={() => { setIsDialogOpen(false) }}
                onSuccess={() => { handleSuccess }}
            />

            <ManagementPageHeader
                title="Specialities Managements"
                description="Manage your specialities easily with our user-friendly interface."
                action={{
                    icon: Plus,
                    label: "Add Speciality",
                    onClick: () => { setIsDialogOpen(true) }
                }}
            />
        </div>
    )
}
