// import { db } from "@/lib/db";
import MovieTable from "./movie-table";
import { searchMovies } from "@/actions/movies";

export default async function MovieData({ query = "" }) {
  try {
    // const movies = await db.collection("movies_n").find({}).limit(50).toArray();
    const { data: moviesData = [] } = await searchMovies(query);

    if (!moviesData.length) throw new Error("No movies found in the database.");

    const refinedMovies = moviesData.map((movie) => ({
      id: movie._id.toString(),
      title: movie.title,
      year: movie.year,
      plot: movie.plot,
      rated: movie.rated,
      genres: movie.genres,
      poster: movie.poster,
      imdb: movie.imdb,
      runtime: movie.runtime,
      status: movie.status ?? "published",
      directors: movie.directors,
    }));

    return <MovieTable movies={refinedMovies} />;
  } catch (error) {
    console.log("Error fetching movies:", error);
    return (
      <div className="flex justify-center items-center h-[400px]">
        <p className="text-destructive font-medium animate-pulse duration-1000">
          No Movies Available!
        </p>
      </div>
    );
  }
}
