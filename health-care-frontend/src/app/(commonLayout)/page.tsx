import CallToAction from "@/src/components/modules/home/CallToAction";
import Features from "@/src/components/modules/home/Features";
import { Hero } from "@/src/components/modules/home/Hero";
import Specialities from "@/src/components/modules/home/Specialities";
import Statistics from "@/src/components/modules/home/Statistics";
import Steps from "@/src/components/modules/home/Steps";
import Testimonials from "@/src/components/modules/home/Testimonial";
import TopRatedDoctors from "@/src/components/modules/home/TopRatedDoctor";


export default function HomePage() {
  return (
    <div>
        <Hero />
        <Specialities />
        <TopRatedDoctors />
        <Steps />
        <CallToAction />
        <Statistics />
        <Features />
        <Testimonials />
    </div>
  )
}
