import { Button } from "@/components/ui/button";
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

      <MoviesList />
    </section>
  );
}
