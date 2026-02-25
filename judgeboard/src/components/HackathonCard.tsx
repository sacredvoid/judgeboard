import { Hackathon } from "@/lib/types";
import { formatDate, isDeadlineSoon, isExpired } from "@/lib/dates";

function isSafeUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:" || parsed.protocol === "mailto:";
  } catch {
    return false;
  }
}

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
      className={`group rounded-xl border border-rule bg-surface transition-all ${
        deadlinePassed
          ? "opacity-50"
          : "hover:border-ink-faint hover:shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
      }`}
      aria-labelledby={`card-title-${hackathon.id}`}
    >
      <div className="p-5">
        {/* Header */}
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 id={`card-title-${hackathon.id}`} className="text-base font-semibold leading-snug text-ink">
              {hackathon.name}
            </h3>
            <p className="mt-0.5 text-sm text-ink-muted">{hackathon.organizer}</p>
          </div>
          <div className="flex shrink-0 gap-1.5">
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
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </span>
          ))}
        </div>

        {/* Metadata */}
        <div className="mb-4 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
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
                : hackathon.experienceLevel.charAt(0).toUpperCase() +
                  hackathon.experienceLevel.slice(1)}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 border-t border-rule-soft pt-4">
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
