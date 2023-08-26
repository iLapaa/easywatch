"use client";

import { Suspense, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { searchMovie } from "@/app/api/search-movies";
import MovieCard from "../movie-card";

const NoMovies = () => (
  <div className="flex h-screen items-center justify-center">
    <div>
      <h1>Type something to watch the available movies </h1>
    </div>
  </div>
);

interface Movie {
  id: string;
  title: string;
  image: string;
  api_path: string;
  // Add other properties as needed
}

export default function SearchBar() {
  const [search, setSearch] = useState("Search movies");
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [loading, isLoading] = useState(false);

  const handleChange = async (event: any) => {
    setMovies(await searchMovie(event.target.value));
    console.log(movies);
  };

  return (
    <>
      <div className="flex h-[50px] w-full items-center">
        <div className="container">
          <Input
            onBlur={() => setSearch("Search movies")}
            onClick={() => setSearch("Searching...")}
            onChange={handleChange}
            placeholder={search}
          />
        </div>
      </div>

      <div className="container mt-4  grid grid-cols-6">
        {movies &&
          movies.map((movie, index) => (
            <MovieCard
              key={index}
              movieUrl={"/movies/" + movie.api_path}
              image={movie.image}
              title={movie.title}
            />
          ))}
      </div>
    </>
  );
}
