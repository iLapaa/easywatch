-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "tmdbId" INTEGER NOT NULL,
    "imdbId" TEXT NOT NULL,
    "title" VARCHAR(256) NOT NULL,
    "originalTitle" VARCHAR(256),
    "language" TEXT,
    "releaseYear" INTEGER,
    "releaseDate" TEXT,
    "genres" TEXT[],
    "plot" VARCHAR(4096) NOT NULL,
    "runtime" INTEGER NOT NULL,
    "adult" BOOLEAN NOT NULL DEFAULT false,
    "budget" TEXT,
    "revenue" TEXT,
    "homepage" VARCHAR(511),
    "status" TEXT NOT NULL,
    "mpaaRating" TEXT,
    "keywords" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "countriesOfOrigin" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "languages" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "cast" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "director" TEXT,
    "production" TEXT,
    "awardsSummary" TEXT,
    "posterUrl" VARCHAR(512),
    "posterPlaceholderUrl" VARCHAR(4096),
    "posterWidth" INTEGER,
    "posterHeight" INTEGER,
    "backdropUrl" VARCHAR(512),
    "backdropPlaceholderUrl" VARCHAR(4096),
    "backdropWidth" INTEGER,
    "backdropHeight" INTEGER,
    "trailerUrl" VARCHAR(512),
    "trailerYouTubeId" TEXT,
    "imdbRating" DOUBLE PRECISION,
    "imdbVotes" INTEGER,
    "imdbType" TEXT,
    "tmdbPopularity" DOUBLE PRECISION,
    "tmdbRating" DOUBLE PRECISION,
    "tmdbVotes" INTEGER,
    "metacriticRating" DOUBLE PRECISION,
    "metacriticVotes" INTEGER,
    "rtCriticRating" INTEGER,
    "rtCriticVotes" INTEGER,
    "rtAudienceRating" INTEGER,
    "rtAudienceVotes" INTEGER,
    "rtCriticsConsensus" VARCHAR(1024),
    "rtId" TEXT,
    "emsId" TEXT,
    "rtUrl" TEXT,
    "letterboxdScore" INTEGER,
    "letterboxdVotes" INTEGER,
    "flickMetrixScore" INTEGER,
    "flickMetrixId" INTEGER,
    "foreign" BOOLEAN DEFAULT false,
    "relevancyScore" DOUBLE PRECISION,
    "imdbCustomPopularity" DOUBLE PRECISION,
    "searchL" VARCHAR(2048),

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Movie_tmdbId_key" ON "Movie"("tmdbId");

-- CreateIndex
CREATE UNIQUE INDEX "Movie_imdbId_key" ON "Movie"("imdbId");

-- CreateIndex
CREATE INDEX "Movie_imdbId_idx" ON "Movie"("imdbId");

-- CreateIndex
CREATE INDEX "Movie_imdbRating_releaseYear_foreign_genres_searchL_relevan_idx" ON "Movie"("imdbRating", "releaseYear", "foreign", "genres", "searchL", "relevancyScore");

-- CreateIndex
CREATE INDEX "Movie_imdbVotes_idx" ON "Movie"("imdbVotes");

-- CreateIndex
CREATE INDEX "Movie_releaseDate_idx" ON "Movie"("releaseDate");

-- CreateIndex
CREATE INDEX "Movie_rtAudienceRating_idx" ON "Movie"("rtAudienceRating");

-- CreateIndex
CREATE INDEX "Movie_rtCriticRating_idx" ON "Movie"("rtCriticRating");

-- CreateIndex
CREATE INDEX "Movie_tmdbId_idx" ON "Movie"("tmdbId");

-- CreateIndex
CREATE INDEX "Movie_tmdbPopularity_idx" ON "Movie"("tmdbPopularity");

