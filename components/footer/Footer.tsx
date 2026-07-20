import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";
import BackToTop from "./BackToTop";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <h2 className="text-4xl font-black">
              Soyeb<span className="text-violet-500">.</span>
            </h2>

            <p className="mt-6 max-w-md leading-8 text-zinc-400">
              Building scalable web applications, AI-powered
              solutions, and modern digital experiences with
              clean design and performance in mind.
            </p>
          </div>

          <FooterLinks />

          <div className="flex flex-col justify-between">
            <FooterSocials />

            <div className="mt-10 self-start lg:self-end">
              <BackToTop />
            </div>
          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">

          <p>
            © 2026 Soyeb Ahmed. All rights reserved.
          </p>

          <p>
            Built with Next.js • React • Three.js • Tailwind CSS
          </p>

        </div>
      </div>
    </footer>
  );
}