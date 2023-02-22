import { useMemo, useRef, useState } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ value, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const previousSearch = useRef(value)

  const getMovies = useMemo(() => {
    return async ({ value }) => {
      if (value === previousSearch.current) return

      try {
        setLoading(true)
        previousSearch.current = value
        const newMovies = await searchMovies({ value });
        setMovies(newMovies);
      }
      catch (e) {
        setError(e.message)
        setLoading(false)
      }
      finally {
        setLoading(false)
      }
    };
  }, [])

  const sortMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])



  return { movies: sortMovies, getMovies, loading };
}
