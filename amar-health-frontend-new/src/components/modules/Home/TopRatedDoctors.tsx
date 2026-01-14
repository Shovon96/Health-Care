import { Star, MapPin, Award, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import cardioDoc from '../../../assets/images/doctor-cardiologist.jpg';
import neurolDoc from '../../../assets/images/doctor-neurologist.jpg';
import orthoDoc from '../../../assets/images/doctor-orthopedic.jpg';

const doctors = [
    {
        name: 'Dr. Cameron Williamson',
        specialty: 'Cardiologist',
        rating: 4.9,
        reviews: 23,
        experience: '15+ years',
        location: 'New York, USA',
        image: cardioDoc,
    },
    {
        name: 'Dr. Leslie Alexander',
        specialty: 'Neurologist',
        rating: 4.8,
        reviews: 45,
        experience: '12+ years',
        location: 'Los Angeles, USA',
        image: neurolDoc,
    },
    {
        name: 'Dr. Robert Fox',
        specialty: 'Orthopedic',
        rating: 4.9,
        reviews: 32,
        experience: '18+ years',
        location: 'Chicago, USA',
        image: orthoDoc,
    },
    {
        name: 'Dr. Sarah Johnson',
        specialty: 'Cardiologist',
        rating: 4.9,
        reviews: 28,
        experience: '10+ years',
        location: 'Boston, USA',
        image: cardioDoc,
    }
];

const DoctorCard = ({ doctor, index }: { doctor: typeof doctors[0], index: number }) => {
    return (
        <Card
            className="group p-0 overflow-hidden border-2 border-transparent hover:border-[#04BCD4] dark:hover:border-[#54AC5C] transition-all duration-500 hover:shadow-2xl dark:hover:shadow-[#04BCD4]/20 hover:-translate-y-2 animate-fade-in bg-white dark:bg-gray-800 gap-0"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Doctor Image */}
            <div className="relative overflow-hidden">
                <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={420}
                    height={320}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay Badge */}
                <div className="absolute top-4 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Award className="w-4 h-4 text-[#54AC5C]" />
                    <span className="text-sm font-semibold text-[#07824a] dark:text-[#54AC5C]">Top Rated</span>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <CardContent className="p-6 space-y-2">
                {/* Doctor Name & Specialty */}
                <div>
                    <h3 className="text-xl font-bold text-[#07824a] dark:text-white group-hover:text-[#04BCD4] dark:group-hover:text-[#54AC5C] transition-colors duration-300">
                        {doctor.name}
                    </h3>
                    <p className="text-[#54AC5C] dark:text-[#04BCD4] font-semibold mt-1">
                        {doctor.specialty}
                    </p>
                </div>

                {/* Info Grid */}
                <div className="flex justify-between py-2">
                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/30 px-2 py-1 rounded-lg">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-sm font-bold text-gray-800 dark:text-yellow-400">{doctor.rating}</span>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">({doctor.reviews})</span>
                    </div>

                    {/* Experience */}
                    <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4 text-[#04BCD4]" />
                        <span className="font-medium">{doctor.experience}</span>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4 text-[#54AC5C]" />
                    <span>{doctor.location}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                    <Button
                        variant="outline"
                        className="flex-1 border-2 border-gray-300 dark:border-gray-600 hover:border-[#04BCD4] dark:hover:border-[#54AC5C] hover:bg-[#04BCD4]/5 dark:hover:bg-[#54AC5C]/10 hover:text-[#04BCD4] dark:hover:text-[#54AC5C] transition-all duration-300 uppercase text-sm font-semibold cursor-pointer text-gray-700 dark:text-gray-300"
                    >
                        View Profile
                    </Button>
                    <Button
                        className="flex-1 bg-linear-to-r from-[#04BCD4] to-[#54AC5C] hover:shadow-lg hover:scale-105 transition-all duration-300 uppercase text-sm font-semibold text-white cursor-pointer"
                    >
                        Book Now
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

const TopRatedDoctors = () => {
    return (
        <section className="py-16 md:py-24 bg-linear-to-br from-cyan-50 to-cyan-50/40 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#04BCD4]/5 dark:bg-[#04BCD4]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#54AC5C]/5 dark:bg-[#54AC5C]/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 bg-[#04BCD4]/10 dark:bg-[#04BCD4]/20 text-[#04BCD4] dark:text-[#54AC5C] rounded-full text-sm font-semibold uppercase">
                            Our Experts
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 bg-linear-to-r from-[#07824a] via-[#04BCD4] to-[#54AC5C] bg-clip-text text-transparent">
                        Meet Our Top Rated Doctors
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                        Access to medical experts from various specialties, ready to provide you with top-notch medical services and personalized care
                    </p>
                </div>

                {/* Doctors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {doctors.map((doctor, index) => (
                        <DoctorCard key={doctor.name} doctor={doctor} index={index} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <Button
                        size="lg"
                        className="px-10 py-6 text-base bg-linear-to-r from-[#04BCD4] to-[#54AC5C] hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase font-semibold text-white cursor-pointer"
                    >
                        View All Doctors
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default TopRatedDoctors;