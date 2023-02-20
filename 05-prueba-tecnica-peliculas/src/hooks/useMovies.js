import resultados from "../mocks/true.json"

export function useMovies() {
  const peliculas = resultados.Search;

  const mappedMovies = peliculas?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
    type: movie.Type,
  }));

  return { movies: mappedMovies };
}
