import AddMovieDialog from "./add-movie-dialog";
import MovieData from "./movie-data";
import MovieSelectors from "./movie-selectors";

// Server Component
export default async function MoviesPage(props) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

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

      <MovieSelectors />

      <MovieData query={query} />
    </div>
  );
}
