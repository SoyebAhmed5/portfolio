"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 z-50 w-full"
    >
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl">

        <Link
          href="/"
          className="text-2xl font-bold tracking-wider"
        >
          Soyeb.
        </Link>

        <div className="hidden gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition hover:text-violet-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          className="hidden rounded-full bg-violet-600 px-5 py-2 transition hover:bg-violet-500 md:block"
        >
          Resume
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="mx-4 mt-3 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-6 py-4 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}