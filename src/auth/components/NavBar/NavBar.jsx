import React from 'react'

const NavBar = () => {
  return (
    <nav className='bg-gray-800 p-6 w-full h-20'>
      <div className='flex items-center justify-between max-w-6xl mx-auto'>
        <div className='flex items-center'>
          <div className='text-white mr-6'>
            <svg className='h-10 w-10 fill-current' viewBox='0 0 24 24'>
              <path d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1zm0-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z' />
            </svg>
          </div>
          <span className='font-medium text-white text-xl'>My App</span>
        </div>
        <div className='flex items-center'>
          <div className='text-white mr-6'>
            <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 1-1.175.099L7.656 14.927a1 1 0 0 0-.65 1.472l2.072 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 1-.099-1.175l.624-1.071a1 1 0 0 0-.364-1.118l-3.292-1.07a1.002 1.002 0 0 0-1.902.724z' />
            </svg>
          </div>
          <span className='font-medium text-white text-xl'>John Doe</span>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
