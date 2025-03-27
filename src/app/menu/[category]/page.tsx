import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-wrap text-red-500'>
        {
         pizzas.map((item) => (
            <Link className='w-full h-[60vh] border-b-2 border-r-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 group flex flex-col justify-between' href={`/product/${item.id}`} key={item.id}>
              {/* IMAGE Container */}
              <div className='relative h-[80%]'>
                {item.img && <Image src={item.img} alt='' fill className='object-contain' />}
              </div>
              {/* TEXT Container */}
              <div className='flex items-center justify-between font-bold'>
                <h1 className='text-2xl p-2 uppercase'>{item.title}</h1>
                <h2 className='group-hover:hidden'>{item.price}</h2>
                <button className='hidden group-hover:block bg-red-500 text-white p-2 rounded-md uppercase'>Add to Cart</button>
              </div>
            </Link>
         ))
        }
    </div>
  )
}

export default page