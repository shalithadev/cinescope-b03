import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// Our first GET API route
export const GET = async () => {
  try {
    // const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=1');
    // Metacritic: Sorts the results in descending order based on the 'metacritic' field.
    // A value of -1 indicates descending order, while 1 would indicate ascending order.

    const movies = await db
      .collection("movies")
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray()
      .catch((error) => {
        console.error("Error fetching movies from database:", error);
        return [];
      });

    return NextResponse.json(movies);
  } catch (error) {
    console.log("Error fetching movies:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const POST = async () => {
  // Movies update endpoint
  return NextResponse.json({ message: "Movie updated!" }, { status: 200 });
};
