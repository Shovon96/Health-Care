import { Shield, Clock, Users, Award, Heart, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
    {
        icon: Shield,
        title: 'Secure & Private',
        description: 'Your health data is protected with bank-level encryption and HIPAA compliance',
        color: 'text-[#04BCD4]',
        bgColor: 'bg-[#04BCD4]/10',
    },
    {
        icon: Clock,
        title: '24/7 Availability',
        description: 'Access healthcare services anytime, anywhere with our round-the-clock support',
        color: 'text-[#54AC5C]',
        bgColor: 'bg-[#54AC5C]/10',
    },
    {
        icon: Users,
        title: 'Expert Doctors',
        description: 'Connect with board-certified specialists across all medical fields',
        color: 'text-[#04BCD4]',
        bgColor: 'bg-[#04BCD4]/10',
    },
    {
        icon: Award,
        title: 'Quality Care',
        description: 'Receive top-rated medical care with our verified and experienced professionals',
        color: 'text-[#54AC5C]',
        bgColor: 'bg-[#54AC5C]/10',
    },
    {
        icon: Heart,
        title: 'Patient-Centered',
        description: 'Personalized treatment plans tailored to your unique health needs',
        color: 'text-[#04BCD4]',
        bgColor: 'bg-[#04BCD4]/10',
    },
    {
        icon: Zap,
        title: 'Fast & Easy',
        description: 'Book appointments in seconds with our streamlined booking process',
        color: 'text-[#54AC5C]',
        bgColor: 'bg-[#54AC5C]/10',
    },
];

const Features = () => {
    return (
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-linear-to-r from-[#04BCD4]/5 to-[#54AC5C]/5 dark:from-[#04BCD4]/10 dark:to-[#54AC5C]/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 bg-[#54AC5C]/10 dark:bg-[#54AC5C]/20 text-[#54AC5C] dark:text-[#04BCD4] rounded-full text-sm font-semibold uppercase">
                            Why Choose Us
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 bg-linear-to-r from-[#54AC5C] via-[#04BCD4] to-[#07824a] bg-clip-text text-transparent">
                        Healthcare That Puts You First
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                        Experience modern healthcare with cutting-edge technology and compassionate care
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card
                            key={feature.title}
                            className="group border-2 border-transparent hover:border-[#04BCD4] dark:hover:border-[#54AC5C] transition-all duration-500 hover:shadow-2xl dark:hover:shadow-[#04BCD4]/20 hover:-translate-y-2 animate-fade-in bg-white dark:bg-gray-800"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <CardContent className="p-8 space-y-4">
                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} dark:bg-gray-700/50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                    <feature.icon className={`${feature.color} dark:text-[#04BCD4] group-hover:scale-110 transition-transform duration-300`} size={32} />
                                </div>

                                {/* Content */}
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-[#07824a] dark:text-white group-hover:text-[#04BCD4] dark:group-hover:text-[#54AC5C] transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                                        {feature.description}
                                    </p>
                                </div>
                            </CardContent>

                            {/* Hover linear Effect */}
                            <div className="absolute inset-0 bg-linear-to-br from-[#04BCD4]/0 to-[#54AC5C]/0 group-hover:from-[#04BCD4]/5 group-hover:to-[#54AC5C]/5 dark:group-hover:from-[#04BCD4]/10 dark:group-hover:to-[#54AC5C]/10 transition-all duration-500 pointer-events-none rounded-lg" />
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
