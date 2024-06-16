import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

const HeroArea = () => {
  const { popularMovies } = useSelector((state) => state.movies);

  const movie = popularMovies[Math.floor(Math.random() * popularMovies.length)];

  const truncString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  }

  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <div className='w-full h-[550px] absolute bg-gradient-to-r from-black'></div>
        {/* размеры картинки - бошки оторваны на большом экране-- починить */}
        <img className='w-full h-[550px] object-cover bg-cover bg-center' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />

        <div className='absolute top-[20%] w-full p-4 md:p-8'>
          <h1 className='mb-6 text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className='mb-4'>
            <button className='bg-white text-black border-white border-2 font-bold px-6 py-3 mr-4'>Play</button>
            <button className='text-white px-6 py-3 border-gray-300 border-2'>Watch Later</button>
          </div>
          <p className='text-gray-400 mb-4'>Released: {movie?.release_date}</p>
          <p className='text-gray-200 text-lg w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[30%]'>{truncString(movie?.overview, 150)}</p>
        </div>
      </div>
    </div>
  )
}

export default HeroArea;