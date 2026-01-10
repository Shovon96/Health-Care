/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useActionState, useEffect, useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import { loginUser } from "./LoginUser";
import { toast } from "sonner";
import InputFieldError from "../../shared/InputFieldError";
import Link from "next/link";

// Default credentials for each role
const defaultCredentials = {
    patient: {
        email: "patient@example.com",
        password: "patient123"
    },
    doctor: {
        email: "doctor@example.com",
        password: "doctor123"
    },
    admin: {
        email: "admin@example.com",
        password: "admin123"
    }
};

const LoginForm = ({ redirect }: { redirect?: string }) => {
    const [state, formAction, isPending] = useActionState(loginUser, null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedRole, setSelectedRole] = useState<string | null>(null);

    useEffect(() => {
        if ((state && !state.success) && (state.message || state.errors[0].message)) {
            toast.error(state.message || state.errors[0].message);
        }
    }, [state]);

    // Function to fill credentials based on role
    const fillCredentials = (role: 'patient' | 'doctor' | 'admin') => {
        setEmail(defaultCredentials[role].email);
        setPassword(defaultCredentials[role].password);
        setSelectedRole(role);
        toast.success(`${role.charAt(0).toUpperCase() + role.slice(1)} credentials loaded`);
    };


    return (
        <form action={formAction} className="bg-white p-6 rounded-2xl shadow-gray-300 shadow-md">
            {redirect && <input type="hidden" name="redirect" value={redirect} />}
            <FieldGroup className="gap-4">
                <div className="grid grid-cols-1 gap-4">
                    {/* Email */}
                    <Field>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="m@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        //   required
                        />
                        <InputFieldError fieldName="email" state={state} />
                    </Field>

                    {/* Password */}
                    <Field>
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        //   required
                        />
                        <InputFieldError fieldName="password" state={state} />
                    </Field>
                </div>

                {/* Role Selection Buttons */}
                <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-medium text-gray-700">Login As:</p>
                        <button
                            type="button"
                            onClick={() => fillCredentials('patient')}
                            className={`px-2 rounded-xl border-2 font-semibold transition-all duration-300 hover:scale-105 ${selectedRole === 'patient'
                                    ? 'border-[#54AC5C] bg-[#54AC5C] text-white shadow-lg'
                                    : 'border-[#54AC5C] text-[#54AC5C] hover:bg-[#54AC5C]/10'
                                }`}
                        >
                            Patient
                        </button>
                        <button
                            type="button"
                            onClick={() => fillCredentials('doctor')}
                            className={`px-2 rounded-xl border-2 font-semibold transition-all duration-300 hover:scale-105 ${selectedRole === 'doctor'
                                    ? 'border-[#04BCD4] bg-[#04BCD4] text-white shadow-lg'
                                    : 'border-[#04BCD4] text-[#04BCD4] hover:bg-[#04BCD4]/10'
                                }`}
                        >
                            Doctor
                        </button>
                        <button
                            type="button"
                            onClick={() => fillCredentials('admin')}
                            className={`px-2 rounded-xl border-2 font-semibold transition-all duration-300 hover:scale-105 ${selectedRole === 'admin'
                                    ? 'border-pink-500 bg-pink-500 text-white shadow-lg'
                                    : 'border-pink-500 text-pink-500 hover:bg-pink-500/10'
                                }`}
                        >
                            Admin
                        </button>
                    </div>
                </div>

                <FieldDescription className="text-start p-0 m-0 gap-3">
                    <Link
                        href="/forget-password"
                        className="text-blue-600 hover:underline"
                    >
                        Forgot password?
                    </Link>
                </FieldDescription>
                <FieldGroup>
                    <Field>
                        <Button className="uppercase cursor-pointer" type="submit" disabled={isPending}>
                            {isPending ? "Logging in..." : "Login"}
                        </Button>
                        <FieldDescription className="px-6 text-center">
                            Don&apos;t have an account?{" "}
                            <Link href="/register" className="text-blue-600 hover:underline">
                                Sign up
                            </Link>
                        </FieldDescription>
                    </Field>
                </FieldGroup>
            </FieldGroup>
        </form>
    );
};

export default LoginForm;