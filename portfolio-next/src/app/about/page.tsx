'use client'
import { HeroSectionAbout } from "@/components/hero/HeroSectionAbout";
import { ProfileCard } from "@/components/about/ProfileCard";
import { motion } from 'framer-motion';
import TechnicalStackSection from "@/components/aboutPage/Test";
import { ExpertiseSection } from "@/components/aboutPage/Test2";
import { ReadyToBuildSection } from "@/components/aboutPage/ReadyToBuildSection";
const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

  const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

export default function About() {
  return (
    <main className="flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <div className="pt-10">
          <HeroSectionAbout>
            <div className="text-center mb-12">
              <motion.h1 
              className="text-3xl md:text-7xl font-bold mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={titleVariants}
              >
                <span className="text-foreground">
                  Solutions <span className="text-primary">Architect</span>
                </span>
              </motion.h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                 Crafting intelligent systems that push the boundaries of what's possible with AI
             </p>
            </div>
            <ProfileCard />
          </HeroSectionAbout>
          <TechnicalStackSection/>
          <ExpertiseSection/>
        </div>
        <ReadyToBuildSection/>
      </div>
    </main>
  );
}