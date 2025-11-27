/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";


import { DateCell } from "@/src/components/shared/DateCell";
import { Column } from "@/src/components/shared/ManagementTable";
import { StatusBadgeCell } from "@/src/components/shared/StatusBadgeCell";
import { UserInfoCell } from "@/src/components/shared/UserInfoSell";
import { IDoctor } from "@/src/types/doctor.interface";
import { Star } from "lucide-react";

export const DoctorsColumns: Column<IDoctor>[] = [
    {
        header: "Doctor",
        accessor: (doctor: IDoctor) => (
            <UserInfoCell
                name={doctor.name}
                email={doctor.email}
                photo={doctor.profilePhoto as string}
            />
        ),
    },
    {
        header: "Specialties",
        accessor: (doctor) => {
            // Handle both possible response structures
            const specialties: any = doctor.doctorSpecialties;

            if (!specialties || specialties.length === 0) {
                return <span className="text-xs text-gray-500">No specialties</span>;
            }

            return (
                <div className="flex flex-wrap gap-1">
                    {specialties.map((item: any, index: any) => {
                        // Handle nested specialty object
                        const specialtyTitle = item.specialities?.title || "N/A";
                        const specialtyId =
                            item.specialties?.id || item.specialitiesId || index;

                        return (
                            <span
                                key={specialtyId}
                                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                            >
                                {specialtyTitle}
                            </span>
                        );
                    })}
                </div>
            );
        },
    },
    {
        header: "Contact",
        accessor: (doctor: IDoctor) => (
            <div className="flex flex-col">
                <span className="text-sm">{doctor.contactNumber}</span>
            </div>
        ),
    },
    {
        header: "Experience",
        accessor: (doctor: IDoctor) => (
            <span className="text-sm font-medium">
                {doctor.experience ?? 0} years
            </span>
        ),
    },
    {
        header: "Fee",
        accessor: (doctor: IDoctor) => (
            <span className="text-sm font-semibold text-green-600">
                ${doctor.appointmentFee}
            </span>
        ),
    },
    {
        header: "Rating",
        accessor: (doctor: IDoctor) => (
            <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">
                    {doctor.averageRating!.toFixed(1)}
                </span>
            </div>
        ),
    },
    {
        header: "Gender",
        accessor: (doctor: IDoctor) => (
            <span className="text-sm capitalize">{doctor.gender.toLowerCase()}</span>
        ),
    },
    {
        header: "Status",
        accessor: (doctor: IDoctor) => <StatusBadgeCell isDeleted={doctor.isDeleted} />,
    },
    {
        header: "Joined",
        accessor: (doctor: IDoctor) => <DateCell date={doctor.createdAt} />,
    },
];
