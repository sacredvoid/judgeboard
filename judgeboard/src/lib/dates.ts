export function isSpecialDate(str: string): boolean {
  return str === "ongoing" || str === "unknown";
}

export function formatDate(dateStr: string): string {
  if (dateStr === "ongoing") return "Ongoing";
  if (dateStr === "unknown") return "TBD";
  return new Date(dateStr + "T00:00:00Z").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function isDeadlineSoon(deadline: string): boolean {
  if (isSpecialDate(deadline)) return false;
  const deadlineMs = new Date(deadline + "T23:59:59Z").getTime();
  const nowMs = Date.now();
  const daysUntil = (deadlineMs - nowMs) / (1000 * 60 * 60 * 24);
  return daysUntil >= 0 && daysUntil <= 14;
}

export function isExpired(deadline: string): boolean {
  if (isSpecialDate(deadline)) return false;
  return new Date(deadline + "T23:59:59Z").getTime() < Date.now();
}

export function getDeadlineSort(deadline: string): number {
  if (deadline === "ongoing") return Number.MAX_SAFE_INTEGER - 1;
  if (deadline === "unknown") return Number.MAX_SAFE_INTEGER;
  return new Date(deadline + "T00:00:00Z").getTime();
}
