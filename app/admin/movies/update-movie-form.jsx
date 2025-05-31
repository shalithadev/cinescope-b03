"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { updateMovie } from "@/actions/movies";
import { getAllYears } from "@/lib/utils";

export function UpdateMovieForm({ onClose, movie }) {
  const router = useRouter();
  const years = getAllYears();
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Controlled states
  const [title, setTitle] = useState(movie?.title || "");
  const [director, setDirector] = useState(movie?.directors.at(0) || "");
  const [selectedYear, setSelectedYear] = useState(movie?.year || null);
  // TODO: replace with multiselect
  const [selectedGenres, setSelectedGenres] = useState(
    movie?.genres.at(0) || null
  );
  const [rating, setRating] = useState(movie?.imdb?.rating || "");
  const [runtime, setRuntime] = useState(movie?.runtime || "");
  const [overview, setOverview] = useState(movie?.plot || "");
  const [poster, setPoster] = useState(movie?.poster || "");
  const [backdrop, setBackdrop] = useState(movie?.backdrop || "");
  const [status, setStatus] = useState(movie?.status || "");

  const handleClose = () => {
    // Reset controlled fields
    setSelectedYear(null);
    setSelectedGenres(null);
    // Close the dialog
    onClose(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Form Data", {
      title,
      year: selectedYear,
      director,
      genre: selectedGenres,
      rating,
      runtime,
      overview,
      poster,
      backdrop,
      status,
    });

    setIsSubmitting(true);

    const response = await updateMovie(movie?.id, {
      title,
      year: selectedYear,
      directors: [director],
      genres: [selectedGenres],
      imdb: { rating: Number(rating) },
      runtime,
      plot: overview,
      poster,
      backdrop,
      status,
      lastupdated: new Date().toISOString(),
    });

    setIsSubmitting(false);

    if (response?.success) {
      console.log(response);
      handleClose();
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="Movie title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="year">Year</Label>

          <Select
            id="year"
            name="year"
            onValueChange={setSelectedYear}
            value={selectedYear}
            required
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please select year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="director">Director</Label>
          <Input
            id="director"
            name="director"
            placeholder="Director name"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="genre">Genre</Label>
          <Select
            id="genre"
            name="genre"
            required
            onValueChange={setSelectedGenres}
            value={selectedGenres}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please select genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Action">Action</SelectItem>
              <SelectItem value="Adventure">Adventure</SelectItem>
              <SelectItem value="Sci-Fi">Sci-Fi</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="rating">Rating</Label>
          <Input
            id="rating"
            name="rating"
            type="number"
            min="0"
            max="10"
            step="0.1"
            placeholder="Rating (0.0 - 10.0)"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="runtime">Runtime (minutes)</Label>
          <Input
            id="runtime"
            name="runtime"
            type="number"
            min="1"
            placeholder="Runtime in minutes"
            value={runtime}
            onChange={(e) => setRuntime(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="overview">Overview</Label>
        <Textarea
          id="overview"
          name="overview"
          placeholder="Movie description"
          className="h-[100px]"
          value={overview}
          onChange={(e) => setOverview(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="poster">Poster URL</Label>
          <Input
            id="poster"
            name="poster"
            placeholder="URL to poster image"
            required
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="backdrop">Backdrop URL</Label>
          <Input
            id="backdrop"
            name="backdrop"
            placeholder="URL to backdrop image"
            value={backdrop}
            onChange={(e) => setBackdrop(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select
            id="status"
            name="status"
            onValueChange={setStatus}
            value={status}
            required
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <DialogFooter>
        <Button
          type="reset"
          variant="outline"
          className="min-w-[102px]"
          disabled={isSubmitting}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button type="submit" className="min-w-[102px]" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Changes"}
        </Button>
      </DialogFooter>
    </form>
  );
}
