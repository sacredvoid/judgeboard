import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-rule bg-canvas">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-ink-muted">
            JudgeBoard — Find hackathons that need your expertise.
          </p>
          <div className="flex gap-6">
            <Link
              href="/about#submit"
              className="text-sm text-ink-muted transition-colors hover:text-ink-secondary"
            >
              Submit an Opportunity
            </Link>
            <a
              href="mailto:hello@judgeboard.dev"
              className="text-sm text-ink-muted transition-colors hover:text-ink-secondary"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
