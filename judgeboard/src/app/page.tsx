import { Hackathon } from "@/lib/types";
import Directory from "@/components/Directory";
import hackathonsData from "@/data/hackathons.json";

export default function Home() {
  const hackathons: Hackathon[] = hackathonsData as Hackathon[];

  return (
    <div>
      <section className="bg-hero pb-14 pt-12 sm:pb-16 sm:pt-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Find hackathons that need your expertise
          </h1>
          <p className="mt-4 max-w-2xl text-base text-ink-muted sm:text-lg">
            A curated directory of hackathons actively seeking judges and mentors.
            Browse, filter, apply.
          </p>
          <p className="mt-5 text-sm text-ink-muted">
            <span className="text-accent-muted">Building an O-1A / EB-1 portfolio?</span>{" "}
            We flag eligible opportunities.
          </p>
        </div>
      </section>

      <section className="mx-auto -mt-4 max-w-6xl px-4 pb-10 sm:px-6">
        <Directory hackathons={hackathons} />
      </section>
    </div>
  );
}
