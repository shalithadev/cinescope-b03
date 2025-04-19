import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    // fetch movies from the database
    const movies = await db.collection("movies_n").find({}).limit(50).toArray();
    return NextResponse.json(movies);
  } catch (error) {
    console.error("MongoDB ERROR:: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
