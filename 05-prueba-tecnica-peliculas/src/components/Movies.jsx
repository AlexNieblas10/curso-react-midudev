import React from "react";
import resultados from "../mocks/true.json";

const peliculas = resultados.Search;

function Movie({ movies }) {
  return (
    <ul>
      {movies.map((peli) => (
        <li key={peli.id}>
          <h3>{peli.title}</h3>
          <p>{peli.year}</p>
          <img src={peli.poster} alt={peli.title} />
        </li>
      ))}
    </ul>
  );
}

function NoMovies() {
  return <p>No se encuentran las peliculas</p>;
}

export function Movies({ movies }) {
  const peliculasReales = peliculas?.length > 0;
  return peliculasReales ? <Movie movies={movies} /> : <NoMovies />;
}
