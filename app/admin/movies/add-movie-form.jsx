"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllGenres, getAllYears } from "@/lib/data";
import { DialogFooter } from "@/components/ui/dialog";
// import { createMovie } from "@/actions/movies";

export function AddMovieForm({ onSuccess }) {
  //   const [state, formAction, isPending] = useActionState(createMovie, undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const genres = getAllGenres();
  const years = getAllYears();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title");
    const year = formData.get("year");

    console.log({ title, year });

    setIsSubmitting(true);

    // const response = await createMovie({
    //   title,
    //   year: "2024",
    //   plot: "Test 1234",
    //   rated: "PG",
    //   genres: ["Action", "Adventure"],
    //   poster: "",
    //   imdb: { rating: 7.9 },
    // });

    // setIsSubmitting(false);

    // if (response?.success) {
    //   console.log(response);
    // }

    // Simulate API call
    // setTimeout(() => {
    //   setIsSubmitting(false);
    //   onSuccess();
    // }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" placeholder="Movie title" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="year">Year</Label>
          <Select id="year" name="year">
            <SelectTrigger>
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="director">Director</Label>
          <Input id="director" placeholder="Director name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="genre">Genre</Label>
          <Select>
            <SelectTrigger id="genre">
              <SelectValue placeholder="Select genre" />
            </SelectTrigger>
            <SelectContent>
              {genres.map((genre) => (
                <SelectItem key={genre} value={genre}>
                  {genre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="rating">Rating</Label>
          <Input
            id="rating"
            type="number"
            min="0"
            max="10"
            step="0.1"
            placeholder="0.0 - 10.0"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="runtime">Runtime (minutes)</Label>
          <Input
            id="runtime"
            type="number"
            min="1"
            placeholder="Runtime in minutes"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="overview">Overview</Label>
        <Textarea
          id="overview"
          placeholder="Movie description"
          className="min-h-[100px]"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="poster">Poster URL</Label>
          <Input id="poster" placeholder="URL to poster image" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="backdrop">Backdrop URL</Label>
          <Input id="backdrop" placeholder="URL to backdrop image" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="status">Status</Label>
        <Select>
          <SelectTrigger id="status">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <DialogFooter>
        <Button type="button" variant="outline" onClick={onSuccess}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Movie"}
        </Button>
      </DialogFooter>
    </form>
  );
}
