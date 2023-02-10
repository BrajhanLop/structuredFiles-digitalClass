import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {LandingPage, Login } from '../index'
const AulaEquisRoutes = () => {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<h1>not found</h1>} />
      </Routes>
    </>
  )
}

export default AulaEquisRoutes
