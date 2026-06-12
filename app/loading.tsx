import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-background">
      {/* Skeleton Hero */}
      <section className="pt-20 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-6">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-16 w-full md:w-[80%]" />
            <Skeleton className="h-16 w-full md:w-[60%]" />
            <div className="flex gap-4 pt-4">
              <Skeleton className="h-12 w-32 rounded-lg" />
              <Skeleton className="h-12 w-32 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Skeleton Content Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-video w-full rounded-2xl" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[90%]" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
