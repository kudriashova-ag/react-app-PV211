import React, { useEffect } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './components/header/Header';
import { useDispatch } from 'react-redux';
import { getAuthUser } from './thunks/authThunk';
import { getToken } from './utils/token';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (getToken()) {
      dispatch(getAuthUser())
    }
   }, []);

  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
    </>
  );
}

export default App;