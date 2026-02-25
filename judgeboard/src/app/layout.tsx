import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JudgeBoard — Find Hackathon Judge & Mentor Opportunities",
  description:
    "Browse hackathons actively seeking judges and mentors. Filter by topic, format, and experience level. Perfect for professionals building O-1A/EB-1 immigration portfolios.",
  keywords: [
    "hackathon judge",
    "hackathon mentor",
    "judging opportunities",
    "O-1A visa",
    "EB-1 green card",
    "hackathon volunteering",
    "tech judge",
  ],
  openGraph: {
    title: "JudgeBoard — Find Hackathon Judge & Mentor Opportunities",
    description:
      "The directory of hackathons actively seeking judges and mentors. Browse, filter, and apply.",
    type: "website",
    url: "https://judgeboard.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "JudgeBoard — Hackathon Judge & Mentor Directory",
    description:
      "Find hackathons that need your expertise. Browse judge and mentor opportunities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-zinc-50 antialiased`}>
        <Header />
        <main className="min-h-[calc(100vh-140px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
