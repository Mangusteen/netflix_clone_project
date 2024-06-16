import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/routes';
import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../store/userSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const { isAuth } = useAuth();

  return (
    <>
      <div className='flex justify-between items-center p-4 z-[100] absolute w-full'>
        <Link to={ROUTES.HOME}>
          <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        </Link>
        <div>
          {isAuth ? (<>
            <Link to={ROUTES.ACCOUNT}>
              <button className='text-white hover:text-gray-300 mr-4'>Account</button>
            </Link>
            <Link to={ROUTES.SIGN_UP}>
              <button onClick={() => dispatch(removeUser())} className='btn-red px-6 py-2'>Log out</button>
            </Link>
          </>)
            : (<>
              <Link to={ROUTES.LOGIN}>
                <button className='text-white hover:text-gray-300 mr-4'>Sign in</button>
              </Link>
              <Link to={ROUTES.SIGN_UP}>
                <button className='btn-red px-6 py-2'>Sign up</button>
              </Link>
            </>)}
        </div>

      </div>
    </>
  )
}

export default Header;