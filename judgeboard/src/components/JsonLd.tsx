export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "JudgeBoard",
        url: "https://judgeboard.dev",
        description:
          "Directory of hackathons actively seeking judges and mentors.",
      },
      {
        "@type": "Organization",
        name: "JudgeBoard",
        url: "https://judgeboard.dev",
        description:
          "A curated directory connecting experienced professionals with hackathon judging and mentoring opportunities.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
