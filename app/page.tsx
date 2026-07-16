import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import AchievementsSection from "@/components/achievements/AchievementsSection";
import Highlights from "@/components/sections/Highlights";
import GithubDashboard from "@/components/sections/GithubDashboard";
import CodingDashboard from "@/components/coding/CodingDashboard";
import AchievementTimeline from "@/components/achievements/AchievementTimeline";


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


      <Highlights />

     <GithubDashboard />

     <CodingDashboard />

     <AchievementsSection />

     <AchievementTimeline />
  

    </main>
  );
}