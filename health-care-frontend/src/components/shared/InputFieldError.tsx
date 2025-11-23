import { getInputFieldError, InputFieldErrorState } from "@/src/lib/getInputFieldError";
import { FieldDescription } from "../ui/field";

interface InputFieldErrorProps {
    fieldName: string;
    state: InputFieldErrorState;
}
export default function InputFieldError({ fieldName, state }: InputFieldErrorProps) {

    if (getInputFieldError(fieldName, state))
        return (
            <FieldDescription className="text-red-600">
                {getInputFieldError(fieldName, state)}
            </FieldDescription>
        )
    return null;
}
