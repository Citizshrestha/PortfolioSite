// components/Nav.tsx
"use client";

import { useState, useEffect } from "react";

const links = [
  { name: "home", path: "#home" },
  { name: "about me", path: "#about" },
  { name: "resume", path: "#resume" },
  { name: "work", path: "#work" },
  { name: "contact", path: "#contact" },
];

const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => link.path.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, path) => {
    e.preventDefault();
    const targetId = path.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <a
          href={link.path}
          key={index}
          onClick={(e) => handleClick(e, link.path)}
          className="capitalize font-medium transition-colors duration-300 border-b-2 cursor-pointer"
          style={{
            color: activeSection === link.path.slice(1) ? 'var(--accent)' : 'var(--foreground)',
            borderColor: activeSection === link.path.slice(1) ? 'var(--accent)' : 'transparent'
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
          onMouseLeave={(e) => e.target.style.color = activeSection === link.path.slice(1) ? 'var(--accent)' : 'var(--foreground)'}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default Nav;