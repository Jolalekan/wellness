import React from 'react'
import Container from './Container'

const Hero = () => {
  return (
    <div className=' h-screen'>
        <div className='h-full pt-24  lg:flex gap-6 '>
            <div className='h-full p-6 pt-6 lg:pl-64 flex-1 flex   flex-col gap-5 '>
                <h2 className='text-5xl lg:text-8xl font-medium'>Secure, Grow, <br /> and Prosper <br /> with Us</h2>
                
                <div className='lg:max-w-3xl flex flex-col items- gap-6'>
                <p className='text-[15px] text-gray-100'>Lorem, ipsum dolor sit amet consectetur  elit. <br /> Consectetur sint cumque minus. porro nobis, <br /> fuga aliquam aut animi  dolore dolorum </p>

                <div className='flex'>
                    <div className='p-1 rounded-md  flex border lg:gap-6 lg:max-w-3xl'>

                    <input type="text"placeholder='Enter your Email' className='px-2 bg-transparent text-gray-800 focus:outline-none'/>
                    <button className='text-gray-500 px-1 font-medium py-1 rounded-md bg-white'>Get Started</button>
                    </div>
                </div>
                <div className='pt-6 flex items-center gap-2'>
                    
                    <img src="/assets/people.png" alt="" />
                    <span>Active users</span>
                    </div>
            </div>
                </div>

            <div className='hidden lg:block flex-1 justify-end w-full h-full'>
           
                <img src="\assets\phonebank.png"  className='object-cover w-full h-full' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero