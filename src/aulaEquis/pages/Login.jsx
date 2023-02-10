import React, {useEffect, useState} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import useAxios from '../../hooks/useAxios'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate= useNavigate()
  const {fetchData, response, error, loading} = useAxios(
    'https://aulax.onrender.com/api/escuela/login',
    'POST',
    {email: email, password: password}
  )

    useEffect(()=> {
      if (response) {
        localStorage.setItem('profile', JSON.stringify(response))
        navigate('/auth/dashboard')
        }
    },[navigate, response])

  const handleSubmitLogin = async (e) => {
    e.preventDefault()
    fetchData()
    
  }
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  // if (response) {
  // localStorage.setItem('profile', JSON.stringify(response))
  // navigate('/auth/dashboard')
  // }




  return (
    <div className='flex justify-center items-center h-screen bg-slate-800'>
      <form
        className='bg-white p-6 rounded-lg shadow-md w-80'
        onSubmit={handleSubmitLogin}>
        <h2 className=' text-center text-3xl'>Login</h2>
        <div className='mb-4'>
          <label
            className='block text-gray-700 font-medium mb-2'
            htmlFor='email'>
            Email
          </label>
          <input
            className='w-full border border-gray-400 p-2 rounded-lg'
            id='email'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 font-medium mb-2'
            htmlFor='password'>
            Password
          </label>
          <input
            className='w-full border border-gray-400 p-2 rounded-lg'
            id='password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button 
        className='bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600'
                >
          Iniciar sesión
        </button>
      </form>
    </div>
  )
}

export default Login
