import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 p-4 text-red-500 flex justify-between items-center md:h-24 lg:p-20 xl:p-24'>
      <Link href='/' className='font-bold text-xl'>MASSIMO</Link>
      <p>All Rights Reserved</p>
    </div>
  )
}

export default Footer