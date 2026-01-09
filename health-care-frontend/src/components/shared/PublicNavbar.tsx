import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { getCookie } from "../modules/auth/tokenHandlers";
import LogoutButton from "./LogoutButton";
import ManiLogo from "../../assets/images/healthcare-new-logo.png";

const PublicNavbar = async () => {
    const navItems = [
        { href: "#", label: "Consultation" },
        { href: "#", label: "Health Plans" },
        { href: "#", label: "Medicine" },
        { href: "#", label: "Diagnostics" },
        { href: "#", label: "NGOs" },
    ];

    const accessToken = await getCookie("accessToken");

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#04BCD4]/20 bg-white/95 backdrop-blur-md shadow-sm">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="relative">
                        <Image
                            src={ManiLogo}
                            alt="health-care"
                            width={180}
                            height={40}
                            className="transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8">
                    {navItems.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="relative text-sm font-semibold text-[#07824a] hover:text-[#04BCD4] transition-colors duration-300 uppercase tracking-wide group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#04BCD4] to-[#54AC5C] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* Desktop Auth Buttons */}
                <div className="hidden lg:flex items-center space-x-4">
                    {accessToken ? (
                        <LogoutButton />
                    ) : (
                        <>
                            <Link href="/register">
                                <Button 
                                    variant="ghost"
                                    className="cursor-pointer text-[#07824a] hover:text-[#04BCD4] hover:bg-[#04BCD4]/10 font-semibold uppercase transition-all duration-300"
                                >
                                    Sign Up
                                </Button>
                            </Link>
                            <Link href="/login">
                                <Button 
                                    className="cursor-pointer bg-linear-to-r from-[#04BCD4] to-[#54AC5C] hover:shadow-lg hover:scale-105 transition-all duration-300 text-white font-semibold uppercase px-6"
                                >
                                    Login
                                </Button>
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button 
                                variant="outline" 
                                size="icon"
                                className="border-2 border-[#04BCD4] text-[#04BCD4] hover:bg-[#04BCD4] hover:text-white transition-all duration-300"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 bg-white">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            
                            {/* Mobile Menu Header */}
                            <div className="p-6 border-b border-gray-100">
                                <Image
                                    src={ManiLogo}
                                    alt="health-care"
                                    width={160}
                                    height={35}
                                />
                            </div>

                            {/* Mobile Navigation */}
                            <nav className="flex flex-col p-6 space-y-1">
                                {navItems.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="px-4 py-3 text-base font-semibold text-[#07824a] hover:text-[#04BCD4] hover:bg-[#04BCD4]/5 rounded-lg transition-all duration-300 uppercase"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>

                            {/* Mobile Auth Buttons */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-gray-50 space-y-3">
                                {accessToken ? (
                                    <LogoutButton />
                                ) : (
                                    <>
                                        <Link href="/register" className="block">
                                            <Button 
                                                variant="outline"
                                                className="w-full border-2 border-[#04BCD4] text-[#04BCD4] hover:bg-[#04BCD4] hover:text-white font-semibold uppercase transition-all duration-300"
                                            >
                                                Sign Up
                                            </Button>
                                        </Link>
                                        <Link href="/login" className="block">
                                            <Button 
                                                className="w-full bg-linear-to-r from-[#04BCD4] to-[#54AC5C] hover:shadow-lg text-white font-semibold uppercase transition-all duration-300"
                                            >
                                                Login
                                            </Button>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default PublicNavbar;