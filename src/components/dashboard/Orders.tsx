import React from 'react'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'

function Orders() {

     const navigate = useNavigate()

  const handleClick = () =>  {
    navigate('/orders/new')
  }
  
  return (
   <div>
      <h2>Orders</h2>
      <div>
        <Button onClick={handleClick} className='bg-indigo-900 text-gray-300 my-4 cursor-pointer hover:bg-indigo-950'>Order a new DID</Button>
        <div className='flex res lg:flex-row xl:flex-row sm:flex-col md:flex-col justify-evenly gap-10 px-5 border-b-2 border-gray-500 pb-2'>
            <p>ID</p>
            <p>MRC</p>
            <p>NRC</p>
            <p>Total</p>
            <p>Status</p>
            <p>Date</p>
            <p>Last update</p>
            <p>Details</p>
          </div>
      </div>
   </div>
  )
}

export default Orders