"use client";

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

// about data
const about = {
  title: "My Info",
  description: "Passionate web developer with expertise in creating dynamic and responsive web applications.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Citiz Shrestha",
    },
    {
      fieldName: "Phone",
      fieldValue: "9825404526",
    },
    {
      fieldName: "Experience",
      fieldValue: "1.5 Years",
    },
    {
      fieldName: "Email",
      fieldValue: "citizshresthaa@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "Nepali, English, Hindi",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ]
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
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

// education data
const education = {
  icon: "/assets/resume/cap.svg",
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

// skills data
const skills = {
  title: "My Skills",
  description: "Technologies and tools I work with to build amazing web experiences.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      color: "#E34F26"
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
      color: "#1572B6"
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      color: "#F7DF1E"
    },
    {
      icon: <FaReact />,
      name: "React.js",
      color: "#61DAFB"
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      color: "#000000",
      darkColor: "#FFFFFF"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      color: "#06B6D4"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      color: "#339933"
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
      color: "#000000",
      darkColor: "#FFFFFF"
    },
    {
      icon: <FaJava />,
      name: "Java",
      color: "#007396",
      darkColor: "#5382a1"
    },
    {
      icon: <SiFramer />,
      name: "Framer Motion",
      color: "#0055FF"
    },
  ],
};

const Resume = () => {
  const [isDark, setIsDark] = useState(false);

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex items-center justify-center min-h-screen py-12 xl:py-0"
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-10">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-8 xl:gap-[60px]"
        >
          <TabsList className="flex flex-row xl:flex-col w-full max-w-full xl:max-w-[380px] xl:h-fit mb-10 mx-auto xl:mx-0 gap-2 xl:gap-4 overflow-x-auto xl:self-start">
            <TabsTrigger value="experience" className="flex-1 xl:w-full whitespace-nowrap">Experience</TabsTrigger>
            <TabsTrigger value="education" className="flex-1 xl:w-full whitespace-nowrap">Education</TabsTrigger>
            <TabsTrigger value="skills" className="flex-1 xl:w-full whitespace-nowrap">Skills</TabsTrigger>
            <TabsTrigger value="about" className="flex-1 xl:w-full whitespace-nowrap">My Info</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold xl:text-4xl">
                  <span style={{ color: 'var(--accent)' }}>{experience.title}</span>
                </h3>
                <p className="max-w-[600px] mx-auto xl:mx-0" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                  {experience.description}
                </p>
                <div className="h-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          style={{ backgroundColor: 'var(--secondary)' }}
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left" style={{ color: 'var(--foreground)' }}>
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p style={{ color: 'var(--foreground)', opacity: 0.8 }}>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* education */}
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
                    {education.items.map((item, index) => {
                      return (
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
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
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
                  {skills.skillList.map((skill, index) => {
                    return (
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
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-3xl font-bold xl:text-4xl">
                  <span style={{ color: 'var(--accent)' }}>{about.title}</span>
                </h3>
                <p className="max-w-[600px] mx-auto xl:mx-0" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center gap-4 xl:justify-start"
                      >
                        <span className="text-accent">{item.fieldName}</span>
                        <span className="text-base" style={{ color: 'var(--foreground)' }}>{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
