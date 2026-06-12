import { Skeleton } from "@/components/ui/skeleton";

export default function AboutLoading() {
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

      {/* Company Overview Skeleton */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Skeleton className="aspect-[4/3] w-full rounded-2xl shadow-xl" />
            <div className="space-y-6">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-24 w-full rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Skeleton */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Skeleton className="w-16 h-16 rounded-2xl mx-auto" />
            <Skeleton className="h-10 w-1/2 mx-auto" />
            <Skeleton className="h-20 w-full mx-auto" />
          </div>
        </div>
      </section>
    </main>
  );
}
