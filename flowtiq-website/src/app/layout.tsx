import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FlowTIQ - Geef medewerkers hun tijd én aandacht terug",
  description: "Verminder herhalende handmatige invoer, voorkom fouten en laat systemen eenvoudig samenwerken. FlowTIQ levert de intelligente laag over je webapplicaties die het repeterende werk automatiseert.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${inter.variable} ${jakarta.variable} font-sans bg-background text-primary antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
