import React, { useState } from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {
 const user = false
  return (
    <div className='h-12 text-red-500 flex items-center justify-between p-4 border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-24'>
      {/* LEFT LINKS */}
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href='/'>Home</Link>
        <Link href='/menu'>Menu</Link>
        <Link href='/contact'>Contact</Link>
      </div>
      {/* LOGO */}
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href='/'>Massimo</Link>
      </div>
      {/* MOBILE MENU */}
      <div className='md:hidden'>
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
        <div className='md:absolute top-2 right-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
          <Image src='/phone.png' width={20} height={20} alt='Phone Number' />
          <span>123 456 789</span>
        </div>
        {
          !user ?
          <Link href='/contact'>Login</Link>
          : 
          <Link href='/contact'>Orders</Link>

        }
      <CartIcon />
      </div>
    </div>
  )
}

export default Navbar