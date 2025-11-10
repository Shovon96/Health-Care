/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/src/lib/utils"
import { Button } from "@/src/components/ui/button"
import {
    Card,
    CardContent,
} from "@/src/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/src/components/ui/field"
import { Input } from "@/src/components/ui/input"
import Link from "next/link"

export function RegisterForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardContent>
                    <form>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="name">Name</FieldLabel>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Mr. Jhone"
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="password">Password</FieldLabel>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="*********"
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="*********"
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="address">Address</FieldLabel>
                                <Input
                                    id="address"
                                    type="text"
                                    placeholder="123 Main St"
                                />
                            </Field>
                            <Field>
                                <Button type="submit" className="cursor-pointer uppercase">Register</Button>
                                <Button variant="outline" type="button" className="uppercase cursor-pointer">
                                    Register with Google
                                </Button>
                                <FieldDescription className="text-center">
                                    If you have an account? <Link href={'/login'}>Sign In</Link>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
