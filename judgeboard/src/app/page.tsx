import { Hackathon } from "@/lib/types";
import Directory from "@/components/Directory";
import hackathonsData from "@/data/hackathons.json";

export default function Home() {
  const hackathons: Hackathon[] = hackathonsData as Hackathon[];

  return (
    <div>
      {/* Dark hero */}
      <section className="bg-hero pb-14 pt-12 sm:pb-16 sm:pt-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Find hackathons that need{" "}
            <span className="text-action">your expertise</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-ink-muted sm:text-lg">
            A curated directory of hackathons actively seeking judges and mentors.
            Browse, filter, apply.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-hero-subtle px-4 py-2 text-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-brand" />
            <span className="text-ink-faint">
              Building an O-1A / EB-1 portfolio? We flag eligible opportunities.
            </span>
          </div>
        </div>
      </section>

      {/* Directory — pulled up to overlap hero */}
      <section className="mx-auto -mt-4 max-w-6xl px-4 pb-10 sm:px-6">
        <Directory hackathons={hackathons} />
      </section>
    </div>
  );
}
