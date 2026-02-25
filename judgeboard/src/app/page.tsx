import { Hackathon } from "@/lib/types";
import Directory from "@/components/Directory";
import hackathonsData from "@/data/hackathons.json";

export default function Home() {
  const hackathons: Hackathon[] = hackathonsData as Hackathon[];

  return (
    <div>
      {/* Hero — type-forward, no gradient */}
      <section className="border-b border-rule-soft bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Find hackathons that need your expertise
          </h1>
          <p className="mt-3 max-w-2xl text-base text-ink-secondary sm:text-lg">
            A curated directory of hackathons actively seeking judges and mentors.
            Browse, filter, apply.
          </p>
          <div className="mt-5 inline-flex items-center rounded-md border border-accent/20 bg-accent-light px-3 py-1.5 text-sm font-medium text-accent-text">
            Building an O-1A / EB-1 portfolio? We flag immigration-eligible opportunities.
          </div>
        </div>
      </section>

      {/* Directory */}
      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
        <Directory hackathons={hackathons} />
      </section>
    </div>
  );
}
