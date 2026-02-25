"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-2xl font-bold text-ink">Something went wrong</h1>
      <p className="mt-3 text-ink-secondary">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="mt-6 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
      >
        Try again
      </button>
    </div>
  );
}
