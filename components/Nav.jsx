// components/Nav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "about me", path: "/about" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contacts" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className="capitalize font-medium transition-colors duration-300 border-b-2"
          style={{
            color: link.path === pathname ? 'var(--accent)' : 'var(--foreground)',
            borderColor: link.path === pathname ? 'var(--accent)' : 'transparent'
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
          onMouseLeave={(e) => e.target.style.color = link.path === pathname ? 'var(--accent)' : 'var(--foreground)'}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;