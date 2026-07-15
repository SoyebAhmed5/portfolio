import Image from "next/image";
import { GithubUser } from "@/types/github";
import { MapPin, Building2, Link2 } from "lucide-react";

interface Props {
  user: GithubUser;
}

export default function GithubProfileCard({
  user,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <div className="flex flex-col items-center lg:flex-row lg:items-start gap-8">

        <Image
          src={user.avatar_url}
          alt={user.name}
          width={140}
          height={140}
          className="rounded-full border-4 border-violet-500"
        />

        <div className="flex-1">

          <h2 className="text-4xl font-bold">
            {user.name}
          </h2>

          <p className="text-violet-400 mt-1">
            @{user.login}
          </p>

          <p className="mt-6 leading-8 text-zinc-400">
            {user.bio}
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-zinc-300">

            {user.location && (
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                {user.location}
              </div>
            )}

            {user.company && (
              <div className="flex items-center gap-2">
                <Building2 size={18} />
                {user.company}
              </div>
            )}

            {user.blog && (
              <a
                href={user.blog}
                target="_blank"
                className="flex items-center gap-2 hover:text-violet-400"
              >
                <Link2 size={18} />
                Website
              </a>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}