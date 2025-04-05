import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const movies = [
  {
    id: "1",
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    genre: ["Action", "Sci-Fi", "Thriller"],
    rating: 8.8,
    runtime: 148,
    // poster: "/placeholder.svg?height=500&width=300",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX700_.jpg",
    backdrop: "/placeholder.svg?height=800&width=1200",
    overview:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    releaseDate: "2010-07-16",
    status: "published",
    createdAt: "2023-01-15T12:00:00Z",
    updatedAt: "2023-01-15T12:00:00Z",
  },
  {
    id: "2",
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    genre: ["Action", "Crime", "Drama"],
    rating: 9.0,
    runtime: 152,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY2048_.jpg",
    backdrop: "/placeholder.svg?height=800&width=1200",
    overview:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    releaseDate: "2008-07-18",
    status: "published",
    createdAt: "2023-01-16T12:00:00Z",
    updatedAt: "2023-01-16T12:00:00Z",
  },
  {
    id: "3",
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    genre: ["Crime", "Drama"],
    rating: 8.9,
    runtime: 154,
    poster:
      "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_FMjpg_UX1055_.jpg",
    backdrop: "/placeholder.svg?height=800&width=1200",
    overview:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    releaseDate: "1994-10-14",
    status: "published",
    createdAt: "2023-01-17T12:00:00Z",
    updatedAt: "2023-01-17T12:00:00Z",
  },
  {
    id: "4",
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    genre: ["Drama"],
    rating: 9.3,
    runtime: 142,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_FMjpg_UX1200_.jpg",
    backdrop: "/placeholder.svg?height=800&width=1200",
    overview:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    releaseDate: "1994-09-23",
    status: "published",
    createdAt: "2023-01-18T12:00:00Z",
    updatedAt: "2023-01-18T12:00:00Z",
  },
];

export default function MoviesList() {
  return (
    <div className="space-y-6">
      <div className="border-primary/20 bg-card shadow-xs rounded-lg border p-4">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <Search className="text-primary/70 absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
            <Input
              placeholder="Search movies by title or director..."
              // value={searchQuery}
              // onChange={(e) => setSearchQuery(e.target.value)}
              className="border-primary/20 focus-visible:ring-primary pl-9"
            />
          </div>
        </div>
      </div>

      {/*  */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Loop movies */}
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card-hover">
            <Link href={`/movies/${movie.id}`}>
              <Card className="border-primary/20 hover:border-primary/50 overflow-hidden py-0 transition-colors">
                <div className="aspect-2/3 w-full overflow-hidden">
                  <Image
                    width={300}
                    height={450}
                    src={movie.poster || "/placeholder.svg"}
                    alt={movie.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="line-clamp-1 font-semibold">{movie.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {movie.year} • {movie.runtime} min
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
