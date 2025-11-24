import SpecialitiesManagementHeader from "@/src/components/modules/admin/speciality/SpecialitiesManagementHeader";
import RefreshButton from "@/src/components/shared/RefreshButton";

export default function AdminSpecialitiesManagementPage() {
    return (
        <div className="space-y-6">
            <SpecialitiesManagementHeader />
            <div className="flex">
                <RefreshButton />
            </div>
        </div>
    )
}
