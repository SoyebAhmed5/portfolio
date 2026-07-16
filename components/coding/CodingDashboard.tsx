"use client";
import SectionHeading from "@/components/ui/SectionHeading";

import DeveloperSnapshot from "./DeveloperSnapshot";
import CodolioHero from "./CodolioHero";
import PlatformGrid from "./PlatformGrid";

export default function CodingDashboard() {
  return (
    <section
      id="competitive-programming"
      className="py-32 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          title="Competitive Programming"
          subtitle="A unified view of my coding journey across multiple platforms."
        />

        <DeveloperSnapshot />

        <CodolioHero />

        <PlatformGrid />

      </div>
    </section>
  );
}