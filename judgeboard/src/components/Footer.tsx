export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-500">
            JudgeBoard — Find hackathons that need your expertise.
          </p>
          <div className="flex gap-6">
            <a
              href="https://forms.gle/your-google-form"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-700"
            >
              Submit an Opportunity
            </a>
            <a
              href="mailto:hello@judgeboard.dev"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-700"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
