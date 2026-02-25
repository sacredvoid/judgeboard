"use client";

import { useState, useMemo } from "react";
import { Hackathon, Filters } from "@/lib/types";
import { isExpired, getDeadlineSort } from "@/lib/dates";
import FilterBar from "./FilterBar";
import HackathonCard from "./HackathonCard";

interface DirectoryProps {
  hackathons: Hackathon[];
}

export default function Directory({ hackathons }: DirectoryProps) {
  const [filters, setFilters] = useState<Filters>({
    locationType: "",
    topic: "",
    experienceLevel: "",
    roleNeeded: "",
  });

  const filtered = useMemo(() => {
    return hackathons
      .filter((h) => {
        if (filters.locationType && h.locationType !== filters.locationType) return false;
        if (filters.topic && !h.topics.includes(filters.topic)) return false;
        if (filters.experienceLevel && h.experienceLevel !== filters.experienceLevel) return false;
        if (filters.roleNeeded && !h.rolesNeeded.includes(filters.roleNeeded as "judge" | "mentor"))
          return false;
        return true;
      })
      .sort((a, b) => {
        const aExpired = isExpired(a.deadline);
        const bExpired = isExpired(b.deadline);
        if (aExpired !== bExpired) return aExpired ? 1 : -1;
        return getDeadlineSort(a.deadline) - getDeadlineSort(b.deadline);
      });
  }, [hackathons, filters]);

  return (
    <div className="space-y-5">
      <FilterBar filters={filters} onFilterChange={setFilters} resultCount={filtered.length} />

      {filtered.length === 0 ? (
        <div className="rounded-lg border border-rule bg-surface py-16 text-center">
          <p className="text-base font-medium text-ink-secondary">
            No opportunities match your filters
          </p>
          <p className="mt-2 text-sm text-ink-muted">
            Try adjusting your filters or check back later.
          </p>
          <button
            onClick={() =>
              setFilters({ locationType: "", topic: "", experienceLevel: "", roleNeeded: "" })
            }
            className="mt-4 text-sm font-medium text-accent hover:text-accent-hover focus:outline-none focus:underline"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((hackathon) => (
            <HackathonCard key={hackathon.id} hackathon={hackathon} />
          ))}
        </div>
      )}
    </div>
  );
}
