import Footer from "@/components/footer/Footer";
import ApproachSection from '@/components/section/ApproachSection'
import TestimonialsSection from '@/components/section/TestimonialsSection'
import GridExample from "@/components/about/GridExample";
import AboutGridSection from "@/components/about/AboutGridSection";
import BackgroundDecor from "@/components/hero/BackgroundDecor";
import HeroContent from "@/components/hero/HeroContent";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col mx-auto">
     <div id="hi" className="w-full mt-24 md:mt-0">
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-background dark:bg-black overflow-hidden">
          <BackgroundDecor />
          <HeroContent />
        </div>
      </div>
      <AboutGridSection/>
      <TestimonialsSection/>
      <ApproachSection/>
      <Footer/>
    </main>
  );
}
