import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laniakea | Developer Teams for Digital Projects",
  description:
    "Η Laniakea, μέλος του Vector Dev ecosystem, προσφέρει developers και εξειδικευμένες ομάδες για την υλοποίηση ψηφιακών projects.",
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0d12"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
