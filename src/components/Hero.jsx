import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

const Hero = () => {
  const textRef = useRef(null);
    const imageRef = useRef(null);
    
    
    useEffect(()=>{
        if (textRef.current) {
            gsap.fromTo(
              textRef.current,
              { x: -200, opacity: 0 }, // Start from the left off-screen
              { x: 0, opacity: 1, duration: 1, ease: 'power3.out' } // Slide in to its normal position
            );
          }
          if(imageRef.current){
            gsap.fromTo(
                imageRef.current, 
                { y:200, opacity:0},
                {y:0, opacity: 1, duration: 1, ease: 'power3.out' }
            )
          }
    }, [])

    return (
    <div className=' h-screen'>
        <div className='h-full pt-32  lg:flex gap-6 '>
            <div ref={textRef} className='h-full p-6 pt-6 lg:pl-20 flex-1 flex   flex-col gap-5 '>
                <h2 className='text-5xl lg:text-7xl font-medium'>Secure, Grow, <br /> and Prosper <br /> with Us</h2>
                
                <div className='lg:max-w-3xl flex flex-col items- gap-6'>
                <p className='text-[15px] text-gray-100'>Lorem, ipsum dolor sit amet consectetur  elit. <br /> Consectetur sint cumque minus. porro nobis, <br /> fuga aliquam aut animi  dolore dolorum </p>

                <div className='flex justify-between w-full'>
                    <div className='p-1 rounded-md  flex border lg:gap-6'>
                    <input type="text"placeholder='Enter your Email' className='text-[12px] lg:text-[16px] px-2 bg-transparent text-gray-100 focus:outline-none'/>
                    <button className='text-gray-500 px-1 font-medium py-1 rounded-md bg-white text-[16px]'>Get Started</button>
                    </div>
                </div>
                <div className='pt-6 flex items-center gap-2'>
                    
                    <img src="/assets/people.png" alt="" />
                    <span>Active users</span>
                    </div>
            </div>
                </div>

            <div ref={imageRef} className='hidden lg:block flex-1 justify-end w-full h-full'>
           
                <img src="\assets\phonebank.png"  className='object-cover w-full h-full' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero