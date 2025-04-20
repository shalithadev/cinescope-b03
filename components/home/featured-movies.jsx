import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import MoviesList from "./movies-list";

export default function FeaturedMovies() {
  return (
    <section id="featured" className="container px-4 py-12 md:px-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Movies</h2>
          <p className="text-muted-foreground">
            Explore the latest and greatest movies that are making waves in the
            cinema world.
          </p>
        </div>

        <Button variant="outline">View All</Button>
      </div>

      <div className="space-y-6">
        <div className="border-primary/20 bg-card shadow-xs rounded-lg border p-4">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <Search className="text-primary/70 absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />

              {/* Shadcn Input Field */}
              <Input
                placeholder="Search movies by title or director"
                className="border-primary/20 pl-9"
              />
            </div>
          </div>
        </div>

        <Suspense
          fallback={<div className="h-96 animate-pulse rounded-lg bg-muted" />}
        >
          <MoviesList />
        </Suspense>
      </div>
    </section>
  );
}
