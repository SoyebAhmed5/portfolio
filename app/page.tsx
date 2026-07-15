import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Highlights from "@/components/sections/Highlights";
import GithubDashboard from "@/components/sections/GithubDashboard";


export default function Home() {
  return (
    <main className="bg-[#050816] text-white">

      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <About />

      <Skills />

      <Projects />

      <Experience />

      <Achievements />

      <Highlights />

     <GithubDashboard />
  

    </main>
  );
}