// import React from 'react'
import { Link } from 'react-router-dom'
import {Clock, Facebook, Instagram, Linkedin, LocationEdit, Mail, Phone} from 'lucide-react'



function Footer() {
  return (
    <div className='flex p-10 bg-[#2f1829] items-start'>
      <div className='w-[40%] text-gray-200'>
         <div className='mb-10'>
            {/* <h2 className='flex flex-col gap-0 py-2'><span><strong className='text-indigo-900 text-3xl'>Gizat</strong><small className='text-indigo-900 text-3xl'>global</small></span> <span className='ml-[22%] -mt-1 text-sm'>Communication</span></h2> */}
            <img className='w-[80%]' src='/logo.png' alt='logo'/>
        </div>
        <p className='-mt-10 tracking-wide'>Welcome to Voxco. Voxco is a leading telecommunications provider, offering the latest voice and data solutions to communication service providers and enterprises. Our global coverage combined with local, on the ground knowledge has enabled us to offer best in class services across the world linking Asia-Pacific, Europe, the Americas, the Middle East and Africa. 
        The experienced Voxco team collaborates with our Partners and Customers to provide a full range of services.</p>
      </div>

      <div className='px-10 mt-10'>
        <h2 className='text-white text-xl mb-5'>Quick Access</h2>
        <div className='flex flex-col text-gray-200 gap-5'>
          <Link className='hover:text-orange-700' to='/'>Voxcom Products</Link>
          <Link className='hover:text-orange-700' to='/'>Voxcom Numbers</Link>
          <Link className='hover:text-orange-700' to='/'>Number Requests</Link>
          <Link className='hover:text-orange-700' to='/'>Port In Requests</Link>
          <Link className='hover:text-orange-700' to='/'>Port Out Requests
        </Link>

        </div>
      </div>

      <div  className='flex flex-col gap-2 px-10 mt-10 '>
          <h1 className='text-white text-xl mb-5'>Contacts</h1>
          <div >
            <h1 className='flex items-center text-white gap-2'> <Phone size={25}/><span className='text-lg font-semibold'>Phone</span></h1>
            <p className='text-gray-300'>+1234 24535 3546</p>
          </div>
          <div>
            <h1 className='flex items-center text-white gap-2'><Mail size={25}/> <span className='text-lg font-semibold'>Email</span></h1>
            <p className='text-gray-300'>enquiries@voxcocom.com</p>
          </div>
          <div>
            <h1 className='flex items-center text-white gap-2'><Clock size={25}/><span className='text-lg font-semibold'> Working hours</span></h1>
            <p className='text-gray-300'>Monday to Saturday 8am - 5pm</p>
          </div>
           <div>
            <h1 className='flex items-center text-white gap-2'><LocationEdit size={25}/><span className='text-lg font-semibold'> Our Address</span></h1>
            <p className='text-gray-300'><strong className='font-semibold'>Head Office</strong> :USA</p>
            {/* <p><strong className='font-semibold'>Operating Locations</strong>: Wolaita Sodo</p> */}
          </div>
          <div className='flex gap-5 text-orange-600'>
            <Instagram className='cursor-pointer hover:scale-50'/>
            <Linkedin className='cursor-pointer hover:scale-50'/>
            <Facebook className='cursor-pointer hover:scale-50'/>
          </div>
      </div>
    </div>
  )
}

export default Footer