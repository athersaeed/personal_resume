import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import { DATA } from "@/data/resume";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} — Software Engineer`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: DATA.name,
    description: DATA.description,
    url: DATA.url,
    siteName: DATA.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: DATA.name,
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerifDisplay.variable}`}>
      <body className="min-h-screen bg-[#fafafa] text-[#0f0f0f] font-sans antialiased">
        <Navigation />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
