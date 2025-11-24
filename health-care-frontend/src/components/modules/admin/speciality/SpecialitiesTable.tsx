"use client";

import ManagementTable from "@/src/components/shared/ManagementTable";
import { ISpecialty } from "@/src/types/specialities.interface";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { deleteSpeciality } from "./specialitiesManagement";
import { toast } from "sonner";
import { specialitiesColumns } from "./specialititesColumn";
import DeleteConfirmationDialog from "@/src/components/shared/DeletingConfirmationDialog";


interface SpecialityTableProps {
    specialities: ISpecialty[];
}

export default function SpecialitiesTable({ specialities }: SpecialityTableProps) {

    const router = useRouter();
    const [, startTransition] = useTransition();
    const [deletingSpeciality, setDeletingSpeciality] = useState<ISpecialty | null>(null);
    const [isDeletingDialog, setIsDeletingDialog] = useState(false);

    const handleRefresh = () => {
        startTransition(() => {
            router.refresh();
        });
    };

    const handleDelete = (speciality: ISpecialty) => {
        setDeletingSpeciality(speciality);
    };

    const confirmDelete = async () => {
        if (!deletingSpeciality) return;

        setIsDeletingDialog(true);
        const result = await deleteSpeciality(deletingSpeciality.id);
        setIsDeletingDialog(false);
        if (result.success) {
            toast.success(result.message || "Speciality deleted successfully");
            setDeletingSpeciality(null);
            handleRefresh();
        } else {
            toast.error(result.message || "Failed to delete speciality");
        }
    };

    return (
        <>
            <ManagementTable
                data={specialities}
                columns={specialitiesColumns}
                onDelete={handleDelete}
                getRowKey={(speciality) => speciality.id}
                emptyMessage="No specialities found"
            />

            {/* Delete Confirmation Dialog */}
            <DeleteConfirmationDialog
                open={!!deletingSpeciality}
                onOpenChange={(open) => !open && setDeletingSpeciality(null)}
                onConfirm={confirmDelete}
                title="Delete Speciality"
                description={`Are you sure you want to delete ${deletingSpeciality?.title}? This action cannot be undone.`}
                isDeleting={isDeletingDialog}
            />
        </>
    )
}
