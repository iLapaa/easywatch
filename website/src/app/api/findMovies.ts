import prisma from "../../lib/prisma";

// POST /api/post
// Required fields in body: title, authorEmail
// Optional fields in body: content

interface getMoviePros {
  searchInput: string;
}

export default async function getMovies({ searchInput }: getMoviePros) {
  const result = await prisma.movie.findMany({
    where: {
      content: {
        search: searchInput,
      },
    },
  });
  return result;
}
