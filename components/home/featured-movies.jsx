import { Button } from "@/components/ui/button";
import MoviesList from "./movies-list";

export default function FeaturedMovies() {
  return (
    <section className="container px-4 py-12 md:px-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Movies</h2>
          <p className="text-muted-foreground">
            Our selection of must-watch films
          </p>
        </div>
        <Button variant="outline">View All</Button>
      </div>

      <MoviesList />
    </section>
  );
}
