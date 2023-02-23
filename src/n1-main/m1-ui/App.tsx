import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { ErrorPage } from './components/ErrorPage';
import { Login } from './components/Login';
import { Preview } from './components/Preview';
import { Profile } from './components/Profile';
import { RecoverPassword } from './components/RecoverPassword';
import { Registration } from './components/Registration';

const  App = () =>{
  return (
    <>
    <Routes>
      <Route path={'/friday'} element={<Preview/>}/>
      <Route path={'/login'} element={<Login/>}/>
      <Route path={'/profile'} element={<Profile/>}/>
      <Route path={'/registration'} element={<Registration/>}/>
      <Route path={'/recover'} element={<RecoverPassword/>}/>
      <Route path='*' element={<ErrorPage/>} />

  
  </Routes>
    </>
  );
}

export default App;
