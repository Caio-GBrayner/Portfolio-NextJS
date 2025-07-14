import Image from "next/image";
import Footer from "@/components/footer/Footer";
import ApproachSection from '@/components/section/ApproachSection'
import TestimonialsSection from '@/components/section/TestimonialsSection'

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col mx-auto">
      <TestimonialsSection/>
      <ApproachSection/>
      <Footer/>
    </main>
  );
}
