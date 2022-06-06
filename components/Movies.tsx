import React, { useState } from "react";
import styled from "styled-components";
import { useSsrData } from "react-streaming";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default function MovieList() {
  const [toto, setToto] = useState("5");
  const test = 9;
  const bl = true;
  const movies = useSsrData(
    "movies",
    async () => {
      const response = await fetch(
        "https://star-wars.brillout.com/api/films.json"
      );
      return response.json();
    },
  );

  return (
    <ul>
      {movies.results.map((movie: any, id: number) => {
        return (
          <li key={`movies${id}`}>
            <Title onClick={() => setToto("2")}>{movie.director}</Title>
              {process.env.VITE_ENV}
          </li>
        );
      })}
    </ul>
  );
}
