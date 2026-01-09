import { Users, Stethoscope, Award, Heart } from 'lucide-react';

const stats = [
    {
        icon: Users,
        value: '50K+',
        label: 'Happy Patients',
        color: 'text-[#04BCD4]',
        bgColor: 'bg-[#04BCD4]/10',
    },
    {
        icon: Stethoscope,
        value: '1000+',
        label: 'Expert Doctors',
        color: 'text-[#54AC5C]',
        bgColor: 'bg-[#54AC5C]/10',
    },
    {
        icon: Award,
        value: '25+',
        label: 'Years Experience',
        color: 'text-[#04BCD4]',
        bgColor: 'bg-[#04BCD4]/10',
    },
    {
        icon: Heart,
        value: '98%',
        label: 'Success Rate',
        color: 'text-[#54AC5C]',
        bgColor: 'bg-[#54AC5C]/10',
    },
];

const Statistics = () => {
    return (
        <section className="py-16 md:py-20 bg-linear-to-r from-[#04BCD4] to-[#54AC5C] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="text-center group animate-fade-in"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-4">
                                <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    <stat.icon className="text-white" size={40} />
                                </div>
                            </div>
                            
                            {/* Value */}
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </div>
                            
                            {/* Label */}
                            <div className="text-white/90 text-sm md:text-base font-medium uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
