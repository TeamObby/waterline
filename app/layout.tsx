import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "WaterLine — Stop losing plumbing jobs to voicemail",
  description:
    "WaterLine sits behind your existing number and only answers calls that would've gone to voicemail. Same number. Texts you the job in about a minute.",
  metadataBase: new URL("https://waterline.example.com"),
  openGraph: {
    title: "WaterLine — Stop losing plumbing jobs to voicemail",
    description:
      "Your phone rings first. If it would hit voicemail, WaterLine answers, takes the details, and texts you the job.",
    type: "website",
    images: [
      {
        url: "/images/brand/og-image.png",
        width: 1730,
        height: 909,
        alt: "A plumber working under a sink as a call comes in on his phone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WaterLine — Stop losing plumbing jobs to voicemail",
    description:
      "Your phone rings first. If it would hit voicemail, WaterLine answers, takes the details, and texts you the job.",
    images: ["/images/brand/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
