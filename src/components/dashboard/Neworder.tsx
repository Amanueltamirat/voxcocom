import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


   


function Neworder() {
  return (
    <div className='py-10'>
        <h2 className='text-xl font-semibold mb-5'>Search DID</h2>
        <div>
    <div className="res flex sm:flex-col md:felx-col lg:flex-row xl:flex-row w-full max-w-sm items-center gap-5">
       <Select>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Select Country" />
      </SelectTrigger>
      <SelectContent className='min-w-[35%]'>
        <SelectGroup className='bg-white '>
          <SelectLabel className='hover:bg-blue-600 cursor-pointer hover:text-white'>Select Country</SelectLabel>
          <SelectItem className='hover:bg-blue-600 cursor-pointer hover:text-white' value="albania">Albania</SelectItem>
          <SelectItem className='hover:bg-blue-600 cursor-pointer hover:text-white' value="algeria">Algeria</SelectItem>
          <SelectItem className='hover:bg-blue-600 cursor-pointer hover:text-white' value="ageria">Algeria</SelectItem>
          <SelectItem className='hover:bg-blue-600 cursor-pointer hover:text-white' value="australia">Australia</SelectItem>
          <SelectItem className='hover:bg-blue-600 cursor-pointer hover:text-white' value="austria">Austria</SelectItem>
          <SelectItem className='hover:bg-blue-600 cursor-pointer hover:text-white' value="bahrain">Bahrain</SelectItem>
          <SelectItem className='hover:bg-blue-600 cursor-pointer hover:text-white' value="bangladesh">Bangladesh</SelectItem>
          <SelectItem className='hover:bg-blue-600 cursor-pointer hover:text-white' value="barbados">Barbados</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
       <Input className='min-w-[35%]' type="prefix" placeholder="Prefix" />
        <Input className='min-w-[35%]' type="iso" placeholder="Number Type" />
      <Button className='bg-indigo-800 btn md:w-[100%] lg:w-[50%] xl-w-[50%] sm:w-[100%] text-gray-200 cursor-pointer hover:bg-indigo-600' type="submit" variant="outline">
        Search
      </Button>
    </div>

        </div>
    </div>
  )
}

export default Neworder