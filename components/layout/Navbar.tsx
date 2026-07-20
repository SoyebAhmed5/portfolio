"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ResumeButton from "./ResumeButton";
import useScrolled from "@/hooks/useScrolled";

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
  const scrolled = useScrolled();

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <motion.div
  animate={{
    scale: scrolled ? 0.97 : 1,
    y: scrolled ? -2 : 0,
  }}
  transition={{
    duration: 0.25,
  }}
  className={`
    mx-auto
    mt-4
    flex
    max-w-7xl
    items-center
    justify-between
    rounded-full
    border
    px-8
    transition-all
    backdrop-blur-2xl

    ${
      scrolled
        ? "border-violet-500/20 bg-black/60 shadow-[0_10px_40px_rgba(0,0,0,.35)]"
        : "border-white/10 bg-white/5"
    }
  `}
>

        <Logo />

       <NavLinks />

       <div className="hidden md:block">
  <ResumeButton />
</div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </motion.div>

     <AnimatePresence>

{open && (
        <motion.div
  initial={{
    opacity: 0,
    y: -10,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  exit={{
    opacity: 0,
    y: -10,
  }}
  transition={{
    duration: 0.2,
  }}
  className="
    mx-4
    mt-3
    rounded-2xl
    border
    border-white/10
    bg-black/80
    backdrop-blur-xl
    md:hidden
  "
>
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
        </motion.div>
      )}
      </AnimatePresence>
    </motion.nav>
  );
}