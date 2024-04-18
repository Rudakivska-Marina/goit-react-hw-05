import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getMovieCredits } from '../API'
import css from './MovieCast.module.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

export function MovieCast(){

    const{movieId} = useParams()
    const[casts, setCasts] = useState([])
    const[error, setError] = useState(false)

useEffect(() => {async function getCast(){
    try{
        const result = await getMovieCredits(movieId);
setCasts(result)
result.length !==0 ? scrollTo({ top: 800, behavior: 'smooth'}) : scrollTo({ top: 300, behavior: 'smooth'})
    }catch (error){setError(true)}
} getCast() }, [])

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500'

    return(
        <div className={css.box}>
        <ul className={css.list}>
            {casts.length>0 ? casts.map(el => <li key={el.id} className={css.item}>{el.profile_path !==null ? <img src={`${BASE_IMG_URL}${el.profile_path}`} alt="name" className={css.image}/> : <img src='../../../public/no-profile-picture-icon.png' alt='img' className={css.image}/>}<p className={css.name}>{el.name}</p></li>) : <span className={css.name}>Sorry, but there are no movie casts</span>}
            </ul>

            {error && <ErrorMessage/>}
            </div>
    )
}