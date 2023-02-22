const API_KEY = "d1e84567";

export async function searchMovies({ value }) {
  if (value === "") return null;

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}`
    );
    const JSON = await response.json();

    const peliculas = JSON.Search;

    return peliculas?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      type: movie.Type,
    }));
  } catch (e) {
    throw new Error("error searching movies");
  }
}
