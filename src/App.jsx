import React from 'react';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/User/Footer';

const App = () => {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App;