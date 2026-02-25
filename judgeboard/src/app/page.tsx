import { Hackathon } from "@/lib/types";
import Directory from "@/components/Directory";
import hackathonsData from "@/data/hackathons.json";

export default function Home() {
  const hackathons: Hackathon[] = hackathonsData as Hackathon[];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
            Find hackathons that need{" "}
            <span className="text-indigo-600">your expertise</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600 sm:text-lg">
            The directory of hackathons actively seeking judges and mentors. Browse opportunities,
            filter by your interests, and apply directly.
          </p>
          <div className="mt-6 inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm text-indigo-700">
            Building your O-1A / EB-1 portfolio? We highlight immigration-eligible judging
            opportunities.
          </div>
        </div>
      </section>

      {/* Directory */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Directory hackathons={hackathons} />
      </section>
    </div>
  );
}
