import { useState, Suspense, lazy } from 'react'
import {Routes, Route, NavLink} from 'react-router-dom';
import { MovieCast } from './components/MovieCast/MovieCast';
import { MovieReviews } from './components/MovieReviews/MovieReviews';
import { Navigation } from './components/Navigation/Navigation';
import './App.css'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const NotFound = lazy(() => import('./pages/NotFoundPage/NotFound'))

function App() {
 
  return (
 <div className='main'>
<Navigation/>
<Suspense fallback='please wait...'>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/movies' element={<MoviesPage/>}/>
    <Route path='/movies/:movieId' element={<MovieDetailsPage/>}>
    <Route path='cast' element={<MovieCast/>}/>
    <Route path='reviews' element={<MovieReviews/>}/>
    </Route>
    
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  </Suspense>
 </div>   
  )
}

export default App