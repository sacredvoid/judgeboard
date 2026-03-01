import { Hackathon } from "@/lib/types";
import { formatDate, isDeadlineSoon, isExpired } from "@/lib/dates";

function isSafeUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:";
  } catch {
    return false;
  }
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

interface HackathonCardProps {
  hackathon: Hackathon;
}

const topicLabels: Record<string, string> = {
  ai: "AI / ML",
  web3: "Web3",
  health: "Healthcare",
  "social-impact": "Social Impact",
  education: "Education",
  general: "General",
};

const categoryLabels: Record<string, string> = {
  hackathon: "Hackathon",
  startup: "Startup & Entrepreneurship",
  awards: "Industry Awards",
  science: "Science & Engineering",
  "grant-review": "Grant & Research Review",
};

const categoryColors: Record<string, string> = {
  hackathon: "bg-blue-50 text-blue-700 border-blue-200",
  startup: "bg-amber-50 text-amber-700 border-amber-200",
  awards: "bg-purple-50 text-purple-700 border-purple-200",
  science: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "grant-review": "bg-rose-50 text-rose-700 border-rose-200",
};

const locationLabel: Record<string, string> = {
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
      className={`group flex h-full flex-col rounded-xl border border-rule bg-surface transition-all ${
        deadlinePassed
          ? "opacity-50"
          : "hover:border-ink-faint hover:shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
      }`}
      aria-labelledby={`card-title-${hackathon.id}`}
    >
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Category + status badges */}
        <div className="mb-2 flex flex-wrap items-center gap-1.5">
          <span
            className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold ${categoryColors[hackathon.category] || "bg-surface-dim text-ink-secondary border-rule"}`}
          >
            {categoryLabels[hackathon.category] || hackathon.category}
          </span>
          {hackathon.immigrationEligible && (
            <span
              className="inline-flex items-center rounded-md bg-accent-light px-2 py-0.5 text-xs font-semibold text-accent-deep"
              title="Counts toward O-1A/EB-1 portfolio"
            >
              O-1A
            </span>
          )}
          {hackathon.verified === false && (
            <span
              className="inline-flex items-center rounded-md bg-caution-light px-2 py-0.5 text-xs font-medium text-caution"
              title={hackathon.verificationNote || "Not fully verified"}
            >
              Unverified
            </span>
          )}
        </div>

        {/* Header */}
        <div className="mb-3">
          <h3 id={`card-title-${hackathon.id}`} className="text-base font-semibold leading-snug text-ink">
            {hackathon.name}
          </h3>
          <p className="mt-0.5 text-sm text-ink-muted">{hackathon.organizer}</p>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-ink-secondary">
          {hackathon.description}
        </p>

        {/* Tags — all neutral, no rainbow */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {hackathon.topics.map((topic) => (
            <span
              key={topic}
              className="inline-flex rounded-md bg-surface-dim px-2 py-0.5 text-xs font-medium text-ink-secondary"
            >
              {topicLabels[topic] || topic}
            </span>
          ))}
          {hackathon.rolesNeeded.map((role) => (
            <span
              key={role}
              className="inline-flex rounded-md border border-rule px-2 py-0.5 text-xs font-medium text-ink-secondary"
            >
              {capitalize(role)}
            </span>
          ))}
        </div>

        {/* Metadata */}
        <div className="mb-4 grid grid-cols-1 gap-x-4 gap-y-1.5 text-sm sm:grid-cols-2">
          <div>
            <span className="text-ink-muted">Date </span>
            <span className="font-medium text-ink">{formatDate(hackathon.date)}</span>
          </div>
          <div>
            <span className="text-ink-muted">Format </span>
            <span className="font-medium text-ink">{locationLabel[hackathon.locationType]}</span>
          </div>
          <div>
            <span className="text-ink-muted">Location </span>
            <span className="font-medium text-ink">{hackathon.location}</span>
          </div>
          <div>
            <span className="text-ink-muted">Level </span>
            <span className="font-medium text-ink">
              {hackathon.experienceLevel === "any"
                ? "All levels"
                : capitalize(hackathon.experienceLevel)}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-rule-soft pt-4">
          <div className="text-sm">
            {isOngoing ? (
              <span className="font-medium text-positive">Always open</span>
            ) : deadlinePassed ? (
              <span className="text-ink-faint">Deadline passed</span>
            ) : deadlineSoon ? (
              <span className="font-semibold text-caution">Due {formatDate(hackathon.deadline)}</span>
            ) : hackathon.deadline === "unknown" ? (
              <span className="text-ink-muted">Deadline TBD</span>
            ) : (
              <span className="text-ink-muted">Apply by {formatDate(hackathon.deadline)}</span>
            )}
          </div>
          {!deadlinePassed && isSafeUrl(hackathon.applyUrl) && (
            <a
              href={hackathon.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Apply to ${hackathon.name}`}
              className="shrink-0 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2"
            >
              Apply
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
