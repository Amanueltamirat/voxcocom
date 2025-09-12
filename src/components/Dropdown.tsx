import React from 'react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from 'react-router-dom'


function Dropdown() {
  return (
    <div className='z-50 bg-white'>
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='outline-none'>
        <Button className='cursor-pointer outline-none rounded-lg text-black text-xl font-semibold border-gray-700 border-lg' variant="default" >MENU</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 bg-white p-4 mr-5" align="start">
        <DropdownMenuGroup >
          <DropdownMenuItem>
            <Link className='text-sm hover:text-gray-500' to='/products'>
              Home
            </Link> 
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className='text-sm hover:text-gray-500' to='/voxco-number'>
              Order Numbers
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>       
           <DropdownMenuSub >
            <DropdownMenuSubTrigger className='text-sm hover:text-gray-500 cursor-pointer'>Portal Admin</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className='bg-white'>
                <DropdownMenuItem>
                     <Link className='text-sm hover:text-gray-500' to='/signin'>User</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                     <Link className='text-sm hover:text-gray-500' to='/signin'>Admin</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}

export default Dropdown