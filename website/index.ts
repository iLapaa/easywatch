import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.movie.findMany({
    take: 20, // Limit the number of results to 20
    orderBy: {
      releaseDate: "asc", // Sort by ReleaseDate in ascending order
    }, // Limit the number of results to 20
    // Limit the number of results to 10
  });

  console.log(result);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
