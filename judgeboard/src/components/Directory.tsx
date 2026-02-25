"use client";

import { useState, useMemo } from "react";
import { Hackathon, Filters } from "@/lib/types";
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
        // Sort: open deadlines first (by deadline date), then passed deadlines
        const now = new Date();
        const aExpired = new Date(a.deadline + "T00:00:00") < now;
        const bExpired = new Date(b.deadline + "T00:00:00") < now;
        if (aExpired !== bExpired) return aExpired ? 1 : -1;
        return new Date(a.deadline + "T00:00:00").getTime() - new Date(b.deadline + "T00:00:00").getTime();
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
