import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'

const Footer = () => {
  return (
    <div className='w-full py-32 px-32 h-full'>
      <div className='flex flex-col item-center'>
        <div className='mb-8'>
          <Link to={ROUTES.HOME}>
            <h1 className='text-red-600 text-4xl font-bold cursor-pointer z-[50]'>NETFLIX</h1>
          </Link>
        </div>
        <div className='mb-4'>
          <Link>
            <p className='text-gray-400 text-lg mb-12'>Any questions? Contact us</p>
          </Link>
        </div>
        <div className='flex justify-between'>
          <ul className='flex flex-col mb-16'>
            <Link>
              <p className='text-gray-200 hover:text-gray-400 hover:underline mb-8'>FAQ</p>
            </Link>
            <Link>
              <p className='text-gray-200 hover:text-gray-400 hover:underline'>Cookies Preferences</p>
            </Link>
          </ul>
          <ul className='flex flex-col'>
            <Link>
              <p className='text-gray-200 hover:text-gray-400 hover:underline mb-8'>Help Center</p>
            </Link>
            <Link>
              <p className='text-gray-200 hover:text-gray-400 hover:underline'>Corporate Information</p>
            </Link>
          </ul>
          <div className='mb-8'>
            <Link>
              <p className='text-white mb-12 hover:text-gray-400 hover:underline'>Term of use</p>
            </Link>
          </div>
          <div className='mb-8'>
            <Link>
              <p className='text-white mb-12 hover:text-gray-400 hover:underline'>Privacy</p>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer