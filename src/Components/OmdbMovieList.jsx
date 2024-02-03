import React from 'react'

function OmdbMovieList({title,year,type,poster}) {
  return (
    <div className='movie-container'>
        <img src={poster} className='cover-image' alt="" />
        <span className='movie-name'>{title}</span>
        <div className="info-column">
            <span className='movie-info'>Year: {year}</span>
            <span className='movie-info'>Type: {type}</span>
        </div>
    </div>
  )
}

export default OmdbMovieList