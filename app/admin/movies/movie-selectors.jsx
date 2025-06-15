"use client";

import { useDeferredValue, useEffect, useState, useRef } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MovieSelectors() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const searchTerm = searchParams.get("query") || "";

  const [statusFilter, setStatusFilter] = useState("all");
  const [immediateSearchTerm, setImmediateSearchTerm] = useState(searchTerm);

  const deferredSearchTerm = useDeferredValue(immediateSearchTerm);
  const isFirstRender = useRef(true);

  const handleMovieSearch = (term) => setImmediateSearchTerm(term);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const params = new URLSearchParams(searchParams);

    deferredSearchTerm
      ? params.set("query", deferredSearchTerm)
      : params.delete("query");

    replace(`${pathname}?${params.toString()}`);
  }, [deferredSearchTerm]);

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex w-full items-center space-x-2 md:w-1/2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search movies..."
          onChange={(e) => handleMovieSearch(e.target.value)}
          className="h-9"
          defaultValue={searchTerm}
        />
      </div>

      <div className="flex items-center gap-2">
        {/* Controlled Select Input */}
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="h-9 w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="sm" className="h-9">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>
    </div>
  );
}
