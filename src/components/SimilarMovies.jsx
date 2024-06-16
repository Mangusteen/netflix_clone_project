import React, { useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { ROUTES } from '../utils/routes'
import MoviePage from '../pages/MoviePage'
import { useDispatch, useSelector } from 'react-redux'
import { getMovie, getSingleFilm } from '../store/movieSlice'

const SimilarMovies = ({ similarMovies }) => {
  // const navigate = useNavigate();
  // console.log(similarMovies)
  const dispatch = useDispatch();
  // const { movieId } = useSelector((state) => state.movie)
  // console.log(movieId)

  const sendMovieId = (id) => {
    dispatch(getSingleFilm(id))
  }
  return (
    <div className='text-white w-full'>
      <h1 className='text-3xl px-20 mb-4'>Similar Movies</h1>

      <div className='flex flex-col min-[475px]:grid grid-cols-1 items-center justify-center text-center min-[475px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 min-[475px]:gap-y-12 p-8'>
        {similarMovies.map((movie) =>
          <Link to={ROUTES.MOVIE} className='text-center w-[250px] h-[300px] mb-4'>
            <div onClick={() => sendMovieId(movie.id)} className='flex flex-col items-center justify-center w-[250px] h-[280px]' >
              <img className='w-[200px] h-[250px] object-contain' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
              <h2 className='text-lg font-bold'>
                {movie.title}
              </h2>
            </div>
          </Link>
        )}

      </div>

    </div >
  )
}

export default SimilarMovies