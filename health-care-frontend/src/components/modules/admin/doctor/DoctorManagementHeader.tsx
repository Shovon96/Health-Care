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

    const handleSuccess = () => {
        startTransition(() => {
            router.refresh();
        });
    }

    return (
        <div>
            <DoctorFormDialog
                open={isDialogOpen}
                onClose={() => { setIsDialogOpen(false) }}
                onSuccess={() => { handleSuccess }}
                doctor={doctor}
                specialities={specialities}
            />

            <ManagementPageHeader
                title="Doctors Managements"
                description="Manage your doctors easily with our user-friendly interface."
                action={{
                    icon: Plus,
                    label: "Add Doctor",
                    onClick: () => { setIsDialogOpen(true) }
                }}
            />
        </div>
    )
}
