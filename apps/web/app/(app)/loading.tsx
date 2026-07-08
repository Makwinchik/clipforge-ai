import { Skeleton } from "@/components/ui/skeleton";

export default function AppLoading() {
  return (
    <main className="min-h-screen p-6 lg:p-10">
      <div className="mx-auto max-w-7xl space-y-6">
        <Skeleton className="h-12 w-64" />
        <div className="grid gap-4 lg:grid-cols-3">
          <Skeleton className="h-48" />
          <Skeleton className="h-48" />
          <Skeleton className="h-48" />
        </div>
        <Skeleton className="h-80" />
      </div>
    </main>
  );
}
