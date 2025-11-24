import { Column } from "@/src/components/shared/ManagementTable";
import { ISpecialty } from "@/src/types/specialities.interface";
import Image from "next/image";

export const specialitiesColumns: Column<ISpecialty>[] = [
    {
        header: "Title",
        accessor: (speciality) => (
            <Image
                src={speciality.icon}
                alt={speciality.title}
                width={40}
                height={40}
                className="rounded-full"
            />
        ),
    },
    {
        header: "Title",
        accessor: (speciality) => speciality.title,
    }
];