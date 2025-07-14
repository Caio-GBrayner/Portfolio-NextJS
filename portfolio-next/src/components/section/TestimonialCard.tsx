import React from "react";
import { motion } from 'framer-motion';

type TestimonialCardProps = {
  testimonial: string;
  author: string;
  title: string;
  initials: string;
};

const TestimonialCard = ({ testimonial, author, title, initials }: TestimonialCardProps) => {
  return (
    <motion.li
      className="flex-shrink-0 w-[90vw] md:w-[60vw] max-w-full p-5 md:p-16 rounded-2xl relative group overflow-hidden transition-all duration-500 hover:pause-animation shadow-lg hover:shadow-xl"
      style={{ perspective: '1000px' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Gradients and Borders */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-card opacity-80 dark:opacity-90 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-blue-500/10 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
      <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-primary/40 to-transparent opacity-20 group-hover:opacity-40 transition-all duration-500 rounded-br-full z-0"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-500/30 to-transparent opacity-20 group-hover:opacity-40 transition-all duration-500 rounded-tl-full z-0"></div>
      <div className="absolute inset-0 border border-border/30 group-hover:border-primary/30 rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] z-0"></div>

      <blockquote className="relative z-10">
        <p className="text-sm md:text-lg leading-[1.6] text-card-foreground">
          {testimonial}
        </p>
        <div className="mt-6 flex items-center">
          <div className="me-3 w-16 h-16 bg-gradient-to-br from-primary/30 to-blue-500/30 dark:from-primary/40 dark:to-blue-500/40 group-hover:from-primary/40 group-hover:to-blue-500/40 dark:group-hover:from-primary/50 dark:group-hover:to-blue-500/50 rounded-full flex items-center justify-center border-2 border-primary/30 group-hover:border-primary/50 transition-all duration-500 shadow-md">
            <span className="text-lg font-bold text-primary group-hover:text-primary/90 transition-colors duration-500">
              {initials}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xl font-bold text-card-foreground">{author}</span>
            <span className="text-sm text-muted-foreground">{title}</span>
          </div>
        </div>
      </blockquote>
    </motion.li>
  );
};

export default TestimonialCard