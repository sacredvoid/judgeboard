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

const topicPinColor: Record<string, string> = {
  ai: "bg-pin-ai",
  web3: "bg-pin-web3",
  health: "bg-pin-health",
  "social-impact": "bg-pin-social",
  security: "bg-pin-security",
  education: "bg-pin-education",
  general: "bg-pin-general",
};

const topicBadgeStyle: Record<string, string> = {
  ai: "bg-pin-ai/10 text-pin-ai",
  web3: "bg-pin-web3/10 text-pin-web3",
  health: "bg-pin-health/10 text-pin-health",
  "social-impact": "bg-pin-social/10 text-pin-social",
  security: "bg-pin-security/10 text-pin-security",
  education: "bg-pin-education/10 text-pin-education",
  general: "bg-pin-general/10 text-pin-general",
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
  const primaryTopic = hackathon.topics[0] || "general";

  return (
    <article
      className={`group relative overflow-hidden rounded-lg border border-rule bg-surface transition-colors ${
        deadlinePassed ? "opacity-50" : "hover:border-rule/80"
      }`}
      aria-label={`${hackathon.name} by ${hackathon.organizer}`}
    >
      {/* Topic pin — colored top edge */}
      <div className={`h-1 ${topicPinColor[primaryTopic] || "bg-pin-general"}`} />

      <div className="p-5">
        {/* Badges row */}
        <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-semibold leading-snug text-ink">
              {hackathon.name}
            </h3>
            <p className="mt-0.5 text-sm text-ink-muted">{hackathon.organizer}</p>
          </div>
          <div className="flex shrink-0 gap-1.5">
            {hackathon.immigrationEligible && (
              <span
                className="inline-flex items-center rounded-md bg-badge-eligible-bg px-2 py-0.5 text-xs font-medium text-badge-eligible"
                title="Counts toward O-1A/EB-1 portfolio"
              >
                O-1A
              </span>
            )}
            {hackathon.verified === false && (
              <span
                className="inline-flex items-center rounded-md bg-badge-unverified-bg px-2 py-0.5 text-xs font-medium text-badge-unverified"
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

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {hackathon.topics.map((topic) => (
            <span
              key={topic}
              className={`inline-flex rounded-md px-2 py-0.5 text-xs font-medium ${
                topicBadgeStyle[topic] || topicBadgeStyle.general
              }`}
            >
              {topicLabels[topic] || topic}
            </span>
          ))}
          {hackathon.rolesNeeded.map((role) => (
            <span
              key={role}
              className="inline-flex rounded-md border border-rule bg-canvas px-2 py-0.5 text-xs font-medium text-ink-secondary"
            >
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </span>
          ))}
        </div>

        {/* Metadata grid */}
        <div className="mb-4 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
          <div>
            <span className="text-ink-muted">Date</span>{" "}
            <span className="font-medium text-ink">{formatDate(hackathon.date)}</span>
          </div>
          <div>
            <span className="text-ink-muted">Format</span>{" "}
            <span className="font-medium text-ink">
              {locationTypeLabel[hackathon.locationType]}
            </span>
          </div>
          <div>
            <span className="text-ink-muted">Location</span>{" "}
            <span className="font-medium text-ink">{hackathon.location}</span>
          </div>
          <div>
            <span className="text-ink-muted">Level</span>{" "}
            <span className="font-medium text-ink">
              {hackathon.experienceLevel === "any"
                ? "All levels"
                : hackathon.experienceLevel.charAt(0).toUpperCase() +
                  hackathon.experienceLevel.slice(1)}
            </span>
          </div>
        </div>

        {/* Footer: deadline + CTA */}
        <div className="flex items-center justify-between gap-3 border-t border-rule-soft pt-4">
          <div className="text-sm">
            {isOngoing ? (
              <span className="font-medium text-positive">Always open</span>
            ) : deadlinePassed ? (
              <span className="text-ink-faint">Deadline passed</span>
            ) : deadlineSoon ? (
              <span className="font-medium text-caution">
                Due {formatDate(hackathon.deadline)}
              </span>
            ) : hackathon.deadline === "unknown" ? (
              <span className="text-ink-muted">Deadline TBD</span>
            ) : (
              <span className="text-ink-muted">
                Apply by {formatDate(hackathon.deadline)}
              </span>
            )}
          </div>
          {!deadlinePassed && (
            <a
              href={hackathon.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Apply to ${hackathon.name}`}
              className="shrink-0 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2"
            >
              Apply
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
