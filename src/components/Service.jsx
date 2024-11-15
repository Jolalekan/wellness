import React from 'react'

const Service = () => {
  return (
    <section className='bg-white'>

    <div className='p-5 text-gray-800 py-20 max-w-7xl mx-auto lg:flex gap-6'>
        <div className='pb-6 items-start flex-1 flex flex-col gap-2'>
            <h2 className='text-3xl font-bold text-green-800'>10</h2>
            <p>Lorem ipsum dolor, sitr adipisicing elsit amet consec sit amet consectetur adipisicing eliteum, ipsa facilis mollitia?</p>
            <p>Lorem ipsum dolor, modi aspernatur itaque rem.</p>
            <p>Lorem ipsum dolor, tempora  voluptate commodi aspernatur itaque rem.</p>
            
            <div className=''>
            <button className='bg-green-800  py-1 px-6 rounded-md text-gray-100'>More</button>
            </div>
        </div>
       
        <div className=' flex-1 flex'>
          <div className='rounded-md p-3 bg-green-100 w-96 '>
                <div className='flex flex-col gap-4'>

            <div className='px-2 justify-between items-center rounded-2xl bg-white flex gap-6'>
        
               <div className='flex items-center gap-6'>
                <img src="/assets/stock.png" width={28} height={28} alt="" />
                <div >
                    <h3 className='font-medium text-[14px]'>Amazon</h3>
                    <p className='text-gray-500 text-sm'>Staff Delivered</p>
               </div>
                </div>
                <div><h2>94</h2></div>
            </div>
            <div className='px-2 justify-between items-center rounded-2xl bg-white flex gap-6'>
               <div className='flex items-center gap-6'>

                <img src="/assets/grow.png" width={28} height={28} alt="" />
                <div >
                    <h3 className='font-medium text-[14px]'>Grow</h3>
                    <p className='text-gray-500 text-sm'>Staff Delivered</p>
               </div>
                </div>
                <div><h2>94</h2></div>
            </div>
            <div className='px-2 justify-between items-center rounded-2xl bg-white flex gap-6'>
               <div className='flex items-center gap-6'>

                <img src="/assets/stock.png" width={28} height={28} alt="" />
                <div >
                    <h3 className='font-medium text-[14px]'>Amazon</h3>
                    <p className='text-gray-500 text-sm'>Staff Delivered</p>
               </div>
                </div>
                <div><h2>94</h2></div>
            </div>
          </div>
                </div>
        </div>
    </div>
    </section>
  )
}

export default Service