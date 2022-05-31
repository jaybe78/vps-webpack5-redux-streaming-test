import React from 'react'
import {useAsync} from "react-streaming";

export default function MovieList() {
  const movies = useAsync(async () => {
    const response = await fetch('https://star-wars.brillout.com/api/films.json')
    return response.json()
  })
  return (
    <ul>
      {movies.results.forEach((movie) => {
          console.log(movie.director)
          return (
              <li>
                  {movie.director}
              </li>
          )

      })}
    </ul>
  )
}