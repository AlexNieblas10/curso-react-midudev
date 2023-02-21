import { useState } from "react";
import resultados from "../mocks/true.json"
import badResultados from "../mocks/false.json"

export function useMovies({ value }) {
  const [responseMovies, setResponseMovies] = useState([])
  const peliculas = responseMovies.Search;

  const mappedMovies = peliculas?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
    type: movie.Type,
  }));

  const getMovies = () => {
    if (value) {
      setResponseMovies(resultados)
    }
    else {
      setResponseMovies(badResultados)
    }
  }

  return { movies: mappedMovies, getMovies };
}
