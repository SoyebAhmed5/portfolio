"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ResumeButton from "./ResumeButton";
import ThemeToggle from "./ThemeToggle";
import useScrolled from "@/hooks/useScrolled";
import useActiveSection from "@/hooks/useActiveSection";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const active = useActiveSection();

  return (
    <motion.nav initial={{ y: -70 }} animate={{ y: 0 }} transition={{ duration: 0.55 }} aria-label="Main navigation" className="fixed inset-x-0 top-0 z-50 px-3 sm:px-5">
      <motion.div
        animate={{ y: scrolled ? 0 : 4 }}
        transition={{ duration: 0.2 }}
        className={`mx-auto mt-3 flex max-w-7xl items-center justify-between gap-3 rounded-2xl border px-4 py-3 backdrop-blur-2xl transition-colors sm:px-6 ${scrolled ? "border-[var(--border)] bg-[var(--nav-surface)] shadow-lg shadow-black/5" : "border-[var(--border)] bg-[var(--nav-surface)]/80"}`}
      >
        <Logo />
        <NavLinks />
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <div className="hidden xl:block"><ResumeButton /></div>
          <button type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition hover:border-violet-400 hover:text-violet-500 2xl:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-navigation" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }} className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--nav-surface)] p-2 text-[var(--foreground)] shadow-xl backdrop-blur-2xl 2xl:hidden">
            {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={active === link.href.slice(1) ? "location" : undefined} className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${active === link.href.slice(1) ? "bg-violet-500/10 text-violet-700 dark:text-violet-300" : "text-[var(--foreground)] hover:bg-violet-500/10 hover:text-violet-600 dark:hover:text-violet-300"}`}>{link.name}</a>)}
            <div className="p-2"><ResumeButton /></div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
