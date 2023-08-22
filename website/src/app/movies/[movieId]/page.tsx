export default function Page({ params }: { params: { movieId: string } }) {
  return <div>Movie: {params.movieId}</div>;
}
