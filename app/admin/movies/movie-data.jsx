import { db } from "@/lib/db";
import MovieTable from "./movie-table";

export default async function MovieData() {
  try {
    const movies = await db.collection("movies_n").find({}).limit(50).toArray();

    if (movies) {
      const refinedMovies = movies.map((movie, key) => ({
        id: key + 1,
        title: movie.title,
        year: movie.year,
        plot: movie.plot,
        rated: movie.rated,
        genres: movie.genres,
        poster: movie.poster,
        imdb: movie.imdb,
      }));

      return <MovieTable movies={refinedMovies} />;
    }
  } catch (error) {
    console.log(error);
    return (
      <div className="flex justify-center items-center h-[186.5px]">
        <p className="text-red-700 font-medium animate-pulse duration-1000">
          No Movies Available!
        </p>
      </div>
    );
  }
}
