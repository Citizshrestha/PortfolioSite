"use client";

import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "about me", path: "/about" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contacts" },
];

const MobileNav = () => {
    const pathname = usePathname();

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
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname && "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all text-text-primary-light dark:text-text-primary`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
