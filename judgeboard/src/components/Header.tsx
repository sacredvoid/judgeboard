"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-rule bg-surface">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-bold tracking-tight text-ink">
          Judge<span className="text-accent">Board</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 sm:flex" aria-label="Main navigation">
          <Link
            href="/"
            className="text-sm font-medium text-ink-secondary transition-colors hover:text-ink"
          >
            Browse
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-ink-secondary transition-colors hover:text-ink"
          >
            About
          </Link>
          <Link
            href="/about#submit"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2"
          >
            Submit Opportunity
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink-secondary transition-colors hover:bg-rule-soft sm:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </>
            ) : (
              <>
                <line x1="3" y1="5" x2="17" y2="5" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="15" x2="17" y2="15" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav
          className="border-t border-rule-soft px-4 pb-4 sm:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1 pt-2">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-ink-secondary transition-colors hover:bg-canvas"
            >
              Browse
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-ink-secondary transition-colors hover:bg-canvas"
            >
              About
            </Link>
            <Link
              href="/about#submit"
              onClick={() => setMenuOpen(false)}
              className="mt-1 rounded-md bg-accent px-3 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Submit Opportunity
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
