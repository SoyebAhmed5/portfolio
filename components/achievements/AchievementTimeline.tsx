"use client";
import SectionHeading from "@/components/ui/SectionHeading";

import TimelineItem from "./TimelineItem";

import { timeline } from "@/data/timeline";

export default function AchievementTimeline() {
  return (
    <section  id="journey" className="py-32 px-6">
      <div className="mx-auto max-w-5xl">

        <SectionHeading
          title="Journey Timeline"
          subtitle="Key milestones throughout my learning and professional growth."
        />

        <div className="relative mt-20">

          <div className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-violet-500 via-cyan-500 to-orange-500" />

          {timeline.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
}