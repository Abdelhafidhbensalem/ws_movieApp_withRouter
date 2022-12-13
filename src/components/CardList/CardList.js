import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import "./CardList.css"

function CardList({data}) {
  return (
    <div className="d-flex">{data.map((el) =><MovieCard el={el} key={el.id}/>)}</div>
  )
}

export default CardList