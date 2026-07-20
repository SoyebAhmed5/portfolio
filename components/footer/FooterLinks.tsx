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
      <h3 className="mb-5 font-semibold text-white">
        Quick Links
      </h3>

      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-zinc-400 transition hover:text-violet-400"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}