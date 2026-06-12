import { Skeleton } from "@/components/ui/skeleton";

export default function TeamLoading() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Skeleton className="h-4 w-24 mx-auto" />
            <Skeleton className="h-12 w-3/4 mx-auto" />
            <Skeleton className="h-12 w-full mx-auto" />
            <Skeleton className="h-6 w-2/3 mx-auto" />
          </div>
        </div>
      </section>

      {/* Team Grid Skeleton */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl overflow-hidden border border-border space-y-4"
              >
                <Skeleton className="aspect-[4/3] w-full" />
                <div className="p-6 space-y-3">
                  <Skeleton className="h-6 w-1/2" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-16 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
