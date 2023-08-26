import MoviePlayer from "@/components/movie-player";

export default function Page({ params }: { params: { movieId: string } }) {
  return <MoviePlayer movieId={params.movieId} />;
}
