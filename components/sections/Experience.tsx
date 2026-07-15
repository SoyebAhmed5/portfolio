"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ExperienceCard from "@/components/cards/ExperienceCard";
import { experiences } from "@/data/experience";

export default function Experience() {
  const internships = experiences.filter(
    (item) => item.type === "Internship"
  );

  const leadership = experiences.filter(
    (item) => item.type === "Leadership"
  );

  return (
    <section
      id="experience"
      className="py-32 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          title="Experience & Leadership"
          subtitle="Professional experience, internships, and leadership roles that have shaped my software engineering journey."
        />

        <h3 className="mb-8 text-3xl font-bold">
          💼 Experience
        </h3>

        <div className="grid gap-8 lg:grid-cols-2">

          {internships.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
            />
          ))}

        </div>

        <h3 className="mt-20 mb-8 text-3xl font-bold">
          👨‍💼 Leadership
        </h3>

        <div className="grid gap-8 lg:grid-cols-2">

          {leadership.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
            />
          ))}

        </div>

      </div>
    </section>
  );
}