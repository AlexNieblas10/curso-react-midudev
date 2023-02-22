import { useRef, useState } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ value }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const previousSearch = useRef(value)

  const getMovies = async () => {
    if (value === previousSearch.current) return
    
    try{
      setLoading(true)
      previousSearch.current = value
      const newMovies = await searchMovies({ value });
      setMovies(newMovies);
    }
    catch(e){
      setError(e.message)
      setLoading(false)
    }
    finally{
      setLoading(false)
    }
  };

  return { movies, getMovies, loading };
}
