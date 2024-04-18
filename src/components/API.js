import axios from "axios";
axios.defaults.baseURL = 'https://api.themoviedb.org';
const END_POINT_FOR_LIST = '/3/trending/movie/week';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGE4YzUzN2U0M2M5MGYzMzc1MTI1ODY3OTBlM2VjOCIsInN1YiI6IjY2MTQyMDYyOWJjZDBmMDE3ZDJiNGIxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KpEqk718SRa-6LIU7GHVBk8jw4lBvkbfgzq3-AA8jYo'
const END_POINT_FOR_DETAILS = '/3/movie/'
const POINT_FOR_CREDITS = '/credits'
const POINT_FOR_REVIEWS = '/reviews'
const POINT_FOR_SEARCH = '/3/search/movie'
const headers = {headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`
}}


export async function getMovieList(){
    const result = await axios.get(`${END_POINT_FOR_LIST}`, headers)
    return result.data.results
}

export async function getMovieDetails(id){
    const result = await axios.get(`${END_POINT_FOR_DETAILS}${id}`, headers )
    return result.data
}

export async function getMovieCredits(id){
    const result = await axios.get(`${END_POINT_FOR_DETAILS}${id}${POINT_FOR_CREDITS}`, headers )
    return result.data.cast
}

export async function getMovieReviews(id){
    const result = await axios.get(`${END_POINT_FOR_DETAILS}${id}${POINT_FOR_REVIEWS}`, headers )
    return result.data.results

}

export async function searchMovie(searchName){
    const options ={
        headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        },
        params: {
            query: searchName,
        }
    }
    const result = await axios.get(`${POINT_FOR_SEARCH}`, options)
    return result.data
}