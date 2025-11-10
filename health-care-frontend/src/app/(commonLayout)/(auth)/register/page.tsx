import { RegisterForm } from "@/src/components/modules/auth/RegisterForm";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/src/components/ui/card";

const RegisterPage = () => {
    return (
        <>
            <div
                className="flex min-h-svh w-full items-center justify-center p-6 md:p-10"
                style={{ backgroundImage: 'url("")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-full max-w-xl">
                    <Card className="max-w-lg mx-auto">
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl font-bold text-secondary uppercase">Create an account</CardTitle>
                            <CardDescription>
                                Enter your information below to create your account
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <RegisterForm />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;