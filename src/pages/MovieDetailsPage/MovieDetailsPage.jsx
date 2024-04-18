import { useEffect, useState } from 'react'
import React from 'react'
import {NavLink, useParams} from 'react-router-dom'
import { getMovieDetails } from '../../components/API'
import css from './MovieDetailsPage.module.css'
import { Link, Outlet } from "react-router-dom"
import {useLocation} from 'react-router-dom'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

function MovieDetailsPage(){
    const{movieId} = useParams()
    const[film, setFilm] = useState([])
    const[error, setError] = useState(false)
    
    useEffect(() => {async function getMovie(){
        try{
            const result = await getMovieDetails(movieId);
            setFilm(result)
            scrollTo({ top: 140, behavior: 'smooth'})
        }catch (error){setError(true)}
    } getMovie() }, [])

    const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500'
    const POINT = film.poster_path
    const location = useLocation({});
    const locationState = location.state || '/'

    return(
        
        <div className={css.box}>
            <Link to={locationState} className={css.link}>Go back</Link>
    <div className={css.container}>
        {film.poster_path ? <img className={css.img} src={`${BASE_IMG_URL}${POINT}`} alt={film.original_title}/> : <div className={css.some}><p className={css.someText}>No poster</p></div>}
        <div className={css.info}>
<h3 className={css.title}>{film.original_title}{film.release_date!=="" ? <span>({film.release_date?.slice(0,4)})</span> : ""}</h3>
<p className={css.mainText}>Popularity:  <span className={css.text}>{film.popularity}</span></p>
<p className={css.mainText}>Overview  :<span className={css.text}>{film.overview}</span></p>
<p className={css.mainText}>Genres: <span className={css.text}>{film.genres?.length !== 0 ? film.genres?.[0].name : 'Sorry, the genre of the movie is not described.'}</span></p>
        </div>

       {error && <ErrorMessage/>}
        
    </div>
    
<div className={css.list}>
   
<Link to='cast' state={location.state} className={css.information} >Cast</Link>
    
    <Link to='reviews' state={location.state} className={css.information}>Reviews</Link>
   
</div>
<Outlet/>
    </div>
    )
}

export default MovieDetailsPage;