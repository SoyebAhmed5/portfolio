import { IconType } from "react-icons";

export interface CodingPlatform {
  id: string;

  name: string;

  username: string;

  profileUrl: string;

  accentColor: string;

  icon: IconType;

  description: string;

  stats: {
    label: string;
    value: string;
  }[];

  buttonText: string;
}