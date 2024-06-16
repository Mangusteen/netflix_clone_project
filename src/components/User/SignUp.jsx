import React from 'react';
import Form from './Form';
import { setUser } from '../../store/userSlice';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import { setDoc, doc } from "firebase/firestore";
import { db } from '../../firebase';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreateUser = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          token: user.accessToken,
          id: user.uid
        }))
        // тут создали коллекцию фильмов с пустым массивом для них, куда будет склпдываь при сохранении фильсов -- эту уже создваанную функцию - прокинем в компонент movie - movie_id (это будет docRef)
        // и этот дрк реф прокидываем в updateDoc (movie_id) и туда будет поступть инфа из movies (id, title, image) и эту инфу мы положим в наш созданный массив savedMovie
        setDoc(doc(db, 'movies', email), {
          savedMovies: []
        })
        navigate(ROUTES.HOME)
      })
      .catch(console.error)
  }
  return (
    <Form title='Sign Up' handleClick={handleCreateUser} />
  )
}

export default SignUp