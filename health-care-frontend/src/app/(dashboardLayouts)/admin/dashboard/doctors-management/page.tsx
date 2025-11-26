import DoctorManagementHeader from "@/src/components/modules/admin/doctor/DoctorManagementHeader";
import { getSpeciality } from "@/src/components/modules/admin/speciality/specialitiesManagement";
import SpecialitiesManagementHeader from "@/src/components/modules/admin/speciality/SpecialitiesManagementHeader";
import SpecialitiesTable from "@/src/components/modules/admin/speciality/SpecialitiesTable";
import RefreshButton from "@/src/components/shared/RefreshButton";
import SearchFilter from "@/src/components/shared/SearchFilter";
import SelectFilter from "@/src/components/shared/SelectFilter";
import { TableSkeleton } from "@/src/components/shared/TableSkeleton";
import { ISpecialty } from "@/src/types/specialities.interface";
import { Suspense } from "react";

export default async function AdminDoctorsManagementPage() {

    const specialistResult = await getSpeciality();

    return (
        <div className="space-y-6">
            <DoctorManagementHeader specialities={specialistResult.data} />
            <div className="flex gap-2">
                <SearchFilter placeholder="Search doctors..." />
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
                {/* <SpecialitiesTable specialities={specialistResult.data} /> */}
            </Suspense>
        </div>
    )
}
