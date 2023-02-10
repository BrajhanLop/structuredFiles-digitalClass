import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {AulaEquisRoutes} from '../aulaEquis'
import {AuthRoutes} from '../auth'
const AulaEquisRouter = () => {
  return (
    <>  
    <Routes>
      <Route path='/' element={ <Navigate to='/home' /> } />
      <Route path='/home/*' element={<AulaEquisRoutes/> } />
      <Route path='/auth/*' element={<AuthRoutes/> } />
      <Route path='*' element={ <h1>Not Found</h1> } />
    </Routes>
          
    </>
  )
}

export default AulaEquisRouter
