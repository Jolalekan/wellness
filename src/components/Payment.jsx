import React from 'react'
import Container from './Container'

const Payment = () => {
  return (
    
        <div className='px-5 pb-32 py-5 lg:py-10 bg-gray-50 text-gray-950'>
            <div className='gap-6 flex flex-col items-center'>
                <h1 className='font-medium text-[48px]'>Manage Your Payments for Free</h1>
                <p className='font-medium text-[36px]'>Download the App Now</p>

                <div className='flex gap-6'>
                    <button><img src="/assets/apple.svg" alt="" /></button>
                    <button><img src="/assets/google.svg" alt="" /></button>
                </div>
            </div>
        </div>
    
  )
}

export default Payment