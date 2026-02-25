import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JudgeBoard — Find Hackathon Judge & Mentor Opportunities",
  description: "Browse hackathons actively seeking judges and mentors. Filter by topic, format, and experience level. Perfect for professionals building O-1A/EB-1 immigration portfolios.",
  keywords: ["hackathon judge", "hackathon mentor", "judging opportunities", "O-1A visa", "EB-1 green card", "hackathon volunteering", "tech judge"],
  metadataBase: new URL("https://judgeboard.dev"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "JudgeBoard — Find Hackathon Judge & Mentor Opportunities",
    description: "The directory of hackathons actively seeking judges and mentors. Browse, filter, and apply.",
    type: "website",
    url: "https://judgeboard.dev",
    siteName: "JudgeBoard",
  },
  twitter: {
    card: "summary_large_image",
    title: "JudgeBoard — Hackathon Judge & Mentor Directory",
    description: "Find hackathons that need your expertise. Browse judge and mentor opportunities.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} min-h-screen bg-canvas text-ink antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-[calc(100vh-140px)]">{children}</main>
        <Footer />
        <JsonLd />
      </body>
    </html>
  );
}
