import DisplayMovies from "@/components/display-movies";
import prisma from "@/lib/prisma";
import getMovies from "../api/getMovies";
import MovieCard from "@/components/movie-card";

export default async function Home() {
  const movie = await getMovies();

  return (
    <main className="mt-4 grid grid-cols-7 gap-4">
      <DisplayMovies />

      {movie.map((mov, index) => (
        <MovieCard
          key={index}
          movieUrl={"movies/title/" + mov.imdbId}
          title={mov.title}
        />
      ))}
    </main>
  );
}
