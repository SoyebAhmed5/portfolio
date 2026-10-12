import "./globals.css";
import { Toaster } from "sonner";
import StructuredData from "@/components/seo/StructuredData";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import ThemeProvider from "@/components/theme-provider";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://soyebahmed.vercel.app"),
  title: { default: "Soyeb Ahmed | Full Stack Developer", template: "%s | Soyeb Ahmed" },
  description: "Portfolio of Soyeb Ahmed — Full Stack Developer specializing in React, Next.js, MERN Stack, AI-powered applications, and modern web development.",
  applicationName: "Soyeb Ahmed Portfolio",
  keywords: ["Soyeb Ahmed", "Full Stack Developer", "React Developer", "Next.js Developer", "MERN Stack", "JavaScript", "TypeScript", "Node.js", "AI Developer", "Machine Learning", "Software Engineer"],
  authors: [{ name: "Soyeb Ahmed", url: "https://soyebahmed.vercel.app" }],
  creator: "Soyeb Ahmed",
  publisher: "Soyeb Ahmed",
  category: "Technology",
  alternates: { canonical: "https://soyebahmed.vercel.app" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", locale: "en_US", url: "https://soyebahmed.vercel.app", title: "Soyeb Ahmed | Full Stack Developer", description: "Explore my portfolio featuring Full Stack Development, AI projects, MERN Stack applications, and modern web experiences.", siteName: "Soyeb Ahmed Portfolio", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Soyeb Ahmed Portfolio" }] },
  twitter: { card: "summary_large_image", title: "Soyeb Ahmed | Full Stack Developer", description: "Portfolio of Soyeb Ahmed — Full Stack Developer & AI Enthusiast.", images: ["/og-image.png"] },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico", apple: "/favicon.ico" },
};

export const viewport: Viewport = { themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f8fafc" }, { media: "(prefers-color-scheme: dark)", color: "#050816" }] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <StructuredData />
          {children}
          <Toaster position="top-right" richColors theme="system" />
          <Analytics />
          <SpeedInsights />
          {process.env.NEXT_PUBLIC_GA_ID ? <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} /> : null}
        </ThemeProvider>
      </body>
    </html>
  );
}
