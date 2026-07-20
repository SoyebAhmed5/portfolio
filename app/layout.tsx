import "./globals.css";
import { Toaster } from "sonner";
// import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Soyeb Ahmed",
  description: "Full Stack Developer • AI Enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
     <body>
  {children}
  <Toaster
  position="top-right"
  richColors
  theme="dark"
/>
</body>
    </html>
  );
}