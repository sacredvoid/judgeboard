function SkeletonCard() {
  return (
    <div className="flex overflow-hidden rounded-xl border border-rule bg-surface">
      <div className="w-1 shrink-0 bg-rule-soft" />
      <div className="flex-1 animate-pulse p-5">
        <div className="mb-3">
          <div className="h-5 w-3/4 rounded bg-rule-soft" />
          <div className="mt-2 h-4 w-1/3 rounded bg-rule-soft/60" />
        </div>
        <div className="mb-4 space-y-2">
          <div className="h-3 w-full rounded bg-rule-soft/60" />
          <div className="h-3 w-5/6 rounded bg-rule-soft/60" />
        </div>
        <div className="mb-4 flex gap-2">
          <div className="h-5 w-14 rounded-md bg-rule-soft/60" />
          <div className="h-5 w-12 rounded-md bg-rule-soft/60" />
        </div>
        <div className="mb-4 grid grid-cols-2 gap-2">
          <div className="h-4 w-24 rounded bg-rule-soft/60" />
          <div className="h-4 w-20 rounded bg-rule-soft/60" />
        </div>
        <div className="flex items-center justify-between border-t border-rule-soft pt-4">
          <div className="h-4 w-28 rounded bg-rule-soft/60" />
          <div className="h-9 w-16 rounded-lg bg-rule-soft" />
        </div>
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div>
      <section className="bg-hero pb-14 pt-12 sm:pb-16 sm:pt-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="h-10 w-2/3 animate-pulse rounded bg-hero-subtle" />
          <div className="mt-4 h-5 w-1/2 animate-pulse rounded bg-hero-subtle/60" />
        </div>
      </section>
      <section className="mx-auto -mt-4 max-w-6xl px-4 pb-10 sm:px-6">
        <div className="mb-5 h-14 animate-pulse rounded-xl border border-rule bg-surface" />
        <div className="grid gap-4 md:grid-cols-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
