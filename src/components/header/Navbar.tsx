import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from '../Dropdown'

function Navbar({isAdmin}:any) {
  return (
    <div className={`flex bg-black text-white px-10 py-2 justify-between sticky z-50 ${isAdmin ? 'hidden': ''}`}>
        <Link to='/'>
          <img src='/logo.png' alt='logo' className='w-40' />
        </Link>
        <div className='flex items-center sm:hidden md:hidden lg:flex xl:flex nav-menu'>
           <nav className='flex gap-5'>
              <Link className='text-sm hover:text-orange-400' to='/products'>Voxcom Products</Link>
              <Link className='text-sm hover:text-orange-400' to='/voxco-number'>Voxcom Numbers</Link>
              <div className='text-sm hover:text-orange-400 flex items-center'>
               <div className="dropdown cursor-pointer">
                  <div className='dropbtn'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hover:text-orange-400  bg-transparent size-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                  </div>
                  <div className="dropdown-content">
                      <a href="#">Number Inventory</a>
                      <a href="#">Orders Management</a>
                     
                  </div>
                  </div>
                  <Link to={'/number-requests'}>Number Requests</Link>
              </div>
              <div className='text-sm hover:text-orange-400 flex items-center'>
               <div className="dropdown cursor-pointer">
                  <div className='dropbtn'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hover:text-orange-400 size-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                  </div>
                  <div className="dropdown-content">
                      <a href="#">Port In Requests</a>
                      
                  </div>
                  </div>
                  <Link to={'/port-in-requests'}>Port In Requests</Link>
              </div>
              <div className='text-sm hover:text-orange-400 flex items-center'>
               <div className="dropdown cursor-pointer ">
                  <div className='dropbtn'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hover:text-orange-400 size-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                  </div>
                  <div className="dropdown-content">
                      <a href="#">Port Out Requests</a>
                      
                  </div>
                  </div>
                 <Link to={'/port-out-equests'}>Port Out Requests</Link>
              </div>

              <div className='flex gap-1 items-center text-sm hover:text-orange-400'>
                  <div className="dropdown cursor-pointer">
                  <div className='dropbtn'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hover:text-orange-400 size-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                  </div>
                  <div className="dropdown-content">
                     <Link to={'/compliance'}>Compliance Information  </Link>
                  </div>
                  </div>
                  <span >Compliance Information</span>
                  </div>
              <div className='text-sm hover:text-orange-400 flex items-center'>

                  <div className="dropdown cursor-pointer">
                  <div className='dropbtn'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hover:text-orange-400 size-4 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                  </div>
                  <div className="dropdown-content">
                      <Link to='/signin'>User</Link>
                      <Link to='/signin'>Admin</Link>
                  </div>
                  </div>
                  <span>Portal Admin</span>
                 </div>
          </nav>
        </div>

        <div className='flex items-center md:flex sm:flex lg:hidden xl:hidden z-50 '>
          <Dropdown/>
        </div>
        
    </div>
  )
}

export default Navbar