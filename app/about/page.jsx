"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-12 xl:py-24">
      <div className="container mx-auto px-6 xl:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="mb-8 text-5xl font-bold xl:text-7xl">
            <span style={{ color: 'var(--foreground)' }}>About </span>
            <span style={{ color: 'var(--accent)' }}>Me</span>
          </h1>

          <h2 className="mb-12 text-2xl font-semibold xl:text-3xl" style={{ color: 'var(--foreground)' }}>
            Passionate Developer & Problem Solver
          </h2>

          <div className="space-y-8">
            <p className="leading-relaxed text-lg xl:text-2xl" style={{ color: 'var(--foreground)', opacity: 0.9 }}>
              I'm a dedicated web developer with 2 years of experience specializing in creating
              dynamic, responsive, and visually stunning websites.
            </p>

            <p className="leading-relaxed text-lg xl:text-2xl" style={{ color: 'var(--foreground)', opacity: 0.9 }}>
              My expertise spans <span style={{ color: 'var(--accent)', fontWeight: '600' }}>JavaScript, React, GSAP, Framer-Motion and Locomotive JS</span> for
              frontend development, while currently expanding my skills in backend technologies like <span style={{ color: 'var(--accent)', fontWeight: '600' }}>Node.js
              and Express.js</span> to become a well-rounded full-stack developer.
            </p>

            <p className="leading-relaxed text-lg xl:text-2xl" style={{ color: 'var(--foreground)', opacity: 0.9 }}>
              I love bringing ideas to life through beautiful, seamless digital experiences built with the latest web technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
