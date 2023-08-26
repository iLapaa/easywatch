"use client";

import { useEffect, useRef } from "react";

interface IMoviePLayerProps {
  movieId: string;
}

export default function MoviePlayer({ movieId }: IMoviePLayerProps) {
  // Step 1: Identify the iframe element

  return (
    <div className="container h-screen w-screen">
      <iframe
        src={process.env.EMBED + movieId}
        width="100%"
        height="100%"
        allowFullScreen
      ></iframe>
    </div>
  );
}
