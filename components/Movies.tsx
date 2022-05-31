import React from "react";
import styled from "styled-components";
import { useAsync } from "react-streaming";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default function MovieList() {
  const movies = useAsync(async () => {
    const response = await fetch(
      "https://star-wars.brillout.com/api/films.json"
    );
    return response.json();
  });
  return (
    <ul>
      {movies.results.map((movie, id) => {
        console.log(movie.director);
        return (
          <li key={`movies${id}`}>
            <Title>{movie.director}</Title>
          </li>
        );
      })}
    </ul>
  );
}
