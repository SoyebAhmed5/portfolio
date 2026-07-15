"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import HighlightCard from "@/components/cards/HighlightCard";
import { highlights } from "@/data/highlights";

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="py-32 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          title="Highlights"
          subtitle="Certifications, recognitions, and milestones that reflect my commitment to continuous learning."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {highlights.map((highlight) => (
            <HighlightCard
              key={highlight.id}
              highlight={highlight}
            />
          ))}

        </div>

      </div>
    </section>
  );
}