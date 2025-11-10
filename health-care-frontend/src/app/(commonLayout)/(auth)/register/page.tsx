import { RegisterForm } from "@/src/components/modules/auth/RegisterForm";
import backgroundImage from '../../../../assets/images/doctor-patient-online-consultation-image-309.png'
import Image from "next/image";


const RegisterPage = () => {
    return (
        <div className="grid min-h-svh lg:grid-cols-2 bg-linear-to-r from-[#e2e2e2] to-[#e2e9ff]">
            <div className="flex flex-1 items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-md">
                    <h1 className="md:text-3xl text-xl text-center text-secondary font-bold uppercase">Create an account</h1>
                    <p className="text-center text-gray-600 py-3">Enter your information below to create your account</p>
                    <RegisterForm />
                </div>
            </div>
            <div className="bg-muted relative hidden lg:block">
                <Image
                    src={backgroundImage.src}
                    alt="Image"
                    fill
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    );
};

export default RegisterPage;