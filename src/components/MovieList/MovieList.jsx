import { Link, useLocation } from "react-router-dom";
import css from './MovieList.module.css'

export function MovieList({films}){
    const location = useLocation()
return(
    <div className={css.box}>
    <ul className={css.list}>
    {films.map(el => 
    <li key={el.id} className={css.item}>
        <Link to={`${/movies/}${el.id}`}  state={location}>
        <p className={css.text}>{el.title}</p>
        </Link>
        </li>)}
    </ul>
    </div>
)
}