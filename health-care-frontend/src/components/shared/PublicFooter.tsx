import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import ManiLogo from "../../assets/images/healthcare-new-logo.png";

function PublicFooter() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { href: "/", label: "Home" },
        { href: "#", label: "About Us" },
        { href: "#", label: "Services" },
        { href: "#", label: "Doctors" },
        { href: "#", label: "Contact" },
    ];

    const services = [
        { href: "#", label: "Consultation" },
        { href: "#", label: "Health Plans" },
        { href: "#", label: "Medicine" },
        { href: "#", label: "Diagnostics" },
        { href: "#", label: "Emergency Care" },
    ];

    const support = [
        { href: "#", label: "FAQ" },
        { href: "#", label: "Help Center" },
        { href: "#", label: "Terms of Service" },
        { href: "#", label: "Privacy Policy" },
        { href: "#", label: "Careers" },
    ];

    const socialLinks = [
        { href: "#", icon: Facebook, label: "Facebook" },
        { href: "#", icon: Twitter, label: "Twitter" },
        { href: "#", icon: Instagram, label: "Instagram" },
        { href: "#", icon: Linkedin, label: "LinkedIn" },
    ];

    return (
        <footer className="bg-linear-to-br from-[#07824a] via-[#07824a] to-[#054a2e] text-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#04BCD4]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#54AC5C]/10 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <div className="bg-white p-3 rounded-xl inline-block">
                                <Image
                                    src={ManiLogo}
                                    alt="health-care"
                                    width={160}
                                    height={40}
                                    className="brightness-100"
                                />
                            </div>
                        </Link>
                        <p className="text-white/80 text-sm leading-relaxed">
                            Your health is our priority. We provide world-class medical services with compassion and expertise.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#04BCD4] flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                            <div className="w-1 h-6 bg-[#04BCD4] rounded-full"></div>
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/80 hover:text-[#04BCD4] transition-colors duration-300 text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-[#04BCD4] transition-all duration-300 group-hover:w-4"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                            <div className="w-1 h-6 bg-[#04BCD4] rounded-full"></div>
                            Our Services
                        </h3>
                        <ul className="space-y-3">
                            {services.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/80 hover:text-[#04BCD4] transition-colors duration-300 text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-[#04BCD4] transition-all duration-300 group-hover:w-4"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                            <div className="w-1 h-6 bg-[#04BCD4] rounded-full"></div>
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-white/80">
                                <MapPin className="w-5 h-5 text-[#04BCD4] shrink-0 mt-0.5" />
                                <span>123 Medical Lane<br />Health City, HC 12345</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-white/80">
                                <Phone className="w-5 h-5 text-[#04BCD4] shrink-0" />
                                <a href="tel:+1234567890" className="hover:text-[#04BCD4] transition-colors">
                                    +1 (234) 567-890
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-white/80">
                                <Mail className="w-5 h-5 text-[#04BCD4] shrink-0" />
                                <a href="mailto:contact@phdoc.com" className="hover:text-[#04BCD4] transition-colors">
                                    contact@amarhealt.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="border-t border-white/10 pt-8 mb-8">
                    <div className="max-w-2xl mx-auto text-center space-y-4">
                        <h3 className="text-xl font-bold text-white">Stay Updated</h3>
                        <p className="text-white/80 text-sm">Subscribe to our newsletter for health tips and updates</p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#04BCD4] transition-colors"
                            />
                            <button className="px-6 py-3 bg-linear-to-r from-[#04BCD4] to-[#54AC5C] rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
                        <p className="flex items-center gap-2">
                            &copy; {currentYear} Amar Health Care. All Rights Reserved.
                        </p>
                        <div className="flex gap-6">
                            {support.slice(2, 4).map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="hover:text-[#04BCD4] transition-colors duration-300"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default PublicFooter;