"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
    imageUrl: "/assets/mindsnapPic.png",
    isLocal: true,
  },
  {
    id: 2,
    title: "Significo",
    description: "Created a clone of the Significo website to showcase my skills in HTML, CSS, and JavaScript. This project demonstrates attention to design details, smooth animations, and a solid understanding of frontend development techniques for modern web applications.",
    techDescription: "This project showcases my skills in HTML, CSS, JavaScript, GSAP, and Locomotive JS, focusing on design precision, fluid motion, and advanced frontend development techniques.",
    videoUrl: "/assets/Significo.mp4",
    imageUrl: "/assets/significo.png",
    isLocal: true,
  },
  {
    id: 3,
    title: "Whisper Wave",
    description: "WhisperWave is a real-time chat application designed to deliver a seamless, modern, and responsive messaging experience. This application focuses on simplicity, speed, and clean UI to make conversations smooth and engaging.",
    techDescription: "This project demonstrates my skills in React, Tailwind CSS, and Supabase powered by PostgreSQL, showcasing the ability to build fast, reliable, and user-friendly real-time communication platforms.",
    videoUrl: "/assets/whisperWave.mp4",
    imageUrl: "/assets/WhisperWave.jpg",
    isLocal: false,
    showImageOnly: true,
  },
  {
    id: 4,
    title: "Prism Studio",
    description: "The Prism Effect is a personal project inspired by the popular brand, built to practice creating a modern and visually captivating website for trendy goggles and frames.",
    techDescription: "This project showcases my skills in HTML, CSS, JavaScript, and Locomotive JS to craft sleek, animated, and immersive web experiences.",
    videoUrl: "/assets/prism.mp4",
    imageUrl: "/assets/prism.png",
    isLocal: true,
  },
  {
    id: 5,
    title: "EMS",
    description: "EMS is a modern Employee Management System web app with role-based authentication, designed to streamline admin and employee workflows while ensuring secure access and smooth interactions.",
    techDescription: "This project highlights my skills in React, Supabase, and Framer Motion, featuring role-based authentication, dynamic admin/employee dashboards, real-time data updates, and interactive UI animations.",
    videoUrl: "/assets/none.mp4",
    imageUrl: "/assets/EMS.jpg",
    isLocal: false,
    showImageOnly: true,
  },
];

// Video component with fallback to image
const VideoWithFallback = ({ videoUrl, imageUrl, title }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to prevent infinite loading
    const loadingTimeout = setTimeout(() => {
      if (isLoading) {
        console.log('Video loading timeout, showing fallback image');
        setHasError(true);
        setIsLoading(false);
      }
    }, 5000); // 5 second timeout

    return () => clearTimeout(loadingTimeout);
  }, [isLoading]);

  const handleError = () => {
    console.log('Video failed to load, showing fallback image');
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
  };

  // Check if we're in production (no local video files available)
  const isProduction = typeof window !== 'undefined' && window.location.hostname !== 'localhost';

  // If in production and video is a local file, show image immediately
  if (isProduction && videoUrl.startsWith('/assets/') && videoUrl.endsWith('.mp4')) {
    return (
      <div 
        className="relative w-full overflow-hidden rounded-lg shadow-2xl"
        style={{ 
          paddingBottom: "56.25%", // 16:9 aspect ratio
          backgroundColor: "var(--secondary)"
        }}
      >
        <img
          src={imageUrl}
          alt={title}
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
      </div>
    );
  }

  return (
    <div 
      className="relative w-full overflow-hidden rounded-lg shadow-2xl"
      style={{ 
        paddingBottom: "56.25%", // 16:9 aspect ratio
        backgroundColor: "var(--secondary)"
      }}
    >
      {!hasError ? (
        <>
          <video
            src={videoUrl}
            title={title}
            className="absolute top-0 left-0 object-cover w-full h-full"
            autoPlay
            loop
            muted
            playsInline
            controls
            onError={handleError}
            onLoadedData={handleLoadedData}
            onCanPlay={handleCanPlay}
            onPlaying={handleCanPlay}
            onStalled={handleError}
            onAbort={handleError}
          />
          {isLoading && (
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-opacity-50" style={{ backgroundColor: 'var(--secondary)' }}>
              <div className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin" style={{ borderColor: 'var(--accent)', borderTopColor: 'transparent' }}></div>
            </div>
          )}
        </>
      ) : (
        <img
          src={imageUrl}
          alt={title}
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
      )}
    </div>
  );
};

const Work = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

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
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${
                index % 2 === 0
                  ? "xl:flex-row" 
                  : "xl:flex-row-reverse"
              } gap-8 xl:gap-12 items-center`}
            >
              {/* Video/Image Section */}
              <div className="w-full xl:w-1/2">
                {project.showImageOnly ? (
                  <div 
                    className="relative w-full overflow-hidden rounded-lg shadow-2xl"
                    style={{ 
                      paddingBottom: "56.25%",
                      backgroundColor: "var(--secondary)"
                    }}
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="absolute top-0 left-0 object-cover w-full h-full"
                    />
                  </div>
                ) : project.isLocal ? (
                  <VideoWithFallback 
                    videoUrl={project.videoUrl}
                    imageUrl={project.imageUrl}
                    title={project.title}
                  />
                ) : (
                  <div 
                    className="relative w-full overflow-hidden rounded-lg shadow-2xl"
                    style={{ 
                      paddingBottom: "56.25%",
                      backgroundColor: "var(--secondary)"
                    }}
                  >
                    <iframe
                      src={project.videoUrl}
                      title={project.title}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
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
