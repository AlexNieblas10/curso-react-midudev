import React from "react";

function Movie({ movies }) {
  return (
    <ul className="movies">
      {movies.map((peli) => (
        <li key={peli.id} className="movie">
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
  const peliculasReales = movies?.length > 0;
  return peliculasReales ? <Movie movies={movies} /> : <NoMovies />;
}
