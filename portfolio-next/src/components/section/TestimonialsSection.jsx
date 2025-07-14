"use client";

import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import ProductLogo from './ProductLogo';

// --- Main Testimonials Section Component ---
const TestimonialsSection = () => {
  // Array of testimonial data
  const testimonials = [
    {
      testimonial: "Working with Ali was seamless and highly productive. His attention to detail and commitment to our project’s success were exceptional. Ali truly knows how to deliver quality results. Highly recommended!",
      author: "James Peterson",
      title: "CEO of Blue Horizon Solutions",
      initials: "JP",
    },
    {
      testimonial: "Ali's expertise and innovative thinking were exactly what our team needed. His technical skills and ability to solve complex problems made a significant impact. He’s a fantastic partner to collaborate with.",
      author: "David Wilson",
      title: "Head of Development at Quantum Leap Ventures",
      initials: "DW",
    },
    {
      testimonial: "Ali's consistently exceeded our expectations with his creative approach to web development. His responsiveness and keen understanding of our needs made the entire process smooth and efficient.",
      author: "John Davis",
      title: "Founder of Bright Future Media",
      initials: "JD",
    },
    {
      testimonial: "Ali's passion for his work is evident in everything he does. He brought great ideas to the table and transformed our vision into reality. I would happily work with him again on future projects.",
      author: "Robert King",
      title: "CTO of Apex Technologies",
      initials: "RK",
    },
    // Duplicate testimonials for continuous scroll effect (make sure you have enough duplicates for smooth loop)
    {
      testimonial: "Working with Ali was seamless and highly productive. His attention to detail and commitment to our project’s success were exceptional. Ali truly knows how to deliver quality results. Highly recommended!",
      author: "James Peterson",
      title: "CEO of Blue Horizon Solutions",
      initials: "JP",
    },
    {
      testimonial: "Ali's expertise and innovative thinking were exactly what our team needed. His technical skills and ability to solve complex problems made a significant impact. He’s a fantastic partner to collaborate with.",
      author: "David Wilson",
      title: "Head of Development at Quantum Leap Ventures",
      initials: "DW",
    },
    {
      testimonial: "Ali's consistently exceeded our expectations with his creative approach to web development. His responsiveness and keen understanding of our needs made the entire process smooth and efficient.",
      author: "John Davis",
      title: "Founder of Bright Future Media",
      initials: "JD",
    },
    {
      testimonial: "Ali's passion for his work is evident in everything he does. He brought great ideas to the table and transformed our vision into reality. I would happily work with him again on future projects.",
      author: "Robert King",
      title: "CTO of Apex Technologies",
      initials: "RK",
    },
  ];

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };


  return (
    <section id="testimonials" className="py-20 px-4 bg-background dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials Title */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={titleVariants}
          >
            <span>What </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">clients say</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-blue-500"></span>
            </span>
            <span> about working with me</span>
            <span className="absolute inset-0 bg-primary/5 blur-3xl rounded-full -z-10 opacity-100"></span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={paragraphVariants}
          >
            Real feedback from founders and teams I've had the privilege to collaborate with
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-20">
          <div className="relative overflow-hidden w-screen left-1/2 transform -translate-x-1/2 group before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-background after:to-transparent"
               style={{
                 '--animation-direction': 'reverse',
                 '--animation-duration': '100s',
               }}>
            <ul className="flex gap-16 py-6 flex-nowrap w-max animate-scroll group-hover:pause-animation">
              {testimonials.map((testimonial, index) => (
                // Important: Using index as key is usually fine for static lists, but if testimonials
                // could be reordered or removed, use a unique ID for better performance/reliability.
                <TestimonialCard
                  key={index}
                  testimonial={testimonial.testimonial}
                  author={testimonial.author}
                  title={testimonial.title}
                  initials={testimonial.initials}
                />
              ))}
            </ul>
          </div>
        </div>

        {/* Products Launched Section */}
        <div className="mt-24">
          {/* Products Launched Title */}
          <div className="text-center mb-16">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={titleVariants}
            >
              <span>Products I've helped </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">launch</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-blue-500"></span>
              </span>
              <span className="absolute inset-0 bg-primary/5 blur-3xl rounded-full -z-10 opacity-100"></span>
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={paragraphVariants}
            >
              Trusted by innovative companies to bring their visions to life
            </motion.p>
          </div>

          {/* Product Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 sm:px-0 py-8">
            <ProductLogo name="Mindsmith" idGradient="mindsmith" viewBox="0 0 108 28">
              <linearGradient id="mindsmith-special-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FB7185" stopOpacity="1"></stop>
                <stop offset="100%" stopColor="#C4B5FD" stopOpacity="1"></stop>
              </linearGradient>
            </ProductLogo>
            <ProductLogo name="Humata" idGradient="humata" viewBox="0 0 72 28">
              <linearGradient id="humata-special-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FCD34D" stopOpacity="1"></stop>
                <stop offset="100%" stopColor="#F9A8D4" stopOpacity="1"></stop>
              </linearGradient>
            </ProductLogo>
            <ProductLogo name="Klu" idGradient="klu" viewBox="0 0 36 28">
              <linearGradient id="klu-special-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6EE7B7" stopOpacity="1"></stop>
                <stop offset="100%" stopColor="#7DD3FC" stopOpacity="1"></stop>
              </linearGradient>
            </ProductLogo>
            <ProductLogo name="Recast" idGradient="recast" viewBox="0 0 72 28">
              <linearGradient id="recast-special-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#67E8F9" stopOpacity="1"></stop>
                <stop offset="100%" stopColor="#C084FC" stopOpacity="1"></stop>
              </linearGradient>
            </ProductLogo>
            <ProductLogo name="Durable" idGradient="durable" viewBox="0 0 84 28">
              <linearGradient id="durable-special-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F472B6" stopOpacity="1"></stop>
                <stop offset="100%" stopColor="#FCD34D" stopOpacity="1"></stop>
              </linearGradient>
            </ProductLogo>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;