import { IconType } from "react-icons";

interface Props {
  title: string;

  username: string;

  color: string;

  Icon: IconType;
}

export default function PlatformHeader({
  title,
  username,
  color,
  Icon,
}: Props) {
  return (
    <div className="mb-6 flex items-center gap-4">

      <Icon
        size={38}
        color={color}
      />

      <div>

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="text-zinc-400">
          @{username}
        </p>

      </div>

    </div>
  );
}