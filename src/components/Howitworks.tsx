import React from 'react'
import ReactPlayer from 'react-player'


function Howitworks() {
  return (
    <div className='flex flex-col gap-5 items-center bg-white m-10 p-10'>
        <h2 className='text-3xl font-semibold font-serif'>VoxcoNumbers</h2>
        <p className='text-xl text-gray-700'>Here we will show how to use th Voxco portal to order and track your VoxcoNubers</p>  
        <div className='bg-gray-100 p-5 rounded-2xl w-full'>

          <ReactPlayer 
          style={{
          width: "100%",
             
        }} height={350} src='https://www.youtube.com/watch?v=w-zEJwg0-3Q' />        
        </div>
    </div>
  )
}

export default Howitworks