"use client";

import { useState, useEffect } from "react";

export default function MovieLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate Loading Behavior
    const timer = setTimeout(() => setIsLoading(false), 1500);

    return () => clearTimeout(timer);
  });

  return (
    <div className="text-center text-amber-700">
      {isLoading ? "Movie Loading..." : "Movie Loading Complete"}
    </div>
  );
}
