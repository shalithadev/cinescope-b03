"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, MoreHorizontal } from "lucide-react";
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
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// import { MOVIES } from "@/lib/data";

export default function MovieTable({ movies }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState("title");
  const [sortDirection, setSortDirection] = useState("asc");
  const [statusFilter, setStatusFilter] = useState("all");

  // Filter and sort movies
  const filteredMovies = movies
    .filter(
      (movie) =>
        (statusFilter === "all" || movie.status === statusFilter) &&
        (movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          movie.director.toLowerCase().includes(searchQuery.toLowerCase()) ||
          movie.genre.some((g) =>
            g.toLowerCase().includes(searchQuery.toLowerCase())
          ))
    )
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      } else if (typeof aValue === "number" && typeof bValue === "number") {
        return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });

  const handleSort = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const getSortIcon = (field) => {
    if (field !== sortField) return null;
    return sortDirection === "asc" ? (
      <ChevronUp className="ml-1 h-4 w-4" />
    ) : (
      <ChevronDown className="ml-1 h-4 w-4" />
    );
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">#</TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("title")}
            >
              <div className="flex items-center">
                Title
                {getSortIcon("title")}
              </div>
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("year")}
            >
              <div className="flex items-center">
                Year
                {getSortIcon("year")}
              </div>
            </TableHead>
            <TableHead>Genre</TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("rating")}
            >
              <div className="flex items-center">
                Rating
                {getSortIcon("rating")}
              </div>
            </TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredMovies.map((movie) => (
            <TableRow key={movie.id}>
              <TableCell className="font-medium">{movie.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <img
                    src={movie.poster || "/images/movie-placeholder.png"}
                    alt={movie.title}
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
              <TableCell>{movie.rating}</TableCell>
              <TableCell>
                <Badge
                  className={
                    movie.status === "published"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      : movie.status === "draft"
                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                      : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                  }
                >
                  {movie.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Link
                        href={`/admin/movies/${movie.id}`}
                        className="flex w-full"
                      >
                        View details
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
