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
      <DropdownMenuContent className="w-56 bg-white p-4" align="start">
        <DropdownMenuGroup >
          <DropdownMenuItem>
            <Link className='text-sm hover:text-gray-500' to='/products'>
              Voxcom Products
            </Link> 
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className='text-sm hover:text-gray-500' to='/voxco-number'>
              Voxcom Numbers
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>

          <DropdownMenuSub>

            <DropdownMenuSubTrigger className='text-sm hover:text-gray-500 cursor-pointer'>Number Requests</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className='bg-white'>
                <DropdownMenuItem>
                    <Link className='text-sm hover:text-gray-500' to={'/'}> Number Inventory
                      </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link  className='text-sm hover:text-gray-500' to={'/'}>Orders Management</Link>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuSub >
            <DropdownMenuSubTrigger className='text-sm hover:text-gray-500 cursor-pointer'>Port In Requests</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className='bg-white'>
                <DropdownMenuItem>
                    <Link className='text-sm hover:text-gray-500' to={'/'}>
                       Port In Requests
                    </Link>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          
          <DropdownMenuSub >
            <DropdownMenuSubTrigger className='text-sm hover:text-gray-500 cursor-pointer'>Port Out Requests</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className='bg-white'>
                <DropdownMenuItem>
                    <Link className='text-sm hover:text-gray-500' to={'/'}>Port Out Requests</Link>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

           <DropdownMenuSub >
            <DropdownMenuSubTrigger className='cursor-pointer text-sm hover:text-gray-500'>Compliance Information</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className='bg-white'>
                <DropdownMenuItem>
                    <Link className='text-sm hover:text-gray-500' to={'/'}>Compliance Information</Link>
                </DropdownMenuItem>

              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

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