import React from 'react'

function Numbers() {
  return (
    <div className=''>
      <h2 className='font-semibold text-xl mb-4'>DID <span>s</span> Summary</h2>
      <div>

        <div className='flex flex-col gap-5'>
          <h2 className='text-xl'>Active Numbers</h2>
          <div className='flex gap-[50%] px-5 border-b-2 border-gray-500 pb-2'>
            <p>Country</p>
            <p>Numbers</p>
          </div>
        </div>
        
         <div className='flex flex-col gap-5'>
          <h2 className='text-xl'>Pending Removal</h2>
          <div className='flex gap-[50%] px-5 border-b-2 border-gray-500 pb-2'>
            <p>Country</p>
            <p>Numbers</p>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Numbers