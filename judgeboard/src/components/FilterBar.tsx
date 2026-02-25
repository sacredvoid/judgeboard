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
    "rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700 shadow-sm transition-colors focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500";

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-center gap-3">
        <select
          value={filters.locationType}
          onChange={(e) => update("locationType", e.target.value)}
          className={selectClass}
        >
          <option value="">All Formats</option>
          <option value="in-person">In-Person</option>
          <option value="virtual">Virtual</option>
          <option value="hybrid">Hybrid</option>
        </select>

        <select
          value={filters.topic}
          onChange={(e) => update("topic", e.target.value)}
          className={selectClass}
        >
          <option value="">All Topics</option>
          <option value="ai">AI / Machine Learning</option>
          <option value="web3">Web3 / Blockchain</option>
          <option value="health">Healthcare</option>
          <option value="social-impact">Social Impact</option>
          <option value="security">Security</option>
          <option value="education">Education</option>
          <option value="general">General</option>
        </select>

        <select
          value={filters.experienceLevel}
          onChange={(e) => update("experienceLevel", e.target.value)}
          className={selectClass}
        >
          <option value="">Any Experience</option>
          <option value="any">Beginner Friendly</option>
          <option value="senior">Senior</option>
          <option value="expert">Expert</option>
        </select>

        <select
          value={filters.roleNeeded}
          onChange={(e) => update("roleNeeded", e.target.value)}
          className={selectClass}
        >
          <option value="">All Roles</option>
          <option value="judge">Judge</option>
          <option value="mentor">Mentor</option>
        </select>

        <div className="ml-auto text-sm text-zinc-500">
          {resultCount} {resultCount === 1 ? "opportunity" : "opportunities"}
        </div>
      </div>
    </div>
  );
}
