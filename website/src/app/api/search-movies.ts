export async function searchMovie(query: string) {
  try {
    const url = "https://imdb-api.projects.thetuhin.com/search?query=" + query;

    const response = await fetch(url);
    const data = await response.json();
    return data.results; // Assuming the API returns an object with a 'movies' property
  } catch (error) {
    console.error("Error searching for movies:", error);
    return []; // Return an empty array in case of an error
  }
}
