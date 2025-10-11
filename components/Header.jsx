// components/Header.tsx
import React from 'react'
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from './MobileNav';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 px-4 py-4 transition-colors duration-300 border-b sm:px-6 md:px-10 xl:py-8" style={{backgroundColor: 'var(--background)', borderColor: 'var(--border)'}}>
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold xl:text-4xl" style={{color: 'var(--foreground)'}}>
           Citiz<span style={{color: 'var(--accent)'}}>.</span>dev
          </h1>
        </Link>

        {/* Desktop Navigation & Hire Me Button */}
        <div className="items-center hidden gap-8 xl:flex">
          <Nav />
          <Link href="/contacts">
            <Button className="font-medium text-primary transition-opacity hover:opacity-90 bg-accent" >
              Hire me
            </Button>
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-4 xl:hidden">
          <ThemeToggle />
          <MobileNav/>
        </div>
      </div>
    </header>
  )
}

export default Header