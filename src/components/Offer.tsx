import Image from 'next/image'
import React from 'react'
import CountDown from '@/components/CountDown'

const Offer = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER  */}
      <div className='flex-1 flex flex-col justify-center items-center  text-center gap-8 p-6'>
        <h2 className='text-white text-5xl font-bold xl:text-6xl'>Delicious Burger & French Fry</h2>
        <p className='text-white xl:text-xl'> Progressively simplify effective e-toilers and process-centric methods
        of empowerment. Quickly pontificate parallel.</p>
        <CountDown />
        <button className='bg-red-500 rounded-md py-3 px-6'>Order Now</button>
      </div>
      {/* IMAGE CONTAINER  */}
      <div className='flex-1 relative w-full md:h-full'>
        <Image src='/offerProduct.png' alt='' fill className='object-contain'/>
      </div>
    </div>
  )
}

export default Offer