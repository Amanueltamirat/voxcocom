import React, { useEffect } from 'react'
import Header from '../components/dashboard/header/Header'
import Main from '../components/dashboard/Main'
import { Outlet } from 'react-router-dom'
import Sidebar from '@/components/dashboard/Sidebar'


function AppLayout({setIsAdmin}:any) {

  useEffect(()=>{
    setIsAdmin(true)
  },[setIsAdmin])

  return (
    <div className='flex flex-col'>
       <Header/> 
       <div className='flex h-full'>
          <div className='w-[20%] min-h-[100vh] mt-2 bg-white shadow-sm shadow-gray-200 p-5'>
            <Sidebar />
          </div>
          <main className='w-[80%] bg-white m-10 h-fit p-5 rounded-2xl'>
            <Outlet/>
          </main>
       </div>
    </div>
  )
}

export default AppLayout