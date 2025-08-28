import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import {motion, useScroll, useTransform} from 'framer-motion'


const variants = {
    initial:{
        x:-300,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:0.4,
            taggerChildren:0.1
        }
    }
}

const variantsTwo = {
    initial:{
        x:300,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:0.6,
            taggerChildren:0.1
        }
    }
}


const textVariants = {
  initial:{
    x:-500,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1
    }
  }
}

const textVariantsRight = {
  initial:{
    x:500,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1
    }
  }
}


function UpperSection() {

 const ref = useRef();
  const { scrollY} = useScroll({
    target:ref,
    offset:["start start","end end"],
  })

const y = useTransform(scrollY,[0,10],[0,10]);

  return (
     <div className='m-10 mt-20 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10'>
           
          <motion.div className=' bg-white shadow-md shadow-slate-300  group relative transition duration-300 overflow-hidden rounded-2xl'>
                <div className='transition duration-0 p-5  pb-20 h-full relative'>
                    <h2 className='text-xl pb-5 font-semibold text-center'>VoxcoNumbers</h2>
                    <img className='h-[90%] w-[100%] rounded-3xl' src="https://samelane.com/wp-content/uploads/2021/02/LMS-for-telecom-scaled.jpg" alt="" />
                    <motion.div variants={variants} initial="initial" whileInView='animate'  ref={ref}  className='absolute top-[30%] left-20 bg-[rgba(0,0,0,0.4)] p-5 rounded-2xl'>
                        <motion.div variants={variants} initial="initial" whileInView='animate' >                    
                            <motion.h2  className='text-2xl font-semibold text-gray-300'>Find Your Perfect Number</motion.h2>
                            <motion.p className='text-gray-300 italic'>Local, Toll-Free and Vanity Options</motion.p>
                            <motion.button className='bg-indigo-800 p-2 rounded-lg text-white my-2'>Telespham</motion.button>
                            </motion.div>
                    </motion.div>
                </div>

                <div  className='absolute top-10 left-0 hidden group-hover:block group-hover:opacity-100 transform  transition-all duration-1000 ease-in-out backdrop-blur-md h-[100%] px-10'>
                    <div className='flex flex-col justify-center items-center gap-5 mb-5 mt-5'>
                        <div>
                            <h2 className='text-xl font-semibold'>VoxcoNumbers</h2>
                        </div>
                        <div>
                            <h1  className='text-lg italic font-semibold'>Find your perfect number</h1>
                        </div>
                    </div>
                    <div className='mb-5 text-lg'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa delectus minus! Ipsa molestiae voluptatibus praesentium numquam repellat veniam itaque.</p>
                    </div>
                    <Link to={'/orders'} className='bg-orange-600 rounded-l-full rounded-r-full text-white py-4 px-5 ml-[30%]'>Learn More</Link>
                </div>
            </motion.div>

            <motion.div className=' bg-white shadow-md shadow-slate-300  group relative transition duration-300 overflow-hidden rounded-2xl'>
                <div className='transition duration-0 px-5 pb-20 h-full relative'>
                    <h2 className='text-xl pb-5 mt-2 font-semibold text-center'>VoxcoMessaging</h2>
                    <img className='h-[90%] w-[100%] rounded-3xl' src="/hero-2.jpg" alt="" />
                     <motion.div  variants={variantsTwo} initial="initial" whileInView='animate'  ref={ref}  className='absolute top-[30%] left-20 bg-[rgba(0,0,0,0.4)] p-5 rounded-2xl'>
                            <motion.h2 className='text-2xl font-semibold text-gray-300'>Global numbers for Global messaging</motion.h2>
                            <motion.p className='text-gray-300 italic'>Local, Toll-Free and Vanity Options</motion.p>
                            <motion.button className='bg-indigo-800 p-2 rounded-lg text-white my-2'>Telespham</motion.button>
                    </motion.div>
                </div>

                <div  className='absolute top-10 left-0 hidden group-hover:block group-hover:opacity-100 transform  transition-all duration-1000 ease-in-out backdrop-blur-md h-[100%] px-10'>
                    <div className='flex flex-col items-center  gap-5 mb-5 mt-5'>
                        <div>
                            <h2 className='text-xl font-semibold'>VoxcoMessaging</h2>
                           
                        </div>
                        <div>
                            <h1  className='text-lg italic font-semibold'>Global numbers for global messaging</h1>
                        </div>
                    </div>
                    <div className='mb-5 text-lg'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa delectus minus! Ipsa molestiae voluptatibus praesentium numquam repellat veniam itaque.</p>
                    </div>
                    <Link to={'/orders'} className='bg-orange-600 rounded-l-full rounded-r-full text-white py-4 px-5 z-10 ml-[30%]'>Learn More</Link>
                </div>
            </motion.div>
        </div>
  )
}

export default UpperSection