import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import "./app.css";
import { useEffect, useState } from "react";

export function App() {
  const { movies } = useMovies();
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if(value == ''){
      setError('No se puede buscar peliculas vacias')
      return
    }
    if(value.match(/^\d+$/)){
      setError('No se puede buscar pelicula con un numero')
      return
    }
    if (value.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  }, [value])


  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log({value});
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <h1>Busca aqui tu pelicula favorita</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={value} name="query" type="text" placeholder="Harry Potter, Avengers..."/>
        <button>Buscar</button>
        {error && <p>{error}</p>}
      </form>

      <main>
        <Movies movies={movies} />
        
      </main>
    </div>
  );
}
