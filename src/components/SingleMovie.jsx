import React, { useEffect, useState } from 'react'
import { useAuth } from '../hooks/use-auth';
import { updateDoc, arrayUnion } from "firebase/firestore";
import { db } from '../firebase';
import { doc, setDoc } from "firebase/firestore";
import { ROUTES } from '../utils/routes';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";


const SingleMovie = ({ movie }) => {
  const { email } = useAuth();
  const { videos } = useSelector((state) => state.movie)
  const [like, setLike] = useState(false);
  const movie_id = doc(db, 'movies', `${email}`);
  console.log(movie)

  const trailer = videos.find((elem) => elem.name.includes('Trailer'));
  const trailerUrl = `https://www.youtube.com/watch?v=${trailer?.key}`;

  const savedShows = async () => {
    // if ()
    if (email) {
      try {
        await updateDoc(movie_id, {
          savedMovies: arrayUnion({
            id: movie.id,
            title: movie.original_title,
            backdrop_path: movie.backdrop_path
          })
        })
        setLike(true);
        // добавить более красивый поп ап
        alert('You added new film!')
      } catch (error) {
        console.log(error)
      }
    }
  }
  useEffect(() => {
    if (!videos || !movie) return;
  }, [videos, movie])

  return (
    <>
      <div >
        <div className='flex justify-start items-center h-[600px] w-full p-8 mb-12'>
          <div className='w-full h-[600px]'>
            <div className='w-full h-[600px] absolute bg-gradient-to-t from-black'></div>
            <img className='w-full hidden md:h-[600px] object-cover bg-cover bg-center' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.original_title} />
          </div>
          <div className='w-full h-full pt-10 md:pt-20 pb-8 md:px-10 absolute top-[10%]'>
            <div className='w-full text-white flex-cols sm:flex justify-center items-center'>
              <div className='flex justify-center mb-6 sm:mr-8'>
                <img className='left-[100px] w-[250px] h-[300px] lg:w-[400px] lg:h-[450px] object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path
                  }`} alt={movie?.poster_path
                  } />
              </div>
              <div className='flex w-full sm:w-[50%] flex-col justify-center items-center md:items-start'>
                <div className='flex flex-col justify-center'>
                  <div className='flex items-center justify-between w-full'>
                    <h1 className='text-white text-3xl md:text-5xl font-bold mb-8'>{movie?.original_title
                    }</h1>
                    <button onClick={savedShows} className='md:px-6 md:py-2 md:mr-4'>{like ? <MdOutlineFavorite className='text-white' size={45} /> : <MdOutlineFavoriteBorder size={50} />}</button>
                  </div>
                  <p className='text-gray-300 mb-4'>Released: {movie?.release_date}</p>
                  <p className='hidden md:block md:text-white text-lg mb-12'>{movie?.overview}</p>
                  <div className='flex items-center'>
                    <Link to={trailerUrl}>
                      <button className='btn-red px-6 py-2 mr-6'>Watch Trailer</button>
                    </Link>
                    {/* <button onClick={savedShows} className='px-6 py-2 mr-4'><MdOutlineFavoriteBorder size={38} /></button> */}
                    <Link to={ROUTES.HOME}>
                      <button className='border-white border-2 px-6 py-2'>Back to films</button>
                    </Link>
                  </div>


                </div>
              </div>

            </div>


          </div>
        </div>
      </div>

    </>

    // </div>
  )
}

export default SingleMovie