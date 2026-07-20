import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <div className="mb-16 text-center">
        <span className="inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-400">
          Get In Touch
        </span>

        <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
          Let's Work Together
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
          I'm always open to discussing internships, full-time opportunities,
          freelance work, or collaborating on exciting projects.
        </p>
      </div>

     <div className="mx-auto max-w-6xl">
  <div className="grid gap-12 lg:grid-cols-2">
    <ContactInfo />
    <ContactForm />
  </div>
</div>
    </section>
  );
}