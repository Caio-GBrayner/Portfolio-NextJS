'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ApproachCard from './ApproachCard';

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

const ApproachSection = () => {
  return (
    <section className="w-full py-20 bg-background dark:bg-black relative">
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-full blur-3xl opacity-10 animate-blob-one"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl opacity-10 animate-blob-two"></div>

      {/* Section Title */}
      <motion.h1 className="heading text-foreground relative text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={titleVariants}
      >
        My <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent relative inline-block">Approach</span>
      </motion.h1>

      {/* Approach Cards Container */}
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-8 md:gap-4 px-4">
        <ApproachCard
          phase="Phase 1"
          title="Planning & Strategy"
          description="I'll collaborate to map out your goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
        />
        <ApproachCard
          phase="Phase 2"
          title="Development & Progress Update"
          description="Once we agree on the plan, I'll put on my Noise Cancelling Headphones and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
        />
        <ApproachCard
          phase="Phase 3"
          title="Deployment & Launch"
          description="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
        />
      </div>
    </section>
  );
};

export default ApproachSection;