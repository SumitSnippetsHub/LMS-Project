import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import NotFound from './Pages/NotFound.jsx'
import SignUp from './Pages/SignUp.jsx'
import Login from './Pages/Login.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} ></Route>
        <Route path='/about' element={<AboutUs />} ></Route>

        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
