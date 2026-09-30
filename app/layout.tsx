import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spotlight HD Media | Development starter",
  description: "Public-safe development starter for a Melbourne creative studio.",
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}
