import React, { useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'


function Signin({setIsAdmin}:boolean) {

    const navigate = useNavigate()

  const handleClick = () =>  {
    navigate('/orders')
  }

    useEffect(()=>{
        setIsAdmin(true)
    },[setIsAdmin])
  return (
    <div className='flex flex-col items-center gap-5 justify-center w-[30%] rounded-3xl shadow-sm  shadow-gray-500 m-auto mt-[5%] bg-white py-10 px-5'>
        <div>
            {/* <h2 className='flex flex-col gap-0 py-5'><span><strong className='text-indigo-900 text-3xl'>Gizat</strong><small className='text-indigo-900 text-3xl'>global</small></span> <span className='ml-[22%] -mt-1 text-sm'>Communication</span></h2> */}
            <img src='/logo.png' className='bg-black px-4 py-2 rounded-2xl' alt='logo'/>
        </div>
        
        <div className='flex flex-col items-center gap-5'>
            <div>
            <p className='text-xl font-semibold'>Voxco Number Ordering Portal</p>
            <p>Sign in to continue</p>
            </div>

            <div className='flex flex-col gap-5 w-full mb-2'>
                <Input className='' type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
            </div>
            <Button onClick={handleClick} className='bg-indigo-900 text-white py-5 w-full cursor-pointer'>Sign In</Button>
        </div>
    </div>
  )
}

export default Signin