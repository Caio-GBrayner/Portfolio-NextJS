'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };


const Footer = () => {
  return (
    <footer className="w-full pt-8 pb-10 bg-background dark:bg-black" id="contact">
      <div className="flex flex-col items-center">
        <motion.h1 
        className="heading lg:max-w-[55vw] text-center text-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={titleVariants}
        >
          Ready To Take 
          <span className="text-primary"> Your Digital </span><br/>
          Presence To The Next Level?
        </motion.h1>
        <p className="text-muted-foreground mt-5 md:mt-10 text-center max-w-xl">
          Reach out to me today and let's discuss how I can help you achieve your GOALS!
        </p>

        {/* Contact Form */}
        <motion.form action="https://formsubmit.co/24e70568dbecfbe6ee452e2bec6bb272" method="POST" className="w-full max-w-xl mt-10 flex flex-col gap-4 px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.01 }}
        >
          <input
            placeholder="Your Name"
            required
            className="p-3 rounded-lg bg-card text-foreground placeholder-muted-foreground border border-border focus:ring-2 focus:ring-primary focus:border-primary transition-all"
            type="text"
            name="name"
          />
          <input
            placeholder="Your Email"
            required
            className="p-3 rounded-lg bg-card text-foreground placeholder-muted-foreground border border-border focus:ring-2 focus:ring-primary focus:border-primary transition-all"
            type="email"
            name="email"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="p-3 rounded-lg bg-card text-foreground placeholder-muted-foreground border border-border focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
          ></textarea>
          <select name="project_type" className="p-3 rounded-lg bg-card text-foreground border border-border focus:ring-2 focus:ring-primary focus:border-primary transition-all">
            <option value="">Select Project Type (optional)</option>
            <option value="AI SaaS">AI SaaS</option>
            <option value="Full-stack Web App">Full-stack Web App</option>
            <option value="Landing Page">Landing Page</option>
            <option value="Next.js + API">Next.js + API</option>
            <option value="Other">Other</option>
          </select>
          {/* Hidden fields for FormSubmit.co */}
          <input type="hidden" value="New Contact Form Submission!" name="_subject" />
          <input type="hidden" value="false" name="_captcha" />
          <input type="hidden" value="" name="_next" />
          <input type="hidden" value="table" name="_template" />
          <button type="submit" className="bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium">
            Send Message
          </button>
        </motion.form>

        {/* Schedule a Call Link - Still 'a' tag as it's external */}
        <div className="mt-6">
          <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary font-medium underline mt-2 hover:text-primary/80 transition-colors">
            Schedule a Call
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright and Social Media Links */}
      <div className="flex mt-10 md:flex-row flex-col justify-between items-center px-4">
        {/* Changed copyright text to potentially be a Link to Home */}
        <Link href="/" className="md:text-base text-sm md:font-normal font-light text-muted-foreground hover:text-primary transition-colors">
          © 2025 Caio Gomes Brayner — All Rights Reserved
        </Link>
        <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
          {/* GitHub Icon - Now uses Link component with an 'a' tag inside */}
          <Link href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg bg-card/80 hover:bg-card border border-border rounded-lg transition-all duration-300 hover:border-primary/50">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className="text-foreground hover:text-primary transition-all duration-300" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>
          </Link>
          {/* Instagram Icon - Now uses Link component with an 'a' tag inside */}
          <Link href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg bg-card/80 hover:bg-card border border-border rounded-lg transition-all duration-300 hover:border-primary/50">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-foreground hover:text-primary transition-all duration-300" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6 42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
          </Link>
          {/* LinkedIn Icon - Now uses Link component with an 'a' tag inside */}
          <Link href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg bg-card/80 hover:bg-card border border-border rounded-lg transition-all duration-300 hover:border-primary/50">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-foreground hover:text-primary transition-all duration-300" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
            </svg>
          </Link>
          {/* Twitter (X) Icon - Now uses Link component with an 'a' tag inside */}
          <Link href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile" className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg bg-card/80 hover:bg-card border border-border rounded-lg transition-all duration-300 hover:border-primary/50">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-foreground hover:text-primary transition-all duration-300" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;