"use client";

import ManagementTable from "@/src/components/shared/ManagementTable";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import DeleteConfirmationDialog from "@/src/components/shared/DeletingConfirmationDialog";
import { IDoctor } from "@/src/types/doctor.interface";
import { softDeleteDoctorById } from "./doctorsManagement";
import { DoctorsColumns } from "./DoctorColumn";
import DoctorViewDetailsModal from "./DoctorViewDetailsModal";
import DoctorFormDialog from "./DoctorFormDialog";
import { ISpecialty } from "@/src/types/specialities.interface";


interface DoctorsTableProps {
    doctors: IDoctor[];
    specialities: ISpecialty[];
}

export default function DoctorsTable({ doctors, specialities }: DoctorsTableProps) {
    const router = useRouter();
    const [, startTransition] = useTransition();
    const [deletingDoctor, setDeletingDoctor] = useState<IDoctor | null>(null);
    const [viewingDoctor, setViewingDoctor] = useState<IDoctor | null>(null);
    const [editingDoctor, setEditingDoctor] = useState<IDoctor | null>(null);
    const [isDeletingDialog, setIsDeletingDialog] = useState(false);

    const handleRefresh = () => {
        startTransition(() => {
            router.refresh();
        });
    };

    const handleView = (doctor: IDoctor) => {
        setViewingDoctor(doctor);
    };

    const handleEdit = (doctor: IDoctor) => {
        setEditingDoctor(doctor);
    };

    const handleDelete = (doctor: IDoctor) => {
        setDeletingDoctor(doctor);
    };

    const confirmDelete = async () => {
        if (!deletingDoctor) return;

        setIsDeletingDialog(true);
        const result = await softDeleteDoctorById(deletingDoctor.id!);
        setIsDeletingDialog(false);
        if (result.success) {
            toast.success(result.message || "Doctor deleted successfully");
            setDeletingDoctor(null);
            handleRefresh();
        } else {
            toast.error(result.message || "Failed to delete doctor");
        }
    };

    return (
        <>
            <ManagementTable
                data={doctors}
                columns={DoctorsColumns}
                onView={handleView}
                onEdit={handleEdit}
                onDelete={handleDelete}
                getRowKey={(doctor) => doctor.id!}
                emptyMessage="No doctors found"
            />

            {/* Edit Doctor Form Dialog */}
            <DoctorFormDialog
                open={!!editingDoctor}
                onClose={() => setEditingDoctor(null)}
                doctor={editingDoctor!}
                specialities={specialities}
                onSuccess={() => {
                    setEditingDoctor(null);
                    handleRefresh();
                }}
            />

            {/* View Doctor Detail Dialog */}
            <DoctorViewDetailsModal
                open={!!viewingDoctor}
                onClose={() => setViewingDoctor(null)}
                doctor={viewingDoctor}
            />

            {/* Delete Confirmation Dialog */}
            <DeleteConfirmationDialog
                open={!!deletingDoctor}
                onOpenChange={(open) => !open && setDeletingDoctor(null)}
                onConfirm={confirmDelete}
                title="Delete Doctor"
                description={`Are you sure you want to delete ${deletingDoctor?.name}? This action cannot be undone.`}
                isDeleting={isDeletingDialog}
            />
        </>
    )
}
