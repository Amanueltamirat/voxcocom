import React from 'react'

function Header() {
  return (
    <div className='flex justify-between px-10 bg-white shadow-sm shadow-gray-300'>
        <div>
            <h2 className='new-h sm:text-xl md:text-xl flex flex-col gap-0 py-4 lg:text-2xl xl:text-2xl font-semibold font-serif'><span><strong className='text-indigo-900 text-3xl'>voxco  </strong><small className='text-indigo-900 text-3xl'>number ordering portal</small></span> </h2>
            {/* <span className='ml-[22%] -mt-1 text-sm'></span> */}
        </div>
        <div className='flex items-center font-serif text-xl gap-2 text-black'>
            {/* <p>Calls balance=5 | DID NRC=0 | DID MRC=0</p> */}
            <img src='pp.jpg' alt='pp' className='w-12 rounded-full'/>
        </div>
    </div>
  )
}

export default Header