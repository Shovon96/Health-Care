/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useActionState, useEffect } from "react";
import { Button } from "@/src/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import { registerPatient } from "./registerPatient";
import { toast } from "sonner";
import InputFieldError from "../../shared/InputFieldError";

const RegisterForm = () => {
    const [state, formAction, isPending] = useActionState(registerPatient, null);

    useEffect(() => {
        if ((state && !state.success) && (state.message || state.errors[0].message)) {
            toast.error(state.message || state.errors[0].message);
        }
    }, [state]);

    return (
        <form action={formAction} className="bg-white p-6 rounded-2xl shadow-gray-300 shadow-md ">
            <FieldGroup>
                <div>
                    {/* Name */}
                    <Field>
                        <FieldLabel htmlFor="name">Full Name</FieldLabel>
                        <Input id="name" name="name" type="text" placeholder="John Doe" />
                        <InputFieldError fieldName="name" state={state} />
                    </Field>
                    {/* Address */}
                    <Field>
                        <FieldLabel htmlFor="address">Address</FieldLabel>
                        <Input
                            id="address"
                            name="address"
                            type="text"
                            placeholder="123 Main St"
                        />
                        <InputFieldError fieldName="address" state={state} />
                    </Field>
                    {/* Email */}
                    <Field>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="m@example.com"
                        />
                        <InputFieldError fieldName="email" state={state} />
                    </Field>
                    {/* Password */}
                    <Field>
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                        <Input id="password" name="password" type="password" placeholder="*******" />
                        <InputFieldError fieldName="password" state={state} />
                    </Field>
                    {/* Confirm Password */}
                    <Field className="md:col-span-2">
                        <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
                        <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="********"
                        />
                        <InputFieldError fieldName="confirmPassword" state={state} />
                    </Field>
                </div>
                <FieldGroup className="mt-4">
                    <Field>
                        <Button className="cursor-pointer uppercase" type="submit" disabled={isPending}>
                            {isPending ? "Creating Account...." : "Create Account"}
                        </Button>

                        <FieldDescription className="px-6 text-center">
                            Already have an account?{" "}
                            <a href="/login" className="text-blue-600 hover:underline">
                                Sign in
                            </a>
                        </FieldDescription>
                    </Field>
                </FieldGroup>
            </FieldGroup>
        </form>
    );
};

export default RegisterForm;