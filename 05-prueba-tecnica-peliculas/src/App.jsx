import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import "./app.css";
import { useSearch } from "./hooks/useSearch";

export function App() {
  const { value, setValue, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ value });

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies()
  }

  const handleChange = (e) => {
    setValue(e.target.value)

  }

  return (
    <div>
      <h1>Busca aqui tu pelicula favorita</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={value} name="query" type="text" placeholder="Harry Potter, Avengers..." />
        <button>Buscar</button>
        {error && <p>{error}</p>}
      </form>

      <main>
        {loading ?<p>Cargando...</p> : <Movies movies={movies} />}
        

      </main>
    </div>
  );
}
