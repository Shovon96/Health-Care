import { Star } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/src/components/ui/card';
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
        image: cardioDoc,
    },
    {
        name: 'Dr. Leslie Alexander',
        specialty: 'Neurologist',
        rating: 4.8,
        reviews: 45,
        image: neurolDoc,
    },
    {
        name: 'Dr. Robert Fox',
        specialty: 'Orthopedic',
        rating: 4.9,
        reviews: 32,
        image: orthoDoc,
    },
    {
        name: 'Dr. Cameron Williamson',
        specialty: 'Cardiologist',
        rating: 4.9,
        reviews: 23,
        image: cardioDoc,
    }
];

const DoctorCard = ({ doctor }: { doctor: typeof doctors[0] }) => {
    return (
            <div className="max-w-xs bg-white rounded-md shadow-md shadow-gray-500 border-secondary">
                <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={420}
                    height={120}
                    className="w-full h-72 rounded-t-md"
                />

                <h3 className="text-lg font-semibold px-3 pt-3">{doctor.name}</h3>
                <div className='flex items-center justify-between px-3'>
                    <p className="text-secondary font-semibold mt-1">{doctor.specialty}</p>
                    <div className="flex items-center justify-center text-sm">
                        <Star className="text-yellow-400 fill-current" size={16} />
                        <span className="ml-2 text-foreground font-semibold">{doctor.rating}</span>
                        <span className="ml-1 text-muted-foreground">({doctor.reviews} reviews)</span>
                    </div>
                </div>
                <div className="flex gap-2 p-3">
                    <button className="flex-1 border border-gray-300 py-1.5 rounded-md hover:bg-gray-50 transition cursor-pointer uppercase text-sm font-medium">
                        Veiw Profile
                    </button>
                    <button className="flex-1 bg-primary text-white py-1.5 rounded-md hover:bg-primary/80 transition cursor-pointer uppercase text-sm font-medium">
                        Book Now
                    </button>
                    
                </div>
            </div>
    )
}

const TopRatedDoctors = () => {
    return (
        <section className="md:py-20 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-foreground uppercase">Our Top Rated Doctor</h2>
                    <p className="text-muted-foreground mt-4">
                        Access to medical experts from various specialities, ready to provide you with top-notch medical services.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
                    {doctors.map(doctor => <DoctorCard key={doctor.name} doctor={doctor} />)}
                </div>

                <div className="text-center mt-12">
                    <Button size="lg" className='cursor-pointer uppercase bg-secondary hover:bg-secondary/90'>View All Doctors</Button>
                </div>
            </div>
        </section>
    );
};

export default TopRatedDoctors;