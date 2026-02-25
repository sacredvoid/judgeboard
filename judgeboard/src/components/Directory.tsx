"use client";

import { useState, useMemo } from "react";
import { Hackathon, Filters } from "@/lib/types";
import FilterBar from "./FilterBar";
import HackathonCard from "./HackathonCard";

interface DirectoryProps {
  hackathons: Hackathon[];
}

function getDeadlineSort(deadline: string): number {
  if (deadline === "ongoing") return -Infinity; // ongoing always first
  if (deadline === "unknown") return Infinity - 1; // unknown near end but before expired
  return new Date(deadline + "T00:00:00").getTime();
}

function isExpired(deadline: string): boolean {
  if (deadline === "ongoing" || deadline === "unknown") return false;
  return new Date(deadline + "T00:00:00") < new Date();
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
    <div className="space-y-6">
      <FilterBar filters={filters} onFilterChange={setFilters} resultCount={filtered.length} />

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-zinc-200 bg-white py-16 text-center">
          <p className="text-lg font-medium text-zinc-600">No opportunities match your filters</p>
          <p className="mt-2 text-sm text-zinc-400">Try adjusting your filters or check back later.</p>
          <button
            onClick={() =>
              setFilters({ locationType: "", topic: "", experienceLevel: "", roleNeeded: "" })
            }
            className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
          {filtered.map((hackathon) => (
            <HackathonCard key={hackathon.id} hackathon={hackathon} />
          ))}
        </div>
      )}
    </div>
  );
}
