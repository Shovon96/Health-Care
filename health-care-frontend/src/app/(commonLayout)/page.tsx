import { Hero } from "@/src/components/modules/home/Hero";
import Specialities from "@/src/components/modules/home/Specialities";
import Steps from "@/src/components/modules/home/Steps";
import TopRatedDoctors from "@/src/components/modules/home/TopRatedDoctor";


export default function HomePage() {
  return (
    <div>
        <Hero />
        <Specialities />
        <TopRatedDoctors />
        <Steps />
    </div>
  )
}
