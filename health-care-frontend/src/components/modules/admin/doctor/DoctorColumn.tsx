
"use client";


import { DateCell } from "@/src/components/shared/DateCell";
import { Column } from "@/src/components/shared/ManagementTable";
import { StatusBadgeCell } from "@/src/components/shared/StatusBadgeCell";
import { UserInfoCell } from "@/src/components/shared/UserInfoSell";
import { IDoctor } from "@/src/types/doctor.interface";
import { Star } from "lucide-react";

export const doctorsColumns: Column<IDoctor>[] = [
    {
        header: "Doctor",
        accessor: (doctor: IDoctor) => (
            <UserInfoCell
                name={doctor.name}
                email={doctor.email}
                photo={doctor.profilePhoto}
            />
        ),
    },
    {
        header: "Specialties",
        accessor: (doctor: IDoctor) => (
            <div className="flex flex-wrap gap-1">
                {doctor.doctorSpecialties && doctor.doctorSpecialties.length > 0 ? (
                    doctor.doctorSpecialties.map((specialty, index) => (
                        <span
                            key={specialty.specialties?.id || index}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                            {specialty.specialties?.title || "N/A"}
                        </span>
                    ))
                ) : (
                    <span className="text-xs text-gray-500">No specialties</span>
                )}
            </div>
        ),
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
