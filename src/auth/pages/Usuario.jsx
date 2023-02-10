import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Usuario = () => {
  

  return (
    <div>
      <button className='border border-sky-600 text-sky-600 py-2 px-4 hover:bg-sky-600 hover:text-white rounded-xl transition-colors'
      
      >
        All users
      </button>
      <button className='border border-sky-600 text-sky-600 py-2 px-4 hover:bg-sky-600 hover:text-white rounded-xl transition-colors'
      
      >
        Create User
      </button>

      <Routes>
        <Route path='all' element={<h1> all user</h1>} />
        <Route path='create' element={<h1> Create user</h1>} />
      </Routes>
    </div>
  )
}

export default Usuario
