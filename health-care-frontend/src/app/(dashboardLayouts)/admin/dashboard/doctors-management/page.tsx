import DoctorManagementHeader from "@/src/components/modules/admin/doctor/DoctorManagementHeader";
import { getAllDoctors } from "@/src/components/modules/admin/doctor/doctorsManagement";
import DoctorsTable from "@/src/components/modules/admin/doctor/DoctorsTable";
import { getSpeciality } from "@/src/components/modules/admin/speciality/specialitiesManagement";
import RefreshButton from "@/src/components/shared/RefreshButton";
import SearchFilter from "@/src/components/shared/SearchFilter";
import SelectFilter from "@/src/components/shared/SelectFilter";
import { TableSkeleton } from "@/src/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/src/lib/formatters";
import { ISpecialty } from "@/src/types/specialities.interface";
import { Suspense } from "react";

export default async function AdminDoctorsManagementPage({ searchParams }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {

    const searchParamsObj = await searchParams;
    const queryString = queryStringFormatter(searchParamsObj);
    const specialistResult = await getSpeciality();
    const doctorsResult = await getAllDoctors(queryString);

    return (
        <div className="space-y-6">
            <DoctorManagementHeader specialities={specialistResult.data} />
            <div className="flex gap-2">
                <SearchFilter paramName="searchTerm" placeholder="Search doctors..." />
                <SelectFilter
                    paramName="specialist"
                    options={specialistResult.data.map((specialty: ISpecialty) => ({
                        label: specialty.title,
                        value: specialty.title,
                    }))}
                    placeholder="Filter by speciality"
                />
                <RefreshButton />
            </div>
            <Suspense fallback={<TableSkeleton columns={10} rows={10} />}>
                <DoctorsTable doctors={doctorsResult.data} />
            </Suspense>
        </div>
    )
}
