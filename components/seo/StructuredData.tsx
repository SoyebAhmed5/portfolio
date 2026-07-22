export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Soyeb Ahmed",

    url: "https://soyebahmed.vercel.app",

    image: "https://soyebahmed.vercel.app/og-image.png",

    jobTitle: "Full Stack Developer",

    sameAs: [
      "https://github.com/SoyebAhmed5",
      "https://www.linkedin.com/in/soyebahmed2005",
    ],

    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "AI",
      "Machine Learning",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}