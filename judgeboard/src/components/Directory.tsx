"use client";

import { useState, useMemo } from "react";
import { Hackathon, Filters } from "@/lib/types";
import { isExpired, getDeadlineSort } from "@/lib/dates";
import FilterBar from "./FilterBar";
import HackathonCard from "./HackathonCard";

interface DirectoryProps {
  hackathons: Hackathon[];
}

const emptyFilters: Filters = { locationType: "", topic: "", experienceLevel: "", roleNeeded: "", category: "" };

export default function Directory({ hackathons }: DirectoryProps) {
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const [searchQuery, setSearchQuery] = useState("");
  const [hideExpired, setHideExpired] = useState(false);

  // Precompute expiration and sort values once per hackathon instead of O(n log n) times in sort
  const precomputed = useMemo(() => {
    const map = new Map<string, { expired: boolean; sortKey: number }>();
    for (const h of hackathons) {
      map.set(h.id, { expired: isExpired(h.deadline), sortKey: getDeadlineSort(h.deadline) });
    }
    return map;
  }, [hackathons]);

  const expiredCount = useMemo(
    () => {
      let count = 0;
      for (const v of precomputed.values()) if (v.expired) count++;
      return count;
    },
    [precomputed]
  );

  const filtered = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return hackathons
      .filter((h) => {
        if (filters.category && h.category !== filters.category) return false;
        if (filters.locationType && h.locationType !== filters.locationType) return false;
        if (filters.topic && !h.topics.includes(filters.topic)) return false;
        if (filters.experienceLevel && h.experienceLevel !== filters.experienceLevel) return false;
        if (filters.roleNeeded && !h.rolesNeeded.includes(filters.roleNeeded as "judge" | "mentor"))
          return false;
        if (query && !h.name.toLowerCase().includes(query) && !h.organizer.toLowerCase().includes(query))
          return false;
        if (hideExpired && precomputed.get(h.id)!.expired) return false;
        return true;
      })
      .sort((a, b) => {
        const pa = precomputed.get(a.id)!;
        const pb = precomputed.get(b.id)!;
        if (pa.expired !== pb.expired) return pa.expired ? 1 : -1;
        return pa.sortKey - pb.sortKey;
      });
  }, [hackathons, filters, searchQuery, hideExpired, precomputed]);

  const clearAll = () => {
    setFilters(emptyFilters);
    setSearchQuery("");
    setHideExpired(false);
  };

  return (
    <div className="space-y-5">
      <FilterBar
        filters={filters}
        onFilterChange={setFilters}
        resultCount={filtered.length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        hideExpired={hideExpired}
        onHideExpiredChange={setHideExpired}
        expiredCount={expiredCount}
      />
      {filtered.length === 0 ? (
        <div className="rounded-xl border border-rule bg-surface py-16 text-center">
          <p className="text-base font-medium text-ink-secondary">No opportunities match your filters</p>
          <p className="mt-2 text-sm text-ink-muted">Try adjusting your filters or check back later.</p>
          <button
            onClick={clearAll}
            className="mt-4 text-sm font-semibold text-accent hover:text-accent-hover focus:outline-none focus:underline"
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
