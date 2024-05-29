import React from 'react';

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 z-[100] absolute w-full'>
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      <div>
        <button className='text-white mr-4'>Sign in</button>
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign up</button>
      </div>

    </div>
  )
}

export default Header;