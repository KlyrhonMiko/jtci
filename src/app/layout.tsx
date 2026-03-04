import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JTCICARPET Gallery Corporation | Premium Carpet & Interior Solutions",
  description:
    "JTCICARPET Gallery Corporation — Your trusted partner for high-quality broadloom carpets, modular carpet tiles, window treatments, and bathroom aesthetics in the Philippines.",
  keywords: [
    "carpet",
    "broadloom",
    "modular carpet tiles",
    "flooring",
    "interior design",
    "Philippines",
    "window treatments",
    "JTCICARPET",
  ],
  openGraph: {
    title: "JTCICARPET Gallery Corporation",
    description:
      "Premium carpet and interior solutions for residential and commercial spaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-[family-name:var(--font-inter)]`}
      >
        {children}
      </body>
    </html>
  );
}
