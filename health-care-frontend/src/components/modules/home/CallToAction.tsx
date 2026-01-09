import { ArrowRight, Calendar, Phone } from 'lucide-react';
import { Button } from '@/src/components/ui/button';

const CallToAction = () => {
    return (
        <section className="py-16 md:py-24 bg-linear-to-br from-[#04BCD4] via-[#04BCD4] to-[#54AC5C] relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 lg:p-16 border border-white/20 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6 text-white">
                            <div className="inline-block">
                                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold uppercase">
                                    Get Started Today
                                </span>
                            </div>
                            
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                Ready to Experience Better Healthcare?
                            </h2>
                            
                            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                                Join thousands of satisfied patients who trust us with their health. Book your appointment now and take the first step towards better health.
                            </p>
                            
                            {/* Features List */}
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-white/90">No waiting time - instant appointments</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-white/90">Access to top-rated specialists</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-white/90">Secure and confidential consultations</span>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Right Content - CTA Buttons */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-2xl p-8 shadow-2xl space-y-6">
                                <h3 className="text-2xl font-bold text-[#07824a]">
                                    Book Your Appointment
                                </h3>
                                
                                <div className="space-y-4">
                                    <Button 
                                        className="w-full h-14 bg-linear-to-r from-[#04BCD4] to-[#54AC5C] hover:shadow-xl hover:scale-105 transition-all duration-300 text-white font-semibold text-base uppercase gap-3"
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Book Appointment Now
                                        <ArrowRight className="w-5 h-5" />
                                    </Button>
                                    
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-200"></div>
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="px-4 bg-white text-gray-500">or</span>
                                        </div>
                                    </div>
                                    
                                    <Button 
                                        variant="outline"
                                        className="w-full h-14 border-2 border-[#04BCD4] text-[#04BCD4] hover:bg-[#04BCD4] hover:text-white transition-all duration-300 font-semibold text-base uppercase gap-3"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Call Us: 1-800-HEALTH
                                    </Button>
                                </div>
                                
                                <p className="text-center text-sm text-gray-600">
                                    Available 24/7 for your convenience
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
