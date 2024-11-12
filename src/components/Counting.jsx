import React from 'react'
import Container from './Container'

const Counting = () => {
  return (
    <Container>

    <div className='flex gap-5 justify-between p-6 lg:p-12'>
        <div>
            <h2 className='text-3xl lg:text-6xl font-medium'>50<span className='text-2xl lg:text-4xl'>+</span></h2>
            <span className='text-gray-300'>Investors</span>
        </div>
        <div>
            <h2 className='text-3xl lg:text-6xl font-medium'>2<span className='text-2xl lg:text-4xl'>M+</span> </h2>
            <span className='text-gray-300'>Customers</span>
        </div>
        <div>
            <h2 className='text-3xl lg:text-6xl font-medium'>85 <span className='text-2xl lg:text-4xl'>%</span></h2>
            <span className='text-gray-300 '> investment</span>
        </div>
    </div>
    </Container>
  )
}

export default Counting