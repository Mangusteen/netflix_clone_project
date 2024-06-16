import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Movie from './Movie';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Row = ({ title, content, rowId }) => {

  const dispatch = useDispatch();

  const scrollSliderLeft = () => {
    let slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  const scrollSliderRight = () => {
    let slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  useEffect(() => {
    if (!content.length) return
  }, [content])

  return (
    <div>
      <h3 className='text-white font-bold p-4 md:text-xl'>{title}</h3>
      <div className='flex relative items-center group'>
        <FaChevronLeft onClick={scrollSliderLeft} size={30} className='absolute rounded-full left-0 bg-white hidden z-10 opacity-50 hover:opacity-100 group-hover:block' />
        <div id={'slider' + rowId} className='relative w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          {content.map(({ id, title, backdrop_path }) =>
            <Link to={`/netflix_clone_project/movie/${id}`} >
              <Movie key={id} title={title} backdrop_path={backdrop_path} id={id} />
            </Link>
          )}
        </div>
        <FaChevronRight onClick={scrollSliderRight} size={30} className='absolute rounded-full right-0 bg-white hidden z-10 opacity-50 hover:opacity-100 group-hover:block' />

      </div>
    </div>
  )
}

export default Row;