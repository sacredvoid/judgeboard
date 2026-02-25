import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — JudgeBoard",
  description: "Learn about JudgeBoard, the directory for hackathon judge and mentor opportunities.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">About JudgeBoard</h1>
      <div className="mt-8 space-y-8 leading-relaxed text-ink-secondary">
        <section>
          <h2 className="text-lg font-semibold text-ink">What is this?</h2>
          <p className="mt-3">JudgeBoard is a curated directory of hackathons actively looking for judges and mentors. We aggregate opportunities from across the web — Devpost, MLH, university hackathons, corporate events, and community-organized hacks — into one browsable, filterable list.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-ink">Who is this for?</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li><strong className="text-ink">Senior engineers and designers</strong> who want to give back to the developer community by mentoring the next generation.</li>
            <li><strong className="text-ink">Professionals building immigration portfolios</strong> — if you&apos;re pursuing an O-1A visa or EB-1 green card, documented judging at recognized events is valuable evidence of extraordinary ability.</li>
            <li><strong className="text-ink">Industry experts</strong> curious about the hackathon scene and interested in evaluating cutting-edge projects in their field.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-ink">O-1A / EB-1 Immigration</h2>
          <p className="mt-3">Serving as a judge for hackathons and competitions can be used as evidence for the &quot;Judging the work of others&quot; criterion in O-1A visa and EB-1A green card applications. We flag opportunities that are particularly relevant — typically larger, well-known events with formal judging panels.</p>
          <p className="mt-3">Look for the <span className="inline-flex items-center rounded-md bg-accent-light px-2 py-0.5 text-xs font-semibold text-accent-deep">O-1A</span> badge on listings. Always consult with an immigration attorney about your specific case.</p>
        </section>
        <section id="submit">
          <h2 className="text-lg font-semibold text-ink">Submit an Opportunity</h2>
          <p className="mt-3">Know of a hackathon looking for judges or mentors? We&apos;d love to add it. Email us with the event name, dates, location, and a link to the judge/mentor application page.</p>
          <a href="mailto:hello@judgeboard.dev?subject=New%20Opportunity%20Submission&body=Event%20name%3A%0AOrganizer%3A%0ADate%3A%0ALocation%3A%0AApplication%20URL%3A%0ARoles%20needed%20(judge%2Fmentor)%3A%0ABrief%20description%3A" className="mt-4 inline-flex rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2">Submit via Email</a>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-ink">For Organizers</h2>
          <p className="mt-3">If you&apos;re organizing a hackathon and need judges or mentors, send us your event details and we&apos;ll add it to the directory. It&apos;s free.</p>
        </section>
        <section className="rounded-xl border border-rule bg-surface-dim p-5">
          <h2 className="text-base font-semibold text-ink">About this project</h2>
          <p className="mt-2 text-sm">JudgeBoard was built to solve a real problem: finding hackathon judging and mentoring opportunities is unreasonably difficult. Opportunities are scattered across dozens of platforms, Google Forms, social media posts, and email chains. We&apos;re fixing that with a simple, well-organized directory.</p>
        </section>
      </div>
    </div>
  );
}
