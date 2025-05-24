import { Suspense } from "react";
import { Shell } from "lucide-react";
import AddMovieDialog from "./add-movie-dialog";
import MovieData from "./movie-data";

export default function MoviesPage() {
  // space-y-4: 16px
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Movies</h2>
          <p className="text-muted-foreground">Manage your movie catalog</p>
        </div>

        <AddMovieDialog />
      </div>

      <Suspense
        fallback={
          <div className="flex justify-center items-center h-[400px]">
            <Shell className="animate-spin duration-1000 text-primary-400" />
          </div>
        }
      >
        <MovieData />
      </Suspense>
    </div>
  );
}
