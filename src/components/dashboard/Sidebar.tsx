import { BookText, ChartNoAxesCombined, IdCard, ListOrdered, NotebookTabs } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='flex flex-col gap-2'>
        <div className='flex gap-4 hover:bg-indigo-900 hover:text-white p-2 rounded-lg cursor-pointer'>
            <ListOrdered />
            <Link to={'/orders'}>Orders</Link>
        </div>

        {/* <div className='flex gap-4 hover:bg-indigo-900 hover:text-white p-2 rounded-lg cursor-pointer'>
            <NotebookTabs />
            <Link to='/numbers'>Numbers</Link>
        </div>
        <div className='flex gap-4 hover:bg-indigo-900 hover:text-white p-2 rounded-lg cursor-pointer'>
            <ChartNoAxesCombined />
             <Link to='/numbers-analyzer'>Numbers Analyzer</Link>
        </div>
        <div className='flex gap-4 hover:bg-indigo-900 hover:text-white p-2 rounded-lg cursor-pointer'>
            <IdCard />
            <Link to='/customer-identities'>Customer Identities</Link>
        </div>
        <div className='flex gap-4 hover:bg-indigo-900 hover:text-white p-2 rounded-lg cursor-pointer'>
            <BookText />
            <Link to='/api'>API</Link>
        </div> */}

    </div>
  )
}

export default Sidebar