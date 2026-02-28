export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "JudgeBoard",
        url: "https://judgeboard.dev",
        description:
          "Directory of competitions actively seeking judges and mentors — hackathons, startup competitions, industry awards, science fairs, and grant panels.",
      },
      {
        "@type": "Organization",
        name: "JudgeBoard",
        url: "https://judgeboard.dev",
        description:
          "A curated directory connecting experienced professionals with judging and mentoring opportunities across hackathons, startup competitions, industry awards, science fairs, and grant review panels.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
          .replace(/&/g, "\\u0026")
          .replace(/</g, "\\u003c")
          .replace(/>/g, "\\u003e"),
      }}
    />
  );
}
