"use client";

import GlassCard from "@/components/ui/GlassCard";
import LanguageBar from "./LanguageBar";

import { GithubLanguage } from "@/types/github";

interface Props {
  languages: GithubLanguage[];
}

export default function GithubLanguages({
  languages,
}: Props) {
  return (
    <GlassCard className="mt-12 p-8">

      <h2 className="mb-8 text-3xl font-bold">
        Language Analytics
      </h2>

      <div className="space-y-6">

        {languages.map((language) => (
          <LanguageBar
            key={language.name}
            language={language}
          />
        ))}

      </div>

    </GlassCard>
  );
}