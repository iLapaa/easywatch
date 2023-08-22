"use client";

import { Carousel } from "@trendyol-js/react-carousel";
import MovieCard from "../movie-card";

export default function DisplayMovies() {
  return (
    <Carousel show={7} slide={2} swiping={true} transition={0.5}>
      <MovieCard movieUrl="/movies/123" />
      <MovieCard movieUrl="/movies/1234" />
      <MovieCard movieUrl="/movies/12356" />
      <MovieCard movieUrl="/movies/1237" />
      <MovieCard movieUrl="/movies/1273" />
      <MovieCard movieUrl="/movies/1723" />
      <MovieCard movieUrl="/movies/1273" />
      <MovieCard movieUrl="/movies/1723" />
      <MovieCard movieUrl="/movies/1723" />
      <MovieCard movieUrl="/movies/1723" />
      <MovieCard movieUrl="/movies/1293" />
    </Carousel>
  );
}
