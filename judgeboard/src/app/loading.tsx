function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-xl border border-zinc-200 bg-white p-6">
      <div className="mb-3">
        <div className="h-5 w-3/4 rounded bg-zinc-200" />
        <div className="mt-2 h-4 w-1/3 rounded bg-zinc-100" />
      </div>
      <div className="mb-4 space-y-2">
        <div className="h-3 w-full rounded bg-zinc-100" />
        <div className="h-3 w-5/6 rounded bg-zinc-100" />
      </div>
      <div className="mb-4 flex gap-2">
        <div className="h-5 w-16 rounded-full bg-zinc-100" />
        <div className="h-5 w-14 rounded-full bg-zinc-100" />
        <div className="h-5 w-12 rounded-full bg-zinc-100" />
      </div>
      <div className="mb-4 grid grid-cols-2 gap-2">
        <div className="h-4 w-24 rounded bg-zinc-100" />
        <div className="h-4 w-20 rounded bg-zinc-100" />
        <div className="h-4 w-28 rounded bg-zinc-100" />
        <div className="h-4 w-16 rounded bg-zinc-100" />
      </div>
      <div className="flex items-center justify-between">
        <div className="h-4 w-32 rounded bg-zinc-100" />
        <div className="h-9 w-16 rounded-lg bg-zinc-200" />
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div>
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <div className="mx-auto h-10 w-2/3 animate-pulse rounded bg-zinc-200" />
          <div className="mx-auto mt-4 h-5 w-1/2 animate-pulse rounded bg-zinc-100" />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="mb-6 h-14 animate-pulse rounded-xl border border-zinc-200 bg-white" />
        <div className="grid gap-4 md:grid-cols-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
