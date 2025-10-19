"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section className="h-full py-12 xl:py-24">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center justify-between gap-12 px-10 xl:flex-row xl:gap-20">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 order-2 xl:order-none"
          >
            <h1 className="mb-6 text-4xl font-bold xl:text-6xl">
              <span style={{ color: 'var(--foreground)' }}>About </span>
              <span style={{ color: 'var(--accent)' }}>Me</span>
            </h1>
            
            <h2 className="mb-6 text-xl font-semibold xl:text-2xl" style={{ color: 'var(--foreground)' }}>
              Passionate Developer & Problem Solver
            </h2>
            
            <p className="leading-relaxed text-base xl:text-lg max-w-[800px] mb-4" style={{ color: 'var(--foreground)', opacity: 1 }}>
              I'm a dedicated web developer with 2 years of experience specializing in creating 
              dynamic, responsive, and visually stunning websites.
            </p>
            
            <p className="leading-relaxed text-base xl:text-lg max-w-[800px]" style={{ color: 'var(--foreground)', opacity: 1}}>
              My expertise spans <span style={{ color: 'var(--accent)', fontWeight: '600' }}>JavaScript, React, GSAP, Framer-Motion and Locomotive JS</span> for 
              frontend development, while currently expanding my skills in backend technologies like <span style={{ color: 'var(--accent)', fontWeight: '600' }}>Node.js 
              and Express.js</span> to become a well-rounded full-stack developer.
            </p>
          </motion.div>

          {/* Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative flex-shrink-0 order-1 xl:order-none"
          >
            <div className="relative w-[280px] h-[280px] xl:w-[400px] xl:h-[400px]">
              {/* Decorative circle background */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ 
                  border: '4px solid var(--accent)',
                  opacity: 0.3
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              
              {/* Image */}
              <div className="relative w-full h-full overflow-hidden rounded-full">
                <Image
                  src="/assets/citiz.png"
                  alt="Citiz Shrestha"
                  fill
                  className="object-cover"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
