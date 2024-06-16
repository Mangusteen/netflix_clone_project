import React from 'react';
import SavedMovies from '../components/SavedMovies';
import { useAuth } from '../hooks/use-auth';

const Account = () => {
  const { email } = useAuth();
  return (
    // <div className='w-full h-screen'>
    //   
    //   <div className='w-full absolute z-50 px-4 pt-24'>
    <>

      <div className='flex flex-col w-full h-screen'>
        {/* <img className='hidden w-full h-full absolute object-cover md:block' src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" /> */}
        {/* <div className='bg-black/70 absolute top-0 left-0 w-full hidden md:block md:h-screen'></div> */}
        <div className='w-full top-[50px] sm:top-[100px] p-10'>
          <div>
            <h1 className='text-white text-3xl font-bold mb-8'>My Shows</h1>
          </div>
        </div>
        <SavedMovies />
      </div>

    </>

    // </div>
    // </div>
  )
}

export default Account