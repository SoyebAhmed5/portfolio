"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import AchievementCard from "@/components/cards/AchievementCard";
import { achievements } from "@/data/achievements";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-32 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          title="Achievements"
          subtitle="Milestones that reflect my growth in software development and competitive programming."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {achievements.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
            />
          ))}

        </div>

      </div>
    </section>
  );
}