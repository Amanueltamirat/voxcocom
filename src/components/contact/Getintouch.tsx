import React from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { Input } from '../ui/input'

function Getintouch() {
  return (
    <div>
        <Dialog>
  <DialogTrigger>
    <Button className='cursor-pointer text-xl bg-amber-600 px-5 py-6 hover:bg-amber-700 text-gray-200 text-center'>get in touch</Button>
  </DialogTrigger>
  <DialogContent className='bg-white'>
    <DialogHeader>
      <DialogTitle>Let's talk</DialogTitle>

      <DialogDescription asChild>
        <div className='mt-10'>
            <div className='flex flex-col gap-4'>
            <Input placeholder='Full Name'/>
            <Input placeholder='Email'/>
            </div>
        <div className='mt-4'>
            <h2 className='mb-2'>Your Comments</h2>
            <Textarea placeholder='Add Your Comments...' className='h-[100px] mt-1' 
            
            />
        </div>
        </div>
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
        <DialogClose>
        <Button className='cursor-pointer' variant={'outline'}>Cancel</Button>
        </DialogClose>
     
        <Button className='cursor-pointer' variant={'outline'}>Send <ArrowRight/></Button>


    </DialogFooter>
  </DialogContent>
</Dialog>
    </div>
  )
}

export default Getintouch