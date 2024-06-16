import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovie, getMovieVideos, getSimilarMovies } from '../store/movieSlice';
import SingleMovie from '../components/SingleMovie';
import SimilarMovies from '../components/SimilarMovies';
import { ROUTES } from '../utils/routes';
import { Link } from 'react-router-dom';

const MoviePage = () => {
  const dispatch = useDispatch();
  const { movieId, movie, similarMovies, isLoading } = useSelector((state) => state.movie)
  console.log(movie)
  console.log(similarMovies)

  useEffect(() => {
    // if (!movieId) return;
    dispatch(getMovie(movieId))
    dispatch(getSimilarMovies(movieId))
    dispatch(getMovieVideos(movieId))
  }, [movieId])

  return (
    <div>

      {isLoading ? <h1>Loading...</h1> :
        !movie || Object.keys(movie).length === 0 || !similarMovies ?
          (<div className='w-full h-[350px] pl-12'>
            <div className='absolute top-[20%] p-14'>
              <h1 className='text-white text-5xl mb-8'>No results</h1>
              <Link to={ROUTES.HOME}>
                <button className='btn-red py-4 px-6'>Back</button>
              </Link>
            </div>
          </div>)
          :
          <>
            <SingleMovie movie={movie} />
            <SimilarMovies similarMovies={similarMovies} />
          </>}
    </div>
  )
}

export default MoviePage