import React, { useEffect } from 'react';
import HeroArea from '../components/HeroArea';
import { useDispatch, useSelector } from 'react-redux';
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../store/moviesCategoriesSlice';
import Rows from '../components/Rows';
import { ROUTES } from '../utils/routes';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';

const Home = () => {
  const { isAuth } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(getPopularMovies());
      dispatch(getUpcomingMovies());
      dispatch(getTopRatedMovies());
      dispatch(getNowPlayingMovies());
    }
  }, [isAuth])

  return isAuth ? (
    <>
      <HeroArea />
      <Rows />
    </>
  )
    : (<Routes>
      <Route path='*' element={<Navigate to={ROUTES.LOGIN} replace />} />
    </Routes>)

}

export default Home;