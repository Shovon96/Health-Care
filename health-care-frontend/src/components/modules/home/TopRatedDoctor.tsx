import { Star, MapPin, Award, Clock } from 'lucide-react';
import { Card, CardContent } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import Image from 'next/image';
import cardioDoc from '../../../assets/images/female-doctor-image-235.png';
import neurolDoc from '../../../assets/images/male-doctor-image-465.png';
import orthoDoc from '../../../assets/images/female-doctor-hospital.jpg';

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
            className="group p-0 overflow-hidden border-2 border-transparent hover:border-[#04BCD4] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in bg-white gap-0"
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
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Award className="w-4 h-4 text-[#54AC5C]" />
                    <span className="text-sm font-semibold text-[#07824a]">Top Rated</span>
                </div>
                
                {/* linear Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <CardContent className="p-6 space-y-2">
                {/* Doctor Name & Specialty */}
                <div>
                    <h3 className="text-xl font-bold text-[#07824a] group-hover:text-[#04BCD4] transition-colors duration-300">
                        {doctor.name}
                    </h3>
                    <p className="text-[#54AC5C] font-semibold mt-1">
                        {doctor.specialty}
                    </p>
                </div>
                
                {/* Info Grid */}
                <div className="flex justify-between py-2">
                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-sm font-bold text-gray-800">{doctor.rating}</span>
                        </div>
                        <span className="text-xs text-gray-600">({doctor.reviews})</span>
                    </div>
                    
                    {/* Experience */}
                    <div className="flex items-center gap-1.5 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-[#04BCD4]" />
                        <span className="font-medium">{doctor.experience}</span>
                    </div>
                </div>
                
                {/* Location */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-[#54AC5C]" />
                    <span>{doctor.location}</span>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                    <Button 
                        variant="outline"
                        className="flex-1 border-2 border-gray-300 hover:border-[#04BCD4] hover:bg-[#04BCD4]/5 hover:text-[#04BCD4] transition-all duration-300 uppercase text-sm font-semibold cursor-pointer"
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
        <section className="py-16 md:py-24 bg-linear-to-tr from-cyan-50 to-cyan-50/40 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#04BCD4]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#54AC5C]/5 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 bg-[#04BCD4]/10 text-[#04BCD4] rounded-full text-sm font-semibold uppercase">
                            Our Experts
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#07824a] uppercase mb-4">
                        Meet Our Top Rated Doctors
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
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