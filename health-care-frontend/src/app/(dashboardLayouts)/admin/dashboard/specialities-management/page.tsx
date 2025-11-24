import { getSpeciality } from "@/src/components/modules/admin/speciality/specialitiesManagement";
import SpecialitiesManagementHeader from "@/src/components/modules/admin/speciality/SpecialitiesManagementHeader";
import SpecialitiesTable from "@/src/components/modules/admin/speciality/SpecialitiesTable";
import RefreshButton from "@/src/components/shared/RefreshButton";
import { TableSkeleton } from "@/src/components/shared/TableSkeleton";
import { Suspense } from "react";

export default async function AdminSpecialitiesManagementPage() {

    const result = await getSpeciality();

    return (
        <div className="space-y-6">
            <SpecialitiesManagementHeader />
            <div className="flex">
                <RefreshButton />
            </div>
            <Suspense fallback={<TableSkeleton columns={2} rows={10} />}>
                <SpecialitiesTable specialities={result.data} />
            </Suspense>
        </div>
    )
}
