"use client";

import {Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose} from "@/components/ui/sheet";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci";
import { useState, useEffect } from "react";

const links = [
  { name: "home", path: "#home" },
  { name: "about me", path: "#about" },
  { name: "resume", path: "#resume" },
  { name: "work", path: "#work" },
  { name: "contact", path: "#contact" },
];

const MobileNav = () => {
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

  const handleClick = (path) => {
    const targetId = path.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Sheet>
      <SheetTrigger className = "flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col transition-colors duration-300 bg-background text-foreground dark:bg-primary dark:text-foreground">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        {/* Logo */}
        <div className="mt-32 mb-40 text-2xl text-center">
          <Link href="/">
            <h1 className="text-4xl font-semibold text-text-primary-light dark:text-text-primary">
              Citiz<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* Nav */}
        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link, index) => {
            return (
              <SheetClose asChild key={index}>
                <a
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.path);
                  }}
                  className={`${
                    activeSection === link.path.slice(1) && "text-accent border-b-2 border-accent"
                  } text-xl capitalize hover:text-accent transition-all text-text-primary-light dark:text-text-primary cursor-pointer`}
                >
                  {link.name}
                </a>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
