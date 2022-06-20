import React, { useState } from "react";
// import styled from "styled-components";


export default function MovieList() {
  const [toto, setToto] = useState("5");
  const test = 9;
  const bl = true;
  const movies = []
  return (
    <ul>
      {movies.map((movie: any, id: number) => {
        return (
          <li key={`movies${id}`}>
            <span onClick={() => setToto("2")}>{movie.director}</span>
              {process.env.VITE_ENV}
          </li>
        );
      })}
    </ul>
  );
}
