import React from 'react'
import SignUp from '../components/User/SignUp'
import { Link } from 'react-router-dom'
import { ROUTES } from '../utils/routes'

const RegisterPage = () => {
  return (
    <div className='w-full h-screen'>
      <img className=' hidden w-full h-full absolute object-cover md:block' src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
      <div className='bg-black/70 absolute top-0 left-0 w-full h-screen'></div>
      <div className='w-full absolute z-50 px-4 pt-24'>
        <div className='bg-black/60 text-white max-w-[450px] h-[600px] mx-auto'>
          <div className='mx-auto py-16 max-w-[320px] px-4'>
            <h1 className='text-3xl font-bold mb-4'>Sign up</h1>
            <SignUp />
            <div className='flex flex-row justify-between text-gray-500 text-sm mb-8'>
              <div className='flex flex-row'>
                <input className='mr-2' type="checkbox" />
                <p>Remember me</p>
              </div>
              <p>Need help?</p>
            </div>
            <div className='flex flex-row items-center'>
              <p className='text-gray-500 text-sm mr-8'>Already subscribed to Netflix?</p>
              <Link to={ROUTES.LOGIN}>
                <p className='hover:text-gray-400 hover:underline'>Sign in</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage