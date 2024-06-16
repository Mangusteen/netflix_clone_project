import React from 'react'
import Row from './Row'
import { useSelector } from 'react-redux';

const Rows = () => {

  const { upcomingMovies, popularMovies, topratedMovies, nowplayingMovies } = useSelector((state) => state.movies);

  return (
    <>
      <Row rowId='1' title='UpComing' content={upcomingMovies} />
      <Row rowId='2' title='Popular' content={popularMovies} />
      <Row rowId='3' title='Top Rated' content={topratedMovies} />
      <Row rowId='4' title='Now Playing' content={nowplayingMovies} />
    </>
  )
}

export default Rows