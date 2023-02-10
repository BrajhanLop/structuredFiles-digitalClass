import React from 'react'
import {useNavigate} from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()

  const HandleSesion = () => {
    navigate('login')
  }

  return (
    <nav className='bg-gray-800 p-6'>
      <div className='container mx-auto flex items-center justify-between'>
        <a href='#' className='font-bold text-white text-xl'>
          Tu aplicación
        </a>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={HandleSesion}>
          Iniciar sesión
        </button>
      </div>
    </nav>
  )
}

export default NavBar
