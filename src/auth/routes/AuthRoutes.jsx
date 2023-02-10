import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Dashboard, NavBar, Sidebar, Usuario} from '../index'
const AuthRoutes = () => {
  return (
    <>
      <div className='flex'>
        <Sidebar />
        <div className='flex flex-col w-full'>
          <NavBar />
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/usuario/*' element={<Usuario />} />
            <Route path='*' element={<h1>not found</h1>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default AuthRoutes
