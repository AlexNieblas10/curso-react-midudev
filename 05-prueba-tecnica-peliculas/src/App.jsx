import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import "./app.css";
import { useSearch } from "./hooks/useSearch";
import { useCallback, useState } from "react";
import debounce from "just-debounce-it";

export function App() {
  const [sort, setSort] = useState(false)
  const { value, setValue, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ value, sort });

  const debounceGetMovies = useCallback(
    debounce(value => {
      getMovies({ value })
    }, 300), [])

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies(value)
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    setValue(newSearch)
    debounceGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div>
      <h1>Busca aqui tu pelicula favorita</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={value} name="query" type="text" placeholder="Harry Potter, Avengers..." />
        <input type="checkbox" onClick={handleSort} />
        <button>Buscar</button>
        {error && <p>{error}</p>}
      </form>

      <main>
        {loading ? <p>Cargando...</p> : <Movies movies={movies} />}


      </main>
    </div>
  );
}
