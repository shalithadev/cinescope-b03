"use client";

import React from "react";

// Error boundary component for handling errors in the Movie Details page (Next.js)
export default function MovieDetailsError() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-[#b00020]">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#b00020" strokeWidth="2" />
        <line x1="8" y1="8" x2="16" y2="16" stroke="#b00020" strokeWidth="2" />
        <line x1="16" y1="8" x2="8" y2="16" stroke="#b00020" strokeWidth="2" />
      </svg>
      <h2 className="mt-4 text-2xl font-semibold">
        Oops! Something went wrong.
      </h2>
      <p className="mt-2 text-base">
        We couldn't load the movie details. Please try again later.
      </p>
    </div>
  );
}
