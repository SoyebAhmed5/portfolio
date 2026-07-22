import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Soyeb Ahmed Portfolio",
    short_name: "Soyeb",
    description:
      "Portfolio of Soyeb Ahmed - Full Stack Developer",

    start_url: "/",

    display: "standalone",

    background_color: "#0f172a",

    theme_color: "#0f172a",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}