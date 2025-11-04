import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

const PublicNavbar = () => {
    const navItems = [
        { href: "#", label: "Consultation" },
        { href: "#", label: "Health Plans" },
        { href: "#", label: "Medicine" },
        { href: "#", label: "Diagnostics" },
        { href: "#", label: "NGOs" },
    ];
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-linear-to-r from-green-200 to-purple-200 backdrop-blur p-1">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="https://i.ibb.co.com/pvDNJ40s/health-care-logo.png"
                        alt="health-care"
                        width={240}
                        height={140}
                    />
                </Link>

                <nav className="hidden md:flex items-center space-x-6 text-md uppercase font-medium">
                    {navItems.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="hover:text-primary text-secondary hover:underline transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center space-x-2">
                    <Link href="/login" className="text-lg font-medium uppercase">
                        <Button>LOGIN</Button>
                    </Link>
                </div>

                {/* Mobile Menu */}

                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline"> <Menu /> </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] p-4">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <nav className="flex flex-col space-y-4 mt-8">
                                {navItems.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="text-lg font-medium"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="border-t pt-4 flex flex-col space-y-4">
                                    <div className="flex justify-center"></div>
                                    <Link href="/login" className="text-lg font-medium">
                                        <Button>Login</Button>
                                    </Link>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default PublicNavbar;