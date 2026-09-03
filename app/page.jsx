"use client";

import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FiDownload } from "react-icons/fi";
import { Mail, Loader2 } from "lucide-react";
import Photo from "@/components/Photo";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiFramer } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import Footer from "@/components/Footer";

// Helper function to highlight tech terms
const highlightTechTerms = (text) => {
  const techTerms = [
    'React', 'TypeScript', 'GSAP', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB',
    'HTML', 'CSS', 'JavaScript', 'Locomotive JS', 'Supabase', 'PostgreSQL',
    'JWT', 'Next.js', 'Vue.js', 'Angular', 'Python', 'Django', 'Flask',
    'Java', 'Spring Boot', 'MySQL', 'Redis', 'Docker', 'Kubernetes',
    'AWS', 'Azure', 'GCP', 'GraphQL', 'REST API', 'WebSocket'
  ];

  const sortedTerms = [...techTerms].sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`\\b(${sortedTerms.join('|')})\\b`, 'g');

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({
        text: text.substring(lastIndex, match.index),
        isHighlight: false
      });
    }

    parts.push({
      text: match[0],
      isHighlight: true
    });

    lastIndex = match.index + match[0].length;
  }

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
    const loadingTimeout = setTimeout(() => {
      if (isLoading) {
        setHasError(true);
        setIsLoading(false);
      }
    }, 5000);

    return () => clearTimeout(loadingTimeout);
  }, [isLoading]);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  const isProduction = typeof window !== 'undefined' && window.location.hostname !== 'localhost';

  if (isProduction && videoUrl.startsWith('/assets/') && videoUrl.endsWith('.mp4')) {
    return (
      <div
        className="relative w-full overflow-hidden rounded-lg shadow-2xl"
        style={{
          paddingBottom: "56.25%",
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
        paddingBottom: "56.25%",
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
            onCanPlay={handleLoadedData}
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

// Resume data
const about = {
  title: "My Info",
  description: "Passionate web developer with expertise in creating dynamic and responsive web applications.",
  info: [
    { fieldName: "Name", fieldValue: "Citiz Shrestha" },
    { fieldName: "Phone", fieldValue: "9825404526" },
    { fieldName: "Experience", fieldValue: "2 Years" },
    { fieldName: "Email", fieldValue: "citizshresthaa@gmail.com" },
    { fieldName: "Languages", fieldValue: "Nepali, English, Hindi" },
    { fieldName: "Freelance", fieldValue: "Available" },
  ]
};

const experience = {
  title: "My Experience",
  description: "Building responsive and animated web experiences with modern technologies.",
  items: [
    {
      company: "Freelance",
      position: "Frontend Web Developer",
      duration: "2023 - Present",
    },
    {
      company: "Personal Projects",
      position: "Full-Stack Developer",
      duration: "2022 - Present",
    },
  ],
};

const education = {
  title: "My Education",
  description: "Academic journey and continuous learning in technology.",
  items: [
    {
      institution: "Oxford College of Engineering and Management",
      degree: "Bachelor in Computer Application (BCA)",
      duration: "2023 - Present",
    },
    {
      institution: "Aroma College",
      degree: "Higher Secondary Education - Science",
      duration: "2021 - 2022",
    },
    {
      institution: "Continental English Boarding School",
      degree: "Secondary Education (SEE)",
      duration: "2020",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "Technologies and tools I work with to build amazing web experiences.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
    { icon: <FaCss3 />, name: "CSS3", color: "#1572B6" },
    { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <FaReact />, name: "React.js", color: "#61DAFB" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "#000000", darkColor: "#FFFFFF" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#06B6D4" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
    { icon: <SiExpress />, name: "Express.js", color: "#000000", darkColor: "#FFFFFF" },
    { icon: <FaJava />, name: "Java", color: "#007396", darkColor: "#5382a1" },
    { icon: <SiFramer />, name: "Framer Motion", color: "#0055FF" },
  ],
};

const Home = () => {
  const [isDark, setIsDark] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (submitStatus?.type === "success") {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus({ type: "error", message: data.error || "Failed to send message. Please try again." });
      }
    } catch (error) {
      setSubmitStatus({ type: "error", message: "An error occurred. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="h-full">
        <div className="container h-full mx-auto">
          <div className="flex flex-col items-center justify-between px-10 xl:flex-row xl:pt-8 xl:pb-24">
            <div className="order-2 text-center xl:text-left xl:order-none">
              <span className="text-xl text-text-primary-light dark:text-text-primary">Full-Stack Developer</span>
              <h3 className="mb-6 h1 text-text-primary-light dark:text-text-primary">
                Hello I'm <br/> <span className="text-accent">Citiz Shrestha</span>
              </h3>
              <p className="max-w-[700px] mb-9 text-text-secondary-light dark:text-text-secondary">
                I love bringing ideas to life through beautiful, seamless digital experiences built with the latest web technologies.
              </p>

              <div className="flex flex-col items-center gap-8 xl:flex-row">
                <Link href="/assets/CV/CV.pdf" download="Citiz_Shrestha_Resume.pdf" target="_blank">
                  <Button variant="outline" size="lg" className="flex items-center gap-2 uppercase transition-all duration-300 border-accent text-accent hover:bg-accent hover:text-primary">
                    <span>Download CV</span>
                    <FiDownload className="text-xl"/>
                  </Button>
                </Link>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-black dark:border-gray-600 rounded-full flex justify-center items-center text-base hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 mb-8 xl:order-none xl:mb-0">
              <Photo/>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="h-full py-12 xl:py-24">
        <div className="container h-full mx-auto">
          <div className="flex flex-col items-center justify-between gap-12 px-10 xl:flex-row xl:gap-20">
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

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="relative flex-shrink-0 order-1 xl:order-none"
            >
              <div className="relative w-[280px] h-[280px] xl:w-[400px] xl:h-[400px]">
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

      {/* Resume Section */}
      <section id="resume" className="flex items-center justify-center min-h-screen py-12 xl:py-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
          }}
          className="w-full"
        >
          <div className="container px-4 mx-auto sm:px-6 lg:px-10 max-w-7xl">
            <Tabs
              defaultValue="experience"
              className="flex flex-col xl:flex-row gap-8 xl:gap-[60px]"
            >
              <TabsList className="flex flex-row xl:flex-col w-full max-w-full xl:max-w-[380px] xl:h-fit mb-6 sm:mb-10 mx-auto xl:mx-0 gap-2 xl:gap-4 overflow-x-auto xl:self-start">
                <TabsTrigger value="experience" className="flex-1 xl:w-full whitespace-nowrap text-xs sm:text-sm md:text-base px-2 sm:px-4">Experience</TabsTrigger>
                <TabsTrigger value="education" className="flex-1 xl:w-full whitespace-nowrap text-xs sm:text-sm md:text-base px-2 sm:px-4">Education</TabsTrigger>
                <TabsTrigger value="skills" className="flex-1 xl:w-full whitespace-nowrap text-xs sm:text-sm md:text-base px-2 sm:px-4">Skills</TabsTrigger>
                <TabsTrigger value="about" className="flex-1 xl:w-full whitespace-nowrap text-xs sm:text-sm md:text-base px-2 sm:px-4">My Info</TabsTrigger>
              </TabsList>

              <div className="min-h-[70vh] w-full overflow-x-hidden">
                <TabsContent value="experience" className="w-full">
                  <div className="flex flex-col gap-[20px] sm:gap-[30px] text-center xl:text-left">
                    <h3 className="text-2xl sm:text-3xl font-bold xl:text-4xl px-2">
                      <span style={{ color: 'var(--accent)' }}>{experience.title}</span>
                    </h3>
                    <p className="max-w-[600px] mx-auto xl:mx-0 text-sm sm:text-base px-2" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                      {experience.description}
                    </p>
                    <ScrollArea className="h-[600px] xl:h-auto">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {experience.items.map((item, index) => (
                          <li
                            key={index}
                            className="min-h-[184px] py-6 px-6 sm:px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2"
                            style={{ backgroundColor: 'var(--secondary)' }}
                          >
                            <span className="text-accent text-sm sm:text-base">{item.duration}</span>
                            <h3 className="text-lg sm:text-xl max-w-full min-h-[60px] text-center lg:text-left leading-tight" style={{ color: 'var(--foreground)' }}>
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-sm sm:text-base" style={{ color: 'var(--foreground)', opacity: 0.8 }}>{item.company}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>

                <TabsContent value="education" className="w-full">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-3xl font-bold xl:text-4xl">
                      <span style={{ color: 'var(--accent)' }}>{education.title}</span>
                    </h3>
                    <p className="max-w-[600px] mx-auto xl:mx-0" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                      {education.description}
                    </p>
                    <ScrollArea className="h-[600px] xl:h-auto">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item, index) => (
                          <li
                            key={index}
                            className="h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                            style={{ backgroundColor: 'var(--secondary)' }}
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left" style={{ color: 'var(--foreground)' }}>
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.8 }}>{item.institution}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>

                <TabsContent value="skills" className="w-full h-full">
                  <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                      <h3 className="text-3xl font-bold xl:text-4xl">
                        <span style={{ color: 'var(--accent)' }}>{skills.title}</span>
                      </h3>
                      <p className="max-w-[600px] mx-auto xl:mx-0" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                        {skills.description}
                      </p>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                      {skills.skillList.map((skill, index) => (
                        <li key={index}>
                          <div
                            className="w-full h-[150px] rounded-xl flex justify-center items-center group"
                            style={{ backgroundColor: 'var(--secondary)' }}
                          >
                            <div
                              className="text-6xl transition-all duration-300 group-hover:scale-110"
                              style={{ color: isDark ? (skill.darkColor || skill.color) : skill.color }}
                            >
                              {skill.icon}
                            </div>
                          </div>
                          <p className="mt-2 text-center" style={{ color: 'var(--foreground)' }}>{skill.name}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="about" className="w-full text-center xl:text-left">
                  <div className="flex flex-col gap-[30px]">
                    <h3 className="text-3xl font-bold xl:text-4xl">
                      <span style={{ color: 'var(--accent)' }}>{about.title}</span>
                    </h3>
                    <p className="max-w-[600px] mx-auto xl:mx-0" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                      {about.description}
                    </p>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                      {about.info.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-center gap-4 xl:justify-start"
                        >
                          <span className="text-accent">{item.fieldName}</span>
                          <span className="text-base" style={{ color: 'var(--foreground)' }}>{item.fieldValue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </motion.div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen py-12 xl:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
          }}
          className="w-full"
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-[calc(100vh-80px)] flex flex-col">
        <div className="container mx-auto px-4 py-4 flex-1 flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 flex-1">
            <div className="flex flex-col justify-center space-y-3 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-semibold text-accent">Available for freelance opportunities</h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Have an exciting project you need help with?
              </p>
              <p className="text-base lg:text-lg text-foreground/80">
                Send me an email or contact me via instant message!
              </p>
              <div className="flex items-center gap-3 pt-1 justify-center lg:justify-start">
                <Mail className="w-6 h-6 text-accent" />
                <a
                  href="mailto:citizshresthaa@gmail.com"
                  className="text-xl text-accent hover:underline transition-all break-all"
                >
                  citizshresthaa@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-primary/5 dark:bg-primary/10 p-4 lg:p-5 rounded-lg border border-border flex flex-col justify-center">
              <h3 className="text-xl lg:text-3xl font-semibold mb-4">Get in Touch</h3>

              {submitStatus && (
                <div className={`p-2 rounded-md mb-3 text-sm ${
                  submitStatus.type === "success"
                    ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border border-green-300 dark:border-green-700"
                    : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border border-red-300 dark:border-red-700"
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3 flex flex-col">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full ${errors.name ? "border-red-500" : ""}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full ${errors.subject ? "border-red-500" : ""}`}
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full resize-none min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-1/2 bg-accent hover:bg-accent/90 text-black font-semibold disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default Home
