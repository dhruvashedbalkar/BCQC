import { Skeleton } from "@/components/ui/skeleton"

export default function LearnLoading() {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-32 pb-24 container mx-auto px-4">
        {/* Section Heading Skeleton */}
        <div className="mb-12 text-center">
          <Skeleton className="h-12 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>

        {/* Filters & Search Skeleton */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-10 w-24" />
            ))}
          </div>
          <Skeleton className="h-10 w-full md:w-72" />
        </div>

        {/* Course Grid Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="glass rounded-xl overflow-hidden">
              <Skeleton className="h-48 w-full rounded-none" />
              <div className="p-6 space-y-4">
                <div>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <div className="flex gap-3">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
