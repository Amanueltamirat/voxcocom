import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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


const sliderVariants = {
    initial:{
        x:0,
        
    },
     animate:{
        x:'100%',
        transition:{
        repeat:Infinity,
        repeatType:'mirror',
        duration:5,
       
        },

    }
}

function UpperSection() {

 const ref = useRef();
 const navigate = useNavigate()
  const { scrollY} = useScroll({
    target:ref,
    offset:["start start","end end"],
  })

const y = useTransform(scrollY,[0,10],[0,10]);

  return (
    <div className='overflow-hidden'>
      <div className='relative m-10'>
      <motion.div variants={sliderVariants}   className='sliding-text-container font-serif' initial='initial' animate='animate'>
            Buy Your Number
        </motion.div>
      </div>
     <div className='m-10  pt-30 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10'>  
          <motion.div className=' bg-white shadow-md shadow-slate-300  relative transition duration-300 overflow-hidden rounded-2xl'>
                <div className='transition duration-0 p-5  pb-20 h-full relative'>
                    <h2 className='text-xl pb-5 font-semibold text-center'>VoxcoNumbers</h2>
                    <img className='h-[90%] w-[100%] rounded-3xl' src="https://samelane.com/wp-content/uploads/2021/02/LMS-for-telecom-scaled.jpg" alt="" />
                    <motion.div variants={variants} initial="initial" whileInView='animate'  ref={ref}  className='absolute top-[30%] left-20 bg-[rgba(0,0,0,0.4)] p-5 rounded-2xl'>
                        <motion.div variants={variants} initial="initial" whileInView='animate' >                    
                            <motion.h2  className='text-2xl font-semibold text-gray-300'>Find Your Perfect Number</motion.h2>
                            <motion.p className='text-gray-300 italic'>Local, Toll-Free and Vanity Options</motion.p>
                            <motion.button onClick={()=>navigate('/orders')} className='cursor-pointer hover:bg-indigo-900 bg-indigo-800 p-2 rounded-lg text-white my-2'>Buy your number</motion.button>
                            </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div className=' bg-white shadow-md shadow-slate-300 relative transition duration-300 overflow-hidden rounded-2xl'>
                <div className='transition duration-0 px-5 pb-20 h-full relative'>
                    <h2 className='text-xl pb-5 mt-2 font-semibold text-center'>VoxcoMessaging</h2>
                    <img className='h-[90%] w-[100%] rounded-3xl' src="/hero-2.jpg" alt="" />
                     <motion.div  variants={variantsTwo} initial="initial" whileInView='animate'  ref={ref}  className='absolute top-[30%] left-20 bg-[rgba(0,0,0,0.4)] p-5 rounded-2xl'>
                            <motion.h2 className='text-2xl font-semibold text-gray-300'>Global numbers for Global messaging</motion.h2>
                            <motion.p className='text-gray-300 italic'>Local, Toll-Free and Vanity Options</motion.p>
                             <motion.button onClick={()=>navigate('/orders')} className='cursor-pointer hover:bg-indigo-900 bg-indigo-800 p-2 rounded-lg text-white my-2'>Buy your number</motion.button>
                    </motion.div>
                </div>

            </motion.div>
        </div>
      </div>
  )
}

export default UpperSection