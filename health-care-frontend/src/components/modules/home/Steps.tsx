import { Search, ClipboardList, CalendarCheck, ShieldCheck, FileText, Video, CreditCard, HeartPulse } from 'lucide-react';
import React from 'react';
import { Card, CardContent } from '@/src/components/ui/card';

const steps = [
    { 
        icon: Search, 
        title: 'Search Doctor', 
        description: 'Find your doctor easily with a minimum of effort.',
        number: '01'
    },
    { 
        icon: ClipboardList, 
        title: 'Check Doctor Profile', 
        description: 'Get to know your doctor better.',
        number: '02'
    },
    { 
        icon: CalendarCheck, 
        title: 'Schedule Appointment', 
        description: 'Choose the time and date that suits you.',
        number: '03'
    },
    { 
        icon: ShieldCheck, 
        title: 'Get Your Solution', 
        description: 'Our doctors are here to help you.',
        number: '04'
    },
    { 
        icon: FileText, 
        title: 'Electronic Prescription', 
        description: 'Get your prescription instantly.',
        number: '05'
    },
    { 
        icon: Video, 
        title: 'Video Consultation', 
        description: 'Consult with your doctor from anywhere.',
        number: '06'
    },
    { 
        icon: CreditCard, 
        title: 'Easy Payment', 
        description: 'Pay with ease using various methods.',
        number: '07'
    },
    { 
        icon: HeartPulse, 
        title: 'Health Recovery', 
        description: 'Start your journey to better health.',
        number: '08'
    },
];

const StepCard = ({ icon: Icon, title, description, number, index }: { 
    icon: React.ElementType, 
    title: string, 
    description: string, 
    number: string,
    index: number 
}) => {
    const isEven = index % 2 === 0;
    
    return (
        <Card 
            className={`group relative overflow-hidden border-2 border-transparent hover:border-[#04BCD4] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in bg-white`}
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Number Badge */}
            <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-linear-to-br from-[#04BCD4] to-[#54AC5C] flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                {number}
            </div>
            
            <CardContent className="p-6 md:p-8">
                <div className="flex flex-col items-start space-y-4">
                    {/* Icon */}
                    <div className={`p-4 rounded-2xl ${isEven ? 'bg-[#04BCD4]/10' : 'bg-[#54AC5C]/10'} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${isEven ? 'group-hover:bg-[#04BCD4]' : 'group-hover:bg-[#54AC5C]'}`}>
                        <Icon 
                            className={`${isEven ? 'text-[#04BCD4]' : 'text-[#54AC5C]'} group-hover:text-white transition-colors duration-300`}
                            size={32} 
                        />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-2">
                        <h3 className="font-bold text-xl text-[#07824a] group-hover:text-[#04BCD4] transition-colors duration-300">
                            {title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
            </CardContent>
            
            {/* Hover Effect linear */}
            <div className="absolute inset-0 bg-linear-to-br from-[#04BCD4]/0 to-[#54AC5C]/0 group-hover:from-[#04BCD4]/5 group-hover:to-[#54AC5C]/5 transition-all duration-500 pointer-events-none" />
        </Card>
    );
};


const Steps = () => {
    return (
        <section className="py-16 md:py-24">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#04BCD4]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#54AC5C]/5 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 bg-[#04BCD4]/10 text-[#04BCD4] rounded-full text-sm font-semibold uppercase">
                            How It Works
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#07824a] uppercase mb-4">
                        Easy Steps to Get Your Solution
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        We provide advanced technologies and high-quality healthcare facilities with a simple, streamlined process
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <StepCard key={index} {...step} index={index} />
                    ))}
                </div>
                
                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <button className="px-8 py-4 bg-linear-to-r from-[#04BCD4] to-[#54AC5C] text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase cursor-pointer">
                        Book Your Appointment Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Steps;