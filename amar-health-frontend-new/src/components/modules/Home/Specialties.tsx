
import { HeartPulse, Brain, Bone, Baby, Eye, Stethoscope, Activity, Syringe, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const specialists = [
  {
    name: 'Cardiology',
    icon: HeartPulse,
    description: 'Heart & cardiovascular care',
    bgColor: 'bg-[#04BCD4]/10',
    iconColor: 'text-[#04BCD4]',
    hoverBg: 'group-hover:bg-[#04BCD4]',
  },
  {
    name: 'Neurology',
    icon: Brain,
    description: 'Brain & nervous system',
    bgColor: 'bg-[#54AC5C]/10',
    iconColor: 'text-[#54AC5C]',
    hoverBg: 'group-hover:bg-[#54AC5C]',
  },
  {
    name: 'Orthopedic',
    icon: Bone,
    description: 'Bones & joints treatment',
    bgColor: 'bg-[#04BCD4]/10',
    iconColor: 'text-[#04BCD4]',
    hoverBg: 'group-hover:bg-[#04BCD4]',
  },
  {
    name: 'Pediatric',
    icon: Baby,
    description: 'Children healthcare',
    bgColor: 'bg-[#54AC5C]/10',
    iconColor: 'text-[#54AC5C]',
    hoverBg: 'group-hover:bg-[#54AC5C]',
  },
  {
    name: 'Ophthalmology',
    icon: Eye,
    description: 'Eye care & vision',
    bgColor: 'bg-[#04BCD4]/10',
    iconColor: 'text-[#04BCD4]',
    hoverBg: 'group-hover:bg-[#04BCD4]',
  },
  {
    name: 'General Medicine',
    icon: Stethoscope,
    description: 'Primary healthcare',
    bgColor: 'bg-[#54AC5C]/10',
    iconColor: 'text-[#54AC5C]',
    hoverBg: 'group-hover:bg-[#54AC5C]',
  },
  {
    name: 'Dermatology',
    icon: Activity,
    description: 'Skin & hair care',
    bgColor: 'bg-[#04BCD4]/10',
    iconColor: 'text-[#04BCD4]',
    hoverBg: 'group-hover:bg-[#04BCD4]',
  },
  {
    name: 'Vaccination',
    icon: Syringe,
    description: 'Immunization services',
    bgColor: 'bg-[#54AC5C]/10',
    iconColor: 'text-[#54AC5C]',
    hoverBg: 'group-hover:bg-[#54AC5C]',
  }
];

const Specialities = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold uppercase bg-linear-to-r from-[#04BCD4] via-[#54AC5C] to-[#07824a] bg-clip-text text-transparent">
              Our Medical Specialties
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-base md:text-lg">
              Access to medical experts across all major specialties with world-class care
            </p>
          </div>
          <Link
            href="/specialities"
            className="group flex items-center gap-2 text-[#04BCD4] dark:text-[#54AC5C] text-base md:text-lg font-semibold hover:gap-3 transition-all duration-300 uppercase"
          >
            View All
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialists.map((specialist, index) => (
            <Card
              key={specialist.name}
              className={cn(
                'group text-center transition-all duration-500 cursor-pointer border-2 border-transparent p-0',
                'bg-white dark:bg-gray-800',
                'hover:border-[#04BCD4] dark:hover:border-[#54AC5C] hover:shadow-2xl dark:hover:shadow-[#04BCD4]/20 hover:-translate-y-2',
                'animate-fade-in'
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                {/* Icon Container */}
                <div
                  className={cn(
                    'w-20 h-20 rounded-2xl mx-auto flex items-center justify-center mb-5 transition-all duration-500',
                    specialist.bgColor,
                    'dark:bg-gray-700/50',
                    specialist.hoverBg,
                    'group-hover:scale-110 group-hover:rotate-6',
                  )}
                >
                  <specialist.icon
                    className={cn(specialist.iconColor, 'dark:text-[#04BCD4]', 'transition-colors duration-500 group-hover:text-white')}
                    size={40}
                  />
                </div>

                {/* Specialty Name */}
                <h3 className="text-xl font-bold text-[#07824a] dark:text-white mb-2 group-hover:text-[#04BCD4] dark:group-hover:text-[#54AC5C] transition-colors duration-300">
                  {specialist.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {specialist.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialities;
