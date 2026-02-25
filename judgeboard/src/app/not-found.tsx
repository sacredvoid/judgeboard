import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-5xl font-bold text-accent">404</h1>
      <h2 className="mt-4 text-xl font-semibold text-ink">Page not found</h2>
      <p className="mt-3 text-ink-secondary">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
      >
        Browse opportunities
      </Link>
    </div>
  );
}
