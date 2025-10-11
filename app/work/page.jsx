"use client";

import { motion } from "framer-motion";

// Helper function to highlight tech terms
const highlightTechTerms = (text) => {
  const techTerms = [
    'React', 'TypeScript', 'GSAP', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB',
    'HTML', 'CSS', 'JavaScript', 'Locomotive JS', 'Supabase', 'PostgreSQL',
    'JWT', 'Next.js', 'Vue.js', 'Angular', 'Python', 'Django', 'Flask',
    'Java', 'Spring Boot', 'MySQL', 'Redis', 'Docker', 'Kubernetes',
    'AWS', 'Azure', 'GCP', 'GraphQL', 'REST API', 'WebSocket'
  ];
  
  // Sort by length (longest first) to match longer terms first
  const sortedTerms = [...techTerms].sort((a, b) => b.length - a.length);
  
  // Create regex pattern
  const pattern = new RegExp(`\\b(${sortedTerms.join('|')})\\b`, 'g');
  
  const parts = [];
  let lastIndex = 0;
  let match;
  
  while ((match = pattern.exec(text)) !== null) {
    // Add text before match
    if (match.index > lastIndex) {
      parts.push({
        text: text.substring(lastIndex, match.index),
        isHighlight: false
      });
    }
    
    // Add matched term
    parts.push({
      text: match[0],
      isHighlight: true
    });
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push({
      text: text.substring(lastIndex),
      isHighlight: false
    });
  }
  
  return parts;
};

const projects = [
  {
    id: 1,
    title: "MindSnap",
    description: "MindSnap is a next-generation social media web app focused on creativity, privacy, and meaningful engagement — free from intrusive algorithms and cluttered interfaces.",
    techDescription: "This project highlights my skills in React, TypeScript, Tailwind CSS, Node.js, Express.js, and MongoDB, featuring JWT authentication, story sharing, real-time messaging, and customizable user profiles.",
    videoUrl: "/assets/1019.mp4",
    isLocal: true,
  },
  {
    id: 2,
    title: "Significo",
    description: "Created a clone of the Significo website to showcase my skills in HTML, CSS, and JavaScript. This project demonstrates attention to design details, smooth animations, and a solid understanding of frontend development techniques for modern web applications.",
    techDescription: "This project showcases my skills in HTML, CSS, JavaScript, GSAP, and Locomotive JS, focusing on design precision, fluid motion, and advanced frontend development techniques.",
    videoUrl: "/assets/Significo.mp4", 
    isLocal: true,
  },
  {
    id: 3,
    title: "Prism Studio",
    description: "The Prism Effect is a personal project inspired by the popular brand, built to practice creating a modern and visually captivating website for trendy goggles and frames.",
    techDescription: "This project showcases my skills in HTML, CSS, JavaScript, and Locomotive JS to craft sleek, animated, and immersive web experiences.",
    videoUrl: "/assets/prism.mp4",
    isLocal: true,
  },
];

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen py-12 xl:py-20"
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-10">
        <h1 className="mb-16 text-4xl font-bold text-center xl:text-6xl xl:mb-24">
          <span style={{ color: 'var(--accent)' }}>{'{'}</span>
          <span style={{ color: 'var(--foreground)' }}>Latest Works</span>
          <span style={{ color: 'var(--accent)' }}>{'}'}</span>
        </h1>
      </div>
      <div className="container px-4 mx-auto sm:px-6 lg:px-10">
        <div className="flex flex-col gap-20 xl:gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${
                index % 2 === 0
                  ? "xl:flex-row" 
                  : "xl:flex-row-reverse"
              } gap-8 xl:gap-12 items-center`}
            >
              {/* Video Section */}
              <div className="w-full xl:w-1/2">
                <div 
                  className="relative w-full overflow-hidden rounded-lg shadow-2xl"
                  style={{ 
                    paddingBottom: "56.25%", // 16:9 aspect ratio
                    backgroundColor: "var(--secondary)"
                  }}
                >
                  {project.isLocal ? (
                    <video
                      src={project.videoUrl}
                      title={project.title}
                      className="absolute top-0 left-0 object-cover w-full h-full"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                    />
                  ) : (
                    <iframe
                      src={project.videoUrl}
                      title={project.title}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
              </div>

              {/* Text Section */}
              <div className="flex flex-col w-full gap-6 xl:w-1/2">
                <div 
                  className="inline-block px-6 py-3 border-2 rounded-lg w-fit"
                  style={{ 
                    borderColor: "var(--accent)",
                    backgroundColor: "transparent"
                  }}
                >
                  <h2 
                    className="text-3xl font-bold xl:text-4xl"
                    style={{ color: "var(--accent)" }}
                  >
                    {project.title}
                  </h2>
                </div>

                <div className="flex flex-col gap-4">
                  <p 
                    className="text-base leading-relaxed xl:text-lg"
                    style={{ color: "var(--foreground)", opacity: 0.9 }}
                  >
                    {project.description}
                  </p>
                  
                  <p className="text-base leading-relaxed xl:text-lg">
                    {highlightTechTerms(project.techDescription).map((part, i) => (
                      <span
                        key={i}
                        style={{
                          color: part.isHighlight ? "var(--accent)" : "var(--foreground)",
                          opacity: part.isHighlight ? 1 : 0.9,
                          fontWeight: part.isHighlight ? 600 : 400
                        }}
                      >
                        {part.text}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
