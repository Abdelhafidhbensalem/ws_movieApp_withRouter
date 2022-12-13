import React from 'react'
import { useParams } from 'react-router-dom'

function MovieDetails({ data }) {
  const obj = useParams()
  const movie=data.find(el => el.id == obj.x);
  return (
    <>
      <div>MovieDetails </div>
      <h1>{movie.title}</h1></>
  )
}

export default MovieDetails