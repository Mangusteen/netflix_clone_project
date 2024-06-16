import React, { useEffect, useState } from 'react'
import { useAuth } from '../hooks/use-auth';
import { updateDoc, doc, onSnapshot, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { IoIosClose } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";


const SavedMovies = () => {
  // console.log(email)
  const [movies, setMovies] = useState([]);
  const { email, isAuth } = useAuth();

  console.log(movies)


  const movieRef = doc(db, 'movies', `${email}`);

  const deleteMovies = async (id) => {
    try {
      const result = movies.filter((item) => item.id !== id);
      await updateDoc(movieRef, {
        savedMovies: result
      })
    } catch (error) {
      console.log(error);
    }
  }

  const scrollSliderLeft = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  const scrollSliderRight = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }
  useEffect(() => {
    return onSnapshot(collection(db, 'movies'), (snapshot) => {
      setMovies(snapshot.docs.map(doc => doc.data().savedMovies).flat())
    })
  }, [])
  return (
    <div className='relative w-full top-[50%] items-center group'>
      <FaChevronLeft onClick={scrollSliderLeft} size={30} className='absolute rounded-full left-0 bg-white hidden z-10 opacity-50 hover:opacity-100 group-hover:block' />
      <div id={'slider'} className='relative flex overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
        {movies.map((movie) =>
          <div key={movie.id} className='inline-block cursor-pointer w-[300px] sm:w-[200px] md:w-[240px] lg:w-[300px]'>
            <img className='w-full h-full object-contain' src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />

            <div className='hover:bg-black/80 opacity-0 hover:opacity-100 top-0 left-0 w-full h-full'>
              <p className='text-white font-bold text-xs md:text-sm flex justify-center items-center text-center h-full'>{movie.title}</p>
              <p onClick={() => deleteMovies(movie.id)} className='text-white'><IoIosClose size={30} className='absolute right-[10px] top-0' /></p>
            </div>
          </div>
        )}
      </div>
      <FaChevronRight onClick={scrollSliderRight} size={30} className='absolite rounded-full right-0 bg-white hidden z-10 opacity-50 hover:opacity-100 group-hover:block' />

    </div>
  )
}

export default SavedMovies