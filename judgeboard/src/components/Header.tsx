"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-hero">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-bold tracking-tight text-white">
          Judge<span className="text-accent-muted">Board</span>
        </Link>

        <nav className="hidden items-center gap-6 sm:flex" aria-label="Main navigation">
          <Link href="/" className="text-sm font-medium text-ink-faint transition-colors hover:text-white">
            Browse
          </Link>
          <Link href="/about" className="text-sm font-medium text-ink-faint transition-colors hover:text-white">
            About
          </Link>
          <Link
            href="/about#submit"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Submit Opportunity
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-faint transition-colors hover:bg-hero-subtle sm:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            {menuOpen ? (
              <><line x1="4" y1="4" x2="16" y2="16" /><line x1="16" y1="4" x2="4" y2="16" /></>
            ) : (
              <><line x1="3" y1="5" x2="17" y2="5" /><line x1="3" y1="10" x2="17" y2="10" /><line x1="3" y1="15" x2="17" y2="15" /></>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-hero-subtle px-4 pb-4 sm:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-1 pt-2">
            <Link href="/" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-faint hover:bg-hero-subtle hover:text-white">Browse</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-faint hover:bg-hero-subtle hover:text-white">About</Link>
            <Link href="/about#submit" onClick={() => setMenuOpen(false)} className="mt-1 rounded-lg bg-accent px-3 py-2.5 text-center text-sm font-semibold text-white hover:bg-accent-hover">Submit Opportunity</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
