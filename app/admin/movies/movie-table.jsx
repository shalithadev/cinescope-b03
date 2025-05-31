"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UpdateMovieDialog from "./update-movie-dialog";
import DeleteMovieDialog from "./delete-movie-dialog";
import { deleteMovie } from "@/actions/movies";
// import { MOVIES } from "@/lib/data";

export default function MovieTable({ movies }) {
  const router = useRouter();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const toggleUpdateDialog = (open) => {
    // Using requestAnimationFrame to ensure the dialog opens after the state update
    requestAnimationFrame(() => setShowUpdateDialog(open || !showUpdateDialog));
  };

  const toggleDeleteDialog = (open) => {
    // Using requestAnimationFrame to ensure the dialog opens after the state update
    requestAnimationFrame(() => setShowDeleteDialog(open || !showDeleteDialog));
  };

  const handleDeleteMovie = async (movieId) => {
    const resp = await deleteMovie(movieId);
    if (resp?.success) {
      setSelectedMovie(null);
      toggleDeleteDialog(false);
      router.refresh();
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800";
      case "draft":
        return "bg-yellow-100 text-yellow-800";
      case "archived":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableCaption className="sr-only">Admin Movies Table</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">#</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead className="text-center">Rating</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {movies.map((movie, key) => (
            <TableRow key={movie.id}>
              <TableCell className="font-medium">{key + 1}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Image
                    src={movie.poster || "/images/movie-placeholder.png"}
                    alt={movie.title}
                    height={40}
                    width={28}
                    className="h-10 w-7 rounded object-cover"
                  />
                  <span className="font-medium">{movie.title}</span>
                </div>
              </TableCell>
              <TableCell>{movie.year}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {movie.genres.map((genre) => (
                    <Badge key={genre} variant="outline" className="text-xs">
                      {genre}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell className="text-center">
                {Number(movie?.imdb?.rating).toFixed(1)}
              </TableCell>
              <TableCell className="capitalize">
                <Badge className={getStatusClass(movie.status)}>
                  {movie.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open Menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Movie Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        setSelectedMovie(movie);
                        toggleUpdateDialog(true);
                      }}
                    >
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-destructive"
                      onClick={() => {
                        setSelectedMovie(movie);
                        toggleDeleteDialog(true);
                      }}
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <UpdateMovieDialog
        open={showUpdateDialog}
        onOpenChange={toggleUpdateDialog}
        movie={selectedMovie}
      />

      <DeleteMovieDialog
        open={showDeleteDialog}
        onOpenChange={toggleDeleteDialog}
        onConfirm={handleDeleteMovie}
        movie={selectedMovie}
        isLoading={false}
      />
    </div>
  );
}
