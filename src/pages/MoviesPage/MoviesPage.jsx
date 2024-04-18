import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { searchMovie } from "../../components/API"
import { Link, useLocation } from "react-router-dom"
import css from './MoviePage.module.css'
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import { MovieList } from "../../components/MovieList/MovieList"

function MoviesPage(){
const[searchParams, setSearchParams] = useSearchParams()
const[searchFilms, setSearchFilms] = useState([])
const name = searchParams.get("query");

const[error, setError] = useState(false)

useEffect(() => {async function getFilm(){
    if(name !==null){
    try{
        const result = await searchMovie(name);
        
setSearchFilms(result.results)
if(result.total_results===0) {alert('Sorry, no movie found...')}
    }catch (error){setError(true)}
}} getFilm()}, [searchParams, name])

function Submit(evt){
    evt.preventDefault();
    const form = evt.target;
		const value = form.elements.input.value;
		if(form.elements.input.value.trim() === "") {
			alert("Please enter search term!")
			return;
		}
        setSearchParams({query: value})
        
    form.reset();
};

    return(
        <div>
        <form onSubmit={Submit} className={css.form}>
    <input
    className={css.input}
    name="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search movies"
    />
    <button className={css.btn} type="submit">Search</button>
  </form>

  <MovieList films={searchFilms}/>

    {error && <ErrorMessage/>}
        </div>
    )
}

export default MoviesPage;
