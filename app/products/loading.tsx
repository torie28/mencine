import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsLoading() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-6 w-[90%]" />
          </div>
        </div>
      </section>

      {/* Tabs Skeleton */}
      <section className="py-12 border-y border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Skeleton className="h-10 w-32 rounded-lg" />
            <Skeleton className="h-10 w-32 rounded-lg" />
            <Skeleton className="h-10 w-32 rounded-lg" />
          </div>
        </div>
      </section>

      {/* Product Content Skeleton */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Skeleton className="aspect-square w-full rounded-2xl" />
            <div className="space-y-6">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-24 w-full" />
              <div className="grid grid-cols-2 gap-4">
                <Skeleton className="h-16 w-full rounded-xl" />
                <Skeleton className="h-16 w-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Grid Skeleton */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="p-6 bg-card rounded-2xl border border-border space-y-3"
              >
                <Skeleton className="h-8 w-8 rounded-lg" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-6 w-16" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
