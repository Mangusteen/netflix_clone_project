import React from 'react';
import { useDispatch } from 'react-redux';
import { getSingleFilm } from '../store/movieSlice';


const Movie = ({ title, backdrop_path, id }) => {

  const dispatch = useDispatch();

  const sendMovieId = (id) => {
    dispatch(getSingleFilm(id))
  }

  return (
    <div className=' inline-block w-[220px] h-[150px] p-2 cursor-pointer relative sm:w-[200px] md:w-[240px] lg:w-[280px]' onClick={() => sendMovieId(id)} >

      <img className='w-full h-full block' src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title} />

      <div className='absolute hover:bg-black/80 opacity-0 hover:opacity-100 top-0 left-0 w-full h-full'>
        <p className='text-white font-bold text-xs md:text-sm flex justify-center items-center text-center h-full'>{title}</p>
      </div>
    </div>
  )
}

export default Movie;