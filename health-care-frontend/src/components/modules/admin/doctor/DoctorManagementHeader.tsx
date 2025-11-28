"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import ManagementPageHeader from "@/src/components/shared/ManagementPageHeader";
import { Plus } from "lucide-react";
import DoctorFormDialog from "./DoctorFormDialog";
import { IDoctor } from "@/src/types/doctor.interface";
import { ISpecialty } from "@/src/types/specialities.interface";

interface DoctorManagementHeaderProps {
    doctor?: IDoctor;
    specialities?: ISpecialty[]
}

export default function DoctorManagementHeader({ doctor, specialities }: DoctorManagementHeaderProps) {

    const router = useRouter();
    const [, startTransition] = useTransition();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [dialogKey, setDialogKey] = useState(0);

    const handleSuccess = () => {
        startTransition(() => {
            router.refresh();
        });
    }

    const handleOpenDialog = () => {
        setDialogKey((prev) => prev + 1); // Force remount
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <div>
            <DoctorFormDialog
                key={dialogKey}
                open={isDialogOpen}
                onClose={handleCloseDialog}
                onSuccess={handleSuccess}
                specialities={specialities}
            />

            <ManagementPageHeader
                title="Doctors Managements"
                description="Manage your doctors easily with our user-friendly interface."
                action={{
                    icon: Plus,
                    label: "Add Doctor",
                    onClick: handleOpenDialog,
                }}
            />
        </div>
    )
}
