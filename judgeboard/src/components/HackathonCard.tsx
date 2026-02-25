import { Hackathon } from "@/lib/types";
import { formatDate, isDeadlineSoon, isExpired } from "@/lib/dates";

interface HackathonCardProps {
  hackathon: Hackathon;
}

const topicLabels: Record<string, string> = {
  ai: "AI / ML",
  web3: "Web3",
  health: "Healthcare",
  "social-impact": "Social Impact",
  security: "Security",
  education: "Education",
  general: "General",
};

const topicColors: Record<string, string> = {
  ai: "bg-purple-50 text-purple-700",
  web3: "bg-orange-50 text-orange-700",
  health: "bg-emerald-50 text-emerald-700",
  "social-impact": "bg-sky-50 text-sky-700",
  security: "bg-red-50 text-red-700",
  education: "bg-amber-50 text-amber-700",
  general: "bg-zinc-100 text-zinc-600",
};

const locationTypeLabel: Record<string, string> = {
  "in-person": "In-Person",
  virtual: "Virtual",
  hybrid: "Hybrid",
};

export default function HackathonCard({ hackathon }: HackathonCardProps) {
  const deadlinePassed = isExpired(hackathon.deadline);
  const deadlineSoon = !deadlinePassed && isDeadlineSoon(hackathon.deadline);
  const isOngoing = hackathon.deadline === "ongoing";

  return (
    <article
      className={`group relative rounded-xl border bg-white p-5 shadow-sm transition-shadow motion-safe:hover:shadow-md sm:p-6 ${
        deadlinePassed ? "border-zinc-200 opacity-60" : "border-zinc-200 hover:border-indigo-200"
      }`}
      aria-label={`${hackathon.name} by ${hackathon.organizer}`}
    >
      <div className="absolute right-4 top-4 flex gap-1.5">
        {hackathon.immigrationEligible && (
          <span
            className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700"
            title="Counts toward O-1A/EB-1 portfolio"
          >
            O-1A Eligible
          </span>
        )}
        {hackathon.verified === false && (
          <span
            className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700"
            title={hackathon.verificationNote || "Not fully verified"}
          >
            Unverified
          </span>
        )}
      </div>

      <div className="mb-3">
        <h3 className="text-lg font-semibold text-zinc-900 transition-colors motion-safe:group-hover:text-indigo-600 pr-28 sm:pr-32">
          {hackathon.name}
        </h3>
        <p className="text-sm text-zinc-500">{hackathon.organizer}</p>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-zinc-600">{hackathon.description}</p>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {hackathon.topics.map((topic) => (
          <span
            key={topic}
            className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
              topicColors[topic] || topicColors.general
            }`}
          >
            {topicLabels[topic] || topic}
          </span>
        ))}
        {hackathon.rolesNeeded.map((role) => (
          <span
            key={role}
            className="inline-flex rounded-full border border-zinc-200 bg-white px-2.5 py-0.5 text-xs font-medium text-zinc-600"
          >
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </span>
        ))}
      </div>

      <div className="mb-4 grid grid-cols-2 gap-y-2 text-sm">
        <div className="text-zinc-500">
          <span className="font-medium text-zinc-700">Date:</span> {formatDate(hackathon.date)}
        </div>
        <div className="text-zinc-500">
          <span className="font-medium text-zinc-700">Format:</span>{" "}
          {locationTypeLabel[hackathon.locationType]}
        </div>
        <div className="text-zinc-500">
          <span className="font-medium text-zinc-700">Location:</span> {hackathon.location}
        </div>
        <div className="text-zinc-500">
          <span className="font-medium text-zinc-700">Level:</span>{" "}
          {hackathon.experienceLevel === "any"
            ? "All levels"
            : hackathon.experienceLevel.charAt(0).toUpperCase() +
              hackathon.experienceLevel.slice(1)}
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="text-sm">
          {isOngoing ? (
            <span className="font-medium text-emerald-600">Always accepting applications</span>
          ) : deadlinePassed ? (
            <span className="font-medium text-zinc-400">Deadline passed</span>
          ) : deadlineSoon ? (
            <span className="font-medium text-amber-600">
              Deadline: {formatDate(hackathon.deadline)} — Apply soon!
            </span>
          ) : hackathon.deadline === "unknown" ? (
            <span className="text-zinc-500">Deadline TBD</span>
          ) : (
            <span className="text-zinc-500">Apply by {formatDate(hackathon.deadline)}</span>
          )}
        </div>
        {!deadlinePassed && (
          <a
            href={hackathon.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Apply to ${hackathon.name}`}
            className="shrink-0 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Apply
          </a>
        )}
      </div>
    </article>
  );
}
