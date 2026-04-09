import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700", "800"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Children's Dental Center | McAllen Pediatric Dentist",
  description: "McAllen's premier pediatric dental center led by Dr. Chan Min Park. We provide a fun, safe, and comfortable environment for children with a vibrant, playful atmosphere.",
  keywords: ["Childrens Dentist", "Pediatric Dentist", "McAllen TX Dentist", "Dr. Chan Min Park", "Kids Dentist", "Dental Center"],
  openGraph: {
    title: "Children's Dental Center | McAllen, TX",
    description: "Exceptional pediatric dental care in a vibrant, kid-friendly environment.",
    type: "website",
    locale: "en_US",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
