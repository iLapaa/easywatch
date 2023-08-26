import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

// POST /api/post
// Required fields in body: title, authorEmail
// Optional fields in body: content
export default async function getMovies() {
  const result = await prisma.movie.findMany({
    take: 40, // Limit the number of results to 20
    orderBy: {
      releaseDate: "asc", // Sort by ReleaseDate in ascending order
    }, // Limit the number of results to 20
    // Limit the number of results to 10
  });
  return result;
}
