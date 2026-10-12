import Link from "next/link";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function FooterLinks() {
  return (
    <div>
      <h3 className="mb-5 font-semibold text-[var(--foreground)]">
        Quick Links
      </h3>

      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-[var(--muted)] transition hover:text-violet-600 dark:hover:text-violet-300"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}