"use client";

import SectionHeading from "@/components/ui/SectionHeading";

import AchievementCard from "./AchievementCard";

import { achievements } from "@/data/achievements";

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="py-32 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          title="Achievements"
          subtitle="Milestones that reflect my technical growth and professional journey."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
}