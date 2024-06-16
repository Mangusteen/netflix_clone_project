import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from './Form'
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';
import { ROUTES } from '../../utils/routes';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          token: user.accessToken,
          id: user.uid
        }))
        navigate(ROUTES.HOME)
      })
      .catch((error) => {
        setError(error.message)
      })
  }
  return (
    <Form title='Sign In' handleClick={handleLogin} error={error} />
  )
}

export default Login