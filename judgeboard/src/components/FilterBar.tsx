"use client";

import { Filters } from "@/lib/types";

interface FilterBarProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
  resultCount: number;
}

export default function FilterBar({ filters, onFilterChange, resultCount }: FilterBarProps) {
  const update = (key: keyof Filters, value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const selectClass =
    "min-h-[44px] appearance-none rounded-lg border border-rule bg-surface px-3 py-2 pr-8 text-sm text-ink transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

  return (
    <div className="rounded-xl border border-rule bg-surface p-4 shadow-sm">
      <fieldset>
        <legend className="sr-only">Filter opportunities</legend>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <div>
            <label htmlFor="filter-format" className="sr-only">Format</label>
            <select id="filter-format" value={filters.locationType} onChange={(e) => update("locationType", e.target.value)} className={selectClass}>
              <option value="">All Formats</option>
              <option value="in-person">In-Person</option>
              <option value="virtual">Virtual</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
          <div>
            <label htmlFor="filter-topic" className="sr-only">Topic</label>
            <select id="filter-topic" value={filters.topic} onChange={(e) => update("topic", e.target.value)} className={selectClass}>
              <option value="">All Topics</option>
              <option value="ai">AI / Machine Learning</option>
              <option value="web3">Web3 / Blockchain</option>
              <option value="health">Healthcare</option>
              <option value="social-impact">Social Impact</option>
              <option value="education">Education</option>
              <option value="general">General</option>
            </select>
          </div>
          <div>
            <label htmlFor="filter-experience" className="sr-only">Experience level</label>
            <select id="filter-experience" value={filters.experienceLevel} onChange={(e) => update("experienceLevel", e.target.value)} className={selectClass}>
              <option value="">All Experience Levels</option>
              <option value="any">All Levels</option>
              <option value="senior">Senior</option>
              <option value="expert">Expert</option>
            </select>
          </div>
          <div>
            <label htmlFor="filter-role" className="sr-only">Role</label>
            <select id="filter-role" value={filters.roleNeeded} onChange={(e) => update("roleNeeded", e.target.value)} className={selectClass}>
              <option value="">All Roles</option>
              <option value="judge">Judge</option>
              <option value="mentor">Mentor</option>
            </select>
          </div>
          <div className="mt-1 text-sm font-medium text-ink-muted sm:ml-auto sm:mt-0" role="status" aria-live="polite">
            {resultCount} {resultCount === 1 ? "opportunity" : "opportunities"}
          </div>
        </div>
      </fieldset>
    </div>
  );
}
