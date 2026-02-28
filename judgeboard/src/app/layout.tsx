import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "JudgeBoard — Find Competition Judge & Mentor Opportunities",
  description: "Browse hackathons, startup competitions, industry awards, science fairs, and grant panels actively seeking judges and mentors. Filter by category, topic, format, and experience level. Perfect for professionals building O-1A/EB-1 immigration portfolios.",
  keywords: ["competition judge", "hackathon judge", "startup competition judge", "science fair judge", "industry awards judge", "grant reviewer", "hackathon mentor", "judging opportunities", "O-1A visa", "EB-1 green card"],
  metadataBase: new URL("https://judgeboard.dev"),
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "JudgeBoard — Find Competition Judge & Mentor Opportunities",
    description: "The directory of competitions actively seeking judges and mentors — hackathons, startup competitions, awards, science fairs, and more.",
    type: "website",
    url: "https://judgeboard.dev",
    siteName: "JudgeBoard",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JudgeBoard — Competition Judge & Mentor Directory",
    description: "Find competitions that need your expertise. Browse judge and mentor opportunities across hackathons, awards, science fairs, and more.",
    images: ["/twitter-card.png"],
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
