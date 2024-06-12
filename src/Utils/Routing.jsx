import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Trending from '../Components/Trending'
import Popular from '../Components/Popular'
import Movie from '../Components/Movie'
import TvShows from '../Components/TvShows'
import People from '../Components/People'
import TvDetails from '../Components/TvDetails'
import PeopleDetails from '../Components/PeopleDetails'
import MovieDetails from '../Components/MovieDetails'
import Trailer from '../Components/Trailer'
import ErrorPage from '../Components/ErrorPage'

const Routing = () => {
  return (
<Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/Trending' element={<Trending />}/>
    <Route path='/Popular' element={<Popular />}/>
    <Route path='/Movie' element={<Movie />}/>
    <Route path='/Movie/Details/:id' element={<MovieDetails />}>
    <Route path='/Movie/Details/:id/trailer' element={<Trailer />}/>
    </Route>
    <Route path='/Tv' element={<TvShows />}/>
    <Route path='/Tv/Details/:id' element={<TvDetails />}>
    <Route path='/Tv/Details/:id/trailer' element={<Trailer />}/>
    </Route>
    <Route path='/Person' element={<People />}/>
    <Route path='/Person/Details/:id' element={<PeopleDetails />}/>
    <Route path='*' element={<ErrorPage />}/>
  </Routes>
  )
}

export default Routing