import Image from "next/image";

interface Props {
  user: any;
}

export default function GithubProfile({
  user,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <Image
        src={user.avatar_url}
        alt={user.name}
        width={120}
        height={120}
        className="rounded-full"
      />

      <h2 className="mt-5 text-3xl font-bold">
        {user.name}
      </h2>

      <p className="mt-3 text-zinc-400">
        {user.bio}
      </p>

    </div>
  );
}