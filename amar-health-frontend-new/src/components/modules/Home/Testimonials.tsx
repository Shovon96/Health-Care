import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import samplePhoto from '../../../assets/images/doctor-neurologist.jpg';

const testimonials = [
  {
    name: 'Robert Fox',
    role: 'Patient',
    image: samplePhoto,
    quote: 'The care and professionalism I received were outstanding. The doctors were knowledgeable and the staff was incredibly supportive throughout my treatment.',
    rating: 5,
  },
  {
    name: 'Jane Cooper',
    role: 'Patient',
    image: samplePhoto,
    quote: 'A seamless experience from booking an appointment to the consultation. The use of technology for prescriptions and follow-ups is very convenient.',
    rating: 5,
  },
  {
    name: 'Wade Warren',
    role: 'Patient',
    image: samplePhoto,
    quote: 'I highly recommend their services. The specialists are top-notch, and they truly focus on preventive care which has greatly improved my health.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300">
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#54AC5C]/5 dark:bg-[#54AC5C]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#04BCD4]/5 dark:bg-[#04BCD4]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#54AC5C]/10 dark:bg-[#54AC5C]/20 text-[#54AC5C] dark:text-[#04BCD4] rounded-full text-sm font-semibold uppercase">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 bg-linear-to-r from-[#04BCD4] via-[#07824a] to-[#54AC5C] bg-clip-text text-transparent">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
            We are committed to providing you with the best medical and healthcare services to improve your quality of life
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="group bg-white dark:bg-gray-800 relative overflow-hidden border-2 border-transparent hover:border-[#04BCD4] dark:hover:border-[#54AC5C] transition-all duration-500 hover:shadow-2xl dark:hover:shadow-[#04BCD4]/20 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-300">
                  <Quote className="text-[#04BCD4]" size={64} />
                </div>

                <div className="relative z-10 space-y-6">
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 fill-yellow-400 group-hover:scale-110 transition-transform duration-300"
                        size={20}
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Patient Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="relative">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="rounded-full ring-4 ring-[#04BCD4]/20 dark:ring-[#04BCD4]/30 group-hover:ring-[#04BCD4]/40 dark:group-hover:ring-[#04BCD4]/50 transition-all duration-300"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#54AC5C] rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#07824a] dark:text-white text-lg group-hover:text-[#04BCD4] dark:group-hover:text-[#54AC5C] transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>

              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-[#04BCD4]/0 to-[#54AC5C]/0 group-hover:from-[#04BCD4]/5 group-hover:to-[#54AC5C]/5 dark:group-hover:from-[#04BCD4]/10 dark:group-hover:to-[#54AC5C]/10 transition-all duration-500 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 cursor-pointer bg-linear-to-r from-[#04BCD4] to-[#54AC5C] text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase">
            Share Your Experience
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;