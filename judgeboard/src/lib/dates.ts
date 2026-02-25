export function isSpecialDate(str: string): boolean {
  return str === "ongoing" || str === "unknown";
}

export function formatDate(dateStr: string): string {
  if (dateStr === "ongoing") return "Ongoing";
  if (dateStr === "unknown") return "TBD";
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function isDeadlineSoon(deadline: string): boolean {
  if (isSpecialDate(deadline)) return false;
  const deadlineDate = new Date(deadline + "T00:00:00");
  const now = new Date();
  const daysUntil = (deadlineDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
  return daysUntil >= 0 && daysUntil <= 14;
}

export function isExpired(deadline: string): boolean {
  if (isSpecialDate(deadline)) return false;
  return new Date(deadline + "T00:00:00") < new Date();
}

export function getDeadlineSort(deadline: string): number {
  if (deadline === "ongoing") return -Infinity;
  if (deadline === "unknown") return Infinity - 1;
  return new Date(deadline + "T00:00:00").getTime();
}
