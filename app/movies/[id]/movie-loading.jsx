"use client";

import { useState, useEffect, createContext, useContext } from "react";

const MovieContext = createContext();

export default function MovieLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // The clearTimeout function is used to cancel a timeout that was previously established by calling setTimeout.
    // It prevents the execution of the function that was scheduled to run after a delay.
    return () => clearTimeout(timer);
  }, []);
  return (
    <MovieContext.Provider>
      <div className="text-center">
        {isLoading ? "Movie is loading..." : "Movie is loaded!"}
      </div>
    </MovieContext.Provider>
  );
}
