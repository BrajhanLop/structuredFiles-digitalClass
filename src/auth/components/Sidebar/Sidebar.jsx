import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <aside className='bg-gray-900 p-6 w-64 h-screen'>
        <div className='mb-6'>
          <div className='text-white mb-2 font-medium'>My App</div>
          <nav className='list-none text-white'>
            <a href='#' className='block p-2 hover:bg-gray-800'>
              Home
            </a>
            <a href='/auth/usuario/all' className='block p-2 hover:bg-gray-800'>
              Users
            </a>
            <a href='#' className='block p-2 hover:bg-gray-800'>
              Settings
            </a>
          </nav>
        </div>
        <div className='text-white font-medium'>Resources</div>
        <nav className='list-none text-white'>
          <a href='#' className='block p-2 hover:bg-gray-800'>
            Documentation
          </a>
          <a href='#' className='block p-2 hover:bg-gray-800'>
            Blog
          </a>
        </nav>
      </aside>
    </div>
  )
}

export default Sidebar
