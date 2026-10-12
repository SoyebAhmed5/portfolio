"use client";

import { useEffect, useState } from "react";

const sections = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "certificates",
  "journey",
  "achievements",
  "contact",
];

export default function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const activationLine = window.innerHeight * 0.36;
        const existing = sections
          .map((id) => document.getElementById(id))
          .filter((el): el is HTMLElement => Boolean(el))
          .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
        let current = existing[0]?.id ?? "home";
        for (const el of existing) {
          if (el.getBoundingClientRect().top <= activationLine) current = el.id;
          else break;
        }
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
          current = existing[existing.length - 1]?.id ?? current;
        }
        setActive(current);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return active;
}