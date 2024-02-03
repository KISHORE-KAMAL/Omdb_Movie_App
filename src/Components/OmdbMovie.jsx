import React, { useEffect, useState } from 'react'
import "./OmdbMovie.css"
import OmdbMovieList from './OmdbMovieList'
import axios from 'axios'

function OmdbMovieFetchingApi() {
    const [search, setSearch] = useState("")
    const [movie, setMovie] = useState([])
    // useEffect(()=>
    // {
    //     getMovie()
    // },[])
    async function getMovie(e)
    {
        e.preventDefault()
        if(search==="" || search===undefined)
        {
            alert("Invalid")
            setSearch("")
        }
        try
        {
            let {data} = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=294a5211`)
            console.log(data);
            setMovie(data.Search)
        }
        catch(err)
        {
            console.log(err.message);
        }
    }
    let movieSearch = ({target:{value}})=>
    {
        setSearch(value)
    }
    return (
        <div className='container'>
        <div className="header">
            <h3>React Movie App</h3>
            <form className="search-box" onSubmit={getMovie}>
                <span type="submit" onClick={getMovie} className='icon'>&#128269;</span>
                <input className='search-input' type="text" onChange={movieSearch} placeholder='Search Movie' />
            </form>
        </div>
        <div className="movie-list-container">
            {movie && movie.map(({Title,Year,Type,Poster},ind)=>
            {
                return <OmdbMovieList key={ind} title={Title} year={Year} type={Type} poster={Poster} /> 
            })}
            {!movie && "Movie not found... "}
        </div>
    </div>
  )
}

export default OmdbMovieFetchingApi